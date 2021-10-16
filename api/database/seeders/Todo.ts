import BaseSeeder from '@ioc:Adonis/Lucid/Seeder'
import Todo from 'App/Models/Todo'

export default class TodoSeeder extends BaseSeeder {
  public async run() {
    await Todo.createMany([
      { nome: 'Limpar Casa', descricao: 'Casa limpa e linda' },
      { nome: 'sujar casa', descricao: 'Casa Suja' },
    ])
  }
}
