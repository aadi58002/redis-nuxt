// import client from './.redis'

// export default defineEventHandler(async (event) => {
//   if (event.req.headers.authorization !== undefined) {
//     const authToken = event.req.headers.authorization
//     const newUserArray = atob(authToken).split(':')
//     await client.connect()
//     const res = client.get(newUserArray[0])
//     return res
//   }
// })
