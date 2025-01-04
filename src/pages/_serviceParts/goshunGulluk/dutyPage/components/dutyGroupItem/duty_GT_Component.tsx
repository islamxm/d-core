import { Duty_GT, Duty_HBN } from "../../../../../../hooks/useDutyBuilder/types";
import { DutyGroupItemComponent } from "./types";
import Panel from "../../../../../../common/components/panel/panel";
import styles from './styles.module.scss'
import {Row, Col, Tag, Select } from 'antd';
import Button from "../../../../../../common/components/button/button";
import { AiOutlinePlus } from "react-icons/ai";
import { dutyActions } from "../../../../../../store/slices/dutySlice";
import { useAppDispatch, useAppSelector } from "../../../../../../hooks/reduxHooks";
import oficers from "../../../../../../data/oficers";
import useDutyBuilder from "../../../../../../hooks/useDutyBuilder/useDutyBuilder";
import DutyPersonItem from "../dutyPersonItem/dutyPersonItem";
import { Duties } from "../../../../../../models";


const Duty_GT_Component:DutyGroupItemComponent<Duty_GT> = ({
  data,
  index,
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
                  <div className={styles.title}>Gözegçiler</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                    <Row style={{alignItems: 'center'}} gutter={[3,3]}>
                      {
                        body?.length > 0 && (
                          body.map((i,personIndex) => (
                            <Col>
                              <DutyPersonItem 
                                onDelete={() => {
                                  dispatch(dutyActions.onChangePerson({
                                    groupIndex: index,
                                    body: body.filter((_,fInd) => fInd !== personIndex)
                                  }))
                                }}
                                options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                                onChange={(_) => {
                                  dispatch(dutyActions.onChangePerson({
                                    groupIndex: index,
                                    body: body.map((n, nIndex) => {
                                      if(nIndex === personIndex) {
                                        return {
                                          ...i,
                                          personData: oficers.find(f => f.id === _),
                                          personId: _
                                        }
                                      } else return n
                                    })
                                  }))
                                }}
                                defaultValue={i.personData?.id}
                                />
                            </Col>
                          ))
                        )
                      }
                      <Col><Button onClick={() => dispatch(dutyActions.onChangePerson({
                        groupIndex: index,
                        body: [...body, dutyBuilder._setDefaultPerson(Duties["Harby bölümiň gün tertibine gözegçiler"])]
                      }))} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button></Col>
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

export default Duty_GT_Component;
