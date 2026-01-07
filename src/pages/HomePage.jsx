import React from 'react'
import useGet from '../hooks/useGet'
import Card from '../components/Card';

const HomePage = () => {

  const { data } = useGet({ url: "products" });
  const products = data?.data?.products;
  const initialProducts = products?.slice(products?.length - 30, products?.length - 22)




  return (
    <section>
      <div className='container mx-auto px-5 '>
        <div className='grid grid-cols-4 gap-5'>
          {initialProducts?.map((el) => (
            <Card el={el} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomePage