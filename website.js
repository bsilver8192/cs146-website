window.onscroll = function() {
  if( document.getElementById("scroll") != null)
  {
    var doc = document.documentElement;
    var top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
    var possibleScroll = document.body.clientWidth / 2048 * 1360 - 350;
    var scroll = (top - 50) / 350 * possibleScroll;
    document.getElementById("scroll").style.backgroundPosition= "0px -" + (top - 50 > 0 ? scroll : 0) + "px";
  }
};


function submitForm()
{
  // Short names for things that this function does a lot because I don't feel
  // like typing them repeatedly.
  var byId = function(id) { return document.getElementById(id); };
  var idValue = function(id) { return byId(id).value; }

  byId("form1").style.display = "none";

  byId("matching").style.display = "block";

  var addressHTML = '';
  addressHTML += idValue('firstname') + ' ' + idValue('lastname');
  addressHTML += '<br />';
  addressHTML += idValue('address1');
  addressHTML += '<br />';
  if (idValue('address2') != '') {
      addressHTML += idValue('address2');
      addressHTML += '<br />';
  }
  addressHTML += idValue('city') + ', ' + idValue('state') + ' ' +
      idValue('zipcode');
  byId('address').innerHTML = addressHTML;

  infoHTML = '';
  infoHTML += 'Username: ' + idValue('username');
  infoHTML += '<br />';
  infoHTML += 'Password: ' + idValue('password');
  infoHTML += '<br />';
  infoHTML += 'You were born in ' + idValue('birth_year');
  byId('personal_info').innerHTML = infoHTML;

  setTimeout(function(){
      byId("matching").style.display = "none";
      byId("match").style.display = "block";
  }, 3500 + 1500 * Math.random());
}