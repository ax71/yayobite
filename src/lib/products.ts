export const WHATSAPP_NUMBER = "628153888886";

export interface Product {
  name: string;
  slug: string;
  price: string;
  image: string;
  category: "best-seller" | "signature" | "seasonal";
}

export const products: Product[] = [
  {
    name: "Brownies Introvert 2",
    slug: "brownies-introvert-2",
    price: "Rp 65.000",
    image: "/products/brownis-introvert.svg",
    category: "best-seller",
  },
  {
    name: "Brownies Ekstrovert",
    slug: "brownies-ekstrovert",
    price: "Rp 60.000",
    image: "/products/brownis-ekstrovert.svg",
    category: "best-seller",
  },
  {
    name: "Brownies Ambivert 1",
    slug: "brownies-ambivert-1",
    price: "Rp 70.000",
    image: "/products/brownis-ambivert.svg",
    category: "signature",
  },
  {
    name: "Brownies Introvert 1",
    slug: "brownies-introvert-1",
    price: "Rp 68.000",
    image: "/products/brownis-introvert-1.svg",
    category: "signature",
  },
  {
    name: "Brownies Introvert 3",
    slug: "brownies-introvert-3",
    price: "Rp 55.000",
    image: "/products/brownis-introvert-3.svg",
    category: "seasonal",
  },
  {
    name: "Brownies Ambivert 2",
    slug: "brownies-ambivert-2",
    price: "Rp 68.000",
    image: "/products/brownis-ambivert-2.svg",
    category: "signature",
  },
];

export function generateWhatsAppUrl(productName: string) {
  const message = `Halo Yayobite! Saya ingin pesan 1 box ${productName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
