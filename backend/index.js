/*
  dependancies
*/

  const express = require('express')

/*
  config - express
*/
  const app = express()
  const { initializeApp, applicationDefault, cert } = require('firebase-admin/app');
  const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');

/*
  config - firebase
*/
  const serviceAccount = require('./serviceAccountKey.json');

  initializeApp({
    credential: cert(serviceAccount)
  });

  const db = getFirestore();

/*
  endpoints
*/
  app.get('/confdates', (req, res) => {
    //allow CORS
    res.set('Access-Control-Allow-Origin','*')
    let dates = []
    db.collection('confdates').get().then(snapshot =>{
      snapshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data());
        dates.push(doc.data())
      });
      res.send(dates)
    })
  })

  app.get('/traindates', (req, res) => {
    //allow CORS
    res.set('Access-Control-Allow-Origin','*')
    let traindates = []
    db.collection('traindates').get().then(snapshot =>{
      snapshot.forEach((doc) => {
        // console.log(doc.id, '=>', doc.data());
        traindates.push(doc.data())
      });
      res.send(traindates)
    })
  })

/*
  listen
*/
app.listen(process.env.PORT || 3000)
