import { Row, Col } from "antd"
import Button from "../../common/components/button/button"
import fractions, { Fraction } from "../../data/fractions"
import { Select } from "antd"
import Panel from "../../common/components/panel/panel"
import createOptionsArrayForSelect from "../../utils/createOptionsArrayForSelect"
import { useEffect, useState } from "react"
import { Input } from "antd"
import ranks from "../../data/ranks"
import { Contracts, PersonFull, Ranks } from "../../models"
import staff, { Staff } from "../../data/staff"
import oficers from "../../data/oficers"
import GrammarAPI from "../../classes/grammar"

const gr = new GrammarAPI()

type UserData = {
  name?: string,
  lastName?: string,
  surName?: string,
  rank?: Ranks
}

const SandboxPage = () => {
  const [soldiers, setSoldiers] = useState<PersonFull[]>([])
  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [lastname, setLastname] = useState('')
  const [rank, setRank] = useState<Ranks>(0)
  const [contract, setContract] = useState<Contracts>(Contracts["çagyryş boýunça h/g"])
 
  const getJSON = () => {
    console.log(soldiers)
    const jsn = JSON.stringify(soldiers)
    console.log(jsn)
  }

  const clear = () => {
    setName('')
    setLastname('')
    setSurname('')
  }

  const save = () => {
    const startId = 85
    const data:PersonFull = {
      id: startId + soldiers.length,
      name: {
        shortName: '',
        forBuyruk: '',
        partial: {
          name: name,
          surname: surname,
          lastname: lastname
        }
      },
      rank: {
        rank,
        contractType: contract
      }
    }
    setSoldiers(s => [...s, data])
    clear()
  }

  return (
    <>
      <Row style={{maxWidth:500}} gutter={[10, 10]}>
        <Col span={24}>
          <Row gutter={[5,5]}>
            <Col span={24}>
              <Input 
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="ady"/>
            </Col>
            <Col span={24}>
              <Input 
                value={lastname}
                onChange={e => setLastname(e.target.value)}
                placeholder="familiyasy"/>
            </Col>
            <Col span={24}>
              <Input 
                value={surname}
                onChange={e => setSurname(e.target.value)}
                placeholder="atasynyn ady"/>
            </Col>
            <Col span={24}>
              <Select
                style={{width: '100%'}}
                defaultValue={rank}
                onChange={setRank}
                options={ranks.map(r => ({value: r.id, label: r.name.fullName}))}
                />
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Row gutter={[4,4]}>
            <Col span={12}>
              <Button isFill typeVariant="outlined" onClick={save}>Save</Button>
            </Col>
            <Col span={12}>
              <Button isFill typeVariant="outlined" colorVariant="danger" onClick={save}>Cancel</Button>
            </Col>
          </Row>
        </Col>
        <Col span={24}>
          <Button onClick={getJSON}>get JSON</Button>
        </Col>
      </Row>
    </>
  )
}

export default SandboxPage