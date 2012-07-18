module.exports = function selectKeys(obj, keys) {
  var result = {};
  (keys || []).forEach(function (key) {
    if (obj.hasOwnProperty(key)) {
      result[key] = obj[key];
    }
  });
  return result;
};
