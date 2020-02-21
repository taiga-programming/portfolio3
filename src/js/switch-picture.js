// itemをすべて選択する
var items = document.querySelectorAll('.dream__item');


items.forEach((item)=> {

  item.addEventListener('mouseover', function(){

    var link = item.querySelector('.dream__link');

    link.style.color = "#111";
  });

  item.addEventListener('mouseleave', function(){

    var link = item.querySelector('.dream__link');

    link.style.color= "#FFF";
  });


  item.addEventListener('mouseover', function(){

    var text = item.querySelector('.dream__container-text');

    text.style.opacity= 100;
  });

  item.addEventListener('mouseleave', function(){

    var text = item.querySelector('.dream__container-text');

    text.style.opacity= 0;
  });

    item.addEventListener('mouseover', function(){

      var img = item.querySelector('.dream__img');

      img.style.opacity= 0.5;
  });

  item.addEventListener('mouseleave', function(){

    var img = item.querySelector('.dream__img');

    img.style.opacity= 1; 
  });
});

