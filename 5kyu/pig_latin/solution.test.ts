// See https://www.chaijs.com for how to use Chai.
import { assert } from "chai";

import { pigIt } from "./solution";

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(pigIt('Pig latin is cool'),'igPay atinlay siay oolcay')
    assert.strictEqual(pigIt('This is my string'),'hisTay siay ymay tringsay')
});
});
