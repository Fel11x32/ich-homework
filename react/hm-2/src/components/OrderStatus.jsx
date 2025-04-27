import React from 'react'

const OrderStatus = ({ orderId, status }) => {
	return (
		<p>
			Заказ #{orderId}: {status}
		</p>
	)
}

export default OrderStatus
