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
