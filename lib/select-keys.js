module.exports = function selectKeys(obj, keys) {
  var result = {};
  (keys || []).forEach(function (key) {
    result[key] = obj[key];
  });
  return result;
};
