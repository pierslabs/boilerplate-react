import { FaReact } from 'react-icons/fa';
import { SiVite, SiTestinglibrary, SiTypescript } from 'react-icons/si';
import { Link } from 'react-router-dom';

const TechnologyIcons = () => {
  return (
    <div className='flex flex-wrap justify-center items-baseline gap-4'>
      <div className='text-center'>
        <Link to='https://reactjs.org'>
          <FaReact className='text-9xl text-blue-400 m-2' />
          <label className='text-xl text-blue-400'>React</label>
        </Link>
      </div>
      <div className='text-center'>
        <Link to='https://vitejs.dev'>
          <SiVite className='text-9xl text-yellow-300 m-2' />
          <label className='text-xl text-yellow-300'>Vite</label>
        </Link>
      </div>
      <div className='text-center'>
        <Link to='https://vitest.dev'>
          <img
            src='https://vitest.dev/logo-shadow.svg'
            alt='vitest'
            className='object-contain w-36 m-1'
          />
          <label className='text-xl text-green-700'>Vitest</label>
        </Link>
      </div>
      <div className='text-center'>
        <Link to='https://testing-library.com'>
          <SiTestinglibrary className='text-9xl text-red-500 m-2' />
          <label className='text-xl text-red-500'>Testing Library</label>
        </Link>
      </div>
      <div className='text-center'>
        <Link to='https://www.typescriptlang.org'>
          <SiTypescript className='text-9xl text-blue-700 m-2' />
          <label className='text-xl text-blue-700'>Typescript</label>
        </Link>
      </div>
    </div>
  );
};

export default TechnologyIcons;
