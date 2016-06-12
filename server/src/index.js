import makeStore from '~/store/makeStore';
import startServer from '~/server';

const store = makeStore();
startServer(store);
