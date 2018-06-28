const express     = require('express')
const bodyParser  = require('body-parser')
const cors        = require('cors')
const app         = express()
const equipment   = require('./routes/equipment') 


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors({origin: true, credentials: true}))
app.use('/equipment', equipment)
app.use(notFound)
app.use(errorHandler)

function notFound(req, res, next) {
  const url = req.originalUrl
  if (!/favicon\.ico$/.test(url) && !/robots\.txt$/.test(url)) {
    console.error('[404: Requested file not found] ', url)
  }
  res.status(404).send({error: 'Url not found', status: 404, url})
}

function errorHandler(err, req, res, next) {
  console.error('ERROR', err)
  const stack =  process.env.NODE_ENV !== 'production' ? err.stack : undefined
  res.status(500).send({error: err.message, stack, url: req.originalUrl})
}

module.exports = app

// app.get('/', (req, res, next) => {
//     queries.listWod()
//     .then(wod => {
//             res.json({ wod })
//         }).catch(next);
//     })

// app.post("/", (request, response, next) => {
//     queries.create(request.body).then(wod => {
//         response.status(201).json({wod: wod});
//     }).catch(next);
// });

// // update
// app.put("/:id", (request, response, next) => {
//     queries.update(request.params.id, request.body).then(wod => {
//         response.json({wod: wod[0]});
//     }).catch(next);
// });

// // delete
// app.delete("/:id", (request, response, next) => {
//     queries.delete(request.params.id).then(() => {
//         response.sendStatus(204);
//     }).catch(next);
// });