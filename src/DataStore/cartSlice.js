import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    cartItems:{}
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        removeAll: (state, action) =>{
            state.cartItems = {};
        },
        addToCart: (state, action) =>{
            const {id, name, price, imageSrc} = action.payload;
            console.log(action.payload);
            console.log(initialState.cartItems)
            if(state.cartItems[id]){
                state.cartItems[id].quantity++;
            }else{
                state.cartItems[id] = {id, name, price, imageSrc, quantity: 1};
            }
        },
        removeFromCart: (state, action)=>{
            const {id} = action.payload;
            delete state.cartItems[id];
        },
        reduceQuantity: (state, action)=>{
            const {id} = action.payload;
            if(state.cartItems[id].quantity === 1){
                delete state.cartItems[id];
            }else{
                state.cartItems[id].quantity--;
            }
        },
        increaseQuantity: (state, action) =>{
            const {id} = action.payload;
            state.cartItems[id].quantity++;
        }
    }
})

export const {removeAll, addToCart, removeFromCart, reduceQuantity, increaseQuantity} = cartSlice.actions;
export default cartSlice.reducer;