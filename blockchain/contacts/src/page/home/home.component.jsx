import React from "react";
import Web3 from 'web3';
import { Container } from 'react-bootstrap';
import { useState, useEffect } from "react";

const HomeComponent = () => {

  const [account, setaccount] = useState([]);

  useEffect(() => {
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:7545');
    const accounts = web3.eth.requestAccounts();    
    setaccount(accounts[0]);
    console.log(accounts[Promise]);
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