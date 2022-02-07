import { makeObservable, observable, action } from "mobx"
import { CartElement } from "types/cartElement"

export class CartStore {
  cart: CartElement[] = []

  constructor() {
    makeObservable(this, {
      cart: observable,
      addToCart: action,
      getCart: action,
      fillCart: action,
      removeElementFromCart: action
    })
  }

  addToCart(cartElement: CartElement) {
    this.cart.push(cartElement)
  }

  removeElementFromCart(elementToRemove: CartElement) {
    this.cart = this.cart.filter(cartElement => cartElement.objectId !== elementToRemove.objectId)
  }

  fillCart(cart: CartElement[]){
    this.cart = cart
  }

  getCart() {
    return this.cart
  }
}