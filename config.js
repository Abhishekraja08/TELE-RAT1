const parsedId = Number(process.env.ID);
module.exports = {
  token: process.env.TOKEN || '8345746043:AAFkO4Aw9Aii4cO-RfQ-OMf_AXvXA4vZdJY',
  id: isNaN(parsedId) ? 2037939353 : parsedId // replace 12345.. with your telegram chat id
};
