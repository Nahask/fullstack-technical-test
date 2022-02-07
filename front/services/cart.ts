import { CartElement } from "types/cartElement"

const URL = "http://localhost:4000"

export const getCart = async (): Promise<CartElement[]> => {
  const res = await fetch(`${URL}/cart`)
  const body = await res.json()
  return body
}

export const addElementToCart = async (cartElement: CartElement) => {
  const body = JSON.stringify(cartElement)
  const res = await fetch(`${URL}/cart`, {
    method: "POST",
    headers: { "Content-type": "application/json; charset=UTF-8" },
    body: JSON.stringify(cartElement)
  })
  return 'success'
}

export const removeElementFromCart = async (cartElement: CartElement) => {
  const res = await fetch(`${URL}/cart/${cartElement.objectId}`, {
    method: "DELETE"
  })
  return 'success'
}