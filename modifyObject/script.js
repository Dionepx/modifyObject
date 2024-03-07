let user = {
     name: 'Dione',
     age: 23,
     email: 'dione@gmai.com',
     city: 'Vila Velha',
     blogPost: ['Empadao de frango', '4 receitas de purê de batata']
}

user.age = 24

console.log(user['name'])

user['name'] = 'João'

// console.log(user['name']) //saida: Joao