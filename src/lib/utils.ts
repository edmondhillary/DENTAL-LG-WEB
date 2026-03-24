export function phoneHref(phone: string) {
  return `tel:${phone.replace(/\s+/g, "")}`;
}

export function stars(count: number) {
  return Array.from({ length: count }, (_, index) => index);
}

export function imageUrl(url: string) {
  if (url.includes("unsplash.com")) {
    return `${url}${url.includes("?") ? "&" : "?"}fm=webp`;
  }

  return url;
}

export function formatStartingPrice(price: number | string | null | undefined) {
  if (price === null || price === undefined) return "Consultar";
  if (typeof price === "number") return `Desde ${price} €`;
  return `Desde ${price} €`;
}

export function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase() ?? "")
    .join("");
}
