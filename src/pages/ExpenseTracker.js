import React,{useState,useEffect} from 'react';

import ExpenseInput from '../components/ExpenseTracker/ExpenseInput';
import NewExpense from '../components/ExpenseTracker/NewExpense';

const getLocalStorageData =()=>{
  if (typeof window !== 'undefined'){
    let list=localStorage.getItem('ExpenseData');
    
    if(list){
      // console.log(JSON.parse(localStorage.getItem('ExpenseData')));
      return JSON.parse(localStorage.getItem('ExpenseData'));
    }
    else {return []};
  }
  else {
    return [];
  }
}


const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(getLocalStorageData());
  console.log(getLocalStorageData());
  const submitHandler = (expenseData) =>{
    const savedData={
      ...expenseData,
      key: Math.floor(Math.random()*10).toString()
    }
    const newdata =[savedData, ...expenses];
    setExpenses((prevExpenses) => {
      return newdata;
    });
    localStorage.setItem('ExpenseData',JSON.stringify(newdata));
  }

  return <>
      <ExpenseInput onSubmitExpense={submitHandler}/>
      <NewExpense newData={[...expenses]}  />
  </>;
};

export default ExpenseTracker;