const { contextBridge } = require('electron');
require('dotenv').config();

contextBridge.exposeInMainWorld('electronAPI', {
    getApiKey: () => process.env.API_KEY
});

