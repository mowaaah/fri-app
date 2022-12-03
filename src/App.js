import './App.css';
import Navbar from './Navbar';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import BookList from "./pages/BookList";
import About from "./pages/About";
import Footer from "./components/Footer"


function App() {
  return (
		<div>
			<Navbar />
			<div>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/home" element={<Home />} />
					<Route path="/booklist" element={<BookList />} />
					<Route path="/about" element={<About />} />
				</Routes>
			</div>
			<Footer />
		</div>
	);
}

export default App;
