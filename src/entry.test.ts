import { describe, it } from "node:test";
import assert from "node:assert/strict";

import { add } from "./entry.js";

describe("add", () => {
  it("should add two numbers", () => {
    const got = add(3, 2);
    const want = 5;
    assert.strictEqual(got, want);
  });
});
