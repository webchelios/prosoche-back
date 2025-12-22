import { CustomError, UserEntity } from "../../domain";

export class UserMapper {


    static userEntityFromObject(object: { [key: string]: any }): UserEntity {

        const { id, _id, name, email, password, role, img } = object

        if (!id || !_id) throw CustomError.badRequest('Missing id or _id')
        if (!name) throw CustomError.badRequest('Missing name')
        if (!email) throw CustomError.badRequest('Missing email')
        if (!password) throw CustomError.badRequest('Missing password')
        if (!role) throw CustomError.badRequest('Missing role')

        return new UserEntity(_id || id, name, email, password, role, img)

    }
}