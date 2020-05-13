PACKAGE_NAME=losses
VERSION=0.0.1
HOST_PORT=5000
PROJECT_FOLDER=.
SERVER_MODULE=${PACKAGE_NAME}.server
GIT_DIR=$(shell pwd)

clean-pyc:
	rm -Rf tests/__pycache__
	find . -name '*.pyc' -delete
	find . -name '*.pyo' -delete
	find . -name '*~' -delete

clean-build:
	rm -Rf build/
	rm -Rf dist/
	rm -Rf *.egg-info
	rm -Rf .cache/

clean: clean-pyc clean-build

launch:
	FLASK_APP=server.py FLASK_DEBUG=1 python3.7 -m flask run --host=0.0.0.0 --port=${HOST_PORT}

launch-gunicorn:
	gunicorn -w 4 --bind 0.0.0.0:${HOST_PORT} --access-logfile - --error-logfile - server:app

launch-dev:
	FLASK_APP=server.py FLASK_DEBUG=1 python3.7 -m flask run --host=0.0.0.0 --port=5000

build: clean
	docker build -t $(PACKAGE_NAME) -f Dockerfile --build-arg module_folder=$(PROJECT_FOLDER) --build-arg package_name=$(PACKAGE_NAME) $(GIT_DIR)

shell: clean
	docker run -it --rm -v $(GIT_DIR):/app-run -p $(HOST_PORT):5000 -e SQLALCHEMY_URI="mysql+pymysql://custosapp:i76RTdS5@192.168.0.21:3308/custos" -w /app-run/$(PROJECT_FOLDER) --entrypoint=/bin/ash $(PACKAGE_NAME)

shell-host: clean
	docker run -it --rm -v $(GIT_DIR):/app -p $(HOST_PORT):5000 --network host -w /app/$(PROJECT_FOLDER) --entrypoint=/bin/ash $(PACKAGE_NAME)

install-requirements:
	pip -v install -r requirements.txt