import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve('../../.env')
});

import hubspotCreate from './CompanyCreateHubspotCommand.js';

hubspotCreate.handle();