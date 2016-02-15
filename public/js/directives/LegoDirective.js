angular.module('LegoDirective', []).directive('legoPlate', function ()
{
  return {
    restrict: 'E',
    templateUrl: '../views/lego_view.html'
  };
});
