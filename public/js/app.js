angular.module(
  'sandboxApp',
  ['ngRoute', 'ngResource', 'appRoutes', 'HomeViewCtrl', 'ResultViewCtrl', 'SearchService']
)

.directive('legoPlate', function ()
{
  return {
    restrict: 'E',
    templateUrl: 'views/lego_view.html'
  };
})

.directive('lego', function ()
{
  return {
    restrict: 'E',
    templateUrl: function(elem, attr) {
      return 'views/legoPlates/lego'+attr.type+'.html'
    }
  };
})

.directive('card', function ()
{
  return {
    restrict: 'E',
    templateUrl: function(elem, attr) {
      return 'views/card_'+attr.type+'.html'
    }
  };
});
