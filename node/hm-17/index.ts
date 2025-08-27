function calculateTotal(
	price: number,
	quantity: number,
	discount: number = 0
): number {
	return price * quantity * (1 - discount)
}

console.log(calculateTotal(100, 3))
console.log(calculateTotal(100, 3, 0.1))

let id: string | number

function displayId(id: string | number): void {
	if (typeof id === 'string') {
		console.log(id.toUpperCase())
	} else {
		console.log(id * 10)
	}
}

displayId('abc')
displayId(42)

type OrderStatus = 'pending' | 'shipped' | 'delivered'

interface Order {
	orderId: string
	amount: number
	status: OrderStatus
}

const orders: Order[] = [
	{ orderId: 'A1', amount: 100, status: 'pending' },
	{ orderId: 'B2', amount: 200, status: 'shipped' },
	{ orderId: 'C3', amount: 150, status: 'delivered' },
]

function filterOrdersByStatus(orders: Order[], status: OrderStatus): Order[] {
	return orders.filter(order => order.status === status)
}

console.log(filterOrdersByStatus(orders, 'shipped'))

type ProductInfo = [string, number, number]

function updateStock(
	inventory: Record<string, number>,
	productInfo: ProductInfo
): Record<string, number> {
	const [name, , quantity] = productInfo
	inventory[name] = quantity
	return inventory
}

const inventory = { apple: 10, banana: 5 }
const product: ProductInfo = ['apple', 100, 20]
console.log(updateStock(inventory, product))
