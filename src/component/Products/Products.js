import React, { useState, useEffect } from "react";
import classes from "./Products.module.css";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");
    const data = await response.json();
    setProducts(data);
  };

  const filterProductbyCategory = (category) => {
    const newProducts = products.filter((product) => {
      return product.category === category;
    });
    setProducts(newProducts);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchProducts();
      setLoading(false);
    }, 2000); // hide loading effect after 5 seconds

    return () => clearTimeout(timer);
  }, []); // empty array ensures that effect is only run on mount and unmount
  return (
    <>
      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
          <nav
            className="-mx-5 -my-2 flex flex-wrap justify-center"
            aria-label="Footer"
          >
            {loading && <div className={classes.load}>Loading<span className={classes.dotes}>...</span></div>}
            {products.map((item) => (
              <div key={item.id} className="px-5 py-2">
                <input
                  onClick={() => filterProductbyCategory(item.category)}
                  type="checkbox"
                  id={item.id}
                  name={item.id}
                  value={item.id}
                />
                <a
                  href="#"
                  className="text-base text-gray-500 hover:text-gray-900"
                >
                  {item.category}
                </a>
              </div>
            ))}
          </nav>
        </div>
      </div>
      <div className="bg-white">
        <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            Customers also purchased
          </h2>

          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id} className="group relative">
                <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-md bg-gray-200 group-hover:opacity-75 lg:aspect-none lg:h-80">
                  <img
                    src={product.image}
                    alt="product image"
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                  />
                </div>
                <div className="mt-4 flex justify-between">
                  <div>
                    <h3 className="text-sm text-gray-700">
                      <a href="product_link">
                        <span aria-hidden="true" className="absolute inset-0" />
                        {product.title}
                      </a>
                    </h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Rate: {product.rating.rate}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-gray-900">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
