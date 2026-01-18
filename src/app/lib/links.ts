export function telHref(e164: string) {
  return `tel:${e164.replace(/\s/g, "")}`;
}

export function whatsappHref(e164: string, text: string) {
  const clean = e164.replace(/[^\d+]/g, "");
  const msg = encodeURIComponent(text);
  return `https://wa.me/${clean.replace("+", "")}?text=${msg}`;
}
