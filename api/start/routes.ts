import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('/todo', 'TodosController').apiOnly() // criando a rota, passando e puxando os control
