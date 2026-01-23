import { create } from "zustand";

const useBear = create((set) => ({
  cart: [],
  addToCart: () => 
  removeFromCart: () => 
  clearCart: () => {}
}));