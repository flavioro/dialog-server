// import* as UserDb from '../db/users.json'
import fs from 'fs'
import { promisify } from 'util'
import User from '../dtos/ICreateUserDTO'

type FunctionFilter = (value: User, index: number) => boolean

export default class UserService {
  static find = async () => {
    try {
      const readFileAsync = promisify(fs.readFile);
      let users = await readFileAsync('src/db/users.json', { encoding: 'utf-8' })
      users = JSON.parse(users)
      // console.log(users[0])
      // const filtered = users.filter(user => filter(user, user.index))
  
      return users
    } catch (err) {
      console.log(err)
    }

  }

  // static findById = async (id: string) => {
  //   return fs.readFileSync('users.json').find(user => user._id === id)
  // }
}
