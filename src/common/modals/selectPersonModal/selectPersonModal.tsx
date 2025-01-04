import { Modal, Row, Col, ModalFuncProps, Select } from "antd";
import { FC, useEffect } from "react";
import { DefFuctionType } from "../../../models";
import Button from "../../components/button/button";
import createOptionsArrayForSelect from "../../../utils/createOptionsArrayForSelect";
import oficers from "../../../data/oficers";
import { useAppSelector, useAppDispatch } from "../../../hooks/reduxHooks";
import { dutyActions } from "../../../store/slices/dutySlice";




const SelectPersonModal:FC<ModalFuncProps> = (props) => {
  
  const {currentPerson} = useAppSelector(s => s.duty)
  const dispatch = useAppDispatch()


  return (
    <Modal
      {...props}
      footer={false}
      >
      <Row gutter={[20,20]}>
        <Col span={24}>
          <h2>{'Harby gullukcyny sayla'}</h2>
        </Col>
        <Col span={24}>
          <Select
            style={{width: '100%'}}
            value={currentPerson.data?.person?.id}
            options={oficers.map(i => ({value: i.id, label: i.name.shortName}))}
            virtual
            />
        </Col>
        <Col span={24}>
          <Row gutter={[10,10]}>
            <Col span={12}>
              <Button isFill colorVariant='default'>Save</Button>
            </Col>
            <Col span={12}>
              <Button onClick={props.onCancel} isFill colorVariant='danger'>Cancel</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Modal>
  )
}

export default SelectPersonModal;