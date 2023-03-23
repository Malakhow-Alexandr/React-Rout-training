import { Outlet } from 'react-router-dom';
import { Suspense } from "react";

import { Header,Container,Logo,Link } from './SharedLayout.styled'; 

export const SharedLayout = () => {
  return (
    <Container>
      <Header>
        <Logo>
          <span role="img" aria-label="computer icon">
            💻
          </span>
          GoMerch Store
        </Logo>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/products">Products</Link>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading page...</div>}>
      <Outlet />
      </Suspense>
    </Container>
  );
};
