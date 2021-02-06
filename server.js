const express = require('express')
const config = require('config')
const path = require('path')
const WebSocket = require('ws')
const http = require('http')

const wss = new WebSocket.Server({port: 8080})

const clients = new Set()

const app = express()

app.use(express.json({extended: true}))

const PORT = config.get('port')

app.use('/api', require('./routs/path'))

if(process.env.NODE_ENV === 'production') {
	app.use('/', express.static(path.join(__dirname, 'client', 'build')))
	app.get('*', (req, res) => {
		res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
	})
}
async function start() {
	try {
		await require('./lib/mongoose')
		app.listen(PORT, () => {
			console.log('Server has been started on port' + PORT)
		})
	} catch (e) {
		console.log(e.message)
		process.exit(1)
	}
}
start();

wss.on('connection', function(ws) {
	console.log('New connection')

	ws.on('message', function(message) {
		clients.add(ws)
		for(let client of clients) {
			client.send(message);
		}
		console.log(message)
	})

	ws.on('close', function(message) {
		clients.delete(ws);
		console.log(message)
	});

})





