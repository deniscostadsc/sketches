PHONY: run update-p5 new-sketch

run:
	python -m http.server

update-p5:
	./scripts/update_p5.sh

new-sketch:
	@read -p "What is the sketch name: " sketch_name; \
	mkdir -p ./sketches/$$sketch_name; \
	cp ./template-sketch/* ./sketches/$$sketch_name; \
	sed -i "s/###/$$sketch_name/" ./sketches/$$sketch_name/index.html

lint:
	npm run lint
