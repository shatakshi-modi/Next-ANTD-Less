import React from 'react';
import CardLayout from './CardLayout';

import { Table } from 'antd';
import { useState } from 'react';


const NewExpense = (props) => {
  console.log(props.newData);
  const columns = [
    {
      title: 'Date',
      dataIndex: 'date',
      width:"30%",
      key:"date",
    },
    {
      title: ' Title',
      dataIndex: 'title',
      width:"50%",
      key:"title"
    },
    {
      title: 'Price',
      dataIndex: 'price',
      width:"20%",
      key:"price"
    },
  ];
  
  return (
    <CardLayout>
        <Table
        columns={columns}
        dataSource={props.newData}
        pagination={false }
        size='middle'
        style={
          {width: '35vw'}
        }
      />
    </CardLayout>
  );
};

export default NewExpense;
