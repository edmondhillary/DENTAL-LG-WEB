import { describe, expect, it } from "vitest";
import { formatStartingPrice, imageUrl, initials, phoneHref, stars } from "@/lib/utils";

describe("utils", () => {
  it("formats phone href without spaces", () => {
    expect(phoneHref("960 608 833")).toBe("tel:960608833");
  });

  it("appends webp format to unsplash urls", () => {
    expect(imageUrl("https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=1200&q=80")).toContain("fm=webp");
  });

  it("returns stars array with correct length", () => {
    expect(stars(5)).toHaveLength(5);
  });

  it("formats starting price labels", () => {
    expect(formatStartingPrice(99)).toBe("Desde 99 €");
  });

  it("creates initials from review name", () => {
    expect(initials("Ana Martínez")).toBe("AM");
  });
});
