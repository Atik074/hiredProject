import { Route, Routes } from "react-router-dom"
import Login from "./pages/auth/login/Login"
import Register from "./pages/auth/register/Register"
import Jobs from "./pages/Jobs/Jobs"
import ProtectedRoute from "./routes/ProtectedRoute"
import MainLayout from "./layout/MainLayout"


function App() {
 
  return (
    <Routes>
        <Route path="/" element={<MainLayout/>} exact />
        <Route path="/login" element={<Login/>}  />
        <Route path="/register" element={<Register/>} />
        <Route path="/jobs" element={<ProtectedRoute><Jobs/></ProtectedRoute>} />
    </Routes>
  )
}

export default App
