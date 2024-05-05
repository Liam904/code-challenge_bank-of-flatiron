import React, { useState } from "react";
function Search(props) {
  let {transactions, setTransactions, getTransactions} = props;
  const [search, setSearch]= useState("")

  function doSearch(event){
    let s = event.target.value;
    setSearch(s);

    console.log(s.length)
  
    if (s < 4){
      getTransactions()

      
      
    }
    else{
      let filteredTransactions = []

      for (let i = 0; i < transactions.length; i ++){
        let trans = transactions[i]
        let description = trans.description;
        let category = trans.category;
        
        if (description.includes(s) || category.includes(s)){
          filteredTransactions.push(trans)

        }
       
      
      }
      setTransactions(filteredTransactions)
    }


    
  }


  return (
    <div className="ui large fluid icon input">
      <input
        type="text"
        placeholder="Search your Recent Transactions"
        onChange={doSearch}
        value={search}
      />
      <i className="circular search link icon"></i>
    </div>
  );



}export default Search;
