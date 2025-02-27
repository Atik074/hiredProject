import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/login/Login"
import Register from "./pages/auth/register/Register"
import ProtectedRoute from "./routes/ProtectedRoute"
import MainLayout from "./layout/MainLayout"
import FeatureJobDetails from "./pages/featureJobs/FeatureJobDetails"
import JobDataProvider from "./providers/JobDataProvider"
import AllJobs from "./pages/allJobs/AllJobs"
import PostJobs from "./pages/PostJobs/PostJobs"


function App() {
 
  return (
    <JobDataProvider>
      <Routes>
        <Route path="/" element={<MainLayout/>} exact />
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={<Register/>} />
        <Route 
        path="/:id" element={<ProtectedRoute><FeatureJobDetails/>
        </ProtectedRoute>} />
        <Route 
        path="/alljobs" element={<ProtectedRoute>
          <AllJobs/>
        </ProtectedRoute>} />
        <Route 
        path="/postjob" element={<ProtectedRoute>
          <PostJobs/>
        </ProtectedRoute>} />
    </Routes>

    </JobDataProvider>
    
  )
}

export default App
