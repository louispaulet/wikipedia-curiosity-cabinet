HOST ?= 127.0.0.1
PORT ?= 5173
PID_DIR := .tmp
PID_FILE := $(PID_DIR)/wunderwiki.pid
LOG_FILE := $(PID_DIR)/wunderwiki.log

.PHONY: up kill test build deploy

up:
	@mkdir -p $(PID_DIR)
	@pid=""; \
	if [ -f $(PID_FILE) ]; then pid="$$(cat $(PID_FILE))"; fi; \
	repo_listener=""; \
	listeners="$$(lsof -nP -tiTCP:$(PORT) -sTCP:LISTEN 2>/dev/null || true)"; \
	for listener in $$listeners; do \
		cwd="$$(lsof -a -p "$$listener" -d cwd -Fn 2>/dev/null | sed -n 's/^n//p')"; \
		if [ "$$cwd" = "$(CURDIR)" ]; then repo_listener="$$listener"; fi; \
	done; \
	if [ -n "$$repo_listener" ]; then \
		echo "Wunderwiki is already running at http://$(HOST):$(PORT)"; \
	else \
		if [ -n "$$pid" ] && kill -0 "$$pid" 2>/dev/null; then \
			echo "Stopping stale Wunderwiki process ($$pid)"; \
			kill_tree() { \
				children="$$(pgrep -P "$$1" 2>/dev/null || true)"; \
				for child in $$children; do kill_tree "$$child"; done; \
				kill "$$1" 2>/dev/null || true; \
			}; \
			kill_tree "$$pid"; \
			sleep 1; \
			kill -9 "$$pid" 2>/dev/null || true; \
			rm -f $(PID_FILE); \
		fi; \
		if lsof -nP -iTCP:$(PORT) -sTCP:LISTEN >/dev/null 2>&1; then \
		echo "Port $(PORT) is already in use. Stop that process or run 'make up PORT=<free-port>'."; \
		lsof -nP -iTCP:$(PORT) -sTCP:LISTEN; \
		exit 1; \
		fi; \
		nohup npm run dev -- --host $(HOST) --port $(PORT) --strictPort > $(LOG_FILE) 2>&1 < /dev/null & \
		echo $$! > $(PID_FILE); \
		echo "Wunderwiki started at http://$(HOST):$(PORT)"; \
		echo "Logs: $(LOG_FILE)"; \
	fi

kill:
	@if [ -f $(PID_FILE) ]; then \
		pid="$$(cat $(PID_FILE))"; \
		if kill -0 "$$pid" 2>/dev/null; then \
			echo "Stopping Wunderwiki ($$pid)"; \
			kill_tree() { \
				children="$$(pgrep -P "$$1" 2>/dev/null || true)"; \
				for child in $$children; do kill_tree "$$child"; done; \
				kill "$$1" 2>/dev/null || true; \
			}; \
			kill_tree "$$pid"; \
			sleep 1; \
			kill -9 "$$pid" 2>/dev/null || true; \
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
