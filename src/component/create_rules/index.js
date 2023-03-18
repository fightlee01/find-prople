import { Button, Col, Row, Select, Space, Table } from 'antd';
import { useState } from "react";
import './index.css'

const {Option} = Select;

const CreateRules = () => {

  const [rulesItem, setRulesItem] = useState([])
  const [rulesValue, setRulesValue] = useState([])
  const [ruleList, setRuleList] = useState([])

  const rules_field = [
    {value: 'name', label: '姓名'},
    {value: 'email', label: '邮箱'},
    {value: 'phone_number', label: '电话'},
    {value: 'country', label: '国籍'},
    {value: 'passport_type', label: '护照类型'},
    {value: 'occupation', label: '职业'},
    {value: 'call_frequency', label: '通话频率'},
    {value: 'society_frequency', label: '社交频率'},
    {value: 'express_info', label: '快递信息'},
    {value: 'city', label: '所在城市'},
  ]

  const columns = [
    {
      title: '规则序号',
      dataIndex: 'number',
      key: 'number',
      width: '100px'
    },
    {
      title: '规则名称',
      dataIndex: 'rule_name',
      key: 'rule_name',
    },
    {
      title: '规则',
      dataIndex: 'rule',
      key: 'rule',
    },
    {
      title: '规则描述',
      dataIndex: 'rule_des',
      key: 'rule_des',
    }
  ];
  const handleChange = (value, detail_info) => {
    const tmp = []
    setRulesValue([...value])
    for (let item of detail_info) {
      tmp.push(item.label)
    }
    setRulesItem([...tmp])
  }

  const onCreateRules = () => {
    console.log(rulesValue)
    console.log(rulesItem)
    setRuleList([...ruleList, {
      key: ruleList.length + 1,
      number: ruleList.length + 1,
      rule: rulesItem.join('+'),
      rule_name: '规则'+ruleList.length+1,
      rule_des: '规则描述'+ruleList.length+1
    }])
    setRulesItem([])
    setRulesValue([])
  }

  return (
    <>
      <Row>
        <Col span={ 4 }></Col>
        <Col span={ 16 }>
          <Row>
            <Col>
              <h1>规则配置</h1>
            </Col>
          </Row>
          <Row>
            <Col span={ 20 }>
              <Select
                mode="tags"
                allowClear
                style={ {
                  width: '100%',
                } }
                placeholder="选择规则字段"
                onChange={ handleChange }
                optionLabelProp="label"
              >
                { rules_field.map((item) => {
                  return (
                    <Option key={ item.value } value={ item.value } label={ item.label }>
                      <Space>
                        { item.label }
                      </Space>
                    </Option>)
                }) }
              </Select>
            </Col>
          </Row>
          <Row>
            <Col span={ 20 }>
              <div className='rule-make-up'>
                { rulesItem.map((item, index) => {
                  return (
                    <div key={ index } className='rule-make-up-item'>
                      <div className='rule-make-up-label'>{ item }</div>
                      { index !== rulesItem.length - 1 ? <Select
                        placeholder="选择组合规则"
                        optionFilterProp="children"
                        filterOption={ (input, option) =>
                          (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
                        }
                        options={ [
                          {
                            value: 'mixed',
                            label: '交集',
                          },
                          {
                            value: 'union',
                            label: '并集',
                          },
                          {
                            value: 'add',
                            label: '补集',
                          },
                        ] }
                      /> : '' }
                    </div>
                  )
                }) }
              </div>
            </Col>
            <Col offset={ 1 } span={ 3 }><Button onClick={ onCreateRules }>创建规则</Button></Col>
          </Row>
          <Row>
            <Col span={ 20 }>
              {/*{ ruleList.length > 0 ? <Table columns={ columns } dataSource={ ruleList }/> : '' }*/}
              <Table columns={ columns } dataSource={ ruleList }/>
            </Col>
          </Row>
        </Col>
        <Col span={ 4 }></Col>
      </Row>
    </>
  )

}

export default CreateRules