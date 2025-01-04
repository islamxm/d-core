import { Duty_IG } from "../../../../../../hooks/useDutyBuilder/types";
import { DutyGroupItemComponent } from "./types";
import Panel from "../../../../../../common/components/panel/panel";
import {Row, Col, Tag} from 'antd';
import oficers from "../../../../../../data/oficers";
import styles from './styles.module.scss'
import Button from "../../../../../../common/components/button/button";
import { AiOutlinePlus } from "react-icons/ai";

const Duty_IG_Component:DutyGroupItemComponent<Duty_IG> = ({
  data
}) => {
  const {
    name,
    body,
    groupType
  } = data

  return (
    <Panel title={name}>
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
                      body?.serkerde?.personData ? (
                        <Tag>{body.serkerde.personData?.name.shortName}</Tag>
                      ) : (
                        <Button colorVariant='success' iconButton={{isRound: true, size: 'sm'}}><AiOutlinePlus/></Button>
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
                  <div className={styles.title}>Çalşyryjy</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                    {
                      body?.calshyryjy?.personData ? (
                        <Tag>{body.calshyryjy.personData?.name.shortName}</Tag>
                      ) : (
                        <Button colorVariant='success' iconButton={{isRound: true, size: 'sm'}}><AiOutlinePlus/></Button>
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
                  <div className={styles.title}>Sakçylar</div>
                </Col>
                <Col span={24}>
                  <div className={styles.body}>
                  <Row gutter={[3,3]}>
                    {
                      body?.sakcylar?.length > 0 && (
                        body?.sakcylar.map((i) => (
                          <Col>
                            <Tag>{i.personData?.name.shortName}</Tag>
                          </Col>
                        ))
                      )
                    }
                    <Col><Button colorVariant='success' iconButton={{isRound: true, size: 'sm'}}><AiOutlinePlus/></Button></Col>
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
export default Duty_IG_Component;