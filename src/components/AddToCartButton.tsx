"use client";

import { useState } from "react";
import { useCart, CartItem } from "@/context/CartContext";

type AddToCartButtonProps = {
  item: Omit<CartItem, "quantity">;
  showQuantity?: boolean;
};

export default function AddToCartButton({ item, showQuantity = false }: AddToCartButtonProps) {
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(item, quantity);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '10px' }}>
      {showQuantity && (
        <div style={{ display: 'flex', alignItems: 'center', border: '1px solid var(--gray-light)', borderRadius: '4px' }}>
          <button 
            type="button" 
            onClick={(e) => { e.preventDefault(); setQuantity(Math.max(1, quantity - 1)); }}
            style={{ padding: '8px 12px', background: 'transparent' }}
          >-</button>
          <span style={{ padding: '0 10px' }}>{quantity}</span>
          <button 
            type="button" 
            onClick={(e) => { e.preventDefault(); setQuantity(quantity + 1); }}
            style={{ padding: '8px 12px', background: 'transparent' }}
          >+</button>
        </div>
      )}
      <button 
        type="button" 
        onClick={handleAdd} 
        className="btn-primary" 
        style={{ padding: showQuantity ? '12px 24px' : '8px 16px', fontSize: showQuantity ? '1rem' : '0.85rem' }}
      >
        {added ? "✓ Added" : "Add to Cart"}
      </button>
    </div>
  );
}
