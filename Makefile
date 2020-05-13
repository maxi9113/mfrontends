PACKAGE_NAME=containe-mfs
HOST_PORT=3000
PROJECT_FOLDER=.
GIT_DIR=$(shell pwd)
launch:
	yarn start
build:
	docker build -t $(PACKAGE_NAME) -f Dockerfile --build-arg module_folder=$(PROJECT_FOLDER) --build-arg package_name=$(PACKAGE_NAME) $(GIT_DIR)
shell:
	docker run -it --rm -v $(GIT_DIR):/app -p $(HOST_PORT):3000  -w /app/$(PROJECT_FOLDER) --entrypoint=/bin/ash $(PACKAGE_NAME)