chai.should();

var expect = chai.expect;

var climb = domTools.climb;

describe('climb', function(){

  var scope, start;

  before(function(){

    scope = document.createElement('div');

    scope.setAttribute('id', 'parent');

    scope.innerHTML = '<p id="child">Hello, <abbr title="three-letter abbreviation">TLA</abbr>.</p>';

    document.body.appendChild(scope);

    start = scope.querySelector('abbr');

  });

  after(function(){

    document.body.removeChild(scope);

  });

  it('should return null if no such element exists', function(){

    expect(
      climb(start, function(el){ return el.tagName === 'potato'; })
    ).to.equal(null);

  });

  it('should stop at the ceiling specified', function(){

    expect(
      climb(start, function(el){ return el.tagName.toLowerCase() === 'div' }, scope.children[0])
    ).to.equal(null);

  });

  it('should stop at the body if no ceiling specified', function(){

    expect(
      climb(start, function(el){ return el.tagName.toLowerCase() === 'div' })
    ).to.equal(document.querySelector('body > div#parent'));

  });

});