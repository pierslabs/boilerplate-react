import Navbar from '../navbar/Navbar';

export interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='h-[100vh] w-[100vw]'>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
