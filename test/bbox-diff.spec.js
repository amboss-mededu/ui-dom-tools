chai.should();

var expect = chai.expect;

var bboxDiff = domTools.bboxDiff;

describe('bbox diff', function(){

  var scope, start;

  before(function(){

    scope = document.createElement('div');

    scope.innerHTML = '<div id="child" style="position: relative; top: 3px;"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="490px" height="567px" viewBox="0 0 490 567" version="1.1" style="background-color: rgb(255, 255, 255); max-width: 490px;"><svg transform="translate(0.5,0.5)"><path d="M 340 406 L 340 414.88" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 340 421.88 L 336.5 414.88 L 343.5 414.88 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 340 473 L 340 473" fill="none" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><path d="M 340 473 L 340 473 L 340 473 Z" fill="#000000" stroke="#000000" stroke-miterlimit="10" pointer-events="none"/><rect x="134.71" y="71" width="170" height="50" rx="7.5" ry="7.5" fill="#cef1fc" stroke="none" pointer-events="none"/><g transform="translate(144.5,73.5)"><switch><foreignObject style="overflow:visible;" pointer-events="all" width="150" height="44" requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"><div xmlns="http://www.w3.org/1999/xhtml" style="display: inline-block; font-size: 12px; font-family: Helvetica; color: rgb(51, 51, 51); line-height: 1.2; vertical-align: top; width: 150px; white-space: nowrap; word-wrap: normal; text-align: center;"><div xmlns="http://www.w3.org/1999/xhtml" style="display:inline-block;text-align:inherit;text-decoration:inherit;">Order labs: <br /><b>Plasma</b>: Na<sup>+</sup> and osmolality<br /><b>Urine</b>: osmolality</div></div></foreignObject><text x="75" y="28" fill="#333333" text-anchor="middle" font-size="12px" font-family="Helvetica">[Not supported by viewer]</text></switch></g></svg></div>';

    document.body.appendChild(scope);

    start = scope.querySelector('abbr');

  });

  after(function(){

    document.body.removeChild(scope);

  });

  it('should calculate the correct sum for HTML nodes.', function(){

    var offsetSimple = bboxDiff(scope.children[0], scope);

    expect(offsetSimple.top).to.equal(3);
    expect(offsetSimple.left).to.equal(0);

  });

  it('should detect when the left element isn\'t visible in the first place', function(){

    var offsetVisible = bboxDiff(
      scope.querySelector('switch').children[1], scope
    );

    expect(offsetVisible.visible).to.equal(false);

  });

  it('should accept an existing bbox', function(){

    var offsetExisting = bboxDiff(
      scope.children[0], scope.getBoundingClientRect()
    );

    expect(offsetExisting.top).to.equal(3);
    expect(offsetExisting.left).to.equal(0);

  });

  it('should query only a subset of keys if provided', function(){

    var offsetTop = bboxDiff(
      scope.children[0], scope.getBoundingClientRect(), ['top']
    );

    expect(offsetTop.top).to.equal(3);
    expect(offsetTop.left).to.be.undefined;

  });

});