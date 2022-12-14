import './libs/module-alias';
import 'dotenv/config';

import { app } from '@libs/app';

const { PORT, NODE_ENV } = process.env;

app.listen(PORT, () =>
  console.log(`App running in ${NODE_ENV} mode on port: ${PORT}`),
);
