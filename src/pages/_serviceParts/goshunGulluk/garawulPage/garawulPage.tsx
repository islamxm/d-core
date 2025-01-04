import { Row, Col } from "antd";
import Garawul from "../../../../data/garawul";
import List from "../../../../common/components/list/list";
import tabSelect from "../../../../common/components/tabSelect/tabSelect";

const GarawulPage = () => {

  return (
    <div>
      <Row gutter={[10,10]}>
        <Col span={24}>
          <List/>
        </Col>
      </Row>
    </div>
  )
}
export default GarawulPage;