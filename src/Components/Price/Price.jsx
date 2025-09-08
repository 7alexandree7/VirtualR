import { pricingOptions } from '../../Const'
import { CheckCircle2 } from 'lucide-react'

const Price = () => {
  return (
    <section className='mt-20'>
      <h2 className='text-3xl sm:text-5xl lg:text-6xl mt-6 text-center tracking-wider my-8'>Pricing</h2>
      <div className='flex flex-wrap'>
        {pricingOptions.map((option, index) => (
          <div className='w-full sm:w-1/2 lg:w-1/3 p-4' key={index}>
            <div className='p-10 border border-neutral-700 rounded-xl'>
              <p className='text-4xl mb-8'>{option.title}
                {option.title === "Pro" && (
                  <span className='text-xl mb-4  ml-1 bg-gradient-to-r from-orange-500 to-orange-800 text-transparent bg-clip-text'> (Most popular)</span>
                )}
              </p>
              <div className='mb-8'>
                <span className='text-5xl mt-6 mr-2'>{option.price}</span>
                <span className='text-md text-neutral-400 tracking-tight'>/ month</span>
              </div>
              <ul>
                {option.features.map((feature, index) => (
                  <li className='flex items-center mt-8 gap-4' key={index}>
                    <CheckCircle2 />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
               className='w-full inline-flex justify-center items-center h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border
                border-orange-900 rounded-lg transition duration-300 ease-in-out'
               href="#">Subscribe</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Price
