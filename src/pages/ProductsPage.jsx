import products from "../data/products";
import ProductList from "../components/ProductList";
import { useEffect, useState } from "react";
import ProductModal from "../components/ProductModal";
import NavBar from "../components/NavBar";
import { useDebounce } from "../hooks/UseDebounce";
import { useNavigate } from "react-router-dom";

function ProductsPage() {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");

  const debouncedSearch = useDebounce(search, 300);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setSelectedProduct(null);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const categories = Array.from(new Set(products.map((p) => p.category)));

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(debouncedSearch.toLowerCase());

    const matchesCategory = category === "" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="mx-auto max-w-7xl p-8">
      <NavBar
        search={search}
        category={category}
        categories={categories}
        onSearchChange={setSearch}
        onCategoryChange={setCategory}
      />

      <ProductList products={filteredProducts} onSelectProduct={setSelectedProduct} />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}

export default ProductsPage;
