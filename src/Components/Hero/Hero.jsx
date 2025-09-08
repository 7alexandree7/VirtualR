import video1 from '../../Assets/video1.mp4'
import video2 from '../../Assets/video2.mp4'

const Hero = () => {
    return (
        <section className='flex flex-col w-full items-center mt-6 lg:mt-20'>
            <h1 className='text-4xl sm:text-6xl lg:text-7xl font-bold text-center leading-wide'>
                VirtualR build tools
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-800'>
                    {" "} for<br /> developers</span>
            </h1>

            <p className='mt-10 text-center text-neutral-500 text-lg max-w-4xl'>
                Empower your creativity and bring your VR app ideas to life with our
                intuitive development tools. Get started today and turn your imagination
                into immersive reality!
            </p>

            <div className='flex justify-center my-10 gap-6'>
                <a className='bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-4 rounded-md' href="#">Start for free</a>
                <a className='py-3 px-4 rounded-md border' href="#">Documentation</a>
            </div>

            <div className='flex justify-center mt-10'>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange mx-2 my-4' src={video1}></video>
                <video autoPlay loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange mx-2 my-4' src={video2}></video>
            </div>
        </section>
    )
}

export default Hero
