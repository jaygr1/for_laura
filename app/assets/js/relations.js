$( document ).ready(function() {

  function gender() {
    $('.gender-male').hide()
    $('.gender-male-female').click(function(){
      if ($('#relation_gender_male').is(':checked')){
        $('.gender-female').hide()
        $('.gender-male').show()
      } else if ($('#relation_gender_female').is(':checked')){
        $('.gender-male').hide()
        $('.gender-female').show()
      }
    })
  }

  function flowersPricing(){
    $('.birthday-flowers-pricing').hide();
    $('.birthday-flowers-yes-no').click(function(){
      if ($('#relation_birthdays_flowers_yes').is(":checked")) {
        $('.birthday-flowers-pricing').show();
      } else {
        $('.birthday-flowers-pricing').hide();
      }
    })
  }

  function giftPricing(){
    $('.birthday-gift-pricing').hide();
    $('.birthday-gift-yes-no').click(function(){
      if ($('#relation_birthdays_gift_yes').is(":checked")) {
        $('.birthday-gift-pricing').show();
      } else {
        $('.birthday-gift-pricing').hide();
      }
    })
  }

  function chocolatePricing(){
    $('.birthday-chocolate-pricing').hide();
    $('.birthday-chocolate-yes-no').click(function(){
      if ($('#relation_birthdays_chocolate_yes').is(":checked")) {
        $('.birthday-chocolate-pricing').show();
      } else {
        $('.birthday-chocolate-pricing').hide();
      }
    })
  }

  function flowersPricingAnniversary(){
    $('.anniversary-flowers-pricing').hide();
    $('.anniversary-flowers-yes-no').click(function(){
      if ($('#relation_anniversarys_flowers_yes').is(":checked")) {
        $('.anniversary-flowers-pricing').show();
      } else {
        $('.anniversary-flowers-pricing').hide();
      }
    })
  }

  function giftPricingAnniversary(){
    $('.anniversary-gift-pricing').hide();
    $('.anniversary-gift-yes-no').click(function(){
      if ($('#relation_anniversarys_gift_yes').is(":checked")) {
        $('.anniversary-gift-pricing').show();
      } else {
        $('.anniversary-gift-pricing').hide();
      }
    })
  }

  function chocolatePricingAnniversary(){
    $('.anniversary-chocolate-pricing').hide();
    $('.anniversary-chocolate-yes-no').click(function(){
      if ($('#relation_anniversarys_chocolate_yes').is(":checked")) {
        $('.anniversary-chocolate-pricing').show();
      } else {
        $('.anniversary-chocolate-pricing').hide();
      }
    })
  }

  gender();

  flowersPricing();
  giftPricing();
  chocolatePricing();

  flowersPricingAnniversary();
  giftPricingAnniversary();
  chocolatePricingAnniversary();
});
