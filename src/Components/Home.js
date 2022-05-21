import React, { useEffect, useState } from 'react'
import logo1 from "../Images/logo1.png"
import "../index.css"
import "./animation.css"
import { useNavigate } from "react-router-dom";
import Web3 from 'web3';
import { Abi,conAddress } from '../config';
import { useSelector,useDispatch } from 'react-redux';
import { Bid, initWeb3 } from '../state/ui';
import Loader from './loader/index.js';
import 'font-awesome/css/font-awesome.min.css'; 

const containerstyle= {
	
  width: "100%",
	height: "100%",
	overflow: "hidden",
	position: "relative",
}



export default function Home() {
    const dispatch = useDispatch()
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(Abi,conAddress)
    const [_name,setName] = useState()
    const [address,setAddress] = useState()
   
    const [selected,setSelected] = useState(0)
    
    let navigate = useNavigate();  

    const toggle = useSelector((state) => {
       
      return state.adoptReducer.toggle;
    });


    const price = useSelector((state) => {
       
      return state.adoptReducer.Price;
    });


    const gameNumber = useSelector((state) => {
       
      return state.adoptReducer.gameNumber;
    });

    useEffect(()=>{
        dispatch(initWeb3({}))
        web3.eth.getAccounts((e,r)=>{setAddress(r[0])})
   
    },[])
    



    window.ethereum.on('accountsChanged', function (accounts) {
        window.location.reload()
      })

   
    async function handleSubmit(e){
      
      console.log("Game number called",gameNumber)
        e.preventDefault()    
        setName()
        var priceL = price? price : web3.utils.toWei("0.01","ether")

		
        try {
            contract.methods.Enter(gameNumber).send({from:address,value:priceL}).on("confirmation",(e,r)=>{
              navigate(`/game/${gameNumber}`, { replace: true });
            })
        } catch (error) {
            console.log("error",error)
        }
    }

    
    const addressA = useSelector((state) => {
       
        return state.adoptReducer.address;
      });

      console.log("toggle",toggle)
  

    return (
    <div>
      {(!toggle || !gameNumber)&& <Loader></Loader>}
      <div  style={containerstyle}>
       <div style={{height:"100vh"}}></div>
       <img
      //  style={background}
         className="background"
      //  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/sky.jpg"
      /> 
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
      <div className="circle-container">
        <div className="circle"></div>
      </div>
    </div>

    <div className="content main-page" style={{textAlign: "center", position:"absolute",top:110,left:0,right:0}}>
    <img src={logo1} alt="logo" width="200"/>

       {/* <h1 className="header">ZERONE</h1> */}
       <form onSubmit={handleSubmit} id="joinForm">
      {/* <input
        style={{width:"200px"}}
        type="text"
        value={_name}
        onChange={(e)=>{setName(e.target.value)}}
        name="username"
        id="username"
        placeholder="CHOOSE USERNAME"
 //       autoComplete="off"
      /> */}
      <br />


      <button id="submitBtn" type="submit">Enter Match</button>
    </form>

    <h2 className="heading">Sound</h2>
    <h2>
      <i
        className="fa fa-volume-up"
        style={{border: "1px solid grey",
          color: "#fff",
          padding: "5px",
          borderRadius: "5px",
          width: "40px",
          margin: "0px"}}
          
        
        aria-hidden="true"
      ></i>
      <i
      
        className="fa fa-volume-off"
        style={{border: "1px solid grey",
        padding: "5px",
        color: "#fff",
        borderRadius: "5px",
        width: "40px",
        margin: "0px"}}
        aria-hidden="true"
      ></i>
    </h2>
    </div>




    
    
  </div>
  )
}
