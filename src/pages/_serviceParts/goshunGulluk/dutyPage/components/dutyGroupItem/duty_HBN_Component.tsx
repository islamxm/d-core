import { Duty_HBN } from "../../../../../../hooks/useDutyBuilder/types";
import { DutyGroupItemComponent } from "./types";
import Panel from "../../../../../../common/components/panel/panel";
import {Row, Col, Tag} from 'antd';
import oficers from "../../../../../../data/oficers";
import styles from './styles.module.scss'
import { useContext } from "react";
import { DutyContext } from "../builder/context";
import Button from "../../../../../../common/components/button/button";
import { AiOutlinePlus } from "react-icons/ai";
import DutyPersonItem from "../dutyPersonItem/dutyPersonItem";
import { useAppDispatch } from "../../../../../../hooks/reduxHooks";
import { dutyActions } from "../../../../../../store/slices/dutySlice";
import useDutyBuilder from "../../../../../../hooks/useDutyBuilder/useDutyBuilder";
import { Duties } from "../../../../../../models";

const Duty_HBN_Component:DutyGroupItemComponent<Duty_HBN> = ({
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
                  <div className={styles.title}>Nobatçy</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                    {
                      body?.nobatcy?.personData ? (
                        <DutyPersonItem
                          options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                          defaultValue={body.nobatcy.personData?.id}
                          optionFilterProp={'label'}
                          onDelete={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, nobatcy: {type: body.nobatcy.type}}}))}
                          onChange={(_) => {
                            dispatch(dutyActions.onChangePerson({groupIndex: index, body: {
                              ...body,
                              nobatcy: {
                                ...body.nobatcy,
                                personData: oficers.find(f => f.id === _),
                                personId: _
                              }
                            }}))
                          }}
                          />
                      ) : (
                        <Button onClick={() => {
                          dispatch(dutyActions.onChangePerson({
                            groupIndex: index,
                            body: {
                              ...body,
                              nobatcy: dutyBuilder._setDefaultPerson(Duties['Harby bölümiň nobatçysy'])
                            }
                          }))
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
              <Row gutter={[5,5]}>
                <Col span={24}>
                  <div className={styles.title}>Kömekçisi</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                  {
                      body?.komekci?.personData ? (
                        <DutyPersonItem
                          options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                          defaultValue={body.komekci.personData?.id}
                          optionFilterProp={'label'}
                          onDelete={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, komekci: {type: body.komekci.type}}}))}
                          onChange={(_) => {
                            dispatch(dutyActions.onChangePerson({groupIndex: index, body: {
                              ...body,
                              komekci: {
                                ...body.komekci,
                                personData: oficers.find(f => f.id === _),
                                personId: _
                              }
                            }}))
                          }}
                          />
                      ) : (
                        <Button onClick={() => {
                          dispatch(dutyActions.onChangePerson({
                            groupIndex: index,
                            body: {
                              ...body,
                              komekci: dutyBuilder._setDefaultPerson(Duties['Harby bölümiň nobatçysynyň kömekçisi'])
                            }
                          }))
                        }} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button>
                      )
                    }
                  </div>  
                </Col>
              </Row>
            </div></Col>
        </Row>
      </div>     
    </Panel>
  )
}
export default Duty_HBN_Component;