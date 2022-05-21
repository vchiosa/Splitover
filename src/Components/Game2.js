import React, { useEffect, useState } from 'react'
import logo1 from "../Images/logo1.png"
import Web3 from 'web3';
import { useSelector,useDispatch } from 'react-redux';
import {  initWeb3, Bid, AddNum } from '../state/ui';
import { Abi, conAddress, NumberofPart } from '../config';
import { useNavigate ,useLocation, useParams} from "react-router-dom";
import Loader from './loader';
import Timer from "./Timer.js"
import "./animation.css"
import { current } from '@reduxjs/toolkit';
const containerstyle= {
	
  width: "100%",
	height: "100%",
	overflow: "hidden",
	position: "relative",
}

export default function Game2() {
  const {referrer} = useParams()
  const location = useLocation();
  const [selected,setSelected]= useState(0)
  const [extendedTime,setExtendedTime]= useState()
    let navigate = useNavigate();
    var array3 =["fill","fill","fill","fill","fill","fill","fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
    ,"fill"
  ]  
    var array2 = [
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
        {user:null,number:null,fillA:"fill"},
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
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null},
        // {user:null,number:null}
    ]
    const dispatch = useDispatch()
    const web3 = new Web3(Web3.givenProvider)
    const contract = new web3.eth.Contract(Abi,conAddress)
  

    const [toggle,setToggle] = useState()
    const [array,setArray] = useState()
    const [address,setAddress] = useState()
    const [seconds,setSeconds] = useState(0)
    const [winnerArray,setWinnerArray] = useState()

    // useEffect(()=>{
    //     dispatch(initWeb3({}))
    // },[])

    var interval;

    useEffect(() => {
      var counter =0
        // web3.eth.getAccounts((e,add)=>{
        //     const blockNumber = web3.eth.getBlockNumber((e,r)=>{
        //         contract.getPastEvents('Winner',{
        //             fromBlock: r-20,
        //               toBlock:'latest'
        //           },(err,result)=>{
                      
        //             console.log("result",result)
        //             console.log("address",add[0])
        //               if(result.length>=1){
        //                   if(result[0].returnValues[0].indexOf(add[0])>=0){
        
        //                       navigate("/success", { replace: true });
        //                   }else{
        //                       navigate("/failure", { replace: true });
        //                   }
        //               }
          
        //           })
        //      })
        // })

        web3.eth.getAccounts((e,a)=>{
          setAddress(a[0])
          
          contract.methods.getgameWinnersArray(referrer).call((e,r)=>{

//            setWinnerArray(r)
            if(r.length==1){
              navigate("/success", { replace: true });
              clearInterval(interval) 
            }else if(r.length>1){
              if(r.indexOf(a[0])>=0){
                navigate(`/game3/${referrer}`, { replace: true });
                clearInterval(interval)
              }else{
                navigate("/failure", { replace: true });
                clearInterval(interval)
              }
            }else if(r.length>1 && r.length%2==0){
              navigate("/success", { replace: true });
              clearInterval(interval)
            }
          
          })
        })



        contract.methods.getgameArray(referrer).call((e,r)=>{
          setArray(r)
        }) 


        

      
         interval = setInterval(() => {
          setToggle(!toggle)

        }, 5000);
      
      
      
      return ()=>{clearInterval(interval)}
      }, [toggle])




    // const array = useSelector((state) => {
       
    //     return state.adoptReducer.array;
    //   });


      // const address = useSelector((state) => {
       
      //   return state.adoptReducer.address;
      // });



    array && address && array.map((v,e)=>{
      array2[e]=v 
      if(v.user==address){
        array3[e]="other-fill"
       }   
   
    })


    window.ethereum.on('accountsChanged', function (accounts) {
      window.location.reload()
    })

    async function handleSubmit(num){
      clearInterval(interval)
      try {
        contract.methods.selectNumber(num,referrer).send({from:address});
        
    } catch (error) {
        console.log("error",error)
    }     

   
   }
    


   useEffect(()=>{
     var currentTime = new Date().getTime()/1000
     console.log("extended time",currentTime)
    setExtendedTime(currentTime+90)
   },[])



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

    <div className="content main-page" style={{textAlign: "center", position:"absolute",top:0,left:0,right:0}}>
      {/* {!array  && <Loader></Loader>} */}

    <img src={logo1} alt="logo" width="200"/>
    {/* <div className="btn-wrap">
          <button
            className="button button--pan"
            id="stopBtn"
            onClick={()=>{}}
          >
            <span>Stop</span>
          </button>
         
        </div> */}
    <div className='container_row' >
      <div className='row' >
        {array3.map((v,e)=>{
 
          return(
          <div key={e} className='col-4'style={{width:"5%", marginTop:"30px"}}>
          <div className={`frame ${v}`}>
            <div id="glow">
              {array2[e].number}
            </div>

          </div>

        </div>)
          
})}
        

       </div>
    </div>

    <div className="nums-wrap">
          {/* <div id="count_down_" className="count_down_">
            <svg viewBox="-50 -50 100 100" strokeWidth="10">
              <circle r="45"></circle>
              <circle
                r="45"
                strokeDasharray="282.7433388230814"
                strokeDashoffset="282.7433388230814px"
              ></circle>
            </svg>
          </div> */}
          <Timer handleSubmit={handleSubmit} stakeTime={extendedTime}/>
          <p style={{textAlign: "center"}} id="countDown"></p>
          <button
            onClick={()=>{handleSubmit(0)}}
            className="bigball"
            id="numberZero"
            style={selected==0?{backgroundColor:"white", color:"black"}:{backgroundColor:"black",color:"white"}}
          >
            0
          </button>
          <button
          onClick={()=>{handleSubmit(1)}}
          style={selected==1?{backgroundColor:"white", color:"black"}:{backgroundColor:"black",color:"white"}}
           className="bigball adjust-right" id="numberOne">1</button>
        </div>


    <div className="gameContainer" id="gameContainer"  >
      
      


    </div>
  </div>
      </div>

    
  )
}
