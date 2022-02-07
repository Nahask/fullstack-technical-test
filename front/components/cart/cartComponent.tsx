import React, { useEffect, useState } from 'react'
import { useStore } from 'hooks/useStore'
import { observer } from 'mobx-react-lite'
import styles from "../../styles/Home.module.css";
import { Card } from 'components/crossComponents';

export const CartComponent: React.FC = observer(() => {
  const cartStore = useStore("cartStore")
  return (
    <div className={styles.container}>
      {cartStore?.cart.map(cartElement => {
        return (
          <Card
            className={styles.card}
            key={cartElement.objectId}
            content={
              <>
                <h3>{cartElement.name}</h3>
                <p>{cartElement.price}</p>
              </>
            } />
        )
      })}
    </div>
  )
})