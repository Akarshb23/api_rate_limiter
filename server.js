import express from 'express' ;
import redis from './src/redis/client.js';
const app = express() ;

const PORT = 3000 ; 

app.use(express.json())

app.get("/" , (req,res)=>{
    res.json({
        message : "Token Bucket Rate Limiter Api" , 
        status : "running"
    })
});

app.listen(PORT, async () => {
  try {
    await redis.ping();
    console.log("Redis connection verified");
  } catch (err) {
    console.error("Redis ping failed:", err.message);
  }
});