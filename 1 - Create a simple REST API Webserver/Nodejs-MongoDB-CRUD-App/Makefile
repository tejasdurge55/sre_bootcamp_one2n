# Install dependencies
.PHONY: install
install:
	@npm install

# Run server
.PHONY: run
run:
	@npm start

# Run tests
.PHONY: test
test:
	@npm test

# Run database migrations
.PHONY: migrate
migrate:
	@node migrations/create-student-schema.js
