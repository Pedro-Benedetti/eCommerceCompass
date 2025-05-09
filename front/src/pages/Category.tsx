import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard"; // ou o caminho correto
import { Product } from "../types/Product";

const Category = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [filters, setFilters] = useState({
    sku: "",
    gender: "",
    age: "",
    size: "",
    color: "",
  });

  useEffect(() => {
    fetch("http://localhost:3000/products") // ajuste se necessário
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  const filteredProducts = products.filter(product => {
    return (
      (!filters.sku || product.sku.includes(filters.sku)) &&
      (!filters.gender || product.gender === filters.gender) &&
      (!filters.age || product.age === filters.age) &&
      (!filters.size || product.size === filters.size) &&
      (!filters.color || product.color === filters.color)
    );
  });

  return (
    <div>
      <h1>Filtrar Cachorros</h1>
      <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
        <input
          type="text"
          placeholder="SKU"
          value={filters.sku}
          onChange={e => setFilters({ ...filters, sku: e.target.value })}
        />
        <select
          value={filters.gender}
          onChange={e => setFilters({ ...filters, gender: e.target.value })}
        >
          <option value="">Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          placeholder="Age"
          value={filters.age}
          onChange={e => setFilters({ ...filters, age: e.target.value })}
        />
        <select
          value={filters.size}
          onChange={e => setFilters({ ...filters, size: e.target.value })}
        >
          <option value="">Size</option>
          <option value="Small">Small</option>
          <option value="Medium">Medium</option>
          <option value="Large">Large</option>
        </select>
        <select
          value={filters.color}
          onChange={e => setFilters({ ...filters, color: e.target.value })}
        >
          <option value="">Color</option>
          <option value="Red">Red</option>
          <option value="Apricot">Apricot</option>
          <option value="Black">Black</option>
          <option value="Black & White">Black & White</option>
          <option value="Silver">Silver</option>
          <option value="Tan">Tan</option>
        </select>
      </div>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem" }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.sku + product.name} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Category;
