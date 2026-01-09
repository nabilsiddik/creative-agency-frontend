import heroBg from '../../assets/img/hero-background.jpg'
import MotionSlideUp from '../animations/MotionSlideUp'
import Button from '../Button'

const HeroSection = () => {
  return (
    <div style={{
      backgroundImage: `url(${heroBg})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }} className='relative z-1'>
      <div className='flex items-center justify-center min-h-screen'>
        <div className='absolute -right-40 top-1/2 -rotate-90 flex gap-20'>
          <p >+8801957282230</p>
          <p >nabilsiddik90@gmail.com</p>
        </div>


        <MotionSlideUp>
          <div className='text-center'>
            <h2 className='text-6xl md:text-7xl lg:text-9xl font-bold'>Develop</h2>
            <div className='flex flex-col xl:flex-row items-center gap-8 my-5'>
              <h2 className='text-6xl md:text-7xl lg:text-9xl font-bold'>the Digital</h2>
              <p className='text-lg lg:text-xl max-w-md text-center lg:text-left'>With every single one of our clients, we bring forth a deep passion for creative problem solving — which is what we deliver.</p>
            </div>
            <h2 className='text-6xl md:text-7xl lg:text-9xl font-bold'>Universe</h2>
          </div>
        </MotionSlideUp>
      </div>

      <div className='absolute bottom-14 left-10'>
        <Button>Get In Touch</Button>
      </div>
    </div>
  )
}

export default HeroSection
