import { Grid } from "@mui/material"
import Product from '../components/Products/Product'

const Home = () => {
    return (
        <Grid container spacing={10} alignItems="center" justifyContent="center">
            {/* <Grid item xs={12}>
               <Header/>
            </Grid> */}
            {/* <Grid item container xs={12} alignItems="center" justifyContent="center"> */}
                <Grid item xs={11} >
                    <Product/>
                </Grid>

            {/* </Grid> */}

        </Grid>
    )


}

export default Home