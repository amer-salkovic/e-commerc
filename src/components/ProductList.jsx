import ProductCard from "./ProductCard";

const ProductList = ({ products, onSelectProduct }) => {

  if(products.length===0){
    return(
         <div className="rounded-lg border bg-card p-10 text-center text-sm text-muted-foreground">
            No Products Found
         </div>
    )
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          Click={onSelectProduct}
        />
      ))}
    </div>
  );
};

export default ProductList;
