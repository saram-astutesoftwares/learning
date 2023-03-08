import { BASE_URL } from '@/constants';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Item from './Item';

const Shop = () => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            setError(false);
            try{
                const result = await axios.get(BASE_URL+"api/product/listing?offset=0&limit=12&category-id=&search=")
                setData(result.data.payload);
                console.log("SARAM DON")
                setLoading(false)
            } catch(e){
                if(e.response){
                    setError(JSON.stringify(e.response.data.description))
                } else{
                    setError("Network Error");
                }
            }
        }

        getData();
    }, [])

  return (
    <div className='grid grid-cols-4 gap-5'>
        {
            data.map((item, index) => {
                return <Item data={item} key={index} />
            })
        }
    </div>
  )
}

export default Shop