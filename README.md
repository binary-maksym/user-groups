# user-groups

System consists of two parts - API server and client.

Current API server runs on ws://128.199.94.82:8090 .

Client monitors socket-connection and shows message while reconnecting. 
 
Technologies used: io.socket, [React](https://facebook.github.io/react/), [Redux](http://redux.js.org/), [Immutable](https://facebook.github.io/immutable-js/), SASS, [mocha](https://mochajs.org/), [eslint](http://eslint.org/).

###Installation
```
git pull git@github.com:binary-maksym/user-groups.git
cd client
npm install
cd ../server
npm install
```

###Server run
```
cd server
npm start
```

###Client run
```
cd client
webpack-dev-server --inline
```