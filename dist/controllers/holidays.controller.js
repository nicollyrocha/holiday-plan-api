"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const db = require('../config/database');
exports.getHolidays = async (req, res) => {
    const { rows } = await db.query(`SELECT * FROM holidays`);
    if (rows.length > 0) {
        res.status(201).send({
            holidays: rows,
            message: 'Holidays found!',
            status: 201,
        });
    }
    else {
        return res.status(400).send({
            message: 'Nothing found!',
            status: 400,
        });
    }
};
exports.createHoliday = async (req, res) => {
    const { date, title, description, participants, locations } = req.body;
    const formatArrayLocations = locations.map((object) => `'${object}'`);
    const formatArrayParticipants = participants
        ? participants.map((object) => `'${object}'`)
        : [];
    const { rows } = await db.query(`SELECT * FROM holidays WHERE date = '${date}'`);
    if (rows.length > 0) {
        return res.status(400).send({
            message: 'Another holiday was created on this date!',
            status: 400,
        });
    }
    else {
        await db.query(`INSERT INTO holidays (title, description, date, locations${participants.length > 0 ? ', participants' : ''}) VALUES ('${title}', '${description}', '${date}', array[ ${formatArrayLocations} ]${participants && participants.length > 0
            ? `, array[ ${formatArrayParticipants} ]`
            : ''})`);
        return res.status(201).send({
            holiday: {
                title,
                message: 'Holiday added successfully!',
            },
            status: 201,
        });
    }
};
exports.updateHoliday = async (req, res) => {
    const { participants, locations, date, title, description, id } = req.body;
    const formatArrayLocations = locations.map((object) => `'${object}'`);
    const formatArrayParticipants = participants
        ? participants.map((object) => `'${object}'`)
        : [];
    const { rows } = await db.query(`SELECT * FROM holidays WHERE date = '${date}' AND id != '${id}'`);
    if (rows.length > 0) {
        return res.status(400).send({
            message: 'Another holiday was created on this date!',
            status: 400,
        });
    }
    else {
        await db.query(`UPDATE holidays SET title = '${title}', description = '${description}', date = '${date}', locations = array[ ${formatArrayLocations} ]${participants && participants.length > 0
            ? `, participants = array[ ${formatArrayParticipants} ]`
            : ''} WHERE id = '${id}'`);
        res.status(201).send({
            status: 201,
            message: 'Holiday updated!',
        });
    }
};
exports.deleteHoliday = async (req, res) => {
    const id = req.params.id;
    const { rows } = await db
        .query(`DELETE FROM holidays WHERE id = '${id}'`)
        .then((data) => res.status(201).send({
        message: 'Holiday deleted!',
        status: 201,
    }))
        .catch((err) => {
        return res.status(400).send({
            message: 'Error!',
            status: 400,
        });
    });
};
//# sourceMappingURL=holidays.controller.js.map