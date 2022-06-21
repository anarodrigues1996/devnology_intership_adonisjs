// import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import InternShip from "App/Models/InternShip"

export default class InternshipsController {

    public async index(ctx) {

        var list = await InternShip.all()

        return list

      }

}
