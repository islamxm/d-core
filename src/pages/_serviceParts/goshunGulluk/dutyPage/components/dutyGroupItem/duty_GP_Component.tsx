import { Duty_GP } from "../../../../../../hooks/useDutyBuilder/types";
import { DutyGroupItemComponent } from "./types";
import Panel from "../../../../../../common/components/panel/panel";
import { Row, Col, Tag } from 'antd';
import oficers from "../../../../../../data/oficers";
import styles from './styles.module.scss'
import Button from "../../../../../../common/components/button/button";
import { AiOutlinePlus } from "react-icons/ai";
import useDutyBuilder from "../../../../../../hooks/useDutyBuilder/useDutyBuilder";
import DutyPersonItem from "../dutyPersonItem/dutyPersonItem";
import { Duties } from "../../../../../../models";
import { useAppDispatch } from "../../../../../../hooks/reduxHooks";
import { dutyActions } from "../../../../../../store/slices/dutySlice";

const Duty_GP_Component:DutyGroupItemComponent<Duty_GP> = ({
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
        <Row gutter={[5, 5]}>
          <Col span={24}>
            <div className={styles.group}>
              <Row gutter={[5, 5]}>
                <Col span={24}>
                  <div className={styles.title}>Serkerdesi</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                  {
                      body?.ulusy?.personData ? (
                        <DutyPersonItem
                        options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                        defaultValue={body.ulusy.personId}
                          onChange={_ => {
                            dispatch(dutyActions.onChangePerson({
                              groupIndex: index,
                              body: {
                                ...body,
                                ulusy: {
                                  ...body.ulusy,
                                  personData: oficers.find(f => f.id === _),
                                  personId: _
                                }
                              }
                            }))
                          }}
                          onDelete={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, ulusy: {type: Duties['Garnizon patrul serkerdesi']}}}))}
                          />
                      ) : (
                        <Button onClick={() => {
                          dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, ulusy: dutyBuilder._setDefaultPerson(Duties['Garnizon patrul serkerdesi'])}}))
                        }} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button>
                      )
                    }
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.group}>
              <Row gutter={[5, 5]}>
                <Col span={24}>
                  <div className={styles.title}>Patrullar</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                    <Row gutter={[3, 3]}>
                    {
                      body?.patrullar?.length > 0 && (
                        body?.patrullar.map((i, personIndex) => (
                          <Col>
                            <DutyPersonItem
                                options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                                defaultValue={i.personId}
                                onChange={_ => {
                                  dispatch(dutyActions.onChangePerson({
                                    groupIndex: index,
                                    body: {
                                      ...body,
                                      patrullar: body.patrullar.map((n,nIndex) => {
                                        if(nIndex === personIndex) {
                                          return {
                                            ...n,
                                            personData: oficers.find(f => f.id === _),
                                            personId: _
                                          }
                                        } else return n
                                      })
                                    }
                                  }))
                                }}
                                onDelete={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {
                                  ...body,
                                  patrullar: body.patrullar.filter((_,fIndex) => fIndex !== personIndex)
                                }}))}
                              
                              />
                          </Col>
                        ))
                      )
                    }
                    <Col><Button onClick={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body,patrullar: [...body.patrullar, dutyBuilder._setDefaultPerson(Duties['Garnizon patrul'])]}}))} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button></Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
        </Row>
      </div>            
    </Panel>
  )
}
export default Duty_GP_Component;