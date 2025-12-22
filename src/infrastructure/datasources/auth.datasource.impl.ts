import { BcryptAdapter } from "../../config"
import { UserModel } from "../../data"
import { AuthDatasource, CustomError, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain"
import { UserMapper } from "../mappers/user.mapper"

export class AuthDatasourceImpl implements AuthDatasource {


    public async loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {

        const { email, password } = loginUserDto

        try {
            const user = await UserModel.findOne({ email })
            if (!user) throw CustomError.badRequest('User does not exists - email')

            const isMatching = BcryptAdapter.compare(password, user.password)
            if (!isMatching) throw CustomError.badRequest('Password is not valid')


            return UserMapper.userEntityFromObject(user)

        } catch (error) {
            console.log(error)
            throw CustomError.internalServer('Internal Server error')
        }



    }


    public async registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        const existUser = await UserModel.findOne({ email: registerUserDto.email })
        if (existUser) throw CustomError.badRequest('Email already exists')

        const { name, email, password } = registerUserDto

        try {
            const user = new UserModel({ name, email, password: BcryptAdapter.hash(password) })
            await user.save();

            return UserMapper.userEntityFromObject(user)


        } catch (error) {
            throw CustomError.internalServer(`${error}`)
        }
    }
}