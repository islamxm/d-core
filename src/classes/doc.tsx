import { 
  Document as Docx, 
  IPropertiesOptions, 
  Packer, 
  Paragraph, 
  TextRun  
} from "docx"
import { saveAs } from 'file-saver'
import CONSTANTS from "../constants"
import moment from "moment"
import staff from "../data/staff"
import oficers from "../data/oficers"
import ranks from "../data/ranks"
import { DefFuctionType } from "../models"

class DocAPI {
  private document: Docx | null = null

  _createNewDocument(options: IPropertiesOptions) {
    this.document = new Docx(options)
    return this.document
  }

  _downloadDocument({doc, name, cb}: {doc: Docx, name: `${string}.docx`,cb?: (...args:any[]) => any}) {
    if(doc instanceof Docx) {
      Packer.toBlob(doc).then(blob => {
        saveAs(blob, name)
      })
    }
  }

  _createParagraph(text:string) { 
    return new Paragraph({
      children: [new TextRun({
        text,
        language: CONSTANTS.DOC.LANG,
        size: CONSTANTS.DOC.BASE_PROPS.fontSize,
      })],
      alignment: 'both',
      indent: {firstLine: CONSTANTS.DOC.BASE_PROPS.one_cm}
    })
  }

  _createBreakField(breakSize: number) {
    return new Paragraph({
      children: [new TextRun({break: breakSize})]
    })
  }

  createDutyGroupParagraph(text: string, index: number) {
    return new Paragraph({
      children: [new TextRun({
        text: `${index.toString()}. ${text}.`,
        language: CONSTANTS.DOC.LANG,
        size: CONSTANTS.DOC.BASE_PROPS.fontSize,
        // break: 2 //yzyndan edilyan perenosyn sany
      })],
      alignment: 'both',
      indent: {firstLine: CONSTANTS.DOC.BASE_PROPS.one_cm}
    })
  }

  createAcceptureField(personId: number) {
    //gol cekyan adam dalde wezipe (b.w.y.y bolmagy ahmal), shonun ucin girish hokmunde positionId almaly we position ucin taze key doretmeli
    const person = oficers.find(o => o.id === personId)
    const position = new TextRun({
      text: staff.find(f => f.id === person?.positionId)?.name.useName,
      language: CONSTANTS.DOC.LANG,
      size: CONSTANTS.DOC.BASE_PROPS.fontSize,
      bold: true,
    })
    const field = new TextRun({
      text: `${ranks.find(f => f.id === person?.rank?.rank)?.name.fullName}\t\t\t${person?.name.shortName}`,
      language: CONSTANTS.DOC.LANG,
      size: CONSTANTS.DOC.BASE_PROPS.fontSize,
      bold: true,
    })
    return [
      new Paragraph({
        children: [position],
        alignment: 'center',
        indent: {left: '70pt', right: '70pt'}
      }),
      new Paragraph({
        children: [field],
        alignment: 'center',
        indent: {left: '70pt', right: '70pt'}
      }),
      this._createBreakField(1)
    ]
  }

  createDutyOrderBody(dutyGroupsText: string[]) {
    return dutyGroupsText.map((t,tIndex) => {
      return this.createDutyGroupParagraph(t, tIndex + 1)
    })
  }

  dutyOrder(options: {
    accepture: number[],
    groups: string[]
    number?: number
    date?: {
      orderDate:string,
      dutyDate:string
    },
    afterDone?: DefFuctionType
  }) {
    //1.buyruk belgi
    const number = 350 //options.number;
    //
    const head = new Paragraph({
      alignment: 'center',
      children: [
        new TextRun({
          text: '02952 harby bölümiň serkerdesiniň',
          language: CONSTANTS.DOC.LANG,
          size: CONSTANTS.DOC.BASE_PROPS.fontSize,
          bold: true,
        }),
        new TextRun({
          text: 'BUÝRUGY',
          language: CONSTANTS.DOC.LANG,
          size: CONSTANTS.DOC.BASE_PROPS.fontSize,
          bold: true,
          break:1
        }),
        new TextRun({
          text: `№${number}`,
          language: CONSTANTS.DOC.LANG,
          size: CONSTANTS.DOC.BASE_PROPS.fontSize,
          bold: true,
          break:1
        }),
      ]
    })

    //2.buyrugyn yazylan senesi
    const orderDate = options.date?.orderDate
    //3.tabshyrygyn senesi
    const dutyDate = options.date?.dutyDate
    //4.naryadlar
    const duties = this.createDutyOrderBody(options.groups)
    //5.gol cekmeliler
    const accepture = options.accepture.map(a => this.createAcceptureField(a)).flat()

    const doc = this._createNewDocument({
      sections: [{
        children: [
          head,
          ...duties,
          this._createBreakField(1),
          ...accepture
        ],
      }],
    })
    
    return {
      data: {
        ...options
      },
      doc,
      download: () => this._downloadDocument({doc, name: 'buyruk.docx', cb: options.afterDone}),
    }
  }
}
export default DocAPI;