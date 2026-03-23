import { describe, expect, it } from "vitest";
import { imageUrl, phoneHref, stars } from "@/lib/utils";

describe("utils", () => {
  it("formats phone href without spaces", () => {
    expect(phoneHref("617 680 026")).toBe("tel:617680026");
  });

  it("appends webp format to unsplash urls", () => {
    expect(imageUrl("https://images.unsplash.com/photo-123?auto=format&fit=crop&w=1200&q=80")).toContain("fm=webp");
  });

  it("returns stars array with correct length", () => {
    expect(stars(5)).toHaveLength(5);
  });
});
