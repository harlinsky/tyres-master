

$(function() {

  var classes = '.page-module, .page-index, .page-catalog-tire, .page-catalog-oil, .page-catalog-disk, .page-catalog-parts';

  // var classes = ['.page-module', '.page-index', '.page-catalog-tire', '.page-catalog-oil', '.page-catalog-disk', '.page-catalog-parts'];

  if($('body').is(classes)){
    jcf.replaceAll();
  }

});
