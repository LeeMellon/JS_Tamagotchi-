import {Tamagotchi} from './../src/js/tamagotchi.js';
import {gestate} from './../src/js/rules.js';

describe('Tamagotchi', function() {
  it('should set tamas name', function() {
    var tama = new Tamagotchi("Phil");
    expect(tama.name).toEqual("Phil");
  });

  // describe('gestate', function() {
    it('should create life!', function() {
      let newTama = gestate("Phil");
      expect(newTama.name).toEqual("Phil");
    });

// });


});
