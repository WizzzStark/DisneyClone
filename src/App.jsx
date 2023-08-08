import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './components/Login'
import Home from './components/Home'
import './App.css';

function App() {
return (
	<div className="">
	<NavBar />
	<Routes>
		<Route path='/' element={<Login />}/>
		<Route path='/home' element={<Home/>}/>
	</Routes>
	</div>
);
}

export default App;
