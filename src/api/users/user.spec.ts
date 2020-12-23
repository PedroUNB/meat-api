import { User } from './users.model'

test('should be ok', async () => {
  const user = await User.findById('1')

  expect(user.name).toEqual('Peter Paker')
})
