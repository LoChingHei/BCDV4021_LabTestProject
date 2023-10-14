import React, { useState } from 'react';
import './App.css';
import { faker } from '@faker-js/faker';
import sha256 from 'crypto-js/sha256';
import hmacSHA512 from 'crypto-js/hmac-sha512';
import Base64 from 'crypto-js/enc-base64';


const TransferForm = () => {
    var address1 = faker.finance.ethereumAddress() 
    const [sourceAccount, setsourceAccount] = useState(address1); //setsourceAccount for future application
    var address2 = faker.finance.ethereumAddress() 
    const [destinationAccount , setdestinationAccount] = useState(address2); //setdestinationAccount for future application
    const [inputValue, setInputValue] = useState('');
    const [showReceipt, setShowReceipt] = useState(false);
    const [showHash, setHash] = useState('a665a45920422f9d417e4867efdc4fb8a04a1f3fff1fa07e998e86f7f7a27ae3');
    const [showBlockHash, setBlockHash] = useState("f64e6b9f89106658822b83a8d3300260db1bcbee872f1af306581ff5599657e4");
    const [showBlockNumber, setBlockNumber] = useState(10);
    const [showGasFee, setGasFee] = useState('21000');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim() !== '') {     //Check whether the input is empty!
            setShowReceipt(true);
        } else{
            alert("Please input a value!");
        }
    };

    return (
        <div className="App">
        <h1>Transfer</h1>
        <div>
            <p>From: {sourceAccount}</p>
            <p>To: {destinationAccount}</p>
        </div>
        <div>
        <form onSubmit={handleSubmit}>
            <label>Amount: </label>
            <input
            type="text"
            placeholder="Enter Amount..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
           /> 
            <button class = "zoom" type="submit">Submit</button>
        </form>
        </div>

        {showReceipt && (           //when showReceipt is true --> show reciept
            <div className="receipt">
                <h1>Receipt</h1>
                <p>Transaction Hash: {showHash}</p>
                <p>Block Hash: {showBlockHash}</p>
                <p>Block number: {showBlockNumber}</p>
                <p>From: {sourceAccount}</p>
                <p>To: {destinationAccount}</p>
                <p>Gas Used: {showGasFee}</p>
            </div>
        )}
        </div>
    );
    }
  

export default TransferForm;
