const { sum, customFunction, fakeFetch, fetchPromise } = require("./app");

test("sum test", () => {
  expect(sum(1, 2)).toBe(3);
});

// .toBe() is used for comparing primitive values

test("Object comparison", () => {
  const data = { one: 1 };
  data["two"] = 2;
  expect(data).toEqual({ one: 1, two: 2 });
});

test("Truthy and Falsy", () => {
  expect("").toBeFalsy();
  expect("a").toBeTruthy();
});

test("Throwing error", () => {
  expect(() => customFunction("test")).toThrow("Invalid Input");
});

test("Async Operations", () => {
  function callback(data) {
    try {
      expect(data).toBe("This a fake fetch response");
    } catch (err) {
      console.error(err);
    }
  }
  fakeFetch(callback);
});

test("fetch promise", async () => {
  let data = await fetchPromise();
  expect(data).toBe("fetch promise");
});

// ?MOCKING A FUNCTION
const mockCallback = jest.fn((x) => 42 + x);
mockCallback(0);

test("mocking a function", () => {
  const mock = jest.fn((c) => 42 + c);

  expect(mock(1)).toBe(43);
  expect(mock).toHaveBeenCalledWith(1);
});

test("spying", () => {
  const video = {
    play() {
      return true;
    },
  };

  const spy = jest.spyOn(video, "play");
  video.play();

  expect(spy).toHaveBeenCalled();
  spy.mockRestore();
});
