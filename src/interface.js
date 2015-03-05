$.each(apiData, function(index, city) {
  $('.cities').append(
    $('<option></option>').val(city).html(city + " ⌄")
  );
});

var cityName = $('.cities').val();

$.getJSON('http://api.openweathermap.org/data/2.5/weather?q='+cityName+',uk',function(data){
  $('.temperature').text(data.main.temp);

});