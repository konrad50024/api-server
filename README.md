# Welcome to Doggo Sports

## Currently working:

- Web HMR works
- API Server Nodemon works
- There's a Postgres database

## Need to:

- Wire them together (But it might work straight off the toppa the dome?)
- Figure out how different environments work for testing/stages/deploy

# How to Use

## Create a new image

### Only use -d if you arent worried about the logs

docker compose up --build -d

## Use the existing image

### Only use -d if you arent worried about the logs

docker compose up -d

## Ports

Web front-end: 3000
Mobile front-end: ?
API: 5000
Postgres: 5432
pgAdmin: 5050
