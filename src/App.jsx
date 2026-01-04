import products from "./data/products";
import ProductList from "./components/ProductList";
import { useEffect, useState } from "react";
import ProductModal from "./components/ProductModal";
import NavBar from "./components/NavBar";
import { useDebounce } from "./hooks/UseDebounce";


function App() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === 'Escape') setSelectedProduct(null)
    };
     window.addEventListener('keydown', onKeyDown)
     return () => window.removeEventListener("keydown", onKeyDown)
  }, [])


  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title.toLowerCase().includes(debouncedSearch.toLowerCase())


    const matchesCategory =
      category === "" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  const handleSelectProduct = (product) => {
    setSelectedProduct(product);
  };

  const handleSearchChange = (value) => {
    setSearch(value);
  };

  const handleCategoryChange = (value) => {
    setCategory(value);
  };

const categories = Array.from(new Set(products.map((p) => p.category)));


  return (
    <main className="mx-auto max-w-7xl p-8">
      <NavBar
        search={search}
        category={category}
        categories={categories}
        onSearchChange={handleSearchChange}
        onCategoryChange={handleCategoryChange}
      />

      <ProductList
        products={filteredProducts}
        onSelectProduct={handleSelectProduct}
      />

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
