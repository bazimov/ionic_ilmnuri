angular.module('filters.underscore', [])

.filter('removeUnderscores', [function() {
    return function(string) {
        if (!angular.isString(string)) {
            return string;
        }
        return string.replace(/_/g, ' ');
    };
}])
