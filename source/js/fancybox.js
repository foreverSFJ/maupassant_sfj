$(document).ready(function() {
  $('img').each(function() {
    if ($(this).parent().hasClass('fancybox')) return;
    if ($(this).hasClass('nofancybox')) return;
    var alt = this.alt;
    if (alt) $(this).after('<span class="caption">' + alt + '</span>');
    $(this).wrap('<a href="' + ($(this).attr('data-src') == null ? this.src : $(this).attr('data-src')) + '" title="' + alt + '" class="fancybox"></a>');
  });
  $(this).find('.fancybox').each(function(){
    $(this).attr('rel', 'article');
  });
});
$(document).ready(function() {
  var boxtext1 = "a[href$='.jpg'],a[href$='.png'],a[href$='.gif'],a[href$='.webp']";
  $(boxtext1).attr('rel', 'gallery').fancybox({
    helpers : {
    title: { type: 'inside'}
    }
  });
  // 图床附带的特殊样式，无法转化为悬浮图片，需要自定义 
  var boxtext2 = "a[href$='share'],a[href$='blog'],a[href$='blogy'],a[href$='blogw']";
  $(boxtext2).attr('rel', 'gallery').fancybox({
    helpers : {
      title: { type: 'inside'}
    }
  });
});
