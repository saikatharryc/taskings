config = {};
enviro = process.env.ENVIRONMENT;
if (enviro == "dev") {
	config.db = {
		type: "mongoDb",
		uri: "mongodb://localhost/task",
		db: {},
		options: { keepAlive: 1, autoReconnect: true, poolSize: 20, useMongoClient: true }
	}
}
else if (enviro == "production") {
	config.db = {
		type: "mongoDb",
		uri: "mongodb://localhost/task",
		db: {},
		options: { keepAlive: 1, autoReconnect: true, poolSize: 20, useMongoClient: true }
	}
}
else {
	config.db = {
		type: "mongoDb",
		uri: "mongodb://localhost/task",
		db: {},
		options: { keepAlive: 1, autoReconnect: true, poolSize: 20, useMongoClient: true }
	}
}

module.exports = config;
