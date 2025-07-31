const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8171955798:AAHIEZDEgXLc7996Knj2oMMpt7GYe7E8_YI',
  id: isNaN(parsedId) ? 2037939353 : parsedId // replace 12345.. with your telegram chat id
};
