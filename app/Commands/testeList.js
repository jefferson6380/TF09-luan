import dotenv from 'dotenv';
import path from 'path';

dotenv.config({
    path: path.resolve('../../.env')
});

import hubspotList from './CompanyListHubspotCommand.js';

hubspotList.handle();