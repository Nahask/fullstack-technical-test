import React from 'react'

import { CartComponent } from 'components/cart'
import { HeaderComponent } from 'components/header'
import { observer } from 'mobx-react-lite'

const CartPageComponent: React.FC = observer(() => {
	return (
		<>
			<CartComponent />
		</>
	)
})

export default CartPageComponent