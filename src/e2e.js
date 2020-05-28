describe('Protractor Find-My-Home', function() {
  var searchKeywords = element(by.css('.keytext > input'));
  var houseListNumber = element(by.css('div > div.ui.huge.header.center'));
  var bedroomDropdown = element(by.css('.dropdown.icon'));
  var bedroomNumber = element(by.cssContainingText('span', '4'))
  var findMyHomeBtn = element(by.css('button[type="submit"]'))
  var priceInput = element(by.css('input[type=number]'))
  var showMapView = element(by.cssContainingText('button', 'Show Map'))
  var showListView = element(by.cssContainingText('button', 'Show List'))
  var mapFrame = element(by.css('.gm-style-pbc'))
  var houseDetails = element.all(by.css('div:nth-child(1) > img')).get(1)
  var houseIcon = element(by.css('.centered.image'))
  browser.ignoreSynchronization = true
  beforeAll(function() {
    browser.get('https://find-my-home-sage.now.sh/buy');
  });

  it('should have a title', function() {
    expect(browser.getTitle()).toEqual('Find-My-Home');
  });

  it('should search for pool houses', function() {
    searchKeywords.sendKeys('pool');
    findMyHomeBtn.click();

    expect(houseListNumber.getText()).toEqual('Featured Listings ( 21 Houses )');
    
  });
  it('should search for houses with bedrooms', function() {
    bedroomDropdown.click()
    bedroomNumber.click()
    
    findMyHomeBtn.click();
    expect(houseListNumber.getText()).toEqual('Featured Listings ( 10 Houses )');

 
  });
  it('should search for houses within price', function() {

    priceInput.sendKeys(1000000)
    findMyHomeBtn.click();
    expect(houseListNumber.getText()).toEqual('Featured Listings ( 4 Houses )');
  });

  it('should load map', function() {
    showMapView.click()
    browser.sleep(1000)
    expect(mapFrame.isPresent()).toBe(true);
  });

  it('should see house details on map', function() {
    houseDetails.click()
    expect(houseIcon.isPresent()).toBe(true);
  });
  it('should show list view', function() {
   showListView.click()
   expect(houseListNumber.getText()).toEqual('Featured Listings ( 4 Houses )');
  });
});
