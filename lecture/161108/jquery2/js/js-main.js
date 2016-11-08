jQuery(function(this.$){
  'use strict'
  var $body = $('row-a')
  console.log($body)
}

(function(global,$){
  'use strict'
  var $body = $('row-a')
  console.log($body)
}(this,this.$)


(function($){
  내용내용
})(this.jQuery);
