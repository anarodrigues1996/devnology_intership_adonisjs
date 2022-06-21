import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import InternShip from "App/Models/InternShip"

export default class InternshipsController {

    public async index(ctx: HttpContextContract) {
        var list = await InternShip.all()
        return list
    }

    public async add({request}: HttpContextContract){

        var intern = new InternShip()
        intern.name = request.input('name')
        intern.email = request.input('email')
        intern.phone = request.input('phone')
        intern.birthday = request.input('birthday')
        await intern.save()
        
        return intern
    }

}
