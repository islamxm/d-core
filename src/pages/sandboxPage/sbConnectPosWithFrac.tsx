import { Row, Col } from "antd"
import Button from "../../common/components/button/button"
import fractions, { Fraction } from "../../data/fractions"
import { Select } from "antd"
import Panel from "../../common/components/panel/panel"
import createOptionsArrayForSelect from "../../utils/createOptionsArrayForSelect"
import { useEffect, useState } from "react"
import { Input } from "antd"
import ranks from "../../data/ranks"
import { Ranks } from "../../models"
import staff, { Staff } from "../../data/staff"

type UserData = {
  name?: string,
  lastName?: string,
  surName?: string,
  rank?: Ranks
}

const SandboxPage = () => {
  const [state, setState] = useState<Fraction[]>(fractions)
  const [soldiers, setSoldiers] = useState<UserData[]>([])
  const [userData, setUserData] = useState<UserData>({ name: '', lastName: '', surName: '', rank: 0 })
  const [staffM, setStaffM] = useState<Staff[]>(staff)

  const getJSON = () => {
    console.log(JSON.stringify(staffM))
  }

  const onChange = ({ fractionId, parentFractionId }: { fractionId: number, parentFractionId: number }) => {
    setState(s => s.map(fraction => {
      if (fraction.id === fractionId) {
        return ({
          ...fraction,
          parentFractionId
        })
      } else return fraction
    }))
  }

  const onReset = () => {
    setState(fractions)
  }

  useEffect(() => {
    console.log(soldiers)
  }, [soldiers])


  const onResetUser = () => {
    setUserData({
      name: '',
      surName: '',
      lastName: ''
    })
  }
  const onSaveUser = () => {
    setSoldiers(s => ([...s, userData]))
    onResetUser()
  }

  const onPosChange = (fractionId: number, posId: number) => {
    setStaffM(s => s.map(f => {
      if (f.id === posId) {
        return {
          ...f,
          fractionId
        }
      } else return f
    }))
  }

  useEffect(() => {
    setStaffM(s => s.map((f, fInd) => ({ ...f, id: fInd + 1 })))
  }, [])

  useEffect(() => console.log(staffM), [staffM])

  return (
    <>
      {/* <Row gutter={[5,5]}>
        <Col span={24}>
          <h1>Bölümçeleriň ierarhiýasy</h1>
        </Col>
        <Col span={24}>
          <Row gutter={[3,3]}>
            {
              fractions.map(fraction => (
                <Col span={24}>
                  <Panel>
                  <Row gutter={[3,3]}>
                    <Col span={8}>
                      {fraction.name.staffName}
                    </Col>
                    <Col span={8}>
                      <Select
                        style={{width: '100%'}}
                        placeholder="ýokary bölümçesi"
                        options={fractions.map(f => ({label: f.name.staffName, value: f.id}))}
                        optionFilterProp="label"
                        showSearch
                        value={fractions.find(f => f.id === fraction.parentFractionId)?.id}
                        onChange={(e) => onChange({fractionId: fraction.id, parentFractionId: e})}
                        />
                    </Col>
                  </Row>
                  </Panel>
                </Col>
              ))
            }
            <Col span={24}>
              <Button isFill onClick={getJSON}>get JSON</Button>
            </Col>
            <Col span={24}>
              <Button onClick={onReset} isFill colorVariant="danger">Reset</Button>
            </Col>
          </Row>
        </Col>
      </Row> */}
      {/* <Row style={{maxWidth: 700}} gutter={[0,10]}>
        <Col span={24}>
        <h3>ady</h3>
          <Input 
            placeholder="ady"
            onChange={e => setUserData(s => ({...s, name: e.target.value}))}
            value={userData.name}/>
        </Col>
        <Col span={24}>
        <h3>familiyasy</h3>
          <Input 
            placeholder="familiyasy"
            onChange={e => setUserData(s => ({...s, lastName: e.target.value}))}
            value={userData.lastName}/>
        </Col>
        <Col span={24}>
        <h3>atasynyn ady</h3>
          <Input 
            placeholder="atasynyn ady"
            onChange={e => setUserData(s => ({...s, surName: e.target.value}))} value={userData.surName}/>
        </Col>
        <Col span={24}>
          <h3>wezipe (bolumce)</h3>
          <Select
            showSearch
            optionFilterProp="label"
            style={{width: '100%'}}
            options={staff.map(f => ({label: f.name.staffName, value: f.id}))}
            />
        </Col>
        <Col span={24}>
          <h3>harby ady</h3>
          <Select
            options={ranks.map(r => ({label: r.name.fullName, value: r.id}))}
            showSearch
            optionFilterProp="label"
            placeholder="harby ady"
            style={{width: '100%'}}
            value={userData.rank}
            onChange={e => setUserData(s => ({...s, rank: e}))}
            />
        </Col>
        <Col span={24}>
          <Button isFill onClick={onSaveUser}>Save</Button>
        </Col>
        <Col span={24}>
          <Button isFill colorVariant="danger" onClick={onResetUser}>Reset</Button>
        </Col>
      </Row> */}
      <Row gutter={[10, 10]}>
        {
          staffM.map(s => (
            <Col span={24}>
              <Panel>
                <Row gutter={[5, 5]}>
                  <Col span={12}>
                    {s.name.staffName}
                  </Col>
                  <Col span={12}>
                    <Select
                      style={{ width: '100%' }}
                      placeholder="bolumcesi"
                      options={fractions.map(f => ({
                        label: f.name.staffName,
                        value: f.id
                      }))}
                      onChange={(e) => onPosChange(e, s.id || 0)}
                      showSearch
                      optionFilterProp="label"
                    />
                  </Col>
                </Row>
              </Panel>
            </Col>
          ))
        }
        <Col span={24}>
          <Button onClick={getJSON}>get JSON</Button>
        </Col>
      </Row>
    </>
  )
}

export default SandboxPage