import { DutyGroupType } from "../data/dutyGroups";
import fractions, { Fraction } from "../data/fractions";
import oficers from "../data/oficers";
import ranks from "../data/ranks";
import staff from "../data/staff";
import { _DutyBuilderItemType, Duty_GT, Duty_HBN, Duty_NB, Duty_ROTA } from "../hooks/useDutyBuilder/types";
import { Contracts } from "../models";
import GrammarAPI from "../classes/grammar";
import * as _ from 'lodash'

const gr = new GrammarAPI()

//rekursiya
const getParent = (parentId: number,cb: (...args:any[]) => void) => {
  const parent = fractions.find(f => f.id === parentId)
  cb(parent)
  if(parent?.parentFractionId) {
    getParent(parent.parentFractionId, cb)
  }
}

class Posgen {  
  private fracTreeFromPersonId(personId: number) {
    let arr: Fraction[] = []
    const personData = oficers.find(f => f.id === personId)
    const fractionData = fractions.find(f => f.id === personData?.fractionId);  
    if(fractionData) {
      getParent(fractionData.id, (e) => arr = [...arr, e])
    }
    return arr.reverse()
  }
  
  private fracTreeFromFractionId(fractionId: number) {
    let arr: Fraction[] = []
    const fractionData = fractions.find(f => f.id === fractionId);  
    if(fractionData) {
      getParent(fractionData.id, (e) => arr = [...arr, e])
    }
    return arr.reverse()
  }
  
  //bölümçe agajynyň şaha boýunça yzygiderlikdäki ýerleşdirilen massiwi (işgär boýunça we bölümçe boýunça)
  getFractionTree() {
    return {
      fracTreeFromPersonId: this.fracTreeFromPersonId,
      fracTreeFromFractionId: this.fracTreeFromFractionId,
    }
  }

  //işgäriň doly wezipesi tekst formatynda (isChaining göz öňünde tutulýar)
  getFullPosition(personId: number) {
    let arr: string[] = []
    const position = staff.find(f => oficers.find(t => t.id === personId)?.positionId === f.id)
    if(position?.isChaining) {
      const tree = this.fracTreeFromPersonId(personId).map(m => m.name.staffName.toLowerCase()).map(t => gr.setRelationOfFraction(t))
      arr = [...tree, position?.name.useName || '']
    } else {
      arr = [position?.name.useName || '']
    }
    return arr.join(' ')
  }

  //harby gullugyň görnüşi (borçnama boýunça ýa-da çagyryş boýunça)
  getContractType(type?: Contracts) {
    let obj = {
      full: '',
      short: ''
    }
    if(type === Contracts['çagyryş boýunça h/g']) obj = {
      full: 'çagyryş boýunça harby gullukçysy',
      short: 'ç/b'
    }
    if(type === Contracts['borçnama boýunça h/g']) obj = {
      full: 'borçnama boýunça harby gullukçysy',
      short: 'b/g'
    }
    return obj
  }

  //esgeriň buýruk üçin degişli bölümçesi (bölümçe agajynyň iň ýokary şahasy)
  getSoliderFractionForOrder(personId: number) {
    const arr = this.fracTreeFromPersonId(personId)
    const person = oficers.find(o => o.id === personId)
    let bat = arr.find(f => f.level === 'batalyon')
    let rota = arr.find(f => f.level === 'rota')  
    let wzwod = arr.find(f => f.level === 'wzwod')
    let fraction:Fraction | undefined = undefined

    if(bat) fraction = bat
    if(!bat && rota) fraction = rota
    if(!bat && !rota && wzwod) fraction = wzwod
    // return fraction

    return `${gr.setRelationOfFraction(fraction?.name.staffName || '')} ${this.getContractType(person?.rank?.contractType).full}`
  }

  // test(dutyType: _DutyBuilderItemType) {
    
  // }
}

export class TestDutyGroups extends Posgen {
  get_GT_data(data: Duty_GT) {
    const arr = data.body.map(i => {
      return {
        name: i.personData?.name.forBuyruk,
        rank: ranks.find(f => f.id === i.personData?.rank?.rank)?.name.fullName,
        position: this.getFullPosition(i.personId || 0) 
      }
    })
    if(arr.length > 1) {
      return `Harby bölümiň gün tertibine gözegçiler - ${arr.map(i => `${i.position} ${i.rank} ${i.name}`).join(', ')}`
    }
    if(arr.length === 1) {
      return `Harby bölümiň gün tertibine gözegçi - ${arr[0].position} ${arr[0].rank} ${arr[0].name}`
    }
  } 

  get_HBN_data(data: Duty_HBN) {
    const nobatcy = {
      name: data.body.nobatcy.personData?.name.forBuyruk,
      rank: ranks.find(f => f.id === data.body.nobatcy.personData?.rank?.rank)?.name.fullName,
      label: 'Harby bölümiň nobatçysy -',
      position:  this.getFullPosition(data.body.nobatcy.personId || 0)
    }
    const komekci = {
      name: data.body.komekci.personData?.name.forBuyruk,
      rank: ranks.find(f => f.id === data.body.komekci.personData?.rank?.rank)?.name.fullName,
      label: 'kömekçisi -',
      position: this.getFullPosition(data.body.komekci.personId || 0) 
    }
    return `${nobatcy.label} ${nobatcy.position} ${nobatcy.rank} ${nobatcy.name}, ${komekci.label} ${komekci.position} ${komekci.rank} ${komekci.name}`
  }

  get_ROTA_data(data: Duty_ROTA) {
    const nobatcy = {
      name: data.body.nobatcy.personData?.name.forBuyruk,
      rank: ranks.find(f => f.id === data.body.nobatcy.personData?.rank?.rank)?.name.fullName,
      label: `${fractions.find(f => f.id === data.body.rota)?.name.staffName} boýunça nobatçy - `,
      position: this.getSoliderFractionForOrder(data.body.nobatcy.personId || 0)
    }

    //birleşdirmeli we ýönekeýleşdirmeli
    const t = data.body.gundeciler.map(f => ({...f, f: this.getSoliderFractionForOrder(f.personId || 0)}))
    const fracs = t.map(f => f.f)
    const uniq = _.union(fracs)
    const res = uniq.map(u => {
      return t.filter(t => t.f === u)
    })

    let gundeciler = res.map(arr => {
      if(arr.length > 1) {
        return `${arr[0].f}lary ${arr.map(p => `${ranks.find(f => f.id === p.personData?.rank?.rank)?.name.fullName} ${p.personData?.name.forBuyruk}`)}`
      } 
      if(arr.length === 1) {
        return `${arr[0].f} ${arr.map(p => `${ranks.find(f => f.id === p.personData?.rank?.rank)?.name.fullName} ${p.personData?.name.forBuyruk}`)}`
      }
      return ''
    }).join(', ')

    return `${nobatcy.label} ${nobatcy.position} ${nobatcy.rank} ${nobatcy.name}, gündeçiler - ${gundeciler}`
  }

  get_NB_data(data: Duty_NB) {
    const ulusy = {
      name: data.body.ulusy.personData?.name.forBuyruk,
      rank: ranks.find(f => f.id === data.body.ulusy.personData?.rank?.rank)?.name.fullName,
      label: 'Nobatçy bölümçäniň ulusy -',
      position:  this.getFullPosition(data.body.ulusy.personId || 0)
    }
    //birleşdirmeli we ýönekeýleşdirmeli
    const t = data.body.nobatcylar.map(f => ({...f, f: this.getSoliderFractionForOrder(f.personId || 0)}))
    const fracs = t.map(f => f.f)
    const uniq = _.union(fracs)
    const res = uniq.map(u => {
      return t.filter(t => t.f === u)
    })
    let nobatcylar = res.map(arr => {
      if(arr.length > 1) {
        return `${arr[0].f}lary ${arr.map(p => `${ranks.find(f => f.id === p.personData?.rank?.rank)?.name.fullName} ${p.personData?.name.forBuyruk}`).join(', ')}`
      }
      if(arr.length === 1) {
        return `${arr[0].f} ${arr.map(p => `${ranks.find(f => f.id === p.personData?.rank?.rank)?.name.fullName} ${p.personData?.name.forBuyruk}`)}`
      }
      return ''
    }).join(', ')
    return `${ulusy.label} ${ulusy.position} ${ulusy.rank} ${ulusy.name}, nobatçy bölümçe - ${nobatcylar}`
  }

  get_Duty_dataFromGroupType(data: any, groupType: DutyGroupType) {
    switch(groupType) {
      case 1:
        //gözegçi topar
        return this.get_GT_data(data)
      case 2:
        //harby bölümiň nobatçylygy
        return this.get_HBN_data(data)
      case 5:
        //nobatçy bölümçe
        return this.get_NB_data(data)
      case 8:
        //rota (nobatçy, gündeçi)
        return this.get_ROTA_data(data)
      default:
        return undefined
    }
  }

}


export default Posgen;