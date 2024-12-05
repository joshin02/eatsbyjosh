import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from "./components/HomePage";
import About from "./components/AboutPage"
import Recipes from "./components/RecipesPage"
import Reviews from "./components/ReviewsPage"
import Footer from './components/Footer';

import BlogPostPage from './components/BlogPostPage';
import ReviewPostPage from './components/ReviewPostPage';
import RecipePostPage from './components/RecipePostPage';


function App() {
  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Recipes" element={<Recipes/>}/>
        <Route path="/Reviews" element={<Reviews/>}/>
        <Route path="/blog/:id" element={<BlogPostPage />} />
        <Route path="/Reviews/:id" element={<ReviewPostPage />} />
        <Route path="/Recipes/:id" element={<RecipePostPage />} />
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
