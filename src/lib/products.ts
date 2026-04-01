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
    name: "Yayobite Coklat Bumi - Ekstrovert",
    slug: "brownies-ekstrovert",
    price: "Rp 85.000",
    image: "/products/brownis-ekstrovert.svg",
    category: "best-seller",
  },
  {
    name: "Yayobite Coklat Bumi - Ambivert",
    slug: "brownies-ambivert",
    price: "Rp 50.000",
    image: "/products/brownis-ambivert.svg",
    category: "signature",
  },
  {
    name: "Yayobite Coklat Bumi - Introvert",
    slug: "brownies-introvert",
    price: "Rp 30.000",
    image: "/products/brownis-introvert-1.svg",
    category: "signature",
  },
  {
    name: "Yayobite Coklat Bumi - Introvert 3",
    slug: "brownies-introvert-3",
    price: "Rp 40.000",
    image: "/products/brownis-introvert-3.svg",
    category: "seasonal",
  },
  {
    name: "Yayobite Coklat Bumi - Ambivert 2",
    slug: "brownies-ambivert-2",
    price: "Rp 55.000",
    image: "/products/brownis-ambivert-2.svg",
    category: "signature",
  },
  {
    name: "Yayobite Coklat Bumi - Introvert 2",
    slug: "brownies-introvert-2",
    price: "Rp 35.000",
    image: "/products/brownis-introvert.svg",
    category: "best-seller",
  },
];

export function generateWhatsAppUrl(productName: string) {
  const message = `Halo Yayobite! Saya ingin pesan 1 box ${productName}.`;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}
