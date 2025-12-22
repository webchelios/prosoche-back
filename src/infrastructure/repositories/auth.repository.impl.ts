import { AuthRepository, LoginUserDto, RegisterUserDto, UserEntity } from "../../domain"
import { AuthDatasourceImpl } from "../datasources/auth.datasource.impl"


export class AuthRepositoryImpl implements AuthRepository {
    constructor(
        private readonly authDatasource: AuthDatasourceImpl
    ) { }
    public loginUser(loginUserDto: LoginUserDto): Promise<UserEntity> {
        return this.authDatasource.loginUser(loginUserDto)
    }


    public registerUser(registerUserDto: RegisterUserDto): Promise<UserEntity> {
        return this.authDatasource.registerUser(registerUserDto)
    }


}