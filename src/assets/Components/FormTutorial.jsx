import React from 'react'

import { Form, Input,DatePicker, Button, message } from 'antd';
const FormTutorial = () => {
    const onFinish = (values) => {
        console.log("form values:", values);
    message.success("Form submitted successfully!");
  };
  return (
    <div>
      <Form onFinish={onFinish}>
        <Form.Item label="Username" name="username">
            <Input Placeholder='Enter your username'/>
        </Form.Item>
        <Form.Item label="Password" name="password">
            <Input.Password Placeholder='Enter your password'/>
        </Form.Item>
              <Form.Item
        label="Select Date"
        name="date"
        rules={[{ required: true, message: "Please select a date" }]}
      >
        <DatePicker placement="bottomRight" style={{ width: "100%" }} />
      </Form.Item>

        <Form.Item>
            <Button type="primary" htmlType="submit">Submit</Button>
        </Form.Item>
        
      </Form>
    </div>
  )
}

export default FormTutorial
