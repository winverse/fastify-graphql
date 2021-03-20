# Fastify-graphql

Steps to run this project:

1. Run `yarn` command
2. Setup database settings inside `ormconfig.json` file
3. Run `yarn dev` command

# Typeorm

##  migration

### Create new migraion

You can create a new migration using CLI:

```json
// create migration
npx typeorm migration:create -n PostRefactoring
```

### Running and reverting migrations

You run them using a CLI command:

```json
// run
npx typeorm migrtion: run

// revert
npx typeorm migration:revert
```
