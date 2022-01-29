import { returnAnObject, multiplyAllByTwo } from "../public/js/functionsToTest";
describe("La fonction returnAnObject...", () => {
  test("devrait retourner un objet quand on lui passe des arguments string, number ou boolean", () => {
    expect(returnAnObject(2, "3", true)).toEqual({ 0: 2, 1: "3", 2: true });
  });
  test("devrait retourner un message string si pas d'args", () => {
    expect(returnAnObject()).toBe("No argument was given to the function.");
  });
});

describe("La fonction multiplyAllByTwo...", () => {
  test("devrait retourner un array de numbers quand on lui passe des numbers", () => {
    expect(multiplyAllByTwo([2, 3, 5])).toEqual([4, 6, 10]);
  });
  test("devrait retourner un message string si ce n'est pas un array de numbers", () => {
    expect(multiplyAllByTwo()).toBe("The argument is not an Array of numbers");
  });
});
