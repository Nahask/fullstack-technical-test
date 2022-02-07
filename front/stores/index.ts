import React from "react";
import { getCart } from "services";

// Stores
import { CartStore } from "./cartStore";

export const stores = {
  cartStore: new CartStore()
}


const fetchCart = async () => {
  const cart = await getCart()
  stores.cartStore.fillCart(cart)
}

if (!stores.cartStore.cart.length) {
  fetchCart()
}

export const storesContext = React.createContext(stores)
export const StoresProvider = storesContext.Provider