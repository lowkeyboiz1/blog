export default function Home() {
  return (
    <>
      <HeroSection />
    </>
  )
}

const HeroSection = () => {
  return (
    <div className='relative h-[80vh]'>
      <div className='blur-3xl rounded-[50%] bg-blue-400/20 top-[-10%] absolute left-[-20%] h-1/2 w-1/2 aspect-square z-[-2] hidden lg:block' />
      <div className='blur-3xl rounded-[50%] bg-blue-400/20 absolute top-[20%] left-[8%] h-full w-full aspect-square z-[-2] hidden lg:block' />
      <div className='blur-3xl rounded-[50%] bg-violet-400/20 absolute-left-[10%] top-0 h-1/2 aspect-square w-fit z-[-2] hidden lg:block' />
      <div className='blur-3xl rounded-[50%] bg-[#F8A6F0]/50 absolute right-0 bottom-[20%] h-1/2 aspect-square w-fit z-[-2] hidden lg:block' />
      <div className='blur-3xl rounded-[50%] bg-orange-300/20 absolute right-[12%] -bottom-[15%] h-1/2 aspect-square w-fit z-[-2] hidden lg:block' />

      <div className='text-center mt-[50px]'>
        <h1 className='font-bold text-6xl'>
          Level Up Your
          <span className='bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent'>
            {' '}
            English{' '}
          </span>
          Skills
        </h1>
        <p className='text-lg text-primaryText max-w-[807px] mx-auto my-[30px]'>
          Whether you aspire to excel in foundational English skills, master language
          basics, or develop strong communication abilities, our introductory course is
          designed for you
        </p>
      </div>
    </div>
  )
}
