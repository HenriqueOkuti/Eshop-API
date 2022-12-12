import server, { init } from './server';

const port = +process.env.PORT || 4000;

init().then(() => {
  server.listen(port, () => {
    /* eslint-disable-next-line no-console */
    console.log(`Listening on port ${port}.`);
  });
});
