import { createContext, useContext, useReducer } from 'react'
import Products from '../components/Products/product.json'



const ProductContext = createContext();

const filterOperation = (filterObj) => {
    let filterdProducts = [...Products]

    if (filterObj['sizes'].length !== 0) {
        console.log(filterdProducts.filter(prod => prod.sizeAvailable.some(ele => filterObj['sizes'].includes(ele))))
        filterdProducts = filterdProducts.filter(prod => prod.sizeAvailable.some(ele => filterObj['sizes'].includes(ele)))

    }

    if (filterObj['brands'].length !== 0) {
        filterdProducts = filterdProducts.filter(prod => filterObj['brands'].includes(prod.brand))
    }

    if (filterObj['ideal'].length !== 0) {
        filterdProducts = filterdProducts.filter(prod => prod.idealFor.some(ele => filterObj['ideal'].includes(ele)))

    }


    return filterdProducts
}

const productReducer = (state, action) => {
    switch (action.type) {
        case 'SET_PRODUCT':
            return {
                product: action.payload,

            }

        case 'HIGH-TO-LOW':

            return {
                product: state.product.sort((a, b) => b.priceAfterDiscount - a.priceAfterDiscount)
            }

        case 'LOW-TO-HIGH':

            return {
                product: state.product.sort((a, b) => a.priceAfterDiscount - b.priceAfterDiscount)
            }


        case 'FILTER':
            let filteredProd = filterOperation(action.payload)
            return {
                product: filteredProd
            }
        case 'CLEAR_ALL':
        return {
                product: Products
            }

        default:
            return state

    }
}

let intialState = {
    product: []
}

export const ProductProvider = ({ children }) => {


    const [state, dispatch] = useReducer(productReducer, intialState)

    return (
        <>
            <ProductContext.Provider value={{ products: state, dispatchProduct: dispatch }}>
                {children}
            </ProductContext.Provider>
        </>)
}

export const useProduct = () => {
    return useContext(ProductContext)
}