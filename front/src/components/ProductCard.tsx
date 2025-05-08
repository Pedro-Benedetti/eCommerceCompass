import React from "react";
import { Product } from "../types/Product";

type ProductsCardProps = {
    product: Product;
};

const ProductCard: React.FC<ProductsCardProps> = ({ product }) => {
    const { name, size, price, images, sku, gender, age, color } = product;

    console.log('Imagens recebidas:', images);

    return (
        <div style={styles.card}>
            <img
              src={images[0] ? images[0] : '/placeholder.jpg'}
              alt={name}
              style={styles.image}
        />
        <h2>{name}</h2>
            <p><strong>SKU:</strong> {sku}</p>
            <p><strong>Gender:</strong> {gender}</p>
            <p><strong>Age:</strong> {age}</p>
            <p><strong>Size:</strong> {size}</p>
            <p><strong>Color:</strong> {color}</p>
            <p><strong>Price:</strong> ${price.toFixed(2)}</p>
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
        marginBottom: '8px',
    },
};

export default ProductCard;