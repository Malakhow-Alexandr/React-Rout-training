import { useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import ProductList from 'components/ProductList/ProductList';
import { SearchBox } from 'components/SearchBox/SearchBox';
import { getProducts } from 'fakeAPI';

const Products = () => {
  const products = getProducts();
  const [searchParams, setSearchParams] = useSearchParams();

  const productName = searchParams.get('name') ?? '';

  const visibleProducts = useMemo(
    () =>
      products.filter(product =>
        product.name.toLowerCase().includes(productName.toLowerCase())
      ),
    [productName, products]
  );

  const updateQueryString = name => {
    if (name === '') {
      return setSearchParams({});
    }
    setSearchParams({ name });
  };

  // const updateQueryString = name => {
  //   const nextParams = name !== '' ? { name } : {};
  //   setSearchParams(nextParams);
  // };

  return (
    <main>
      <SearchBox value={productName} onChange={updateQueryString} />
      <ProductList products={visibleProducts} />
    </main>
  );
};

export default Products;
