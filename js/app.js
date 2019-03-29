
$(document).ready(function() {
  var imagens = [];
  var url = [];
  var texto  = [];
  $.getJSON('js/json/dados.json', function(data) {
    for (var i = 0; i < data.length; i++) {
      imagens.push(data[i].Image);
      url.push(data[i].Url);
      texto.push(data[i].Text);
      $('.viagens').append("<div class='card mx-2 my-1'><img class='card-img-top' src='"+imagens[i]+"' height='200' ><div class='card-body'><p class='card-text'>"+texto[i]+"</p><a href='"+url[i]+"' class='btn btn-primary'>Comprar agora!</a></div></div>");
      setTimeout(function() {
        $('.viagens').slick({
            autoplay:true,
            autoplaySpeed:420,
            arrows: false,
            dots: false,
            adaptiveHeight: true,
            infinite: true,
            speed: 4000,
            centerMode:true,
            slidesToShow: 1,
            variableWidth: true,
            responsiveClass:true,
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              },
            ]
          });
      },0);
    }

  });


});
