import React from 'react'
import {UserOutlined, LoadingOutlined} from '@ant-design/icons'
import { Spin, Button } from 'antd'

const Spinning = () => {
    const [loading, setLoading] = React.useState(false)
  return (
    <div>
    <Spin spinning={loading}></Spin>
    <Button
    onClick={()=>{
        setLoading(preValue => !preValue)
    }}
    >Toggle spinning</Button>
    </div>
  )
}

export default Spinning
