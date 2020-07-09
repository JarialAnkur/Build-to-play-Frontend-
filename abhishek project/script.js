$(document).ready(function() {

  $('.color-choose input').on('click', function() {
      var headphonesColor = $(this).attr('data-image');

      $('.active').removeClass('active');
      $('.left-column img[data-image = ' + headphonesColor + ']').addClass('active');
      $(this).addClass('active');
  });

});

function addProduct(target) {
  var productAdded = '<li class="cd-cart-product"><div class="cd-cart-image"><a href="#0"><img src="img/black.png" alt="placeholder"></a></div><div class="cd-cart-details"><h3 class="truncate"><a href="#0">Beats EP Headphones</a></h3><span class="cd-cart-price">Rs.14,990/-</span><div class="cd-cart-actions"><a href="#0" class="cd-cart-delete">Delete</a><div class="cd-cart-quantity"><label for="cd-product-'+ productID +'"> Qty</label><span class="cd-cart-select"><select class="reset" id="cd-product-'+ productID +'" name="quantity"><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select><svg class="icon" viewBox="0 0 12 12"><polyline fill="none" stroke="currentColor" points="2,4 6,8 10,4 "/></svg></span></div></div></div></li>';
  cartList.insertAdjacentHTML('beforeend',productAdded);
};