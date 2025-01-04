import { Duty_Operator } from "../../../../../../hooks/useDutyBuilder/types";
import { DutyGroupItemComponent } from "./types";
import Panel from "../../../../../../common/components/panel/panel";
import {Row, Col, Tag} from 'antd';
import oficers from "../../../../../../data/oficers";
import styles from './styles.module.scss'
import Button from "../../../../../../common/components/button/button";
import { AiOutlinePlus } from "react-icons/ai";
import DutyPersonItem from "../dutyPersonItem/dutyPersonItem";
import { Duties } from "../../../../../../models";
import { useAppDispatch } from "../../../../../../hooks/reduxHooks";
import { dutyActions } from "../../../../../../store/slices/dutySlice";
import useDutyBuilder from "../../../../../../hooks/useDutyBuilder/useDutyBuilder";

const Duty_Operator_Component:DutyGroupItemComponent<Duty_Operator> = ({
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
                  <div className={styles.title}>Operator</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                  {
                      body?.personData ? (
                        <DutyPersonItem
                        options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                        defaultValue={body.personId}
                          onChange={_ => {
                            dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, personData: oficers.find(f => f.id === _), personId: _}}))
                          }}
                          />
                      ) : (
                        <Button onClick={() => {
                          dispatch(dutyActions.onChangePerson({groupIndex: index, body: dutyBuilder._setDefaultPerson(Duties['Harby bölüm boýunça nobatçynyň tehniki serişdeler boýunça kömekçisi'])}))
                        }} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button>
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
export default Duty_Operator_Component;