const modal = document.getElementById('modal')
const openButton = document.getElementById('openButton')
const closeButton = document.getElementById('closeButton')
const modalBody = document.getElementById('modalBody')
const confirmBtn = document.getElementById('confirmBtn')
const cancelBtn = document.getElementById('cancelBtn')

openButton.addEventListener('click', () => {
	modal.showModal()
	modal.classList.remove('modal-hidden')
})

closeButton.addEventListener('click', () => {
	modal.returnValue = ''
	modal.close()
	modal.classList.add('modal-hidden')
})

confirmBtn.addEventListener('click', () => {
	modal.close('confirmed')
	console.log(modal.returnValue)
	modal.classList.add('modal-hidden')
})

cancelBtn.addEventListener('click', () => {
	modal.close('cancelled')
	console.log(modal.returnValue)
	modal.classList.add('modal-hidden')
})

modal.addEventListener('close', event => {
	if (modal.returnValue === 'confirmed') {
		alert('Ваши данные успешно приняты!')
	} else if (modal.returnValue === 'cancelled') {
		alert('Вы отменили ввод!')
	}
})

modal.addEventListener('click', event => {
	if (event.target === modal) {
		modal.returnValue = ''
		modal.close()
		modal.classList.add('modal-hidden')
	}
})
