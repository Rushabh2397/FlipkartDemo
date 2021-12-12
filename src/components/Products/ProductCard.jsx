import { Box, Button } from "@mui/material"
import {useCart} from '../../context/CartContext'





const ProductCard = ({id,prodImg,name,price,discount}) => {

    const {cart,dispatchCart} = useCart()

    const addToCart = ()=>{
        console.log("id",id,cart)
        let productsPresentInCart = cart.cart.map((prod)=>prod.id);
        if(productsPresentInCart.includes(id)){
            return alert('Product is already added.')
        }
        let product ={
            "id": id,
            "title": name,
            "price": price,
            "image": prodImg,
            "discount":discount,
            "qty":1
        }
        dispatchCart({type:'ADD_TO_CART',payload:product})
        dispatchCart({type:'GET_CART_DETAIL',payload:{price:price,add:true}})
    }

    return (
        <Box
        sx={{
            display: 'flex',
            width: "300px",
            alignItems: "center",
            flexDirection: "column",
            // border:"1px solid black"
        }}
    >
        <Box
            sx={{
                width: "280px"
            }}
        >
            {/* <img src="https://rukminim1.flixcart.com/image/581/697/kp5sya80/fabric/l/j/x/no-unstitched-best-seller-new-shirt-fabric-36-wopno-original-imag3gkytyhtnqyd.jpeg?q=50" /> */}
            <img src={prodImg} alt="collection" style={{height:"350px"}} />
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
                        marginLeft:'5px',
                        color:'#878787',
                        textDecoration:'line-through',
                        fontSize:'15px'
                    }}
                >
                    ₹ 1000
                </Box>
                <Box
                    sx={{
                        display: 'inline-block',
                        marginLeft:'5px',
                        color:'#388e3c',
                        fontSize:'14px',
                        fontWeight:'500'
                    }}
                >
                    {discount} % off
                </Box>

            </Box>
        </Box>
        <Box sx={{marginTop:"0.5rem",marginBottom:"0.5rem"}}>
            <Button variant="contained"  sx={{padding:"0.8rem 3rem"}} onClick={addToCart}>
                Add To Cart
            </Button>
        </Box>

    </Box>
    )
}

export default ProductCard