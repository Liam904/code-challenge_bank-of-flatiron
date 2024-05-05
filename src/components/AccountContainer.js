import React, { useState } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
import axios from "axios";
import { useEffect } from "react";

function AccountContainer() {
  const [transactions, setTransactions] = useState([])

  

  //add conditional and or cleanup function

  function getTransactions(){
    axios.get("http://localhost:8001/transactions")
    .then((response)=>setTransactions(response.data))

    
  }
  useEffect(function(){
   getTransactions()



  }, [])

  return (
    <div>
      <Search transactions={transactions} setTransactions={setTransactions} getTransactions={getTransactions}/>
      <AddTransactionForm getTransactions={getTransactions} />
      <TransactionsList transactions={transactions}/>
    </div>
  );
}

export default AccountContainer;
