const mariadb = require('mariadb')
const express = require('express')
const app = express();
const axios = require('axios');
let cors = require('cors');
const bcrypt = require('bcrypt');

require('dotenv').config()

const pool = mariadb.createPool({
    host: process.env.DB_HOST,
    database: process.env.DB_DTB,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    connectionLimit: 100,
})

app.use(express.json())
app.use(cors())

app.get('/question', async (req, res) => {
    let conn;
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete select")
        const rows = await conn.query('SELECT * FROM questions');
        res.status(200).json(rows)
    }
    catch (err) {
        console.log(err);
    }
})

// Formulaire de connexion

const bodyParser = require('body-parser');
app.use(bodyParser.json());

  app.post('/Connexion', async (req, res) => {
    conn = await pool.getConnection();
    const { email, password } = req.body;
    const query = `SELECT * FROM users WHERE email = '${email}'`;
    const login = await conn.query(query);
      if (login.length === 0) {
        console.log('c pas bon1')
        return res.status(401).json({ message: 'Invalid email ' });
      }
      const match = await bcrypt.compare('test','$2b$10$AmK2PzEbY.U56xdQ7.ZB2.nh2GUi6cVOWMW720d5XTF3uixXqE1BG');
      if (!match) {
        console.log('c pas bon2')
        return res.status(401).json({ message: 'Invalid email or password' });
      }
      console.log('c bon')
      const indentifiant = {'id':login[0].id,'email':login[0].email}
      res.status(200).json(indentifiant);
    });
  
// Pour telecharger l'image des produits dans un dossier

const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  }
});
const upload = multer({ storage: storage });

app.post('/upload', upload.array('file'), (req, res) => {
  console.log('Files uploaded successfully');
  res.send('Files uploaded successfully');
});

app.listen(3001, () => {
  console.log('Server started on port 3001');
});


// Requete pour la création d'un compte utilisateur

app.post('/users', async (req, res) => {
    let conn;
        console.log("poste")
    try {
    bcrypt.hash(req.body.password, 10)
        .then(async (hash) => {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete insert")
        console.log(req.body);
        let requete = 'INSERT INTO users (pseudo, email, password, statut) VALUES (?, ?, ?, 0);'
        let rows = await conn.query(requete, [req.body.pseudo, req.body.email, hash]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
        })
    }
    catch (err) {
        console.log(err);
    }
    
})

// Pour envoyé une requête au support sur le formualire de la page contacte

app.post('/support', async (req, res) => {
    let conn;
        console.log("poste")
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete insert")
        console.log(req.body);
        let requete = 'INSERT INTO support (name, email, phone, message) VALUES (?, ?, ?, ?);'
        let rows = await conn.query(requete, [req.body.name, req.body.email, req.body.phone, req.body.message]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch (err) {
        console.log(err);
    }
})

// Formulaire admin pour ajouté des articles

app.post('/articles', async (req, res) => {
    let conn;
        console.log("poste")
    try {
        console.log("lancement de la connexion")
        conn = await pool.getConnection();
        console.log("lancement de la requete insert")
        console.log(req.body);
        let requete = 'INSERT INTO articles (name, image, prix, quantité) VALUES (?, ?, ?, ?);'
        let rows = await conn.query(requete, [req.body.name, req.body.image, req.body.prix, req.body.quantite]);
        console.log(rows);
        res.status(200).json(rows.affectedRows)
    }
    catch (err) {
        console.log(err);
    }
})

// app.put('/question/:id', async (req, res) => {
//     const id = parseInt(req.params.id)
//     let conn;
//     try {
//         console.log("lancement de la connexion")
//         conn = await pool.getConnection();
//         console.log("lancement de la requete update")
//         let requete = 'UPDATE questions SET theme = ?, question = ?, reponse = ? WHERE id = ?;'
//         let rows = await conn.query(requete, [req.body.theme, req.body.question, req.body.reponse, id]);
//         console.log(rows);
//         res.status(200).json(rows.affectedRows)
//     }
//     catch (err) {
//         console.log(err);
//     }
// })

// app.delete('/articled/:id', async (req, res) => {
//     const id = parseInt(req.params.id)
//     let conn;
//     try {
//         console.log("lancement de la connexion")
//         conn = await pool.getConnection();
//         console.log("lancement de la requete delete")
//         let requete = 'DELETE FROM article WHERE  id= ?;'
//         let rows = await conn.query(requete, [id]);
//         console.log(rows);
//         res.status(200).json(rows.affectedRows)
//     }
//     catch (err) {
//         console.log(err);
//     }
// })

app.listen(8000, () => { // ouverture du serveur sur le port 8000
    console.log("Serveur à l'écoute") // afficher un message dans la console.
})