const Wellcome = () => {
  return (
    <div className='bg-white p-3 rounded-sm text-gray-800'>
      <h1 className='text-3xl text-center m-3'>
        ¡Bienvenido a nuestro Boilerplate con
        <span className='text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-blue-500 to-purple-500 ml-2 '>
          Vite
        </span>
        ,<span className='text-blue-800 text-4xl'> TypeScript</span> y
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
        Con TypeScript, tendrás la ventaja de un sistema de tipos sólido que te
        ayudará a detectar errores temprano y a mantener tu código más robusto y
        escalable.
      </p>
      <p className='mt-3'>
        {' '}
        Así que, si estás buscando una forma sencilla y potente de iniciar tu
        proyecto React, nuestro Boilerplate es la opción perfecta. ¡Comienza a
        construir tus ideas de manera ágil y con confianza hoy mismo!
      </p>
    </div>
  );
};

export default Wellcome;
