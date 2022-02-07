import React from 'react'

import { Card } from "components/crossComponents"
import { Button, ButtonType } from "components/crossComponents/buttonComponent"
import { Highlight } from "react-instantsearch-dom"
import { CartElement } from 'types/cartElement'
import { useStore } from 'hooks/useStore'
import { isElementInCart } from 'helpers/cartHelper'
import { observer } from 'mobx-react-lite'
import { addElementToCart, removeElementFromCart } from 'services'

type HitProps = {
  hit
}

export const Hit: React.FC<HitProps> = observer(({ hit }) => {
  const cartStore = useStore("cartStore")
  const element: CartElement = {
    objectId: hit.objectID,
    name: hit.name,
    price: hit.salePrice
  }

  const addToCartHandler = (element: CartElement) => {
      cartStore.addToCart(element)
      addElementToCart(element)
  }

  const removeFromCartHandler = (element: CartElement) => {
    cartStore.removeElementFromCart(element)
    removeElementFromCart(element)
  }

  const button = isElementInCart(cartStore.cart, element.objectId) ? (
    <Button buttonType={ButtonType.SECONDARY} onClick={() => removeFromCartHandler(element)}>Supprimer du panier</Button>
  ) : (
    <Button buttonType={ButtonType.PRIMARY} onClick={() => addToCartHandler(element)}>Ajouter au panier</Button>
  )

  return (
    <Card imageSrc={hit.image} imageAlt={hit.name} content={
      <>
        <div className="hit-name">
          <Highlight attribute="name" hit={hit} />
        </div>
        <div className="hit-description">
          <Highlight attribute="shortDescription" hit={hit} />
        </div>
        <div className="hit-price">${hit.salePrice}</div>
        {button}
      </>
    } />
  )
})