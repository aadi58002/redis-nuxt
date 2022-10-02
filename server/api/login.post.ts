import client from '~/server/plugins/.client'

export default defineEventHandler(async (event: any) => {
  const LoginUser = (await useBody(event)).token
  const status = await client.multi().select(0).exists(LoginUser).exec()
  return status
})
