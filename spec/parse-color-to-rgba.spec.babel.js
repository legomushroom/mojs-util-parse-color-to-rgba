import parseColorToRgba from '../src/parse-color-to-rgba.babel.js';

describe('`parseColorToRgba` ->', function () {
  describe('`hex` colors ->', function () {
    it('should parse hex colors', function () {

      var colorObject = parseColorToRgba('#fafcbd');

      expect(colorObject.r).toBe(250);
      expect(colorObject.g).toBe(252);
      expect(colorObject.b).toBe(189);
      expect(colorObject.a).toBe(1);

      var colorObject = parseColorToRgba('#ced');

      expect(colorObject.r).toBe(204);
      expect(colorObject.g).toBe(238);
      expect(colorObject.b).toBe(221);
      expect(colorObject.a).toBe(1);
    });
  });

  describe('`rgb` colors ->', function () {
    it('should parse rgb colors', function () {

      var colorObject = parseColorToRgba('rgb(145, 12, 100)');

      expect(colorObject.r).toBe(145);
      expect(colorObject.g).toBe(12);
      expect(colorObject.b).toBe(100);
      expect(colorObject.a).toBe(1);

      var colorObject = parseColorToRgba('rgba(77, 2, 89, .25)');

      expect(colorObject.r).toBe(77);
      expect(colorObject.g).toBe(2);
      expect(colorObject.b).toBe(89);
      expect(colorObject.a).toBe(.25);
    });
  });

  describe('should parse other colors ->', function () {
    it('should parse shortcut colors', function () {
      var colorObject = parseColorToRgba('cyan');

      expect(colorObject.r).toBe(0);
      expect(colorObject.g).toBe(255);
      expect(colorObject.b).toBe(255);
      expect(colorObject.a).toBe(1);

      var colorObject = parseColorToRgba('hotpink');

      expect(colorObject.r).toBe(255);
      expect(colorObject.g).toBe(105);
      expect(colorObject.b).toBe(180);
      expect(colorObject.a).toBe(1);
    });
  });

});
