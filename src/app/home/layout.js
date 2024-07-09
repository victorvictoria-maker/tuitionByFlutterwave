import Navbar from "../components/navigation";
import Sidebar from "../components/sidebar";

// import { Metadata } from 'next';

export const metadata = {
  title: "Home ",
};

const HomeLayout = ({ children }) => {
  return (
    <div className='flex'>
      <Sidebar />
      <div className='flex-1 bg-[#eee]'>
        <div className='max-w-[90%] mx-auto'>
          <Navbar />
          <>{children}</>
        </div>
      </div>
    </div>
  );
};

export default HomeLayout;
