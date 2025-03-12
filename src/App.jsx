import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/login/Login"
import Register from "./pages/auth/register/Register"
import ProtectedRoute from "./routes/ProtectedRoute"
import MainLayout from "./layout/MainLayout"
import FeatureJobDetails from "./pages/featureJobs/FeatureJobDetails"
import JobDataProvider from "./providers/JobDataProvider"
import AllJobs from "./pages/allJobs/AllJobs"
import AdminLogin from "./pages/admin/AdminLogin"
import AdminDashboard from "./pages/admin/AdminDashboard"
import AdminProtectedRoute from "./routes/AdminProtectedRoute"
import Header from "./pages/header/Header"
import Footer from "./pages/footer/Footer"
import UserDashboard from "./pages/User/UserDashboard"


function App() {
 
  return (
    <JobDataProvider>
      <Routes>
        <Route path="/" element={<MainLayout/>} exact />
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={<Register/>} />
        <Route 
        path="/:id" element={<ProtectedRoute>
          <Header/>
          <FeatureJobDetails/>
          <Footer/>
        </ProtectedRoute>} />
        <Route 
        path="/alljobs" element={<ProtectedRoute>
          <Header/>
          <AllJobs/>
          <Footer/>
        </ProtectedRoute>} />

        <Route 
        path="/admin-login"  element={<AdminLogin/>} />
        <Route 
        path="/admin-dashboard" element={<AdminProtectedRoute>
          <Header/>
          <AdminDashboard/>
          <Footer/>
        </AdminProtectedRoute>} />
     
        <Route 
        path="/user-dashboard" element={<ProtectedRoute>
          <Header/>
           <UserDashboard/>
          <Footer/>
        </ProtectedRoute>} />

    </Routes>

    </JobDataProvider>
    
  )
}

export default App
