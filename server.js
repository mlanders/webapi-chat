const express = require('express'); // importing a CommonJS module
const helmet = require('helmet');
const morgan = require('morgan');

const hubsRouter = require('./hubs/hubs-router.js');

const server = express();

function teamNamer(req, res, next) {
	req.name = 'Web XVI';
	next();
}

//Global Middleware
server.use(express.json());
server.use(helmet());
server.use(morgan('dev'));
server.use(teamNamer);
// server.use(moodyGateKeeper);

server.use('/api/hubs', restricted, hubsRouter);

server.get('/', async (req, res, next) => {
	if (req.headers.name === 'po') {
		res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome ${req.name}, to the Lambda Hubs API</p>
  `);
	} else {
		next(`any arguments will triggle the next error handleing middleware`);
	}
});

server.use(errorHandler);

function errorHandler(error, req, res, next) {
	res.status(400).json({ message: `Bad Panda`, error: error });
}

function restricted(req, res, next) {
	// `speak friend and enter`
	const password = req.headers.authorization;
	if (password === 'mellon') {
		next();
	} else {
		res.status(401).json({ messsage: 'please login before accessing the dungeon' });
	}
}

function moodyGateKeeper(req, res, next) {
	const seconds = new Date().getSeconds();
	if (seconds % 3 === 0) {
		res.status(403).json({ you: `shall not pass!` });
	} else {
		next();
	}
}

server.use((req, res) => {
	res.status(404).send('Not an endpoint');
});

// export default server; ES2015 Modules
module.exports = server;
