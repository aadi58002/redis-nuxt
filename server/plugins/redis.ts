import client from './.client'
export default defineNitroPlugin(async () => {
  return await client.connect()
})
