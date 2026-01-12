// lib/products-data.ts

/**
 * Product data type definition
 */
export interface Product {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  specifications: string[];
}

/**
 * Category navigation type definition
 */
export interface Category {
  label: string;
  slug: string | null;
  href: string;
}

/**
 * Available product categories for navigation
 */
export const CATEGORIES: Category[] = [
  { label: "All Products", slug: null, href: "/products" },
  { label: "IP Camera", slug: "ipcamera", href: "/products/ipcamera" },
  { label: "CCTV", slug: "cctv", href: "/products/cctv" },
  { label: "HDCVI", slug: "hdcvi", href: "/products/hdcvi" },
  { label: "Audio Paging", slug: "audiopaging", href: "/products/audiopaging" },
  { label: "PABX", slug: "pabx", href: "/products/pabx" },
  { label: "DVR/NVR", slug: "dvrnvr", href: "/products/dvrnvr" },
  {
    label: "Access Control",
    slug: "accesscontrol",
    href: "/products/accesscontrol",
  },
];

/**
 * Master product catalog
 */
export const PRODUCTS_DATA: Product[] = [
  // IP CAMERA (6 products)
  {
    id: "ipcam-001",
    title: "IP Camera 4K Ultra HD",
    category: "IP Camera",
    description:
      "Professional 4K IP camera with advanced AI detection and night vision capabilities.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "4K Ultra HD Resolution (3840×2160)",
      "AI Human & Vehicle Detection",
      "30m Night Vision Range",
    ],
  },
  {
    id: "ipcam-002",
    title: "IP Camera PTZ Pro",
    category: "IP Camera",
    description:
      "Pan-tilt-zoom camera with 360° coverage and intelligent tracking system.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "360° Pan & 90° Tilt",
      "20x Optical Zoom",
      "Auto Tracking Technology",
    ],
  },
  {
    id: "ipcam-003",
    title: "IP Camera Outdoor Dome",
    category: "IP Camera",
    description:
      "Weatherproof dome camera designed for outdoor surveillance applications.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "IP67 Weatherproof Rating",
      "2MP Full HD 1080p",
      "Wide Dynamic Range (WDR)",
    ],
  },
  {
    id: "ipcam-004",
    title: "IP Camera Bullet Series",
    category: "IP Camera",
    description:
      "High-performance bullet camera with enhanced IR illumination.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "5MP Super HD Resolution",
      "50m IR Night Vision",
      "Smart Motion Detection",
    ],
  },
  {
    id: "ipcam-005",
    title: "IP Camera Fisheye 360",
    category: "IP Camera",
    description:
      "Panoramic fisheye camera providing complete 360° room coverage.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "360° Panoramic View",
      "12MP Ultra Resolution",
      "Dewarping Technology",
    ],
  },
  {
    id: "ipcam-006",
    title: "IP Camera Thermal Imaging",
    category: "IP Camera",
    description:
      "Advanced thermal imaging camera for temperature screening and detection.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "Thermal + Optical Dual Lens",
      "Temperature Accuracy ±0.3°C",
      "Fire Detection Alert",
    ],
  },

  // CCTV (6 products)
  {
    id: "cctv-001",
    title: "CCTV Analog HD 1080p",
    category: "CCTV",
    description: "Cost-effective analog HD camera with superior image quality.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "Full HD 1080p Resolution",
      "40m IR Distance",
      "OSD Menu Control",
    ],
  },
  {
    id: "cctv-002",
    title: "CCTV Varifocal Lens",
    category: "CCTV",
    description:
      "Adjustable lens camera for flexible field of view configuration.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "2.8-12mm Varifocal Lens",
      "2MP High Definition",
      "Smart IR Technology",
    ],
  },
  {
    id: "cctv-003",
    title: "CCTV Indoor Dome",
    category: "CCTV",
    description:
      "Compact dome camera ideal for indoor monitoring environments.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "720p HD Resolution",
      "3.6mm Fixed Lens",
      "Low Light Performance",
    ],
  },
  {
    id: "cctv-004",
    title: "CCTV Outdoor Bullet",
    category: "CCTV",
    description:
      "Durable outdoor bullet camera with robust housing protection.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "IP66 Outdoor Rating",
      "3MP High Resolution",
      "35m Night Vision",
    ],
  },
  {
    id: "cctv-005",
    title: "CCTV Turbo HD 4MP",
    category: "CCTV",
    description:
      "High-definition turbo camera with enhanced video transmission.",
    image: "/images/product/IPCAM.png",
    specifications: ["4MP Ultra Resolution", "HD-TVI Technology", "120dB WDR"],
  },
  {
    id: "cctv-006",
    title: "CCTV Mini PTZ",
    category: "CCTV",
    description: "Compact PTZ camera with powerful zoom capabilities.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "10x Optical Zoom",
      "Pan 355° / Tilt 90°",
      "Preset Position Memory",
    ],
  },

  // HDCVI (6 products)
  {
    id: "hdcvi-001",
    title: "HDCVI Camera 4K",
    category: "HDCVI",
    description: "Ultra HD HDCVI camera delivering exceptional image clarity.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "4K Ultra HD (8MP)",
      "CVI/TVI/AHD Compatible",
      "Starlight Night Vision",
    ],
  },
  {
    id: "hdcvi-002",
    title: "HDCVI Dome Pro",
    category: "HDCVI",
    description: "Professional dome camera with advanced CVI technology.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "5MP Super HD",
      "Built-in Mic Audio",
      "Smart IR LED Array",
    ],
  },
  {
    id: "hdcvi-003",
    title: "HDCVI Bullet Starlight",
    category: "HDCVI",
    description:
      "Starlight technology for color imaging in low-light conditions.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "Color Night Vision",
      "2MP Full HD",
      "0.005 Lux Sensitivity",
    ],
  },
  {
    id: "hdcvi-004",
    title: "HDCVI PTZ Speed Dome",
    category: "HDCVI",
    description: "High-speed PTZ dome with precision control and tracking.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "25x Optical Zoom",
      "300° Pan Speed",
      "Intelligent Auto Track",
    ],
  },
  {
    id: "hdcvi-005",
    title: "HDCVI Eyeball Camera",
    category: "HDCVI",
    description: "Adjustable eyeball design for versatile installation angles.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "2MP 1080p Resolution",
      "3-Axis Adjustment",
      "IP67 Weatherproof",
    ],
  },
  {
    id: "hdcvi-006",
    title: "HDCVI Pinhole Camera",
    category: "HDCVI",
    description:
      "Discreet pinhole camera for covert surveillance applications.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "2MP Compact Design",
      "3.7mm Pinhole Lens",
      "Hidden Installation",
    ],
  },

  // AUDIO PAGING (6 products)
  {
    id: "audio-001",
    title: "Audio Paging Amplifier 500W",
    category: "Audio Paging",
    description: "High-power amplifier for large-scale public address systems.",
    image: "/images/product/audioPaging.png",
    specifications: [
      "500W Output Power",
      "Multi-Zone Control",
      "Emergency Priority",
    ],
  },
  {
    id: "audio-002",
    title: "Audio Paging Column Speaker",
    category: "Audio Paging",
    description: "Professional column speaker with wide coverage pattern.",
    image: "/images/product/audioPaging.png",
    specifications: [
      "40W Power Handling",
      "90° Dispersion Angle",
      "Weather Resistant",
    ],
  },
  {
    id: "audio-003",
    title: "Audio Paging Ceiling Speaker",
    category: "Audio Paging",
    description: "Flush-mount ceiling speaker for indoor installations.",
    image: "/images/product/audioPaging.png",
    specifications: [
      "6W Rated Power",
      "Full Range Driver",
      "Fire Resistant Housing",
    ],
  },
  {
    id: "audio-004",
    title: "Audio Paging Horn Speaker",
    category: "Audio Paging",
    description: "Outdoor horn speaker for long-distance sound projection.",
    image: "/images/product/audioPaging.png",
    specifications: ["30W High Output", "IP66 Waterproof", "100m Sound Range"],
  },
  {
    id: "audio-005",
    title: "Audio Paging Microphone Station",
    category: "Audio Paging",
    description: "Professional paging microphone with zone selection.",
    image: "/images/product/audioPaging.png",
    specifications: [
      "8-Zone Selection",
      "Gooseneck Mic",
      "Chime & Talk Function",
    ],
  },
  {
    id: "audio-006",
    title: "Audio Paging Matrix System",
    category: "Audio Paging",
    description: "Advanced matrix controller for complex paging networks.",
    image: "/images/product/audioPaging.png",
    specifications: [
      "16 Input / 16 Output",
      "Digital Signal Processing",
      "Network Control Ready",
    ],
  },

  // PABX (6 products)
  {
    id: "pabx-001",
    title: "PABX System 32 Extension",
    category: "PABX",
    description: "Enterprise-grade PABX system supporting up to 32 extensions.",
    image: "/images/product/PABX.png",
    specifications: [
      "32 Extension Capacity",
      "8 CO Lines",
      "Voicemail Integration",
    ],
  },
  {
    id: "pabx-002",
    title: "PABX IP Hybrid System",
    category: "PABX",
    description: "Hybrid PABX supporting both analog and IP telephony.",
    image: "/images/product/PABX.png",
    specifications: [
      "Analog + IP Support",
      "SIP Trunk Compatible",
      "Auto Attendant Feature",
    ],
  },
  {
    id: "pabx-003",
    title: "PABX Cloud Based",
    category: "PABX",
    description: "Cloud-managed PABX for flexible remote administration.",
    image: "/images/product/PABX.png",
    specifications: [
      "Cloud Management",
      "Unlimited Extensions",
      "CRM Integration",
    ],
  },
  {
    id: "pabx-004",
    title: "PABX Small Office 8 Port",
    category: "PABX",
    description: "Compact PABX solution designed for small business needs.",
    image: "/images/product/PABX.png",
    specifications: [
      "8 Extensions / 2 Lines",
      "Caller ID Display",
      "Conference Call",
    ],
  },
  {
    id: "pabx-005",
    title: "PABX Enterprise 128 Port",
    category: "PABX",
    description: "Large-scale PABX infrastructure for enterprise deployment.",
    image: "/images/product/PABX.png",
    specifications: [
      "128 Extension Support",
      "Redundant Power Supply",
      "Call Recording",
    ],
  },
  {
    id: "pabx-006",
    title: "PABX Wireless Gateway",
    category: "PABX",
    description: "GSM gateway for integrating mobile networks with PABX.",
    image: "/images/product/PABX.png",
    specifications: [
      "4 SIM Card Slots",
      "GSM to Analog Bridge",
      "SMS Integration",
    ],
  },

  // DVR/NVR (6 products)
  {
    id: "dvr-001",
    title: "NVR 32 Channel 4K",
    category: "DVR/NVR",
    description: "High-capacity network video recorder with 4K support.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "32 Channel Recording",
      "4K Video Resolution",
      "8TB HDD Capacity",
    ],
  },
  {
    id: "dvr-002",
    title: "DVR 16 Channel Turbo HD",
    category: "DVR/NVR",
    description: "Turbo HD recorder supporting multiple video formats.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "16 Channel Hybrid",
      "H.265+ Compression",
      "Remote Mobile Access",
    ],
  },
  {
    id: "dvr-003",
    title: "XVR 8 Channel All-in-One",
    category: "DVR/NVR",
    description: "Versatile XVR supporting all major camera formats.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "5-in-1 Video Input",
      "AI Face Detection",
      "HDMI 4K Output",
    ],
  },
  {
    id: "dvr-004",
    title: "NVR PoE 16 Channel",
    category: "DVR/NVR",
    description: "Network recorder with built-in PoE switch for easy setup.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "16 PoE Ports Built-in",
      "Plug & Play Setup",
      "4K Display Output",
    ],
  },
  {
    id: "dvr-005",
    title: "DVR 4 Channel Compact",
    category: "DVR/NVR",
    description: "Compact recorder ideal for small installations.",
    image: "/images/product/HDCVI.png",
    specifications: ["4 Channel Input", "1080p Recording", "1TB HDD Included"],
  },
  {
    id: "dvr-006",
    title: "NVR AI Deep Learning 64CH",
    category: "DVR/NVR",
    description: "AI-powered NVR with advanced analytics capabilities.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "64 Channel Capacity",
      "AI Object Recognition",
      "Facial Recognition",
    ],
  },

  // ACCESS CONTROL (6 products)
  {
    id: "access-001",
    title: "Access Control Biometric",
    category: "Access Control",
    description:
      "Advanced biometric reader with fingerprint and face recognition.",
    image: "/images/product/AC.png",
    specifications: [
      "Fingerprint + Face ID",
      "3000 User Capacity",
      "TCP/IP Connectivity",
    ],
  },
  {
    id: "access-002",
    title: "Access Control RFID Card",
    category: "Access Control",
    description: "Proximity card reader for contactless access control.",
    image: "/images/product/AC.png",
    specifications: [
      "125kHz RFID Reader",
      "Standalone Operation",
      "10,000 Card Capacity",
    ],
  },
  {
    id: "access-003",
    title: "Access Control Panel 4-Door",
    category: "Access Control",
    description: "Multi-door controller for centralized access management.",
    image: "/images/product/AC.png",
    specifications: [
      "4-Door Control",
      "100,000 Event Log",
      "Anti-Passback Feature",
    ],
  },
  {
    id: "access-004",
    title: "Access Control Turnstile",
    category: "Access Control",
    description: "Full-height turnstile for secure pedestrian access.",
    image: "/images/product/AC.png",
    specifications: [
      "Stainless Steel Build",
      "Bi-directional Control",
      "Emergency Quick Release",
    ],
  },
  {
    id: "access-005",
    title: "Access Control Electromagnetic Lock",
    category: "Access Control",
    description: "Heavy-duty magnetic lock with fail-safe operation.",
    image: "/images/product/AC.png",
    specifications: [
      "600kg Holding Force",
      "Fail-Safe Design",
      "LED Status Indicator",
    ],
  },
  {
    id: "access-006",
    title: "Access Control Mobile App",
    category: "Access Control",
    description: "Cloud-based access control with smartphone management.",
    image: "/images/product/AC.png",
    specifications: [
      "Bluetooth & WiFi",
      "Mobile App Control",
      "Real-time Monitoring",
    ],
  },
];

/**
 * Get category label from slug
 */
export function getCategoryFromSlug(slug: string | undefined): string {
  if (!slug) return "All Products";
  const category = CATEGORIES.find((cat) => cat.slug === slug);
  return category?.label || "All Products";
}

/**
 * Filter products by category and search query
 */
export function filterProducts(
  products: Product[],
  category: string,
  searchQuery: string
): Product[] {
  return products.filter((product) => {
    const matchesCategory =
      category === "All Products" || product.category === category;
    const matchesSearch = product.title
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
}
