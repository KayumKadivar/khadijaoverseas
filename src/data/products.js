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

export const mainCategories = [
  {
    slug: "?category=white",
    name: "White Onion",
    short: "Delivering a crisp, sweet flavor and pure white color. Perfect for premium sauces, instant soups, and ready-to-eat meals worldwide.",
    image: whiteOnion,
  },
  {
    slug: "?category=pink",
    name: "Pink Onion",
    short: "A perfect balance of mild sweetness and delicate aroma. Ideal for specialized seasonings and visually appealing culinary dishes.",
    image: pinkOnion,
  },
  {
    slug: "?category=red",
    name: "Red Onion",
    short: "Renowned for its sharp, pungent taste and deep color. The ultimate ingredient for robust spice blends and gourmet culinary creations.",
    image: redOnion,
  },
  {
    slug: "?category=garlic",
    name: "Garlic",
    short: "Packed with intense flavor, rich aroma, and natural allicin. An indispensable ingredient for savory food manufacturing and seasoning.",
    image: garlicFlakes,
  },
];

export const products = [
  // --- WHITE ONION ---
  {
    slug: "white-onion-flakes",
    name: "Dehydrated White Onion Flakes",
    short: "Premium kibbled white onion for bulk export.",
    description: "Our White Onion Flakes are processed from the finest harvest to ensure a clean, sweet flavor and bright color. Ideal for soups, sauces, and instant meals.",
    image: whiteOnion,
    features: ["A-Grade Quality", "Clean Aroma", "8-20mm Size", "Hygienic Process"],
    specs: [{ label: "HSN Code", value: "07122000" }, { label: "Moisture", value: "Max 6%" }, { label: "Origin", value: "India" }]
  },
  {
    slug: "white-onion-powder",
    name: "Dehydrated White Onion Powder",
    short: "Fine free-flowing culinary powder.",
    description: "Our white onion powder is finely ground to 80-100 mesh, making it perfect for seasoning blends, snacks, and high-end food processing.",
    image: onionPowder,
    features: ["80-100 Mesh", "Intense Aroma", "Free Flowing", "100% Pure"],
    specs: [{ label: "Mesh", value: "80 - 100" }, { label: "Moisture", value: "Max 6%" }, { label: "Quality", value: "Premium" }]
  },
  {
    slug: "white-onion-chopped",
    name: "Dehydrated White Onion Chopped",
    short: "Uniformly chopped for visible texture.",
    description: "Perfectly chopped dehydrated white onions that rehydrate quickly while maintaining their firm texture and sweet pungency.",
    image: whiteOnion,
    features: ["Uniform 3-5mm", "No Additives", "Sweet Pungency", "Long Shelf Life"],
    specs: [{ label: "Size", value: "3 - 5 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Packing", value: "25kg Bag/Carton" }]
  },
  {
    slug: "white-onion-minced",
    name: "Dehydrated White Onion Minced",
    short: "Finely minced for smooth integration.",
    description: "Finely minced white onion pieces designed for quick rehydration in sauces, seasonings, and ready-to-eat products.",
    image: mincedOnion,
    features: ["1-3mm Fine Cut", "Rich Taste", "Export Standard", "Pure White"],
    specs: [{ label: "Size", value: "1 - 3 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Packing", value: "25kg Bag/Carton" }]
  },
  {
    slug: "white-onion-granules",
    name: "Dehydrated White Onion Granules",
    short: "Perfect for spice blends and dry mixes.",
    description: "Highly versatile granules that provide the authentic taste of fresh white onion in a concentrated, easy-to-mix dry form.",
    image: onionGranules,
    features: ["0.1-1mm Size", "Flowing Texture", "Natural Flavor", "Premium Grade"],
    specs: [{ label: "Size", value: "0.1 - 1 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Shelf Life", value: "18 Months" }]
  },


  // --- RED ONION ---
  {
    slug: "red-onion-flakes",
    name: "Dehydrated Red Onion Flakes",
    short: "Vibrant and pungent red onion kibbled.",
    description: "Our red onion flakes retain the characteristic sharp flavor and deep color of fresh red onions, adding both taste and visual appeal.",
    image: redOnion,
    features: ["Deep Red Color", "Sharp Flavor", "Export Grade", "8-20mm"],
    specs: [{ label: "HSN Code", value: "07122000" }, { label: "Moisture", value: "Max 6%" }, { label: "Origin", value: "India" }]
  },
  {
    slug: "red-onion-powder",
    name: "Dehydrated Red Onion Powder",
    short: "Potent and colorful red onion powder.",
    description: "Finely ground red onion powder with exceptional aroma and color. A versatile ingredient for many global cuisines.",
    image: redOnion,
    features: ["Fine Powder", "Vibrant Red", "Rich Aroma", "Bulk Supply"],
    specs: [{ label: "Mesh", value: "80 - 100" }, { label: "Moisture", value: "Max 6%" }, { label: "Packing", value: "25kg Carton" }]
  },
  {
    slug: "red-onion-chopped",
    name: "Dehydrated Red Onion Chopped",
    short: "Bold red pieces for gourmet dishes.",
    description: "Premium chopped red onions, ideal for spice mixes and condiments where color and texture are critical.",
    image: redOnion,
    features: ["Vibrant Hue", "Uniform Cut", "Consistent Quality", "No Fillers"],
    specs: [{ label: "Size", value: "3 - 5 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Shelf Life", value: "18 Months" }]
  },
  {
    slug: "red-onion-minced",
    name: "Dehydrated Red Onion Minced",
    short: "Fine red onion pieces for seasonings.",
    description: "Perfectly minced red onions that deliver a punchy flavor. Excellent for topping and industrial seasoning blends.",
    image: redOnion,
    features: ["Quick Rehydration", "Intense Color", "Pure Quality", "1-3mm"],
    specs: [{ label: "Size", value: "1 - 3 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Packing", value: "25kg Bag" }]
  },
  {
    slug: "red-onion-granules",
    name: "Dehydrated Red Onion Granules",
    short: "Consistent granules for all food sectors.",
    description: "Uniform red onion granules that are easy to store and use, providing consistent flavor profile for large scale food production.",
    image: redOnion,
    features: ["Easy Dispersion", "Bold Taste", "Natural Ingredients", "HACCP"],
    specs: [{ label: "Size", value: "0.5 - 1 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Quality", value: "A-Grade" }]
  },


  // --- PINK ONION ---
  {
    slug: "pink-onion-flakes",
    name: "Dehydrated Pink Onion Flakes",
    short: "Mild flavor with elegant pink appearance.",
    description: "Dehydrated pink onion flakes offer a milder flavor profile and a unique visual touch to food products.",
    image: pinkOnion,
    features: ["Unique Pink Hue", "Mild Taste", "Premium Selection", "Natural"],
    specs: [{ label: "HSN Code", value: "07122000" }, { label: "Moisture", value: "Max 6%" }, { label: "Origin", value: "India" }]
  },
  {
    slug: "pink-onion-powder",
    name: "Dehydrated Pink Onion Powder",
    short: "Smooth pink powder for culinary excellence.",
    description: "Finely milled pink onion powder that blends seamlessly into any liquid or dry formulation.",
    image: pinkOnion,
    features: ["Fine Mesh", "Consistent Color", "Rich Aroma", "100% Pure"],
    specs: [{ label: "Mesh", value: "80 - 100" }, { label: "Moisture", value: "Max 6%" }, { label: "Quality", value: "Premium" }]
  },
  {
    slug: "pink-onion-chopped",
    name: "Dehydrated Pink Onion Chopped",
    short: "Consistent pink pieces for specialty mixes.",
    description: "Specialty chopped pink onions, processed carefully to maintain their delicate color and aroma.",
    image: pinkOnion,
    features: ["3-5mm Size", "Delicate Color", "Pure Process", "No Additives"],
    specs: [{ label: "Size", value: "3 - 5 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Packing", value: "25kg Bag" }]
  },
  {
    slug: "pink-onion-minced",
    name: "Dehydrated Pink Onion Minced",
    short: "Fine pink onion for gourmet seasonings.",
    description: "Fine minced pink onions that add a subtle sweetness and aesthetic value to dry mixes and toppings.",
    image: pinkOnion,
    features: ["1-3mm Size", "Sweet Notes", "High Purity", "Export Ready"],
    specs: [{ label: "Size", value: "1 - 3 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Shelf Life", value: "18 Months" }]
  },
  {
    slug: "pink-onion-granules",
    name: "Dehydrated Pink Onion Granules",
    short: "Versatile pink granules for all industries.",
    description: "Concentrated pink onion flavor in a granular format, perfect for sauces, dressings, and seasoning industries.",
    image: pinkOnion,
    features: ["Grain Texture", "Mild Aroma", "Consistent Quality", "Natural"],
    specs: [{ label: "Size", value: "0.5 - 1.5 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Packing", value: "25kg Bag" }]
  },

  // --- GARLIC ---
  {
    slug: "garlic-flakes",
    name: "Dehydrated Garlic Flakes",
    short: "Strong aromatic garlic cloves/flakes.",
    description: "High-quality garlic flakes processed to preserve the intense aroma and medicinal properties of fresh garlic.",
    image: garlicFlakes,
    features: ["Rich Allicin", "Bold Aroma", "Uniform Flakes", "Export Quality"],
    specs: [{ label: "HSN Code", value: "07129030" }, { label: "Moisture", value: "Max 4%" }, { label: "Grade", value: "A-Grade" }]
  },
  {
    slug: "garlic-powder",
    name: "Dehydrated Garlic Powder",
    short: "Fine free-flowing garlic powder.",
    description: "Pure dehydrated garlic powder ground to a fine mesh, ideal for soups, seasonings, and health supplements.",
    image: garlicPowder,
    features: ["80-100 Mesh", "Strong Aroma", "Free Flowing", "100% Pure"],
    specs: [{ label: "Mesh Size", value: "80-100" }, { label: "Moisture", value: "Max 5%" }, { label: "Quality", value: "A-Grade" }]
  },
  {
    slug: "garlic-chopped",
    name: "Dehydrated Garlic Chopped",
    short: "Coarsely chopped for visible texture.",
    description: "Coarsely chopped dehydrated garlic perfect for HoReCa, ready meals, and gourmet seasonings.",
    image: choppedGarlic,
    features: ["Visible Texture", "Rich Flavor", "Hygienic", "Bulk Pack"],
    specs: [{ label: "Size", value: "3 - 5 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Packing", value: "25kg Carton" }]
  },
  {
    slug: "garlic-minced",
    name: "Dehydrated Garlic Minced",
    short: "Finely minced garlic for industrial use.",
    description: "Precision minced garlic that provides a consistent garlic profile across large food production batches.",
    image: mincedOnion,
    features: ["1-3mm Size", "Intense Flavor", "Clean Process", "High Allicin"],
    specs: [{ label: "Size", value: "1 - 3 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Packing", value: "25kg Bag" }]
  },
  {
    slug: "garlic-granules",
    name: "Dehydrated Garlic Granules",
    short: "Uniform granules for spice blends.",
    description: "Garlic granules that offer the perfect balance of texture and intense garlic flavor for seasoning blends.",
    image: garlicGranules,
    features: ["Grainy Texture", "Powerful Aroma", "No Additives", "Premium Grade"],
    specs: [{ label: "Size", value: "0.5 - 1.5 mm" }, { label: "Moisture", value: "Max 6%" }, { label: "Shelf Life", value: "18 Months" }]
  },

];

export const industries = [
  {
    name: "Food Processing",
    desc: "Used in ready-to-eat meals, frozen foods, and packaged products to ensure consistent taste and extended shelf life.",
    icon: "🏭"
  },
  {
    name: "Seasoning & Spice",
    desc: "Widely used in masala blends and spice mixes, delivering strong aroma and uniform quality in every batch.",
    icon: "🧂"
  },
  {
    name: "Snacks & Namkeen",
    desc: "Ideal for chips, namkeen, extruded snacks, and flavored products to enhance taste and maintain product stability.",
    icon: "🍿"
  },
  {
    name: "Instant Foods",
    desc: "Commonly used in instant noodles, soup mixes, and ready-to-cook products due to quick rehydration and rich flavor.",
    icon: "🍜"
  },
  {
    name: "Sauces & Condiments",
    desc: "An essential ingredient in ketchup, mayonnaise, pasta sauces, dips, salad dressings, and chutneys.",
    icon: "🍅"
  },
  {
    name: "HoReCa (Hotels, Restaurants & Catering)",
    desc: "Supports professional kitchens by saving preparation time, reducing wastage, and ensuring consistent taste.",
    icon: "🏨"
  },
  {
    name: "Bakery (Savory Products)",
    desc: "Used in breads, biscuits, savory muffins, and baked snacks to improve flavor and texture.",
    icon: "🥯"
  },
  {
    name: "Importers & Distributors",
    desc: "We supply bulk quantities to global importers, wholesalers, and distributors serving local markets.",
    icon: "🚢"
  },
];

export const certifications = ["ISO 22000", "HACCP", "FDA", "HALAL", "FSSAI"];
