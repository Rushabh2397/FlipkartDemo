import { createContext, useContext, useReducer } from 'react'



const CartContext = createContext();



const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [action.payload,...state.cart],

            }

        case 'REMOVE_FROM_CART':
            let prod  = state.cart.filter((prod)=>prod.id===action.payload)
            console.log("prod",prod)
            return {
                totalAmount:parseInt(state.totalAmount)-parseInt(prod[0].price),
                cart: state.cart.filter((prod)=>prod.id!==action.payload)
            }

        case 'INCREASE_QTY':
            console.log("heereeeeee",action.payload )
            return {
                ...state,
                cart: state.cart.map(prod=>{
                    if(prod.id===action.payload){
                        prod.qty = parseInt(prod.qty) + 1;
                    }
                    return prod
                })
            }


        case 'DECREASE_QTY':
            return {
                ...state,
                cart: state.cart.map(prod=>{
                    if(prod.id===action.payload){
                        prod.qty = prod.qty-1;
                    }
                    return prod
                })
            }
        case 'GET_CART_DETAIL':
        return {
                totalAmount : action.payload.add ? state.totalAmount + action.payload.price :  state.totalAmount - action.payload.price ,
                cart: state.cart
            }

        default:
            return state

    }
}

let intialState = {
    cart:[],
    totalAmount:0
}

export const CartProvider = ({ children }) => {


    const [state, dispatch] = useReducer(cartReducer, intialState)

    return (
        <>
            <CartContext.Provider value={{ cart: state, dispatchCart: dispatch }}>
                {children}
            </CartContext.Provider>
        </>)
}

export const useCart = () => {
    return useContext(CartContext)
}