import React from "react";
import Web3 from 'web3';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from "react";

const HomeComponent = () => {

  const [account, setaccount] = useState();

  useEffect(() => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    const accounts = web3.eth.requestAccounts(); 
    console.log(accounts[0]);   
    
    Promise.all([accounts]).then((values) => {
      console.log(values[0]);
      console.log(web3);
      setaccount(values[0]);
    })
  }, [])

  return (
    <div className="home-side">
      <Container>
        <h3>Your account is { account }</h3>
      </Container>
    </div>
  )
};

export default HomeComponent;