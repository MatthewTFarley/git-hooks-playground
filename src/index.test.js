import { describe, expect, it } from "vitest";
import { bar, foo } from ".";

describe("foo", () => {
  it('returns "foo"', () => {
    expect(foo()).toEqual("foo");
  });

  it('returns "bar"', () => {
    expect(bar()).toEqual("bar");
  });
});
