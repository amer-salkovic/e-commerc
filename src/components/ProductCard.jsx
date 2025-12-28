import React from "react";

const ProductCard = ({ product, onClick}) => {
  return (
    <div onClick={() => onClick(product)} className="rounded-lg border bg-card p-4">
      <img
        src={product.image}
        alt={product.title}
        className="mb-3 h-48 w-full rounded-md object-cover"
      />
      <h3>{product.title}</h3>
      <p className="text-sm text-muted-foreground">${product.price}</p>
    </div>
  );
};

export default ProductCard;
