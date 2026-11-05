import { test } from "node:test";
import assert from "node:assert/strict";
import { diffJson } from "../src/shared/json-diff.js";

test("response diff ignores object order but distinguishes missing, null, types and array order", () => {
  assert.deepEqual(diffJson({ a: 1, b: 2 }, { b: 2, a: 1 }), []);
  assert.deepEqual(diffJson({ a: null }, {}), [
    { path: "$/a", kind: "removed", before: null },
  ]);
  assert.equal(diffJson({ a: 1 }, { a: "1" })[0].path, "$/a");
  assert.equal(diffJson([1, 2], [2, 1]).length, 2);
  assert.equal(diffJson({ "a/b": 1 }, { "a/b": 2 })[0].path, "$/a~1b");
  assert.equal(diffJson([], {}).length, 1);
});
