import { Holiday } from '../models/holiday.model';
const db = require('../config/database');

exports.getHolidays = async (req: any, res: any) => {
	const { rows } = await db.query(`SELECT * FROM holidays`);

	if (rows.length > 0) {
		res.status(201).send({
			holidays: rows,
			message: 'Holidays found!',
			status: 201,
		});
	} else {
		return res.status(401).send({
			body: {
				message: 'Nothing found!',
				status: 401,
			},
		});
	}
};

exports.createHoliday = async (req: any, res: any) => {
	const { date, title, description, participants, locations } = req.body;
	const formatArrayLocations = locations.map((object: string) => `'${object}'`);
	const formatArrayParticipants = participants.map(
		(object: string) => `'${object}'`
	);
	const { rows } = await db.query(
		`SELECT * FROM holidays WHERE date = '${date}'`
	);

	if (rows.length > 0) {
		return res.status(401).send({
			body: {
				message: 'Another holiday was created on this date!',
				status: 401,
			},
		});
	} else {
		await db.query(
			`INSERT INTO holidays (title, description, date, locations, participants) VALUES ('${title}', '${description}', '${date}', array[ ${formatArrayLocations} ], array[ ${formatArrayParticipants} ])`
		);
		return res.status(201).send({
			body: {
				holiday: {
					title,
					message: 'Holiday added successfully!',
				},
				status: 201,
			},
		});
	}
};
