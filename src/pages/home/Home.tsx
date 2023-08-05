import { FaReact } from 'react-icons/fa';
import {
  SiVite,
  SiVitest,
  SiTestinglibrary,
  SiTypescript,
} from 'react-icons/si';

const Home = () => {
  return (
    <div className='flex flex-col justify-evenly h-[100vh]'>
      <div className='bg-white p-5 mx-auto w-2/3 '>
        <h1 className='text-3xl text-center m-3'>
          ¡Bienvenido a nuestro Boilerplate con
          <span className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-500  '>
            Vite
          </span>
          ,<span className='text-blue-800 text-4xl'> TypeScript</span> y{' '}
          <span className='text-blue-500 text-4xl'> React</span>!
        </h1>
        <hr />
        <p className='mt-3'>
          Nuestro Boilerplate es una base de código preconfigurada que te
          permitirá comenzar rápidamente con tu proyecto en React utilizando las
          últimas tecnologías de desarrollo web.
        </p>
        <p className='mt-3'>
          Hemos integrado Vite como nuestro bundler, lo que significa que
          disfrutarás de una experiencia de desarrollo ultra rápida y eficiente.
          Con TypeScript, tendrás la ventaja de un sistema de tipos sólido que
          te ayudará a detectar errores temprano y a mantener tu código más
          robusto y escalable.
        </p>
        <p className='mt-3'>
          {' '}
          Así que, si estás buscando una forma sencilla y potente de iniciar tu
          proyecto React, nuestro Boilerplate es la opción perfecta. ¡Comienza a
          construir tus ideas de manera ágil y con confianza hoy mismo!
        </p>
      </div>
      <div className='flex flex-wrap justify-center gap-10 sm:mt-20 mt-10'>
        <div className='text-center'>
          <FaReact className='text-9xl text-blue-400 m-2' />
          <label className='text-xl text-blue-400'>React</label>
        </div>
        <div className='text-center'>
          <SiVite className='text-9xl text-yellow-300 m-2' />
          <label className='text-xl text-yellow-300'>Vite</label>
        </div>
        <div className='text-center'>
          <SiVitest className='text-9xl text-green-700 m-2' />
          <label className='text-xl text-green-700'>Vitest</label>
        </div>
        <div className='text-center'>
          <SiTestinglibrary className='text-9xl text-red-500 m-2' />
          <label className='text-xl text-red-500'>Testing Library</label>
        </div>
        <div className='text-center'>
          <SiTypescript className='text-9xl text-blue-700 m-2' />
          <label className='text-xl text-blue-700'>Typescript</label>
        </div>
      </div>
    </div>
  );
};

export default Home;
