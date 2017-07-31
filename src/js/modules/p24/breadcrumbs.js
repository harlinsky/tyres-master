// (function($) {
//
//   if($('body').is('.page-product')){
//
//     if ((window.matchMedia("(max-width: 1023px)").matches)) {
//
//       var target = $('.breadcrumbs-item .breadcrumbs-link:last');
//       var cutText = target.attr( "data-original" );
//       var result = start_and_end(cutText);
//       target.html( result );
//
//       function start_and_end(str) {
//         if (str.length > 20) {
//           return str.substr(0, 5) + '...' + str.substr(str.length-5, str.length);
//         }
//         return str;
//       }
//
//     }
//     if ((window.matchMedia("(min-width: 1024px)").matches)) {
//
//       var target = $('.breadcrumbs-item .breadcrumbs-link:last');
//       var cutText = target.attr( "data-original" );
//       var result = start_and_end(cutText);
//       target.html( result );
//
//       function start_and_end(str) {
//         if (str.length > 20) {
//           return str.substr(0, 5) + '...' + str.substr(str.length-5, str.length);
//         }
//         return str;
//       }
//
//     }
//
//   }
//
// })(jQuery); // eof autoFunction
