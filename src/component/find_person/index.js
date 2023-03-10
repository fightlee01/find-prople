import { Col, Row, Checkbox } from "antd";


const FindPerson = () => {

  const onChange = (checkedValues) => {
    console.log('checked = ', checkedValues);
  };
  const plainOptions = ['规则1', '规则2', '规则3'];

  return (
    <>
      <Row>
        <Col span={24}>
          <Row justify='center'>
            <Col><h1>基于规则匹配人员发现系统</h1></Col>
          </Row>
          <Row>
            <Col span={4}></Col>
            <Col span={20}>
              <Checkbox.Group options={plainOptions} defaultValue={['Apple']} onChange={onChange} />
            </Col>
            <Col span={4}></Col>
          </Row>
          <Row></Row>
        </Col>
      </Row>
    </>
  )
}

export default FindPerson