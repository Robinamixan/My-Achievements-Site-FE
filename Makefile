#!/bin/bash

-include .env

RED=\033[0;31m
GREEN=\033[0;32m
NOCOLOUR=\033[0m

CONTAINER_NAME=email-parser-admitad

.PHONY: just-work
just-work: create-files build start
	@printf "$(GREEN)The project has been set up and running.$(NOCOLOUR)\n"

.PHONY: create-files
create-files:
	@if [ ! -f ./.env ]; then \
		cp -p  .env.example .env; \
		printf "$(GREEN)Created .env file with default settings.$(NOCOLOUR)\n"; \
	fi

.PHONY: build
build:
	@docker-compose -f .docker/docker-compose.yaml build

.PHONY: start
start:
	@docker-compose -f .docker/docker-compose.yaml up -d

.PHONY: stop
stop:
	@docker-compose -f .docker/docker-compose.yaml down

.PHONY: eslint
eslint:
	@docker exec -it my_achievements_fe ./node_modules/.bin/eslint ./src
	@printf "$(GREEN)Project checked$(NOCOLOUR)\n"

.PHONY: eslint-fix
eslint-fix:
	@docker exec -it my_achievements_fe ./node_modules/.bin/eslint ./src
	@printf "$(GREEN)Project checked$(NOCOLOUR)\n"

.PHONY: bash
bash:
	@docker exec -it my_achievements_fe bash