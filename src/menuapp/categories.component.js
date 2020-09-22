(function () {
'use strict';

angular.module('data')
.component('menuApp', {
  templateUrl: 'src/menuapp/templates/categories.template.htm',
  bindings: {
    items: '<'
  }
});

})();

