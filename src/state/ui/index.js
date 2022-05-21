import Web3 from 'web3'
import { Abi,conAddress } from '../../config';
import { useNavigate } from "react-router-dom";
const { createSlice, createAsyncThunk } = require("@reduxjs/toolkit");



//let navigate = useNavigate();
var web3;
var RonContract
var address
var price
var gameNumber
export const initWeb3 = createAsyncThunk(
    "InitWeb3",
    async(a,thunkApi)=>{
    
        console.log("init web3 called")
        try {
            if(Web3.givenProvider){ 
                web3 = new Web3(Web3.givenProvider);
			
                await Web3.givenProvider.enable()
                const networkId = await web3.eth.net.getId()
				const SeekGoldAddress = conAddress

				var contract = new web3.eth.Contract(Abi, SeekGoldAddress);

				RonContract = contract;
                const addresses = await web3.eth.getAccounts()
                address = addresses[0];
				var ethBalance = await web3.eth.getBalance(address)
				
                thunkApi.dispatch(balance({
                    contract: RonContract,
                    address: address,


                }))
				return {
                    web3,
                    contract,
                    address,
					SeekGoldAddress,
					ethBalance,
                                                       }
            }else {console.log("error in loading web3")
					return {web3:null,contract:null,address:null,SeekGoldAddress:null}}
        } catch (error) {
            console.log("Error", error)
        }

    }
)



export const balance = createAsyncThunk("balance",
    async ({contract,address})=>{

		
        try {

			price = await RonContract.methods.gamePrice().call()
            gameNumber = await RonContract.methods.gameNumber().call()
            const array = await RonContract.methods.getgameArray(gameNumber).call()


            return {array,price,gameNumber}

        } catch (error) {
            console.log("Error in ArrayThunk",error)
        }
    }
    )


	export const Bid = createAsyncThunk("Mint",
    async ({})=>{

        var priceL = price? price : web3.utils.toWei("0.01","ethers")

		
        try {
            RonContract.methods.Enter(gameNumber).send({from:address,value:priceL}).on("confirmation",(e,r)=>{
            window.location.assign("/game");
            })
        } catch (error) {
            console.log("error",error)
        }
    }
    )


    export const AddNum = createAsyncThunk("addnumber",
    async ({selected})=>{


        console.log("game ",gameNumber)
		
        try {
            RonContract.methods.selectNumber(selected,gameNumber).send({from:address});
            
        } catch (error) {
            console.log("error",error)
        }
    }
    )







const adoptSlice = createSlice({
    name: "AdopSlice",
    initialState: {
        web3: null,
		ethBalance: null,
        address : null,
        array: null,
		Price: null,
		Active: null,
        toggle: false,
		remaining: null,
        gameNumber: undefined,



    },
    reducers: {
        toggle : (state,actions)=>{
            state.toggle = !state.toggle;
        },
		setAccount: (state,actions)=>{
			state.address = actions.payload
		}
    },
    extraReducers: {
        [initWeb3.fulfilled] : (state,action)=>{
            state.web3 = action.payload.web3;
            state.address = action.payload.address;
			state.ethBalance = action.payload.ethBalance;
            



         },

         [balance.fulfilled] : (state,action)=>{
            state.array = action.payload.array
			state.Price = action.payload.price
            state.gameNumber= action.payload.gameNumber
            state.toggle = true;

		
            },


		

       
        [Bid.pending] : (state,action)=>{
			

            state.toggle = false;
			state.error = null;
        },
        [Bid.fulfilled] : (state,action)=>{
			
            state.toggle = true;
			state.error = action.payload;

        },


        [AddNum.pending] : (state,action)=>{
			

            state.toggle = !state.toggle;
			state.error = null;
        },
        [AddNum.fulfilled] : (state,action)=>{
			
            state.toggle = !state.toggle;
			state.error = action.payload;

        },



       
//
    }
})

export const adopreducer = adoptSlice.reducer;
export const { toggle } = adoptSlice.actions
