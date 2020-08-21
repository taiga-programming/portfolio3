$('.movetext').each(function(){
  //一文字ずつ<span>で括る
  $(this).children().addBack().contents().each(function() {
      if (this.nodeType == 3) {
      $(this).replaceWith($(this).text().replace(/(\S)/g, '<span>$1</span>'));
      }
  });
   
　　//inviewを使って画面に表れたら起動させる
  $(this).on('inview',function(){
      //一文字ずつ順番に不透明させる
      $(this).css({'opacity':1});
      for (var i = 0; i <= $(this).children('span').length; i++) {
      $(this).children('span').eq(i).delay(100*i).animate({'opacity':1},800);
      };
  });
});