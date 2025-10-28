class Stack {
	constructor() {
		this.items = [];
	}

	// Проверка, пуст ли стек
	empty() {
		return this.items.length === 0;
	}

	// Добавление элемента
	push(element) {
		this.items.push(element);
	}

	// Удаление и возврат верхнего элемента
	pop() {
		if (this.empty()) {
			console.log('Стек пуст!');
			return null;
		}
		return this.items.pop();
	}

	// Возврат верхнего элемента без удаления
	peek() {
		if (this.empty()) {
			console.log('Стек пуст!');
			return null;
		}
		return this.items[this.items.length - 1];
	}

	// Поиск элемента от вершины
	search(element) {
		for (let i = this.items.length - 1, pos = 1; i >= 0; i--, pos++) {
			if (this.items[i] === element) return pos;
		}
		return -1;
	}

	// Печать содержимого
	print() {
		console.log('Содержимое стека:', this.items);
	}
}

const stack = new Stack();

stack.push(10);
stack.push(20);
stack.push(30);

stack.print();
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.search(10));
console.log(stack.empty());
stack.pop();
stack.pop();
console.log(stack.empty());
