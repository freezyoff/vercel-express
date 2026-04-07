import express from 'express'
import pool from './dbPool.js'
import { QueryResult, RowDataPacket } from 'mysql2';

const app = express()

interface IUser extends RowDataPacket{
  usrName: string;
}

app.get('/', async (_req, res) => {
  const con = await pool.getConnection();
  var x:number = -1;

  try{
    const [record, fields] = await con.execute<IUser[]>("SELECT * FROM `users`");
    x = record.length;
    console.log(record);
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
