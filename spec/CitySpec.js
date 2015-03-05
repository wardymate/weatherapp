describe('City', function(){

  var city;

  it('has a temperature', function(){
    city = new City;
    expect(city.temp).toEqual(20);
  });

  it('can set its temperature', function(){
    city = new City;
    city.setTemp(22);
    expect(city.temp).toEqual(22);
  });



});