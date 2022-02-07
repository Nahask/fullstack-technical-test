import { CartElement } from "types/cartElement"

export const isElementInCart = (cart: CartElement[], id: string) => {
  return Boolean(cart.find(cartElement => cartElement.objectId === id))
}