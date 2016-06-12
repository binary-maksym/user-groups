import makeStore from '~/store/makeStore';
import React from 'react';
import ReactDOM from 'react-dom';
import App from '~/components/App';
import '~/../style.scss';

const store = makeStore();

// setTimeout(() => {
ReactDOM.render(<App store={store} />, document.getElementById('app'));
// }, 1000);
