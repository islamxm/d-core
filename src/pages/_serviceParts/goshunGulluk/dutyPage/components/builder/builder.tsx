import { FC, useState } from 'react';
import styles from './styles.module.scss';
import { Row, Col } from 'antd';
import { _DutyBuilderDefaultScheme } from '../../../../../../hooks/useDutyBuilder/types';
import Button from '../../../../../../common/components/button/button';
import dutyGroupComponentGen from './dutyGroupComponentGen';
import { AiOutlineDownload, AiOutlinePlus } from 'react-icons/ai';
import { nanoid } from 'nanoid';
import { useAppSelector, useAppDispatch } from '../../../../../../hooks/reduxHooks';
import { dutyActions } from '../../../../../../store/slices/dutySlice';
import AddDutyGroupModal from '../../../../../../common/modals/addDutyGroupModal/addDutyGroupModal';
import { TestDutyGroups } from '../../../../../../utils/getPos';
import DocAPI from '../../../../../../classes/doc';

const doc = new DocAPI()
const test = new TestDutyGroups()


const Builder:FC = () => {
  const [open, setOpen] = useState(false)
  const dispatch = useAppDispatch()
  const {data} = useAppSelector(s => s.duty)
 

  const getDoc = () => {
    doc.dutyOrder({
      accepture: [3,1],
      groups: data.map(f =>  test.get_Duty_dataFromGroupType(f, f.groupType)).filter(t => t !== undefined)
    }).download()
  }

  return (
    <div className={styles.wrapper}>
      <AddDutyGroupModal
        open={open}
        onCancel={() => setOpen(false)}
        />
      <Row gutter={[20,20]}>
        <Col span={24}>
          <Row gutter={[10,10]}>
            {
              data?.map((group, index) => (
                <Col span={24} key={nanoid()}>
                  {dutyGroupComponentGen(group.groupType, {data: group, index})}
                </Col>
              ))
            }
            <Col span={24} style={{justifyContent:'center', display: 'flex'}}>
              <Button 
                colorVariant='success' 
                iconButton={{isRound: true, size: 'lg'}}
                onClick={() => setOpen(true)}
                >
                <AiOutlinePlus/>
              </Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[10,10]}>
            <Col span={8}>
              <Button onClick={() => dispatch(dutyActions.createDefaultDutyTemplate())} isFill>Nusga</Button> 
            </Col>
            <Col span={8}>
              <Button onClick={() => dispatch(dutyActions.clear())} isFill colorVariant='danger'>
                Beset
              </Button>
            </Col>
            <Col span={8}>
              <Button onClick={getDoc} typeVariant='outlined' colorVariant='default' isFill><AiOutlineDownload/> Buýruk</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  )
}

export default Builder;