import axios from 'axios';

import {baseUrl} from './const';

export const $theNewsAPI_api_public = axios.create({
    baseURL: baseUrl,
    headers: {
        'X-API-KEY': '5d3f8b8a808a43fca1ea33ebce0dc00d'
    }
});

$theNewsAPI_api_public.interceptors.request.use((config) => {
    if (!config?.headers) {
        throw new Error('Expected \'config\' and \'config.headers\' not to be undefined');
    }
    return config;
});