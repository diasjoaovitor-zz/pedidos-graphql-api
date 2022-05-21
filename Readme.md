```
sudo npm install -g firebase-tools

mkdir pedidos-graphql-api
cd pedidos-graphql-api

yarn init -y
git init .

firebase init # select firestore and functions

mkdir functions/graphql

cd functions/graphql && touch types.js resolvers.js queries.js schema.js index.js && cd ../

yarn && yarn add graphql graphql-yoga
```

in `package.json` adds

```json
{
  // [...]
  "type": "module"
}
```

and removes all lint configs

```
cd .. && firebase deploy
cd functions && yarn serve
```