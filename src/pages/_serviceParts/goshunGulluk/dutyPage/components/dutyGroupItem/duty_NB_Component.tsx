import { Duty_NB } from "../../../../../../hooks/useDutyBuilder/types";
import { DutyGroupItemComponent } from "./types";
import Panel from "../../../../../../common/components/panel/panel";
import {Row, Col, Tag} from 'antd';
import oficers from "../../../../../../data/oficers";
import styles from './styles.module.scss'
import Button from "../../../../../../common/components/button/button";
import { AiOutlinePlus } from "react-icons/ai";
import useDutyBuilder from "../../../../../../hooks/useDutyBuilder/useDutyBuilder";
import DutyPersonItem from "../dutyPersonItem/dutyPersonItem";
import { Duties } from "../../../../../../models";
import { useAppDispatch } from "../../../../../../hooks/reduxHooks";
import { dutyActions } from "../../../../../../store/slices/dutySlice";

const Duty_NB_Component:DutyGroupItemComponent<Duty_NB> = ({
  data,
  index
}) => {
  const {
    name,
    body,
    groupType
  } = data
  const dispatch = useAppDispatch()
  const dutyBuilder = useDutyBuilder()

  return (
    <Panel title={name} action={{onDelete: () => dispatch(dutyActions.deleteDutyGroup({index}))}}>
      <div className={styles.wrapper}>
        <Row gutter={[5,5]}>
          <Col span={24}>
            <div className={styles.group}>
              <Row gutter={[5,5]}>
                <Col span={24}>
                  <div className={styles.title}>Serkerdesi</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                  {
                      body?.ulusy?.personData ? (
                        <DutyPersonItem 
                                onDelete={() => {
                                  dispatch(dutyActions.onChangePerson({
                                    groupIndex: index,
                                    body: {
                                      ...body,
                                      ulusy: {type: body.ulusy.type}
                                    }
                                  }))
                                }}
                                options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                                onChange={(_) => {
                                  dispatch(dutyActions.onChangePerson({
                                    groupIndex: index,
                                    body: {
                                      ...body,
                                      ulusy: {
                                        ...body.ulusy,
                                        personData: oficers.find((f) => f.id === _),
                                        personId: _
                                      }
                                    }
                                  }))
                                }}
                                defaultValue={body.ulusy.personData?.id}
                                />
                      ) : (
                        <Button onClick={() => dispatch(dutyActions.onChangePerson({
                          groupIndex: index,
                          body: {...body, ulusy: dutyBuilder._setDefaultPerson(Duties["Nobatçy bölümçäniň serkerdesi"])}
                        }))} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button>
                      )
                    }
                  </div>  
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={24}>
          <div className={styles.group}>
              <Row gutter={[5,5]}>
                <Col span={24}>
                  <div className={styles.title}>Nobatçy bölümçe</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                    <Row gutter={[3,3]}>
                      {
                        body?.nobatcylar?.length > 0 && (
                          body?.nobatcylar.map((i, personIndex) => (
                            <Col>
                              <DutyPersonItem
                                options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                                defaultValue={i.personId}
                                onChange={(_) => {
                                  dispatch(dutyActions.onChangePerson({
                                    groupIndex: index,
                                    body: {
                                      ...body,
                                      nobatcylar: body.nobatcylar.map((n, nIndex) => {
                                        if(nIndex === personIndex) {
                                          return {
                                            ...i,
                                            personData: oficers.find(f => f.id === _),
                                            personId: _
                                          } 
                                        } else return n
                                      })
                                    }
                                  }))
                                }}
                                onDelete={() => {
                                  dispatch(dutyActions.onChangePerson({
                                    groupIndex: index,
                                    body: {
                                      ...body,
                                      nobatcylar: body.nobatcylar.filter((_,fInd) => fInd !== personIndex)
                                    }
                                  }))
                                }}
                                />
                            </Col>
                          ))
                        )
                      }
                      <Col><Button onClick={() => {
                        dispatch(dutyActions.onChangePerson({
                          groupIndex: index,
                          body: {
                            ...body,
                            nobatcylar: [...body.nobatcylar, dutyBuilder._setDefaultPerson(Duties['Nobatçy bölümçe'])]
                          }
                        }))
                      }} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button></Col>
                    </Row>
                  </div>  
                </Col>
              </Row>
            </div></Col>
        </Row>
      </div>     
    </Panel>
  )
}
export default Duty_NB_Component;