import { Box, Grid, Paper, Typography } from '@mui/material'

import CartCard from '../components/CartCard/CartCard'
import { useCart } from '../context/CartContext'


const Cart = () => {

    const { cart } = useCart()
    


    return (
        <Grid container spacing={1} sx={{ marginTop: "1rem" }} >
            <Grid item container xs={8} spacing={3}>
                {

                    cart.cart.map((prod) => {

                        return <Grid item key={prod.name}>
                            <Paper>
                                <CartCard id={prod.id} qty={prod.qty} price={prod.price} name={prod.name} prodImg={prod.image} mrp={prod.price} discount={prod.discount} />
                            </Paper>
                        </Grid>

                    })
                }
            </Grid>
            <Grid item >
                <Paper sx={{ padding: "1rem", width: "250px", height: "180px" }}>
                    <Typography variant="h5">Price Details</Typography>
                    <hr></hr>
                    <Box sx={{ fontSize: "1.2rem", padding: "0.6rem" }}>
                        Total Items  : {cart.cart.length}

                    </Box>
                    <Box sx={{ fontSize: "1.2rem", padding: "0.6rem" }} >Total Amount : {cart.cart.length>0 ? cart.totalAmount:0}</Box>
                    <Box sx={{ fontSize: "1.2rem", padding: "0.6rem" }}>Delivery Charges : Free</Box>
                </Paper>

            </Grid>
        </Grid >

    )

}

export default Cart