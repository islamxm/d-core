import styles from './styles.module.scss';
import {  useEffect, useState } from 'react';
import { Row, Col } from 'antd';
import DateSelect from './components/dateSelect/dateSelect';
import WithLabel from '../../../../common/components/withLabel/withLabel';
import Panel from '../../../../common/components/panel/panel';
import Builder from './components/builder/builder';
import { _DutyBuilderDefaultScheme } from '../../../../hooks/useDutyBuilder/types';
import {  useAppDispatch, useAppSelector } from '../../../../hooks/reduxHooks';
import moment from 'moment'
import oficers from '../../../../data/oficers';
import Posgen from '../../../../utils/getPos';


const posgen = new Posgen()
const DutyPage = () => {
  const {data, avilableDutyGroupList} = useAppSelector(s => s.duty)
  const [date, setDate] = useState<string | string[]>(moment(new Date()).format('DD.MM.YYYY'))

  //
  const [persons, setPersons] = useState(oficers)
  //

  useEffect(() => {
    //логика изменения списка доступных для выбора нарядов в зависимости от уже выбранных нарядов (можно засунуть в отдельный хук всю логику работы с нарядами вне редакс слайса)
  }, [data])  

  useEffect(() => {
    // console.log(posgen.getFractionTree().fromFractionId(18))
    // console.log(posgen.getSoliderFractionForOrder(82))
    
  }, [data])






  return (
    <>
      <div className={styles.wrapper}>
        <Row gutter={[20, 20]} justify={'center'}>
          <Col span={24}>
            <WithLabel
              className={styles.dateSelect}
              label="Tabshyrygyn senesi">
              <DateSelect
                style={{ width: 290 }}
                placeholder='Выберите дату'
                onChange={e => setDate(e && setDate( moment(e.toString()).format('DD.MM.YYYY')))}
              />
            </WithLabel>
          </Col>
          <Col span={16}>
            <Panel>
              <Builder/>
            </Panel>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default DutyPage