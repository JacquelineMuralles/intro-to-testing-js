// Unit tests for the helloWorld function

describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

describe('sayHello', function () {
    it('should be a defined function', function () {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when executed', function () {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!")
    });
    it('should return the string "Hello, Pat!" when executed', function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!")
    });
    it('should return the string "Hello, World!" when executed', function () {
        expect(sayHello()).toBe("Hello, World!")
    });
});
 describe('isFive', function () {
     it('should be a defined function', function () {
         expect(typeof isFive).toBe('function');
     });
     it('should return a boolean when executed', function () {
         expect(typeof isFive()).toBe(typeof true);
     });
     it('should return true when 5 is passed', function () {
        expect(isFive(5)).toBe(true);
     })
 });
 describe('isEven', function () {
     it('should be a defined function', function () {
         expect(typeof isEven).toBe('function');
     });
     it('should return a boolean when executed', function () {
         expect(typeof isEven()).toBe(typeof true);
     });
     it('should return true when 2 is passed', function () {
         expect(isEven(2)).toBe(true);
     });
     it('should return true when -4 is passed', function () {
         expect(isEven(-4)).toBe(true);
     });
     it('should return false when 3 is passed', function () {
         expect(isEven(3)).toBe(false);
     });
     it("should return false when 'banana' is passed", function () {
         expect(isEven("banana")).toBe(false);
     });
     it('should return true when "8" is passed', function () {
         expect(isEven("8")).toBe(true);
     });
     it('should return false when Infinity is passed', function () {
         expect(isEven(Infinity)).toBe(false);
     });
     it('should return false when true is passed', function () {
         expect(isEven(true)).toBe(false);
     });
     it('should return false when false is passed', function () {
         expect(isEven(false)).toBe(false);
     });
     it('should return false without an argument', function () {
         expect(isEven()).toBe(false)
     });
 });
 describe('isVowel', function () {
     it('should be a defined function', function () {
         expect(typeof isVowel).toBe('function')
     });
     it('should return a boolean when executed', function () {
         expect(typeof isVowel()).toBe(typeof true);
     });
     it('should return true when "a" is passed', function () {
         expect(isVowel("a")).toBe(true);
     });
     it('should return true when "A" is passed', function () {
         expect(isVowel("A")).toBe(true)
     });
     it('should return false when "y" is passed', function () {
         expect(isVowel("y")).toBe(false)
     });
     it('should return false when "4" is passed', function () {
         expect(isVowel("4")).toBe(false)
     });
     it('should return false when true is passed', function () {
         expect(isVowel(true)).toBe(false)
     });
     it('should return false when false is passed', function () {
         expect(isVowel(false)).toBe(false)
     });
     it('should return false when "banana" is passed', function () {
         expect(isVowel("banana")).toBe(false)
     });
     it('should return false without an argument', function () {
         expect(isVowel()).toBe(false)
     });
 });
 describe('add', function () {
     it('should be a defined function', function () {
         expect(typeof add).toBe('function')
     });
     it('should return a number when executed', function () {
         expect(typeof add).toBe(typeof Number)
     });
     it('should return 5 when passed 2 and 5', function () {
         expect(add(2,3)).toBe(5)
     });
     it('should return -12 when passed -3 and -9', function () {
         expect(add(-3, -9)).toBe(-12)
     });

 });