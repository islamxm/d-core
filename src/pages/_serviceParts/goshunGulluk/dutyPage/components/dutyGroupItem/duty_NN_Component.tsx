import { Duty_NN } from "../../../../../../hooks/useDutyBuilder/types";
import { DutyGroupItemComponent } from "./types";
import Panel from "../../../../../../common/components/panel/panel";
import { Row, Col, Tag } from 'antd';
import oficers from "../../../../../../data/oficers";
import styles from './styles.module.scss'
import Button from "../../../../../../common/components/button/button";
import { AiOutlinePlus } from "react-icons/ai";
import { Duties } from "../../../../../../models";
import { useAppDispatch } from "../../../../../../hooks/reduxHooks";
import { dutyActions } from "../../../../../../store/slices/dutySlice";
import useDutyBuilder from "../../../../../../hooks/useDutyBuilder/useDutyBuilder";
import DutyPersonItem from "../dutyPersonItem/dutyPersonItem";

const Duty_NN_Component: DutyGroupItemComponent<Duty_NN> = ({
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
                  <div className={styles.title}>Nobatçy</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                    {
                      body?.nobatcy?.personData ? (
                        <DutyPersonItem
                                defaultValue={body.nobatcy.personId}
                        options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                          onChange={_ => {
                            dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body,nobatcy: {...body.nobatcy, personData: oficers.find(f => f.id === _), personId: _}}}))
                          }}
                          onDelete={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, nobatcy: {type: Duties['Naharhana nobatçy']}}}))}
                          />
                      ) : (
                        <Button onClick={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, nobatcy: dutyBuilder._setDefaultPerson(Duties['Naharhana nobatçy'])}}))} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button>
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
                  <div className={styles.title}>Işçiler</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                    <Row gutter={[3, 3]}>
                    {
                      body?.ishciler?.length > 0 && (
                        body?.ishciler.map((i, personIndex) => (
                          <Col>
                            <DutyPersonItem
                                options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                                defaultValue={i.personId}
                              onChange={_ => {
                                dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, ishciler: body.ishciler.map((n,nIndex) => {
                                  if(nIndex === personIndex) {
                                    return {
                                      ...n,
                                      personData: oficers.find(f => f.id === _),
                                      personId: _
                                    }
                                  } else return n
                                })}}))
                              }}
                              onDelete={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, ishciler: body.ishciler.filter((_,fInd) => fInd !== personIndex)}}))}
                              />
                          </Col>
                        ))
                      )
                    }
                    <Col><Button onClick={() => dispatch(dutyActions.onChangePerson({
                      groupIndex: index,
                      body: {
                        ...body,
                        ishciler: [...body.ishciler, dutyBuilder._setDefaultPerson(Duties['Naharhana işçisi'])]
                      }
                    }))} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button></Col>
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col span={24}>
            <div className={styles.group}>
              <Row gutter={[5,5]}>
                <Col span={24}>
                  <div className={styles.title}>Nobatçy aşpez</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                  {
                      body?.ashpez?.personData ? (
                        <DutyPersonItem
                                defaultValue={body.ashpez.personId}
                        options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                          onChange={_ => {
                            dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body,ashpez: {...body.ashpez, personData: oficers.find(f => f.id === _), personId: _}}}))
                          }}
                          onDelete={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, ashpez: {type: Duties['Nobatçy aşpez']}}}))}
                          />
                      ) : (
                        <Button onClick={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, ashpez: dutyBuilder._setDefaultPerson(Duties['Nobatçy aşpez'])}}))} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button>
                      )
                    }
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
export default Duty_NN_Component;