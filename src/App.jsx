import products from "./data/products";
import ProductList from "./components/ProductList";
import { useState } from "react";
import ProductModal from "./components/ProductModal";



function App() {
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <main className="mx-auto max-w-7xl p-8">
      <ProductList products={products} onSelectProduct={setSelectedProduct} />

       {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}

export default App;
