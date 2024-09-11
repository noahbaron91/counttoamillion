DROP TABLE IF EXISTS "attempt";
DROP TABLE IF EXISTS "message";

create table attempt (
	id BIGSERIAL PRIMARY KEY,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	count INTEGER NOT NULL
);

create table message (
	id BIGSERIAL PRIMARY KEY,
	created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
	author TEXT NOT NULL,
	message TEXT NOT NULL
);