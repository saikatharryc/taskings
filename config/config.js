config = {};
enviro = process.env.ENVIRONMENT;
if (enviro == "dev") {
	config.db = {
		type: "mongoDb",
		uri: "mongodb://test:test@ds135156.mlab.com:35156/tasking",
		db: {},
		options: { keepAlive: 1, autoReconnect: true, poolSize: 20, useMongoClient: true }
	}
}
else if (enviro == "production") {
	config.db = {
		type: "mongoDb",
		uri: "mongodb://test:test@ds135156.mlab.com:35156/tasking",
		db: {},
		options: { keepAlive: 1, autoReconnect: true, poolSize: 20, useMongoClient: true }
	}
}
else {
	config.db = {
		type: "mongoDb",
		uri: "mongodb://test:test@ds135156.mlab.com:35156/tasking",
		db: {},
		options: { keepAlive: 1, autoReconnect: true, poolSize: 20, useMongoClient: true }
	}
}

module.exports = config;
