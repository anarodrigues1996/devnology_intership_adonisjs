import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import { schema } from '@ioc:Adonis/Core/Validator'

import InternShip from "App/Models/InternShip"
import Database from '@ioc:Adonis/Lucid/Database'

export default class InternshipsController {

    public async index(ctx: HttpContextContract) {
        //var list = await InternShip.all()
        var list = await Database.from("intern_ships").orderBy('id', 'asc')
        return list
    }

    public async add({request}: HttpContextContract){

        const newPostSchema = schema.create({
            name: schema.string(),
            email: schema.string(),
            phone: schema.number(),
            birthday: schema.date()            
        })
        
        const payload = await request.validate({ schema: newPostSchema })

        var intern = new InternShip()
        intern.name = request.input('name')
        intern.email = request.input('email')
        intern.phone = request.input('phone')
        intern.birthday = request.input('birthday')
        await intern.save()

        return intern
    }

}
