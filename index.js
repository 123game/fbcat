var https = require('https');

/**
 * Validate Facebook access token
 *
 * @param	{String} user_id, user_access_token, app_access_token
 * @return callback {bool}
 */
module.exports = {
  check: function(user_id, user_access_token, app_access_token, callback) {

    if (!user_id || !user_access_token || !app_access_token) {
      callback(false);
    }

    var options = {
      host: 'graph.facebook.com',
      path: '/debug_token?input_token=' + user_access_token + '&access_token=' + app_access_token
    };

    https.get(options, function(res) {
      var string_data = '';

      res.on('data', function(chunk) {
        string_data += chunk;
      });

      res.on('end', function() {
        var json_data = JSON.parse(string_data);
        if (json_data.data && json_data.data.is_valid && json_data.data.user_id == user_id) {
          callback(true);
        } else {
          callback(false);
        }
      });
    });
  }
};
