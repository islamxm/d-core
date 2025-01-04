import { Duty_BGN } from "../../../../../../hooks/useDutyBuilder/types";
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


const Duty_BGN_Component: DutyGroupItemComponent<Duty_BGN> = ({
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
                          defaultValue={body.nobatcy.personId}
                          onChange={(_) => {
                            dispatch(dutyActions.onChangePerson({
                              groupIndex: index,
                              body: {
                                ...body,
                                nobatcy: {
                                  ...body.nobatcy,
                                  personData: oficers.find(f => f.id === _),
                                  personId: _
                                }
                              }
                            }))
                          }}
                          onDelete={() => dispatch(dutyActions.onChangePerson({
                            groupIndex: index,
                            body: {
                              ...body,
                              nobatcy: {type: body.nobatcy.type}
                            }
                          }))}
                          />
                      ) : (
                        <Button onClick={() => {
                          dispatch(dutyActions.onChangePerson({
                            groupIndex: index,
                            body: {...body, nobatcy: dutyBuilder._setDefaultPerson(Duties['Barlag goýberiş nokadynyň nobatçysy'])}
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
              <Row gutter={[5, 5]}>
                <Col span={24}>
                  <div className={styles.title}>Kömekçileri</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                    <Row gutter={[3, 3]}>
                    {
                      body?.komekciler?.length > 0 && (
                        body?.komekciler.map((i, personIndex) => (
                          <Col>
                            <DutyPersonItem
                              options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
                              defaultValue={i.personId}
                              onChange={(_) => {
                                dispatch(dutyActions.onChangePerson({
                                  groupIndex: index,
                                  body: {
                                    ...body,
                                    komekciler: body.komekciler.map((n,nIndex) => {
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
                              onDelete={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, komekciler: body.komekciler.filter((n, nIndex) => nIndex !== personIndex)}}))}
                              />
                          </Col>
                        ))
                      )
                    }
                    <Col><Button onClick={() => dispatch(dutyActions.onChangePerson({groupIndex: index, body: {...body, komekciler: [...body.komekciler, dutyBuilder._setDefaultPerson(Duties['Barlag goýberiş nokadynyň nobatçysynyň kömekçisi'])]}}))} colorVariant='success' iconButton={{isRound: true, size: 'md'}}><AiOutlinePlus/></Button></Col>
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
export default Duty_BGN_Component;