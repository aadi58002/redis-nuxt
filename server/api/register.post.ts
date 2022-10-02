import client from '~/server/plugins/.client'

export default defineEventHandler(async (event: any) => {
  const token = (await useBody(event.req)).token
  const newRegisterUser = atob(token).split(':')
  if (newRegisterUser.length === 3) {
    const key = btoa(`${newRegisterUser[1]}:${newRegisterUser[2]}`)
    const alreadyExist = await client.multi().select(0).exists(key).exec()
    console.log(alreadyExist)
    const status = await client.multi().select(0).set(key, newRegisterUser[0]).exec()
    return status
  }
  return event.res
})
