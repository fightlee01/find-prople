import { Col, Row } from 'antd';
import SelectRule from './component/select-rule';

function App() {
  return (
    <>
      <Row>
        <Col span={4}></Col>
        {/* middle */}
        <Col span={16}>
          <Row align='center'>
            <Col><h1>基于匹配的人员查找算法</h1></Col>
          </Row>
          {/* select rule */}
          <Row>
            <Col span={24}><SelectRule /></Col>
          </Row>
        </Col>
        <Col span={4}></Col>
      </Row>
    </>
  );
}

export default App;
