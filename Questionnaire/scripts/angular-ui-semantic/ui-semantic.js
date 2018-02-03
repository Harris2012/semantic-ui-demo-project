//menu
angular.module('ui.semantic', [])
    .directive('smMenu', function () {
        return {
            restrict: 'A',
            link: function (scope, element, attrs) {

                $(element).dropdown({
                    on: 'hover'
                });
            }
        }
    })