// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj == null) return "null";

  switch (obj.constructor) {
    case String:
      return '"' + obj + '"';
      break;

    case Array:
      if (obj.length >= 1) {
        var stringifiedJSON = [];

        _.each(obj, function(el){
          stringifiedJSON.push(stringifyJSON(el));
        });

        return '[' + stringifiedJSON.join(",") + ']';
      } else {
        return '[]';
      }
    break;

    case Object:
      var keys = Object.keys(obj);
      if (keys.length >= 1) {
        var stringifiedJSON = '';

        _.each(keys, function(key, index){
          if (obj[key] === undefined || key.constructor === Function || typeof obj[key] === 'function') {}
          else {
            stringifiedJSON += stringifyJSON(key) + ':' + stringifyJSON(obj[key]);
            if (!(index === keys.length - 1)) stringifiedJSON += ',';
          }
        });

        return '{' + stringifiedJSON + '}';
      } else {
        return '{}';
      }
    break;

  }
  
  return obj.toString();
};
