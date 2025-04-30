import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx'
import Products from '../pages/Products.jsx'
import PageLayout from '../layouts/PageLayout.jsx';
import PageNotFound from '../pages/PageNotFound.jsx';
import Product from '../pages/Product.jsx';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route index element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/product/:id/:name" element={<Product />} />
        </Route>
          <Route path="*" element={<PageNotFound />} />
      </Routes>
    </Router>
  );
}

export default AppRoutes;

