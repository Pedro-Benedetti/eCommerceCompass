import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { Product } from '../types/Product';

const ProductList: React.FC = () => {
    const [products, setproducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const fetchProducts = async () => {
        try {
          const res = await fetch('/products');
          if (!res.ok) {
            throw new Error(`Erro ao buscar products: ${res.statusText}`);
          }
          console.log(res);

          const data = await res.json();
          setproducts(data);
        } catch (err: any) {
          setError(err.message || 'Erro desconhecido');
        } finally {
          setLoading(false);
        }
    };

     useEffect(() => {
        fetchProducts();
     }, []);

     if (loading) return <p>Carregando products...</p>;
     if (error) return <p>Erro: {error}</p>;

     return (
        <div style={styles.grid}>
            {products.map((product) => (
                <ProductCard key={product.name + 1} product={product} />
            ))}
        </div>
     );
};

const styles = {
    grid: {
        display: 'flex',
        flexWrap: 'wrap' as const,
        gap: '16px',
        justifyContent: 'center',
        padding: '20px',
    },
};

export default ProductList;