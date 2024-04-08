const express = require('express')
const app = express()
const port = 3000

app.use(express.json())

// Route GET pour afficher une liste de ressources
app.get('/resources', (req, res) => {
  // Code pour récupérer la liste des ressources depuis une base de données
  res.send('Liste des ressources')
})

// Route GET pour afficher une ressource spécifique
app.get('/resources/:id', (req, res) => {
  const resourceId = req.params.id
  // Code pour récupérer la ressource correspondante depuis une base de données
  res.send(`Ressource avec l'identifiant ${resourceId}`)
})

// Route POST pour créer une nouvelle ressource
app.post('/resources', (req, res) => {
  const newResource = req.body
  // Code pour créer une nouvelle ressource dans une base de données
  res.send(`Nouvelle ressource créée : ${newResource}`)
})

// Route PUT pour mettre à jour une ressource existante
app.put('/resources/:id', (req, res) => {
  const resourceId = req.params.id
  const updatedResource = req.body
  // Code pour mettre à jour la ressource correspondante dans une base de données
  res.send(`Ressource avec l'identifiant ${resourceId} mise à jour : ${updatedResource}`)
})

// Route DELETE pour supprimer une ressource existante
app.delete('/resources/:id', (req, res) => {
  const resourceId = req.params.id
  // Code pour supprimer la ressource correspondante dans une base de données
  res.send(`Ressource avec l'identifiant ${resourceId} supprimée`)
})

app.listen(port, () => {
  console.log(`Serveur Express.js écoutant sur le port ${port}`)
})