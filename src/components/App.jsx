import { Routes, Route } from 'react-router-dom';
import Home from 'pages/Home';
import About from 'pages/About';
import Products from 'pages/Products';
import NotFound from 'pages/NotFound';
import { StyledLink, Nav } from './StyledLink';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        fontSize: 15,
        color: '#010101',
      }}
    >
      <header>
        <Nav>
          <StyledLink to="/">Home</StyledLink>
          <StyledLink to="/about">About</StyledLink>
          <StyledLink to="/products">Products</StyledLink>
        </Nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};
