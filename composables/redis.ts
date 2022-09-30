import { createClient } from 'redis'
import { Client } from 'redis-om'

export default async function redis() {
  const redis = createClient('redis://localhost:6379')
  await redis.connect()
  const client = await new Client().use(redis)
  return client
}
