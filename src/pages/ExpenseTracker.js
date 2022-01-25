import React,{useState,useEffect} from 'react';

import ExpenseInput from '../components/ExpenseTracker/ExpenseInput';
import NewExpense from '../components/ExpenseTracker/NewExpense';

const getLocalStorageData =()=>{
  if (typeof window !== 'undefined'){
    let list=localStorage.getItem('ExpenseData');
    
    if(list){
      console.log(JSON.parse(localStorage.getItem('ExpenseData')));
      return JSON.parse(localStorage.getItem('ExpenseData'));
    }
    else {
      return [];
    }
  }
  else {
    return [];
  }
}


const ExpenseTracker = () => {
  const [expenses, setExpenses] = useState(getLocalStorageData());
  const submitHandler = (expenseData) =>{
    const savedData={
      ...expenseData,
      key: Math.random()
    }
    setExpenses((prevExpenses) => {
      return [savedData, ...prevExpenses];
    });
    console.log(expenses);
  }

  useEffect(()=>{
    localStorage.setItem('ExpenseData',JSON.stringify(expenses));
  },[expenses]);
  return <>
      <ExpenseInput onSubmitExpense={submitHandler}/>
      {expenses.length > 0 && <NewExpense newData={expenses}  />}
  </>;
};

export default ExpenseTracker;