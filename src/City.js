var City = function(){
  this.temp = 20;
  this.outlook = 'sunny';
  this.cityName = 'london';

};

City.prototype.setTemp = function(newTemp) {
  this.temp = newTemp;
};

City.prototype.setOutlook = function(newOutlook) {
  this.outlook = newOutlook;
};

City.prototype.setName = function(newName) {
  this.cityName = newName;
};
