import { IUser } from './user.interface'

const users: Array<IUser> = [
  {
    id: '1',
    name: 'Peter Paker',
    email: 'peter@marvel.com'
  },
  {
    id: '2',
    name: 'Bruce Wayne',
    email: 'bruce@dc.com'
  },
  {
    id: '3',
    name: 'Super Man',
    email: 'clark@dc.com'
  }
]

export class User {
  static findAll(): Promise<IUser[]> {
    return Promise.resolve(users)
  }

  static findById(id: string): Promise<IUser> {
    return new Promise(resolve => {
      const filtered = users.filter(user => user.id === id)
      let user
      if (filtered.length > 0) {
        user = filtered[0]
      }
      resolve(user)
    })
  }
}
