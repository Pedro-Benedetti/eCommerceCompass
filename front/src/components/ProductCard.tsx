import React from "react";
import { Product } from "../types/Product";

type ProductsCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductsCardProps> = ({ product }) => {
    const { name, size, price, images } = product;

    return (
        <div style={styles.card}>
            <img
              src={images[0] || '/placeholder.jpg'}
              alt={name}
              style={styles.image}
        />
        <h2>{name}</h2>
        <p>Size: {size}</p>
        <p>Price: ${price.toFixed(2)}</p>
        </div>
    );
};

const styles = {
    card: {
        border: '1px solid #ddd',
        borderRadius: '12px',
        padding: '16px',
        width: '200px',
        textAlign: 'center' as const,
    },
    image: {
        width: '100%',
        height: 'auto',
        borderRadius: '8px',
    },
};

export default ProductCard;