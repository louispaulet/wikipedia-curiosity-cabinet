HOST ?= 127.0.0.1
PORT ?= 4173
PID_DIR := .tmp
PID_FILE := $(PID_DIR)/wunderwiki.pid
LOG_FILE := $(PID_DIR)/wunderwiki.log

.PHONY: up kill test build deploy

up:
	@mkdir -p $(PID_DIR)
	@if [ -f $(PID_FILE) ] && kill -0 "$$(cat $(PID_FILE))" 2>/dev/null; then \
		echo "Wunderwiki is already running at http://$(HOST):$(PORT)"; \
	else \
		nohup sh -c 'npm run dev -- --host $(HOST) --port $(PORT) > $(LOG_FILE) 2>&1 & echo $$! > $(PID_FILE); wait $$!' > /dev/null 2>&1 < /dev/null & \
		echo "Wunderwiki started at http://$(HOST):$(PORT)"; \
		echo "Logs: $(LOG_FILE)"; \
	fi

kill:
	@if [ -f $(PID_FILE) ]; then \
		pid="$$(cat $(PID_FILE))"; \
		if kill -0 "$$pid" 2>/dev/null; then \
			kill "$$pid"; \
			echo "Stopped Wunderwiki ($$pid)"; \
		else \
			echo "No running process found for $$pid"; \
		fi; \
		rm -f $(PID_FILE); \
	else \
		echo "No pid file found"; \
	fi

test:
	npm test

build:
	npm run build

deploy:
	npm run deploy
