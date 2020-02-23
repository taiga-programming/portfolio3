// itemをすべて選択する
var items = document.querySelectorAll('.activity__item');

items.forEach((item)=> {

  item.addEventListener('mouseover', function(){

    var img = item.querySelector('.activity__img');

    img.style.width = "35rem";
  });

  item.addEventListener('mouseleave', function(){

    var img= item.querySelector('.activity__img');

    img.style.width= "30rem";
  });

  item.addEventListener('mouseover', function(){

    var text = item.querySelector('.activity__text');


    text.style.margin = "1rem";
  });

  item.addEventListener('mouseleave', function(){

    var text= item.querySelector('.activity__text');

    text.style.margin= "0";
  });

  item.addEventListener('mouseover', function(){

    var text = item.querySelector('.activity__text');


    text.style.color = "#fff";
  });

  item.addEventListener('mouseleave', function(){

    var text= item.querySelector('.activity__text');

    text.style.color= "#000";
  });


});





