import express from 'express'
import pool from './dbPool.js'

const app = express()

app.get('/', async (_req, res) => {
  const con = await pool.getConnection();
  var x:number = -1;

  try{
    const record = await con.execute("SELECT * FROM `users`");
    x = record.length;
  }
  catch(e){
    res.send(`Hello Express!, error: ${e}`);  
  }
  finally{
    con.release();
  }
  
  res.send(`Hello Express!, database lenght: ${x}`);
})

app.get('/api/users/:id', (_req, res) => {
  res.json({ id: _req.params.id })
})

app.get('/api/posts/:postId/comments/:commentId', (_req, res) => {
  res.json({ postId: _req.params.postId, commentId: _req.params.commentId })
})

export default app
