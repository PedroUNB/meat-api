import { Server } from '@config/server'
import { usersRouter } from '@api/users/users.router'

const server = new Server()

server.bootstrap([usersRouter]).then((server) => {
  console.log('Server is listeing on: ', server.application.address())
}).catch(error => {
  console.log('Server failed to start')
  console.log(error)
  process.exit(1)
})
