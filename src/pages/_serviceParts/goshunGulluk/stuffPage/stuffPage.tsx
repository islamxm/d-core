import styles from './styles.module.scss'
import Tabs, { TabItemType } from '../../../../common/components/tabs/Tabs';
import { nanoid } from 'nanoid';
import StuffTable from './components/table/table';
import oficers from '../../../../data/oficers';
import Rank from '../../../../common/components/rank/rank';
import { Contracts, Ranks } from '../../../../models';

const tabList:TabItemType[] = [
  {
    id: nanoid(),
    label: 'Borçnama boýunça h/g',
    content: <StuffTable 
      columns={[
        {key: '1', title: 'T/b', dataIndex: 'order'},
        {key: '2', title: 'Harby ady', dataIndex: 'rank'},
        {key: '3', title: 'Familiýasy, ady we atasynyň ady', dataIndex: 'name'},
        {key: '4', title: 'Wezipesi', dataIndex: 'position'}
      ]}
      data={oficers.map((i, index) => ({
        key: nanoid(),
        order: i.id,
        rank: <Rank rank={i.rank?.rank || Ranks.hatarçy} contractType={i.rank?.contractType || Contracts['borçnama boýunça h/g']}/>,
        name: i.name.shortName,
        position: ''
      }))}

    />
  },
  {
    id: nanoid(),
    label: 'Çagyryş boýunça h/g',
    content: '2'
  }
]

const StuffPage = () => {

  return (
    <div className={styles.wrapper}>
      <Tabs
        tabList={tabList}
        initActiveId={tabList[0].id}
        />
    </div>
  )
}

export default StuffPage;