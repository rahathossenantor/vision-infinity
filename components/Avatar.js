// next image
import Image from 'next/image'

const Avatar = () => {
  return <div className='hidden xl:flex xl:max-w-none'>
    {/* <Image src={'/character.png'} width={697} height={638} alt='' className='translate-z-0 w-full h-full'/> */}
    <Image src={'/avatar.png'} width={697} height={638} alt='' className='translate-z-0 w-full h-full'/>
  </div>;
};

export default Avatar;