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





var fds = (function(global, $) {
  'use strict';
  return {$: jQuery}
})(this, this.jquery.noConflict(ture));
// 비공개 멤버인 jquery에 접근 가능한 유일한 방법 특권부여
// noConflict(true) 때문에 $도, jQuery 키워드도 사라졌다.
//  jQuery === undefined
//  fds.$ === jQuery . 이렇게만 접근 가능해진다


(function(fds) {
  'use strict';
  var jQuery_version = fds.$().jqeury;
  console.log('jQuery_version:', jQuery_version);
})(this, fds);
