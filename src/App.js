import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';




const Shop = () => {
  return <h1> I am the shop page</h1>;
};
const App = () => {
  return (
    // in the "home" route, we could pass the property, "path = "
    // But then we would always need to open the home page at "http://localhost:3000/home"
    // Instead we want to open home page at the root of the application.
    // we replace the "path = " property with "index". It defaults to the 1st route provided. 
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
