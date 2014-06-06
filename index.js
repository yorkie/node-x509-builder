
var x509 = require('x509');
exports.build = buildX509;

function buildX509(buffer) {
  if (typeof buffer !== 'string') {
  	buffer = buffer.toString('base64');
  }
  var result = '-----BEGIN CERTIFICATE-----\n';
  var offset = 0;
  while (offset < buffer.length) {
    result += buffer.slice(offset, offset + 64) + '\n';
    offset += 64;
  }
  result += '-----END CERTIFICATE-----';
  return x509.parseCert(result);
}
