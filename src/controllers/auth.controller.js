import pool from '../db.js';
import bcrypt from 'bcrypt';
import createAccessToken from '../libs/jwt.js';

const signUp = async (req, res) => {
    const {name, email, password} = req.body;
    try {
      const encryptedPassword = await bcrypt.hash(password, 10);
      console.log(encryptedPassword);
      const result =  await pool.query('INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *', [name, email, encryptedPassword]);

      const token = await createAccessToken({id: result.rows[0].id});

      console.log(result);
      res.cookie('token', token, {
        httpOnly: true,
        sameSite: 'none',
        maxAge: 60* 60 * 24 * 1000,
      })
      
      return res.json(result.rows[0]);
    } catch (error) {
      return res.status(400).json({message: 'The email already exists.'})
    }
};

const signIn = (req, res) => res.send('Signing in');

const signOut = (req, res) => res.send('Signing out');

const getProfile = (req, res) => res.send('My Profile');

export { signUp, signIn, signOut, getProfile };