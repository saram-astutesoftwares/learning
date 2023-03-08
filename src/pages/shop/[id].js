import { BASE_URL } from '@/constants'
import axios from 'axios'
import React from 'react'

export const getServerSideProps = async (context) => {
    console.log(BASE_URL+"api/product/listing/"+context.params.id)
    try{
        const result = await axios.get(BASE_URL+"api/product/listing/"+context.params.id)
        console.log("saram")
        return {
            props: {
                data: result.data.payload,
                description: result.data.description,
                error: null
            }
        }
    }
    catch(e){
        return {
            props: {
                data: null,
                description: e.response ? JSON.stringify(e.response.data.description) : "Network Error",
                error: true
            }
        }
    }
}

const ProductDetail = ({data}) => {
  return (
    <div>ProductDetail</div>
  )
}

export default ProductDetail