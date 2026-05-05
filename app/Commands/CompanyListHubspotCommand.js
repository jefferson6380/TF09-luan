import axios from "axios";

export default {

    name: 'hubspot-company-list',
    description: 'List Company in Hubspot',
    arguments: {

    },

    handle: async function () {
        const hubspotToken = process.env.HUBSPOT_API_TOKEN;
        
        if (!hubspotToken) {
            console.error('HUBSPOT_API_TOKEN is not set in the environment variables.');
            return;
        }

        const url = `https://api.hubapi.com/crm/v3/objects/companies?limit=10&properties=name,address,city`;

        console.log(url);

        const response = await axios.get(url, {
            headers: {
                'Authorization': `Bearer ${hubspotToken}`
            }
        });

        console.log(response.data);
    }
}