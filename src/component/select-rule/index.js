import { Checkbox, Col, Row, Input, Button, message } from "antd";
import './index.css'
import { useState } from 'react';
import axios from 'axios';

function SelectRule() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phoneNum, setPhoneNum] = useState('')
  const [country, setCountry] = useState('')
  const [passport, setPassport] = useState('')
  const [work, setWork] = useState('')
  const [school, setSchool] = useState('')
  const [options, setOptions] = useState({})
  const [org, setOrg] = useState('')


  const getName = e => {
    setName(e.target.value)
  }
  const getEmail = e => {
    setEmail(e.target.value)
  }
  const getPhoneNum = e => {
    setPhoneNum(e.target.value)
  }
  const getCountry = (e) => {
    setCountry(e.target.value)
  }
  const getPassport = (e) => {
    setPassport(e.target.value)
  }
  const getWork = (e) => {
    setWork(e.target.value)
  }
  const getSchool = (e) => {
    setSchool(e.target.value)
  }
  const getOptions = value => {
    let tmp = {}
    for (let i = 0; i < value.length; i++) {
      tmp[value[i]] = value[i]
    }
    setOptions(tmp)
  }

  const onFindPeople = async () => {
    const reg = /^\w+((.\w+)|(-\w+))@[A-Za-z0-9]+((.|-)[A-Za-z0-9]+).[A-Za-z0-9]+$/
    if (!name) {
      message.error('姓名不能为空！', 0.5)
      return
    }
    if (email && !reg.test(email)) {
      message.error('邮箱格式错误！', 0.5)
      return

    }
    const data = {name, email, phoneNum, country, passport, work, school, options}
    console.log(data)
    const result = await axios.post(`/api/json/data`, JSON.stringify(data))
    console.log(result)
    console.log(JSON.stringify(data))
    if (result.data.org !== 'NULL') {
      setOrg(result.data.org)
    }
  }

  return (
    <>
      <Row>
        <Col span={ 12 }>
          <div className='one-row'>
            <span>姓名</span>
            <Input onChange={ getName } placeholder='请输入姓名' style={ {width: '80%'} }/>
          </div>
        </Col>
        <Col span={ 12 }>
          <div className='one-row'>
            <span>邮箱</span>
            <Input onChange={ getEmail } placeholder='请输入邮箱' style={ {width: '80%'} }/>
          </div>
        </Col>
        <Col span={ 12 }>
          <div className='one-row'>
            <span>电话</span>
            <Input onChange={ getPhoneNum } placeholder='请输入电话' style={ {width: '80%'} }/>
          </div>
        </Col>
        <Col span={ 12 }>
          <div className='one-row'>
            <span>国籍</span>
            <Input onChange={ getCountry } placeholder='请输入国籍' style={ {width: '80%'} }/>
          </div>
        </Col>
        <Col span={ 12 }>
          <div className='one-row'>
            <span>护照类型</span>
            <Input onChange={ getPassport } placeholder='请输入护照类型' style={ {width: '80%'} }/>
          </div>
        </Col>
        <Col span={ 12 }>
          <div className='one-row'>
            <span>职业</span>
            <Input onChange={ getWork } placeholder='请输入职业' style={ {width: '80%'} }/>
          </div>
        </Col>
        <Col span={ 12 }>
          <div className='one-row'>
            <span>毕业院校</span>
            <Input onChange={ getSchool } placeholder='请输入毕业院校' style={ {width: '80%'} }/>
          </div>
        </Col>
      </Row>
      <Row>
        <Col span={ 24 }>
          <Checkbox.Group onChange={ getOptions }>
            <Checkbox value='call_f'>通话频率</Checkbox>
            <Checkbox value='social_f'>社交频率</Checkbox>
          </Checkbox.Group>
        </Col>
      </Row>
      <Row justify='center'>
        <Col span={ 24 }>
          <div className='find-people'><Button type="primary" style={ {width: '200px'} }
                                               onClick={ onFindPeople }>查找</Button></div>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className='find-result'>
            { org ? <div>该人员所在组织为：{ org }</div> : org }
          </div>
        </Col>
      </Row>
    </>
  )
}

export default SelectRule;
