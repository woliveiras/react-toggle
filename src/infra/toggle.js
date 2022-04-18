import * as configcat from 'configcat-js';

const configCatlogger = configcat.createConsoleLogger(3);

export const toggler = configcat.createClient(`${process.env.REACT_APP_CONFIGCAT_SDK_KEY}`, { 
  logger: configCatlogger
});