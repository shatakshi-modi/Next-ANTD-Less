import React,{useState} from 'react';
import CardLayout from './CardLayout';
import ExpenseForm from '../../styles/ExpenseForm.module.less';

import { InputNumber,Input,Space } from 'antd';  
import { DatePicker } from 'antd';
import { Row,Col } from 'antd';
import { Form } from 'antd';
import { Button } from 'antd';

const ExpenseInput = (props) => {
  const [form] = Form.useForm();
  const [enteredAmount,setAmount] =useState();
  const [enteredTitle,setTitle]=useState();
  const [enteredDate,setDate] =useState();

  const amountHandler = (event) =>{
    setAmount(event.target.value);
  }
  
  const titleHandler =(event) =>{
    setTitle(event.target.value);
  }
  const dateHandler =(event) =>{
    setDate(event.target.value);

  }

  const finishHandler =event =>{
    const userData ={
      title:enteredTitle,
      price:enteredAmount,
      date:enteredDate
    }
    props.onSubmitExpense(userData);
    setAmount("");
    setTitle("");
    setDate("");

  }
  return (
    <CardLayout> 
      <Form 
      initialValues={{
        remember: true,
      }}
      onFinish={finishHandler}>
        <Row>
          <Space direction='vertical'>
            <Space size='large'>
                <Col span={12}>
                  <Form.Item
                    rules={
                      [{
                          required:true,
                          message:"Please Enter Title",
                      },]
                    } 
                    name='title'>
                    <Input 
                    className={ExpenseForm.title} 
                    placeholder="Title" 
                    onBlur={titleHandler} 
                    value={enteredTitle} 
                    size='middle' />
                  </Form.Item>
                </Col>
                <Col span={12}>
                  <Form.Item 
                  rules={
                    [{
                        required:true,
                        message:"Please Enter Cost",
                    },]
                  }
                  name='amount'>
                    <InputNumber size='large'
                      className={ExpenseForm.amount}
                      placeholder='0.00'
                      prefix="Rs."
                      min="0"
                      max="10000000000000"
                      step="0.01"
                      stringMode
                      onBlur={amountHandler}
                      value={enteredAmount} 
                    />
                  </Form.Item>
                </Col>
            </Space>
              <Col span={12}>
                <Form.Item
                rules={
                  [{
                      required:true,
                      message:"Please Enter Date",
                  },]
                }
                name='date'>
                  <DatePicker 
                    placeholder='DD/MM/YYYY' 
                    format='DD/MM/YYYY' 
                    onBlur={dateHandler} 
                    className={ExpenseForm.date} 
                    value={enteredDate} 
                    size='large' />
                  </Form.Item>
              </Col>
              <Form.Item>
                <Button type="dark" htmlType="submit" >
                  Submit
                </Button>
              </Form.Item>
          </Space>
        </Row>
      </Form>
    </CardLayout>
  );
};

export default ExpenseInput;
