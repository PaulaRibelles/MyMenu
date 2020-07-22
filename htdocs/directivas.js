app.directive('slickSlider', function ($timeout) {
    return {
        restrict: 'A',
        scope: { 'data': '=' },
        link: function (scope, element, attrs) {
            var isInitialized = false;
            scope.$watch('data', function (newVal, oldVal) {
                console.log(newVal);
                if (newVal > 0 && !isInitialized) {
                    $timeout(function() {
                        $(element).slick(scope.$eval(attrs.slickSlider));
                        isInitialized = true;
                    }, 250);
                }
            });
        }
    }
});