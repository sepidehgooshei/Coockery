import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Page imports
import Dashboard from "../src/pages/Dashboard";

// import Recipe1 from "../src/pages/otherDishes/Recipe1";
import Recipe1 from "../src/pages/otherDishes/Recipe1"
import Recipe2 from "../src/pages/otherDishes/Recipe2";
import Recipe3 from "../src/pages/otherDishes/Recipe3";
import Recipe4 from "../src/pages/otherDishes/Recipe4";
import Recipe5 from "../src/pages/otherDishes/Recipe5";
import Recipe6 from "../src/pages/otherDishes/Recipe6";
import Recipe7 from "../src/pages/otherDishes/Recipe7";
import Recipe8 from "../src/pages/otherDishes/Recipe8";
import Recipe9 from "../src/pages/otherDishes/Recipe9";



import RiceWithMeat from "../src/pages/RiceWithMeat";

import Login from "../src/components/header/Login";
import Register from "../src/pages/Register";
import AppHeader from "./Header/AppHeader";
import RiceFood1 from "./pages/RiceFood/RiceFood1";
import RiceFood2 from "./pages/RiceFood/RiceFood2";
import RiceFood3 from "./pages/RiceFood/RiceFood3";
import RiceFood4 from "./pages/RiceFood/RiceFood4";
import RiceFood5 from "./pages/RiceFood/RiceFood5";
import RiceFood6 from "./pages/RiceFood/RiceFood6";
import OtherDishes from "../src/pages/otherDishes/OtherDishes";

function App() {
  return (
    <Router>
      <div className="App">
       <AppHeader/> 
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/recipe1" element={<Recipe1 />} />
        <Route path="/recipe2" element={<Recipe2 />} />
        <Route path="/recipe3" element={<Recipe3 />} />
        <Route path="/recipe4" element={<Recipe4 />} />
        <Route path="/recipe5" element={<Recipe5 />} />
        <Route path="/recipe6" element={<Recipe6 />} />
        <Route path="/recipe7" element={<Recipe7 />} />
        <Route path="/recipe8" element={<Recipe8 />} />
        <Route path="/recipe9" element={<Recipe9 />} />       
        <Route path="/RiceWithMeat" element={<RiceWithMeat />} />
        <Route path="/OtherDishes" element={<OtherDishes />} />
      <Route path="/RiceFood1" element={<RiceFood1/>}/>
         <Route path="/RiceFood2" element={<RiceFood2/>}/>
         <Route path="/RiceFood3" element={<RiceFood3/>}/>
        <Route path="/RiceFood4" element={<RiceFood4/>}/>
         <Route path="/RiceFood5" element={<RiceFood5/>}/>
         <Route path="/RiceFood6" element={<RiceFood6/>}/>
     
        <Route path="login" element={<Login/>} />
        <Route path="register" element={<Register />} />
        {/* Catch-all route for 404 Not Found */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      </div>
     
    </Router>
  );
}

function NotFound() {
  return <h2>404 - Not Found</h2>;
}

export default App;








