import { it, describe } from "node:test";
import assert from "node:assert";

import { minus } from "./minus.js";

describe("minus", () => {
  it("should subtract two numbers", () => {
    const got = minus(3, 2);
    const want = 1;
    assert.strictEqual(got, want);
  });
});
