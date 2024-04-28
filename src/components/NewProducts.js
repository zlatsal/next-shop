import React from "react";
import ProductCard from "./ProductCard";

const productsData = [
  {
    img: "/images/product-1.png",
    title: "Product1",
    desc: "Description here",
    rating: 4,
    price: "45.00",
  },
  {
    img: "/images/product-2.png",
    title: "Product2",
    desc: "Description here",
    rating: 5,
    price: "55.00",
  },
  {
    img: "/images/product-3.png",
    title: "Product3",
    desc: "Description here",
    rating: 3,
    price: "28.00",
  },
  {
    img: "/images/product-4.png",
    title: "Product4",
    desc: "Description here",
    rating: 3,
    price: "28.00",
  },
  {
    img: "/images/product-5.png",
    title: "Product5",
    desc: "Description here",
    rating: 5,
    price: "54.00",
  },
  {
    img: "/images/product-6.png",
    title: "Product5",
    desc: "Description here",
    rating: 4,
    price: "48.00",
  },
  {
    img: "/images/product-7.png",
    title: "Product5",
    desc: "Description here",
    rating: 5,
    price: "65.00",
  },
];

const NewProducts = () => {
  return (
    <div>
      <div className="container pt-16">
        <h2 className="font-medium text-2xl pb-4">New Products</h2>

        <div className="grid gridl-cols-1 place-items-center sm:place-items-start sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 xl:gap-x-20 xl:gap-y-10">
          {productsData.map((item, index) => {
            return (
              <ProductCard
                key={index}
                img={item.img}
                title={item.title}
                desc={item.desc}
                rating={item.rating}
                price={item.price}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default NewProducts;
