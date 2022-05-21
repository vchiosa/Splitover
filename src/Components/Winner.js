import React, { useEffect, useState } from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import Web3 from "web3";
import { Abi, conAddress } from "../config";
import "./animation.css";
const containerstyle = {
  width: "100%",
  height: "100%",
  overflow: "hidden",
  position: "relative",
};

export default function Winner() {
  const web3 = new Web3(Web3.givenProvider);
  const contract = new web3.eth.Contract(Abi, conAddress);
  const [array, setArray] = useState([]);

  useEffect(() => {
    contract.methods.getgameWinnersArray(0).call((e, r) => {
      setArray(r);
    });
  }, []);

  let navigate = useNavigate();
  return (
    <div>
      <div style={containerstyle}>
        <div style={{ height: "100vh" }}></div>
        <img
          //  style={background}
          className="background"
          //     src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/221808/sky.jpg"
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
      <div
        className="content main-page"
        style={{
          textAlign: "center",
          position: "absolute",
          top: 110,
          left: 0,
          right: 0,
        }}
      >
        <h3 className="heading">Winner Announced</h3>

        <div className="win-wrap" style={{ color: "white" }}>
          Congratulations. You won. You have received Matic in your wallet.
          <div style={{ border: "1px solid red" }}>
            The winners are :
            {array &&
              array.map((v, e) => (
                <p>
                  {e + 1}: {`${v.slice(0, 4)}...${v.slice(-4)}`}
                </p>
              ))}
          </div>
          <div className="win-wrap">
            <button className="button button--kari">
              <span
                onClick={() => {
                  navigate("/", { replace: true });
                }}
              >
                Play Again
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
