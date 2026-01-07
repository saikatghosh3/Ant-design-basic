import React from 'react'
// import {userOutlined} from '@ant-design/icons';
import { Select } from 'antd';
const Selects = () => {
    const fruits = ['Apple', 'Banana', 'Orange', 'Mango'];
  return (
    <div>
      <p>Which are your favorite fruits</p>
      <Select 
      placeholder="select fruits"
     style={{width:'50%'}}
     mode="multiple"
    maxTagCount ={2}
    allowClear
      >{fruits.map((fruits, index)=>{
        return <Select.Option
        value={fruits} key={index}></Select.Option>
      })}</Select>
    </div>
  )
}

export default Selects
