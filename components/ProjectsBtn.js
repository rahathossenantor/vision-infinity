// next image
import Image from 'next/image';

// next link
 import Link from 'next/link';

 // icons
 import { HiArrowRight } from 'react-icons/hi2';

const ProjectsBtn = () => {
  return (
    <div className='mx-auto xl:mx-0 md:z-10 z-10'>
      <Link href={'/work'} className='relative w-[175px] h-[175px] flex justify-center items-center bg-circleStar bg-cover bg-center bg-no-repeat group:'>
        <img src={'/rounded-text.png'} width={121} height={128} alt='' className='animate-spin-slow w-full h-full max-w-[121px] max-h-[128px]'/>
        <HiArrowRight className='absolute text-4xl group-hover:translate-x-2 transition-all duration-300'/>
      </Link>
    </div>
  );
};

export default ProjectsBtn;