describe('City', function(){
  var city;
  beforeEach(function(){
    city = new City;
  });

  describe('knows that it', function(){

    it('has a temperature', function(){
      expect(city.temp).toEqual(20);
    });

    it('can set its temperature', function(){
      city.setTemp(22);
      expect(city.temp).toEqual(22);
    });

    it('has an outlook', function(){
      expect(city.outlook).toEqual('sunny')
    });

    it('can set its outlook', function(){
      city.setOutlook('rainy');
      expect(city.outlook).toEqual('rainy');
    });

    it('has a name',function(){
      expect(city.cityName).toEqual("london");
    });

    it('can set its name', function() {
      city.setName('paris');
      expect(city.cityName).toEqual("paris");
    });

  });

});