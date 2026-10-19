CREATE TABLE IF NOT EXISTS holidays (
	id SERIAL PRIMARY KEY,
	title TEXT NOT NULL,
	description TEXT,
	date TEXT NOT NULL,
	locations TEXT[] NOT NULL DEFAULT '{}',
	participants TEXT[] DEFAULT '{}'
);
