import {
  changeStringCase,
  sumOfArray,
  divisibleBy,
  addDotsToString,
  objectEntries,
} from '../index';

describe('changeStringCase()', () => {
  it('change word or no', function() {
    expect(changeStringCase("Hello", "lowercase"))
      .toEqual("hello");
    expect(changeStringCase("Hello", "uppercase"))
      .toEqual("HELLO");
    expect(changeStringCase("HeLlo"))
      .toEqual("HeLlo");
  });
});

describe('sumOfArray()', () => {
  it('sum numbers', function() {
    expect(sumOfArray([34, -34, 15, 6]))
      .toEqual(21);
    expect(sumOfArray(["hello"]))
      .toEqual(0);
    expect(sumOfArray([]))
      .toEqual(0);
    expect(sumOfArray([-34]))
      .toEqual(-34);
  });
});

describe('divisibleBy()', () => {
  it('filtering by division', function() {
    expect(divisibleBy([21, 5, 25, 14, 15], 5))
      .toStrictEqual([5, 25, 15]);
    expect(divisibleBy([22, 5, 24, 14, 17], 2))
      .toStrictEqual([22, 24, 14]);
    expect(divisibleBy([21, 5, 25, 14, 15], 100))
      .toStrictEqual([]);
  });
});

describe('addDotsToString()', () => {
  it('add dots', function() {
    expect(addDotsToString("Hello! My name is Artur", 20))
      .toEqual("Hello! My name is...");
    expect(addDotsToString("Hello! My name is Artur", 9))
      .toEqual("Hello!...");
    expect(addDotsToString("Hello! My name is Artur", 3))
      .toEqual("...");
    expect(addDotsToString("Hello! My name is Artur", 0))
      .toEqual("Hello! My name is Ar...");
    expect(addDotsToString("Hello! My name is Artur", 100))
      .toEqual("Hello! My name is Artur");
  });
});

describe('objectEntries()', () => {
  it('check structure of array', function() {
    expect(objectEntries({name: "Artur",
                                lastname: "Dudnik",
                                age: 18
    } ))
      .toStrictEqual([["name", "Artur"], ["lastname", "Dudnik"], ["age", 18]]);
    expect(objectEntries({} ))
      .toStrictEqual([]);
    expect(objectEntries({name: "name"} ))
      .toStrictEqual([["name", "name"]]);
  });
});
