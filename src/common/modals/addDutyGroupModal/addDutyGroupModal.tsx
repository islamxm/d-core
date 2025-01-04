import { FC, useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { Modal, ModalFuncProps, Row, Col, Select } from 'antd';
import createOptionsArrayForSelect from '../../../utils/createOptionsArrayForSelect';
import { useAppDispatch, useAppSelector } from '../../../hooks/reduxHooks';
import Button from '../../components/button/button';
import { DutyGroup, DutyGroupType } from '../../../data/dutyGroups';
import { dutyActions } from '../../../store/slices/dutySlice';
import createDutyGroup from '../../../utils/createDutyGroup';
import { _DutyBuilderItemType } from '../../../hooks/useDutyBuilder/types';
import { message } from 'antd';


const AddDutyGroupModal:FC<ModalFuncProps> = ({
  onCancel,
  ...restProps
}) => {
  const dispatch = useAppDispatch()
  const {avilableDutyGroupList, data} = useAppSelector(s => s.duty)
  const [value, setValue] = useState<DutyGroupType>()
  const [isValid, setIsValid] = useState(false)

  const close = () => {
    setValue(undefined)
    onCancel && onCancel()
  }

  useEffect(() => {
    value ? setIsValid(true) : setIsValid(false)
  }, [value])

  const save = () => {
    if(value) {
      dispatch(dutyActions.addDutyGroup(createDutyGroup(value)))
      close()
      message.success('Tabşyryk goşuldy')
    }
  }

  return (
    <Modal
      {...restProps}
      footer={false}
      onCancel={close}
      className={styles.wrapper}
      >
      <Row gutter={[20,20]}>
        <Col span={24}>
          Tabşyrygyň görnüşi
        </Col>
        <Col span={24}>
          <Select
            style={{width: '100%'}}
            options={createOptionsArrayForSelect(avilableDutyGroupList || [], {value: 'type', label: 'name'})}
            value={value}
            showSearch
            optionFilterProp='label'
            placeholder="Tabşyrygy saýlaň"
            onChange={setValue}
            />
        </Col>
        <Col span={24}>
          <Row gutter={[10,10]}>
            <Col span={12}>
              <Button disabled={!isValid} onClick={save} isFill>Giriz</Button>
            </Col>
            <Col span={12}>
              <Button onClick={close} isFill colorVariant='danger'>Bes et</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  )
}

export default AddDutyGroupModal