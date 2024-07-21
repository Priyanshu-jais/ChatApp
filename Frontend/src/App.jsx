
// import './App.css'
import { Login } from "./pages/login/Login";
import Signup from "./pages/signup/Signup";
import { Home } from "./pages/home/Home";

function App() {
 
  return (
    <div>
      <div
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.2),rgba(0,0,0,0.2)), url('/bg1.jpg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          height: "100vh",
        }}
        className="p-4 h-screen flex items-center justify-center"
      >
      
        <Home/>
      </div>
    </div>
  );
}

export default App
