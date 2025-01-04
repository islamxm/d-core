import { Duty_GGBN } from "../../../../../../hooks/useDutyBuilder/types";
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

const Duty_GGBN_Component:DutyGroupItemComponent<Duty_GGBN> = ({
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
                          options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                          defaultValue={body.nobatcy.personData?.id}
                          onChange={_ => {
                            dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, nobatcy: {...body.nobatcy, personData: oficers.find(f => f.id === _), personId: _}}}))
                          }}
                          onDelete={() => {
                            dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, nobatcy: {type: Duties['Garnizon garawullar boýunça nobatçy']}}}))
                          }}
                          />
                      ) : (
                        <Button onClick={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, nobatcy: dutyBuilder._setDefaultPerson(Duties['Garnizon garawullar boýunça nobatçy'])}}))} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button>
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
                  <div className={styles.title}>Kömekçisi</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                  {
                      body?.komekci?.personData ? (
                        <DutyPersonItem
                          options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                          defaultValue={body.komekci.personData?.id}
                          onChange={_ => {
                            dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, komekci: {...body.komekci, personData: oficers.find(f => f.id === _), personId: _}}}))
                          }}
                          onDelete={() => {
                            dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, komekci: {type: Duties['Garnizon garawullar boýunça nobatçyň kömekçisi']}}}))
                          }}
                          />
                      ) : (
                        <Button onClick={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, komekci: dutyBuilder._setDefaultPerson(Duties['Garnizon garawullar boýunça nobatçyň kömekçisi'])}}))} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button>
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
export default Duty_GGBN_Component;