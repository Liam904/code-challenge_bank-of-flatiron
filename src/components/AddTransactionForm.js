import axios from "axios";
import React, {useState} from "react";

function AddTransactionForm(props) {
  let {getTransactions} = props

  const [formData, setFormData] = useState({

    date: "",
    description: "",
    category: "",
    amount: "",
  });



  function handleChange(event) {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  function handleSubmit(event){
    event.preventDefault();
    
    const newTransaction = {
     date:formData.date,
     description:formData.description,
     category:formData.category,
     amount: parseFloat(formData.amount)
   
    }


    axios.post("http://localhost:8001/transactions", newTransaction)
  .then((response)=>{
  getTransactions(response.data)
  })
  }

  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
          />
          <input
            type="text"
            name="description"
            value={formData.description}
            placeholder="Description"
            onChange={handleChange}
          />
          <input
            type="text"
            name="category"
            value={formData.category}
            placeholder="Category"
            onChange={handleChange}
          />
          <input
            type="number"
            name="amount"
            value={formData.amount}
            placeholder="Amount"
            step="0.01"
            onChange={handleChange}
          />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
