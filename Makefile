.PHONY: run update-p5 new-sketch lint test

run:
	python3 -m http.server

update-p5:
	./scripts/update_p5.sh

new-sketch:
	# Each Makefile line is a subshell, so variables are only visible on the
	# same line. So to access "sketch_name", we need to keep the whole command
	# in a single line.
	@read -p "What is the sketch name: " sketch_name; \
	mkdir -p ./sketches/$(shell date +%Y-%m-%d)-$$sketch_name; \
	cp ./sketch-template/* ./sketches/$(shell date +%Y-%m-%d)-$$sketch_name; \
	sed -i "s/###/$$sketch_name/" \
		./sketches/$(shell date +%Y-%m-%d)-$$sketch_name/index.html

lint:
	npm run lint
	shellcheck -x $(shell find . -name '*.sh' -not -path "./node_modules/*")
