import './App.css';
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import Navbar from "./components/Navbar";

function App() {
  return (
    <main >
           {/* 
         <Navbar /> 
     */}
      <Navbar />
      <SignInPage />  
      <SignUpPage />     
    </main>
  );
}

export default App;
