import moment from 'moment'

const now = moment()

console.log('Дата в формате: ', now.format('DD-MM-YYYY'))
console.log('Дата в формате: ', now.format('MMM Do YY'))
console.log('День недели: ', now.format('dddd'))
