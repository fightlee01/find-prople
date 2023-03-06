import {Checkbox, Col, Row, Input, Button} from "antd";
import './index.css'
import {useEffect, useState} from 'react';
import axios from 'axios';

function SelectRule() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [options, setOptions] = useState([])
  const [org, setOrg] = useState('')

  useEffect(()=> {
  }, [])


  const getName = e => {
    setName(e.target.value)
  }
  const getEmail = e => {
    setEmail(e.target.value)
  }
  const getPhoneNum = e => {
    setPhoneNum(e.target.value)
  }
  const getOptions = value => {
    console.log(value)
    setOptions([...value])
  }

  const onFindPeople = async () => {
    const data = {name, email, phoneNum, options}
    const result = await axios.post(`/api/json/data`, JSON.stringify(data))
    console.log(result)
    console.log(JSON.stringify(data))
    setOrg(result.data.org)
  }

  return (
    <>
      <Row>
        <Col span={12}>
          <div className='one-row'>
            <span>姓名</span>
            <Input onChange={getName} placeholder='请输入姓名' style={{width: '80%'}}/>
          </div>
        </Col>
        <Col span={12}>
          <div className='one-row'>
            <span>邮箱</span>
            <Input onChange={getEmail} placeholder='请输入邮箱' style={{width: '80%'}}/>
          </div>
        </Col>
        <Col span={12}>
          <div className='one-row'>
            <span>电话</span>
            <Input onChange={getPhoneNum} placeholder='请输入电话' style={{width: '80%'}}/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Checkbox.Group onChange={getOptions}>
            <Checkbox value='call_f'>通话频率</Checkbox>
            <Checkbox value='social_f'>社交频率</Checkbox>
            <Checkbox value='country'>国籍</Checkbox>
            <Checkbox value='passport'>护照类型</Checkbox>
            <Checkbox value='work'>职业</Checkbox>
            <Checkbox value='school'>毕业院校</Checkbox>
          </Checkbox.Group>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={24}>
          <div className='find-people'><Button type="primary" style={{width: '200px'}} onClick={onFindPeople}>查找</Button></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='find-result'>
          {org?<div>该人员所在组织为：{org}</div>:''}
          </div>
        </Col>
      </Row>
    </>
  )
}

export default SelectRule;
