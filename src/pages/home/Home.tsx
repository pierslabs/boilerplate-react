import TechnologyIcons from '../../components/technologyIcons/TechnologyIcons';
import Wellcome from '../../components/wellcome/Wellcome';

const Home = () => {
  return (
    <div
      className='flex flex-col justify-evenly items-center h-screen container mx-auto'
      style={{ height: 'calc(100vh - 60px)' }}
    >
      <Wellcome />
      <TechnologyIcons />
    </div>
  );
};

export default Home;
