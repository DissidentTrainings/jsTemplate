
TESTS = $(wildcard test/*.js)
PER_TICK=10
SIZE=1024
DURATION=5000

test:
	@npm install
	@bower install
	@grunt

clean:
	@../rm -.rf components
.PHONY: test