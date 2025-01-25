import Home from '@/pages/home/Home';
import JobDataProvider from '@/providers/JobDataProvider';



const MainLayout = () => {
    return <JobDataProvider>
           <Home/>
    </JobDataProvider>
    
};

export default MainLayout;