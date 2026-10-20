.PHONY: install dev build start lint typecheck test check

install:
	npm ci

dev:
	npm run dev

build:
	npm run build

start:
	npm run start

lint:
	npm run lint

typecheck:
	npm run typecheck

test:
	npm run test

check:
	npm run check
