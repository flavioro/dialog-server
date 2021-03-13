import UserDb from '../db/users.json'
import User from '../dtos/ICreateUserDTO'

// type FunctionFilter = (value: User, index: number) => boolean

export class UserService {
  static find = (filter?): Promise<User[]> => {
    const users = UserDb.filter(user => filter(user, user.index))

    return filter ? users
  }

  static findById = async (id: string) => {
    return UserDb.find(user => user._id === id)
  }
}
