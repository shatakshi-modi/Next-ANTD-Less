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
      key:"date"
    },
    {
      title: ' Title',
      dataIndex: 'title',
      key:"title"
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key:"price"
    },
  ];
  const data =
  //[
  //   {
  //     key:1,
  //     title:"fsdfsfsd",
  //     date:"12/08/2020",
  //     price:"200"
  //   },
  //   {
  //     key:2,
  //     title:"fsdfsfsd",
  //     date:"12/08/2020",
  //     price:"200"
  //   },
  //   {
  //     key:3,
  //     title:"fsdfsfsd",
  //     date:"12/08/2020",
  //     price:"200"
  //   }
  // ]
  [
    {
        "title": "werw3",
        "price": "0.05",
        "date": "14/01/2022",
        "key": 0.679665059872673
    },
    {
        "title": "wertwert",
        "price": "0.06",
        "date": "12/01/2022",
        "key": 0.019496305867055863
    },
    {
        "title": "erfet",
        "price": "0.10",
        "date": "20/01/2022",
        "key": 0.2768212202345064
    }
]
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
