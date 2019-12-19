import { APIServer } from './server';

const PORT = process.env.PORT || 5001;
APIServer.listen(PORT, () => {
  console.log('Server Started! %s', PORT);
});
