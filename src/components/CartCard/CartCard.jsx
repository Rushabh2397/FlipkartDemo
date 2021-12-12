
import {Box, Button } from "@mui/material"
import { useCart } from '../../context/CartContext'





const CartCard = ({ id, prodImg, name, price, discount, qty }) => {

    const { dispatchCart } = useCart()

    const removeFromCart = (prodQty) => {
        prodQty = parseInt(prodQty)
        dispatchCart({ type: 'REMOVE_FROM_CART', payload: id })
        dispatchCart({ type: 'GET_CART_DETAIL', payload: { price:parseInt(price*prodQty) , add: false } })
    }

    

    const decreaseQty = (prodQty)=>{

        if(prodQty>1){
            dispatchCart({ type: 'DECREASE_QTY', payload: id })
            dispatchCart({ type: 'GET_CART_DETAIL', payload: { price: price, add: false } })
        }else{
            removeFromCart()
        }

    }

    const addQty = () => {
        dispatchCart({ type: 'INCREASE_QTY', payload: id })
        dispatchCart({ type: 'GET_CART_DETAIL', payload: { price: price, add: true } })

    }

    return (
        <Box
            sx={{
                display: 'flex',
                width: "300px",
                alignItems: "center",
                flexDirection: "column",
                // border: "1px solid black"
            }}
        >
            <Box
                sx={{
                    width: "280px"
                }}
            >
                {/* <img src="https://rukminim1.flixcart.com/image/581/697/kp5sya80/fabric/l/j/x/no-unstitched-best-seller-new-shirt-fabric-36-wopno-original-imag3gkytyhtnqyd.jpeg?q=50" /> */}
                <img src={prodImg} alt="collection" style={{ height: "350px" }} />
            </Box>
            <Box
                sx={{
                    width: "250px"

                }}
            >
                <Box
                    sx={{
                        width: "220px",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        overflow: 'hidden'
                    }}
                >
                    {name}
                </Box>
                <Box
                    sx={{
                        padding: '5px 0'
                    }}
                >
                    <Box
                        sx={{
                            display: 'inline-block'
                        }}
                    >
                        ₹ {price}
                    </Box>
                    <Box
                        sx={{
                            display: 'inline-block',
                            marginLeft: '5px',
                            color: '#878787',
                            textDecoration: 'line-through',
                            fontSize: '15px'
                        }}
                    >
                        ₹ {price + parseInt((price*(discount/100)))}
                </Box>
                    <Box
                        sx={{
                            display: 'inline-block',
                            marginLeft: '5px',
                            color: '#388e3c',
                            fontSize: '14px',
                            fontWeight: '500'
                        }}
                    >
                        {discount} % off
                </Box>

                </Box>
                <Box>
                    <span style={{ fontSize: "1rem", marginRight: "0.5rem", cursor: 'pointer' }} onClick={addQty}>+</span>
                    {qty}
                    <span style={{ marginLeft: "0.5rem", cursor: 'pointer' }} onClick={() => { decreaseQty( qty) }}>-</span>
                </Box>
                <Box sx={{ marginTop: "0.5rem", marginBottom: "0.5rem" }}>
                    <Button variant="contained" sx={{ padding: "0.8rem 3rem" }} onClick={()=>{removeFromCart(qty)}}>
                        Remove Prod
            </Button>
                </Box>
            </Box>


        </Box>
    )
}

export default CartCard