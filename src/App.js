import {Routes,Route} from 'react-router-dom';
import Home from './components/routes/home/home.component';
import Shop from './components/routes/shop/shop.component.jsx';
import Navigation from './components/routes/navigation/navigation.component';

const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index={true} element={<Home />}/>
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
};

export default App;
