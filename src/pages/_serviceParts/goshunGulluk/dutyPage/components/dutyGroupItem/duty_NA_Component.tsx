import { Duty_NA } from "../../../../../../hooks/useDutyBuilder/types";
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

const Duty_NA_Component:DutyGroupItemComponent<Duty_NA> = ({
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
                      body?.personData ? (
                        <DutyPersonItem
                        options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                        defaultValue={body.personId}
                        onChange={_ => {
                          dispatch(dutyActions.onChangePerson({groupIndex: index, body: {personData: oficers.find(f => f.id === _), personId: _, type: Duties['Nobatçy awtoulag']}}))
                        }}
                          onDelete={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {type: Duties['Nobatçy awtoulag']}}))}
                          />
                      ) : (
                        <Button onClick={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: dutyBuilder._setDefaultPerson(Duties['Nobatçy awtoulag'])}))} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button>
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
export default Duty_NA_Component;