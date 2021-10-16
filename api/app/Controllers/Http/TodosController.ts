import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from 'App/Models/Todo'
import { CreateValidator, UpdateValidator } from 'App/Validators/todo'

export default class TodosController {
  public async index({ response }: HttpContextContract) {
    const data = await Todo.query().orderBy('id', 'asc') // await(aguardando resposta do banco, utiliza async e await)
    return response.status(200).send(data) // returnar a resposta com o status 200 e enviar para o data
  }
  // response e a resposta para o cliente / uyuario, request pegar inf do usuario
  public async store({ response, request }: HttpContextContract) {
    const data = await request.validate(CreateValidator) // tem que receber nome e descricao
    const todo = await Todo.create(data) // esta pegando da model e jogando dentro da variavel
    return response.status(201).send(todo) // retorno
  }
  // precisa pegar uma resposta e passar o params que é o parametro que ele vai buscar. exemplo:
  // localhost/todo/params --> Tudo que vem depois de todo/ é um parametro
  public async show({ response, params }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id) // pega os dados ou falha  (findOrFail) se tem vem se nao da falha
    return response.status(200).send(todo)
  }

  public async update({ response, params, request }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id) // pega o parametro para achar o bonitao
    const data = await request.validate(UpdateValidator) // --> o que achou esta sendo jogado para dentro da data.
    todo.merge(data) // aqui esta juntando os dados que pegou, achou, atualizou e juntou
    await todo.save()
    return response.status(201).send(todo) // responidoi
  }

  public async destroy({ response, params }: HttpContextContract) {
    const todo = await Todo.findOrFail(params.id)
    await todo.delete()
    return response.status(201).send({ messsage: 'Todo Deletado !!!' })
  }
}
