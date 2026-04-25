import onionFlakes from "@/assets/onion-flakes.webp";
import onionPowder from "@/assets/onion-powder.webp";
import onionGranules from "@/assets/onion-granules.webp";
import mincedOnion from "@/assets/minced-onion.webp";
import garlicFlakes from "@/assets/garlic-flakes.webp";
import garlicPowder from "@/assets/garlic-powder.webp";
import garlicGranules from "@/assets/garlic-granules.webp";
import choppedGarlic from "@/assets/chopped-garlic.webp";
import redOnion from "@/assets/red-onion.webp";
import pinkOnion from "@/assets/pink-onion.webp";
import whiteOnion from "@/assets/white-onion.webp";

export const products = [
  {
    slug: "pink-onion",
    name: "Dehydrated Pink Onion",
    short: "Subtle flavor with beautiful pink hue.",
    description:
      "Our dehydrated pink onions are known for their mild flavor and attractive appearance, making them a favorite for gourmet dishes and garnishing.",
    image: pinkOnion,
    features: ["Natural Pink Color", "Mild Flavor", "No Additives", "Premium Grade"],
    specs: [
      { label: "Color", value: "Pinkish" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Packing", value: "10kg / 25kg" },
      { label: "Shelf Life", value: "18 Months" },
    ],
  },
  {
    slug: "red-onion",
    name: "Dehydrated Red Onion",
    short: "Bold, pungent and vibrant red flakes.",
    description:
      "Premium quality dehydrated red onion that retains its natural pungency and deep color. Perfect for adding a bold kick to any recipe.",
    image: redOnion,
    features: ["Deep Red Color", "Strong Pungency", "100% Pure", "Hygienic Process"],
    specs: [
      { label: "Color", value: "Deep Red" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Packing", value: "10kg / 25kg" },
      { label: "Shelf Life", value: "18 Months" },
    ],
  },
  {
    slug: "white-onion",
    name: "Dehydrated White Onion",
    short: "Classic, versatile white onion flakes.",
    description:
      "Selected from the finest white onions, our dehydrated white onion flakes offer a clean, sweet flavor ideal for all culinary applications.",
    image: whiteOnion,
    features: ["Bright White", "Sweet & Savory", "Versatile Use", "Natural Aroma"],
    specs: [
      { label: "Color", value: "Creamy White" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Packing", value: "10kg / 25kg" },
      { label: "Shelf Life", value: "18 Months" },
    ],
  },
  {
    slug: "garlic",
    name: "Dehydrated Garlic",
    short: "Intense, aromatic premium garlic.",
    description:
      "Our dehydrated garlic is processed to preserve its strong characteristic aroma and medicinal properties. A staple for spice blends and global cuisines.",
    image: garlicFlakes,
    features: ["Rich Allicin", "Bold Aroma", "Uniform Flakes", "Export Quality"],
    specs: [
      { label: "Color", value: "Pale Yellow to Creamy" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Packing", value: "10kg / 25kg" },
      { label: "Shelf Life", value: "18 Months" },
    ],
  },
  {
    slug: "onion-flakes",
    name: "Dehydrated Onion Flakes",
    short: "Crisp golden flakes with rich aroma.",
    description:
      "Our dehydrated onion flakes are made from carefully selected fresh white onions, processed under strict quality control to retain their natural flavor, color and nutrients.",
    image: onionFlakes,
    features: ["100% Natural", "No Preservatives", "Long Shelf Life", "Bulk Quantity"],
    specs: [
      { label: "Color", value: "White to Light Cream" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Packing", value: "10kg / 20kg / 25kg" },
      { label: "Shelf Life", value: "12-24 Months" },
    ],
  },
  {
    slug: "onion-powder",
    name: "Dehydrated Onion Powder",
    short: "Fine, free-flowing white onion powder.",
    description:
      "Premium quality onion powder made by grinding sun-dried onion flakes. Ideal for seasonings, soups, snacks and ready-to-eat meals.",
    image: onionPowder,
    features: ["Fine Mesh", "Strong Aroma", "Hygienic", "Export Quality"],
    specs: [
      { label: "Mesh Size", value: "80-100" },
      { label: "Moisture", value: "Max 5%" },
      { label: "Packing", value: "10kg / 25kg" },
      { label: "Shelf Life", value: "18 Months" },
    ],
  },
  {
    slug: "onion-granules",
    name: "Dehydrated Onion Granules",
    short: "Versatile granules for all cuisines.",
    description:
      "Uniform-sized dehydrated onion granules perfect for spice blends, seasonings and snack manufacturing.",
    image: onionGranules,
    features: ["Uniform Size", "Natural Color", "Easy Mix", "HACCP Certified"],
    specs: [
      { label: "Size", value: "0.5 - 1.5 mm" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Packing", value: "10kg / 25kg" },
      { label: "Shelf Life", value: "18 Months" },
    ],
  },
  {
    slug: "minced-onion",
    name: "Minced Dehydrated Onion",
    short: "Finely minced for instant rehydration.",
    description:
      "Minced dehydrated onion that rehydrates quickly and is ideal for soups, sauces and ready meals.",
    image: mincedOnion,
    features: ["Instant Rehydration", "Rich Flavor", "Pure & Clean", "Bulk Pack"],
    specs: [
      { label: "Size", value: "1 - 3 mm" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Packing", value: "10kg / 25kg" },
      { label: "Shelf Life", value: "18 Months" },
    ],
  },
  {
    slug: "garlic-powder",
    name: "Dehydrated Garlic Powder",
    short: "Smooth, fine premium garlic powder.",
    description:
      "Finely ground garlic powder with intense flavor — perfect for seasonings, marinades, and spice blends.",
    image: garlicPowder,
    features: ["Premium Grade", "Strong Aroma", "Free Flowing", "Export Quality"],
    specs: [
      { label: "Mesh", value: "80-100" },
      { label: "Moisture", value: "Max 5%" },
      { label: "Packing", value: "10kg / 25kg" },
      { label: "Shelf Life", value: "18 Months" },
    ],
  },
  {
    slug: "garlic-granules",
    name: "Dehydrated Garlic Granules",
    short: "Coarse granules for spice blends.",
    description:
      "Granulated dehydrated garlic ideal for industrial seasonings, ready meals and snack mixes.",
    image: garlicGranules,
    features: ["Uniform Granules", "Bold Taste", "HACCP", "Bulk Supply"],
    specs: [
      { label: "Size", value: "0.5 - 1.5 mm" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Packing", value: "10kg / 25kg" },
      { label: "Shelf Life", value: "18 Months" },
    ],
  },
  {
    slug: "chopped-garlic",
    name: "Chopped Dehydrated Garlic",
    short: "Coarsely chopped for visible texture.",
    description:
      "Coarsely chopped dehydrated garlic perfect for HoReCa, ready meals, and gourmet seasonings.",
    image: choppedGarlic,
    features: ["Visible Texture", "Rich Flavor", "Hygienic", "Bulk Pack"],
    specs: [
      { label: "Size", value: "3 - 5 mm" },
      { label: "Moisture", value: "Max 6%" },
      { label: "Packing", value: "10kg / 25kg" },
      { label: "Shelf Life", value: "18 Months" },
    ],
  },
];

export const industries = [
  { name: "Food Processing", desc: "Used in soups, sauces, ready-to-eat meals and seasonings.", icon: "🏭" },
  { name: "Snacks & Namkeen", desc: "Enhances taste and shelf life of snacks and namkeen products.", icon: "🍿" },
  { name: "Spices & Seasoning", desc: "Perfect ingredient for spice mixes and seasoning blends.", icon: "🧂" },
  { name: "HoReCa", desc: "Ideal for hotels, restaurants, catering and cloud kitchens.", icon: "🍽️" },
  { name: "Retail & Wholesale", desc: "Supplied to retailers and wholesalers worldwide.", icon: "🛒" },
  { name: "Pharma & Nutraceutical", desc: "Used in herbal formulations and nutraceutical products.", icon: "💊" },
];

export const certifications = ["ISO 22000", "HACCP", "FDA", "HALAL", "FSSAI"];
