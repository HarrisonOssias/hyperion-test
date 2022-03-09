/*-----------------------------------------------------------API Dependencies------------------------------------------------------------------*/
const express = require('express');
const router = express.Router();

/*-----------------------------------------------------------Dependency Imports-------------------------------------------------------- */
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

router.use('/temperature', router);

router.get('/', async (req, res) => {
	res.send('you got temps');
});

router.post('/latest', async (req, res) => {
	// api/user/USER_ID_NUMBER
	// function must be async to return promise
	let userData = req.body;
	console.log(userData);
	try {
		const temps = await prisma.$queryRawUnsafe(
			`SELECT PERCENTILE_CONT(0.5) WITHIN GROUP(ORDER BY data.temps) as median, MAX(data.temps) as max,MIN(data.temps) as min, round(AVG(data.temps),1) as average, data.time FROM 
(SELECT unnest(temp.temperature) as temps, temp.time as time
FROM (SELECT * FROM ${userData.base} GROUP BY  time ORDER BY time DESC LIMIT ${userData.limit}) AS temp) as data
GROUP BY data.time;`
		);
		res.json(temps);
	} catch (e) {
		console.log(e);
	}
});

router.get('/time/:time', async (req, res) => {
	// api/user/USER_ID_NUMBER
	// function must be async to return promise
	let time = req.params['time'];
	try {
		const temps = await prisma.data1.findUnique({
			where: {
				time: time,
			},
		});
		res.json(temps);
	} catch (e) {
		console.log(e);
	}
});

module.exports = router;
