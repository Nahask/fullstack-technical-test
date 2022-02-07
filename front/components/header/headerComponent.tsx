import React from 'react'
import styles from "../../styles/Header.module.css";
import { LinkComponent } from "components/crossComponents/linkComponent";
import { useStore } from 'hooks/useStore';
import { observer } from 'mobx-react-lite';

export const HeaderComponent: React.FC = observer(() => {
  return (
    <div className={styles.header}>
      <div>
        <LinkComponent href="/" >
          La Fourche Frontend Technical Test
        </LinkComponent>
      </div>
      <div>
        <LinkComponent href='/cart' >
          Acceder au panier
        </LinkComponent>
      </div>
    </div>
  )
})