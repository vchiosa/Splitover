import React, { useEffect, useState } from 'react'
import logo1 from "../Images/logo1.png"
import Web3 from 'web3';
import { useSelector,useDispatch } from 'react-redux';
import { Bid, initWeb3 } from '../state/ui';

import { Abi, conAddress, NumberofPart } from '../config';
import { useNavigate, useLocation,useParams } from "react-router-dom";
import Loader from './loader';
import "./animation.css"
const containerstyle= {
	
  width: "100%",
	height: "100%",
	overflow: "hidden",
	position: "relative",
}

export default function Game(props) {
  const {referrer} = useParams()
  const location = useLocation();
  console.log("game 2",referrer)
  let navigate = useNavigate();  
    var array2 = [
        {user:null,number:null},
        {user:null,number:null},
        {user:null,number:null},
        {user:null,number:null},
        {user:null,number:null},
        {user:null,number:null},
        {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user  :null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null}
    ]
    const dispatch = useDispatch()
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(Abi,conAddress)
    const [address,setAddress] = useState()
    const [toggle,setToggle] = useState()

    useEffect(()=>{
        dispatch(initWeb3({}))
    },[])

    useEffect(() => {
        // web3.eth.getAccounts((e,add)=>{
        //     const blockNumber = web3.eth.getBlockNumber((e,r)=>{
        //         contract.getPastEvents('Winner',{
        //             fromBlock: r-20,
        //               toBlock:'latest'
        //           },(err,result)=>{
                      
        //             console.log("result",result)
        //             console.log("address",add[0])
        //               // if(result.length>=1){
        //               //     if(result[0].returnValues[0].indexOf(add[0])>=0){
        
        //               //         navigate("/success", { replace: true });
        //               //     }else{
        //               //         navigate("/failure", { replace: true });
        //               //     }
        //               // }
          
        //           })
        //      })
        // })
         
      contract.methods.getgameArray(referrer).call((e,r)=>{
        var counter = 0 
        
       if(r.length===NumberofPart && counter ===0){
        navigate(`/game2/${referrer}`, { replace: true });
        counter++
       }   
      })        
        

      
        var interval = setInterval(() => {
          setToggle(!toggle)
        }, 5000);
      
      
      
      return ()=>{clearInterval(interval)}
      }, [toggle])




    const array = useSelector((state) => {
       
        return state.adoptReducer.array;
      });



    array && array.map((v,e)=>{
        array2[e]=v
    })

    console.log("Array in Game",array)


    return (
      <div>
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
      {/* {!array  && <Loader></Loader>} */}

    <img src={logo1} alt="logo" width="200"/>
    <div className="searching" id="searchingContainer">
      <p>
        Waiting for minimum {NumberofPart} players to join the room and start the game...
      </p>
    </div>
    <div className="gameContainer" id="gameContainer"  >
      
      


    </div>
  </div>
      </div>

    
  )
}
