
all: local-open

local-open:
	@heroku local web

open:
	@heroku open

log:
	@heroku logs --tail

