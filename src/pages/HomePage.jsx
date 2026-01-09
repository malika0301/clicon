import React from 'react'
import useGet from '../hooks/useGet'
import Card from '../components/Card';

const HomePage = () => {

  const { data } = useGet({ url: "products" });
  const products = data?.data?.products;
  const initialProducts = products?.slice(products?.length - 30, products?.length - 22);
  const lastProducts = products?.slice(products?.length - 22, products?.length - 13);
  return (
    <section>
      <div className='container mx-auto px-6'>
        <div className='mb-5 grid grid-cols-2 gap-5 items-center justify-center'>
          <div>
            {lastProducts?.[0] && (
              <div className='h-[400px]'>
                <Card el={lastProducts[0]} />
              </div>
            )}
          </div>
          <div>
            <div className='grid grid-cols-4 gap-5'>
              {lastProducts?.slice(1)?.map((el) => (
                <Card el={el} key={el.id} />
              ))}
            </div>
          </div>
        </div>


        <a className='text-[24px] text-blue-600 py-7 text-center'>All products -></a>
        <div className='grid grid-cols-4 gap-5 mt-3'>
          {initialProducts?.map((el) => (
            <Card el={el} />
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomePage