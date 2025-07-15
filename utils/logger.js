function log(message) {
  const timestamp = new Date().toLocaleString();
  console.log(`[${timestamp}] [LOG]: ${message}`);
}
ßg
const multiply = (a,b) => a*b

module.exports = { log, multiply };
