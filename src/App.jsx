import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Login from './components/Login'
import Home from './components/Home'
import Details from "./components/Details";
import './App.css';

function App() {
return (
	<div className="">
	<NavBar />
	<Routes>
		<Route path='/' element={<Login />}/>
		<Route path='/home' element={<Home/>}/>
		<Route path="/detail/:id" element={<Details />} />
	</Routes>
	</div>
);
}

export default App;
