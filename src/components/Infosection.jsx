import React from 'react'
import { motion } from 'framer-motion';
const Infosection = () => {
  return (
    <motion.div 
      initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{
          type: 'spring',
          stiffness: 60,
          damping: 15,
          duration: 0.8
        }}
    >
     
 <section className='mt-20'>
        <h2 className='font-bold text-black text-[50px] mb-6 text-center'>Collection</h2>
  <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
      <div>
        <div className="max-w-lg md:max-w-none">
          <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
            Mercedes-Benz is a global icon of luxury, innovation, and performance. 
          </h2>

          <p className="mt-4 text-gray-700">
            Founded in 1926, the brand has continually set the standard in automotive excellence, blending cutting-edge technology with timeless design. Known for producing some of the world’s most prestigious vehicles, Mercedes-Benz offers a wide range of cars—from elegant sedans and powerful SUVs to high-performance sports cars and electric models under the EQ series.
          </p>
        </div>
      </div>

      <div>
        <img
          src="/info.jpg"
          className="rounded"
          alt=""
        />
      </div>
    </div>
  </div>
</section>

     
    </motion.div>
  )
}

export default Infosection
