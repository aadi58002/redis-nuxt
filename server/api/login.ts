import client from '~/server/plugins/.client'

export default defineEventHandler(async () => {
  const res = client.get('aadi58002')
  return res
})
