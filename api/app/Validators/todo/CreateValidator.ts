import { schema } from '@ioc:Adonis/Core/Validator'
import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export class CreateValidator {
  constructor(protected ctx: HttpContextContract) {}

  public schema = schema.create({
    // nesse campo esta informando que os dados abaixo são obrigatórios, trim significa tirar os espaco depoios da frase
    nome: schema.string({ trim: true }),
    descricao: schema.string({ trim: true }),
  })

  public messages = {
    required: 'O campo {{field}} é obrigatório !!! ', // Mensagem para o usuario caso ele insista
  }
}
