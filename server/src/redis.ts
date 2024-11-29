import redis from 'redis';
const client = redis.createClient()

client.connect()

client.on('error', (err) => console.error('Redis error:', err)) 

export default client