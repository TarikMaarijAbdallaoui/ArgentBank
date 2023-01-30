import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Account from "../components/Account/Account";
import EditUser from "../components/EditUser/EditUser";

const accounts = [
  {
    title: "Argent Bank Checking (x8349)",
    amount: 2082.79,
    description: "Available Balance",
  },
  {
    title: "Argent Bank Savings (x6712)",
    amount: 10928.42,
    description: "Available Balance",
  },
  {
    title: "Argent Bank Credit Card (x8349)",
    amount: 184.30,
    description: "Current Balance",
  },
];

const User = () => {
  const {firstName, lastName} = useSelector(state => state.user.info)
  const status = useSelector(state => state.user.status)
  const [toggleEdit, setToggleEdit] = useState(false)
   
  const navigate = useNavigate()
  // useEffect(() => {
  //   if(status != 'success'){
  //     navigate('/login')
  //   }
  // }, [status])
  
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          {toggleEdit ? <EditUser setToggleEdit={setToggleEdit} /> : `${firstName} ${lastName}!` }
          
        </h1>
        {toggleEdit ? (""): <button className="edit-button" onClick={() => setToggleEdit(true)}>Edit Name</button> }
        
      </div>
      <h2 className="sr-only">Accounts</h2>
      
        {accounts.map((account, index) => {
                return <Account key={index} title={account.title} amount={account.amount} description={account.description} />
        })}
      
    </main>
  );
};

export default User;
