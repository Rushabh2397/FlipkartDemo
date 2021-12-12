import { Grid, Paper } from "@mui/material"
import ProductCard from './ProductCard'
import Products from './product.json'
import { useEffect } from "react"
import { useProduct } from '../../context/ProductContext'

const Product = () => {

    const { products, dispatchProduct } = useProduct()

    const getProducts = () => {
        dispatchProduct({ type: 'SET_PRODUCT', payload: Products })
    }

    useEffect(() => {
        getProducts()
        // eslint-disable-next-line
    }, [])
    return (
        <Grid container spacing={4} sx={{marginTop:"1rem"}}>

            {
                products.product.map((prod) => {

                    return <Grid item key={prod.id}>
                        <Paper>
                            <ProductCard id={prod.id} price={prod.price} name={prod.title} prodImg={prod.image} mrp={prod.price} discount={prod.discount} />
                        </Paper>
                    </Grid>

                })
            }

        </Grid>
    )
}

export default Product