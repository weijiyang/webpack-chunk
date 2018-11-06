setTimeout(function() {
    require.ensure([], function(require) {
        require('./async.js');
    });
}, 3000)