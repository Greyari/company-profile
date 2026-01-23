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
    title: "EZVIZ Smart IP Camera",
    category: "IP Camera",
    description:
      "Offers 1080p Full HD video quality for clear and detailed footage.",
    image: "/images/product/IPCamera/IP-Cam-01.png",
    specifications: [
      "Provides a wide 100-degree diagonal view",
      "IP66-rated, suitable for outdoor use",
      "Clear night vision with infrared LEDs",
    ],
  },
  {
    id: "ipcam-002",
    title: "EZVIZ CS-TY1 Smart IP Camera",
    category: "IP Camera",
    description:
      " Offers a broad 114-degree diagonal view, ensuring comprehensive coverage.",
    image: "/images/product/IPCAM.png",
    specifications: [
      "1080p Full HD for precise monitoring.",
      "Enables remote control through the app.",
      "Customizable motion detection with alerts.",
    ],
  },
  {
    id: "ipcam-003",
    title: "WDR IR Dome Network Camera",
    category: "IP Camera",
    description:
      "Multiple network monitoring: Web viewer, CMS(DSS/PSS) & DMSS.",
    image: "/images/product/IPCamera/IP-Cam-02.png",
    specifications: [
      "1/2.5” 8Megapixel progressive scan CMOS",
      "H.265&H.264 dual-stream encoding",
      "Micro SD card memory, IP67,IK10, PoE+",
    ],
  },
  {
    id: "ipcam-004",
    title: "EZVIZ CS-CB3 Smart IP Camera",
    category: "IP Camera",
    description:
      " Provides Quad HD video quality at 2560×1440 for high-definition footage.",
    image: "/images/product/IPCamera/IP-Cam-04.png",
    specifications: [
      "Offers an 89-degree diagonal view",
      "HD video quality at 2560×1440 ",
      "Delivers clear night vision ",
    ],
  },
  {
    id: "ipcam-005",
    title: "Tapo C200 Smart IP Camera",
    category: "IP Camera",
    description:
      "Offers comprehensive coverage, reducing blind spots within its range.",
    image: "/images/product/IPCamera/IP-Cam-05.png",
    specifications: [
      "High-quality video at 1080p Full HD",
      "Offers comprehensive coverage ",
      "Two-way audio communication",
    ],
  },
  {
    id: "ipcam-006",
    title: "EZVIZ  Smart IP Camera",
    category: "IP Camera",
    description:
      "Offers a 103-degree diagonal view, ensuring broad coverage for monitoring.",
    image: "/images/product/IPCamera/IP-Cam-06.png",
    specifications: [
      "1080p Full HD video quality",
      "Allows remote control via the app",
      "Customizable motion detection with alerts,",
    ],
  },

  // CCTV (6 products)
  {
    id: "cctv-001",
    title: "IR Bullet Camera",
    category: "CCTV",
    description: "HAC-HFW1500CP-A 5MP Starlight HDCVI IR Bullet Camera.",
    image: "/images/product/CCTV-S.png",
    specifications: [
      "Max 25 fps@5MP",
      "Max. IR length 30 m, Smart IR",
      "CVI/CVBS/AHD/TVI switchable",
    ],
  },
  {
    id: "cctv-002",
    title: "IR Bullet Network Camera",
    category: "CCTV",
    description: "IPC-HFW5631E-Z5E 6MP WDR IR Bullet Network Camera.",
    image: "/images/product/CCTV/CCTV-005.png",
    specifications: [
      "H.265&H.264 dual-stream encoding",
      "Multiple network monitoring",
      "Day/Night(ICR), 3DNR, AWB, AGC, BLC",
    ],
  },
  {
    id: "cctv-003",
    title: "Fixed IR Eyeball Camera",
    category: "CCTV",
    description:
      "HAC-HDW1801TLM(-A) 4K Starlight HDCVI Fixed IR Eyeball Camera.",
    image: "/images/product/CCTV/CCTV-001.png",
    specifications: [
      "120 dB true WDR, 3D NR",
      "30 m illumination distance",
      "Built-in MIC (-A).",
    ],
  },
  {
    id: "cctv-004",
    title: "Fixed IR Bullet Camera",
    category: "CCTV",
    description: "HAC-HFW1801TH-I8, 4K Starlight HDCVI Fixed IR Bullet Camera.",
    image: "/images/product/CCTV/CCTV-002.png",
    specifications: [
      "Max. 15 fps@4K.",
      "Smart IR Illumination.",
      "Super Adapt.",
    ],
  },
  {
    id: "cctv-005",
    title: "POC IR Eyeball Camera",
    category: "CCTV",
    description: "HAC-HDW1500T-Z-A-POC 5MP HDCVI POC IR Eyeball Camera.",
    image: "/images/product/CCTV/CCTV-003.png",
    specifications: [
      "HD and SD output switchable",
      "Max. IR length 60m, Smart IR",
      "2.7-12mm motorized lens",
    ],
  },
  {
    id: "cctv-006",
    title: "POC IR Bullet Camera",
    category: "CCTV",
    description: "HAC-HFW1500R-Z-IRE6-POC 5MP HDCVI POC IR Bullet Camera",
    image: "/images/product/CCTV/CCTV-004.png",
    specifications: [
      "IP67, POC/DC12V",
      "Max 20fps@5MP",
      "HD and SD output switchable",
    ],
  },

  // HDCVI (6 products)
  {
    id: "hdcvi-001",
    title: "HDCVI XVR16-I DVR",
    category: "HDCVI",
    description: "Supports a variety of camera types including Analog.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "Allows connectivity for up to 16 video channels",
      "Compatible with various video resolutions including HD ",
      "Utilizes advanced video compression",
    ],
  },
  {
    id: "hdcvi-002",
    title: "HDCVI XVR08-I DVR",
    category: "HDCVI",
    description: "Supports a variety of camera types including Analog.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "Allows connectivity for up to 8 video channels",
      "Offers internal storage options",
      "Equipped with Ethernet ports",
    ],
  },
  {
    id: "hdcvi-003",
    title: "HDCVI XVR04-I DVR",
    category: "HDCVI",
    description:
      "Supports various camera types such as Analog, AHD, TVI, CVI, and IP cameras.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "Allows connectivity for up to 4 video channels",
      "Compatible with different video resolutions",
      "Allows remote viewing & management via mobile apps ",
    ],
  },

  // AUDIO PAGING (6 products)
  {
    id: "audio-001",
    title: "250W 6 Zones Paging & Music Mixer Amplifier",
    category: "Audio Paging",
    description:
      "DSPPA 6 Zones Paging and Music Mixer Amplifier with USB & Tune MP310U.",
    image: "/images/product/AudioPaging/AP-01.png",
    specifications: [
      "100V & 4-16 Ω, rated power 120W",
      "Support USB / SD / FM radio",
      "4 MIC inputs, Mic 1 with priority",
    ],
  },
  {
    id: "audio-002",
    title: "Coaxial Frameless Ceiling Speaker",
    category: "Audio Paging",
    description:
      "Ultra-narrow edge design, with RAL white coating, fit in with all indoor occasions.",
    image: "/images/product/audioPaging.png",
    specifications: [
      "8 inch bass unit",
      "Waterproof coating",
      "14mm treble unit",
    ],
  },
  {
    id: "audio-003",
    title: "Coaxial Ceiling Speaker AUX167II",
    category: "Audio Paging",
    description:
      "This tweeter uses Ferrofluid liquid cooling to allow greater power handling.",
    image: "/images/product/AudioPaging/AP-02.png",
    specifications: [
      "Wide & strong scattering range",
      "2-phase circuit",
      "Midrange and bass frequencies",
    ],
  },
  {
    id: "audio-004",
    title: "Surface Mount Celling Speaker",
    category: "Audio Paging",
    description:
      "Built-in 100v/70v transformer, 3W-6W with multiple terminals.",
    image: "/images/product/AudioPaging/AP-03.png",
    specifications: [
      "Narrow edge design",
      "SPL: 100dB±2dB",
      "Freq. Resp.:110Hz ~ 18kHz",
    ],
  },
  {
    id: "audio-005",
    title: "10W Coaxial Ceiling Speaker",
    category: "Audio Paging",
    description:
      "Adopts the fashionable thin-edge planer and the carbon alloy aluminum mesh design.",
    image: "/images/product/AudioPaging/AP-04.png",
    specifications: [
      "Equipped with a 6.5",
      "Concentric 0.75",
      "IEC 268-5 power handling capacity",
    ],
  },
  {
    id: "audio-006",
    title: "Network On-wall Stereo Music Amplifier",
    category: "Audio Paging",
    description: "Advanced matrix controller for complex paging networks.",
    image: "/images/product/AudioPaging/AP-05.png",
    specifications: [
      "Built-in Hi-Fi digital amplifier",
      "4-channel signal output",
      "Support dual-zone independent control",
    ],
  },

  // PABX (6 products)
  {
    id: "pabx-001",
    title: "Office Communication System",
    category: "PABX",
    description:
      " Integrates voice, messaging, and other communication channels into one platform.",
    image: "/images/product/PABX/PABX-01.png",
    specifications: [
      "Supports a range of users and devices",
      "Allows traditional telephony & IP-based communication",
      "Supports mobile connectivity for remote and on-the-go workers",
    ],
  },
  {
    id: "pabx-002",
    title: "Business Communication System",
    category: "PABX",
    description:
      " Designed to work with Panasonic phone systems, providing seamless integration and functionality.",
    image: "/images/product/PABX/PABX-02.png",
    specifications: [
      "KX-T7700X series",
      "Two-line LCD display",
      "Equipped with navigation buttons ",
    ],
  },
  {
    id: "pabx-003",
    title: "Expansion Master Card",
    category: "PABX",
    description:
      "Interface card designed for insertion into compatible Panasonic KX-NS series communication servers.",
    image: "/images/product/PABX/PABX-03.png",
    specifications: [
      "Offers multiple digital ports",
      "Includes analog interfaces ",
      "Enhances the communication server’s capacity",
    ],
  },
  {
    id: "pabx-004",
    title: "6-Button Display Speakerphone",
    category: "PABX",
    description:
      "Fixed Feature Keys: Hold, Transfer, Speaker, Recall, Feature, Redial, Conference, Answer, Mic, Directory, and Message.",
    image: "/images/product/PABX/PABX-04.png",
    specifications: [
      "3-Line by 24-Character LCD Display",
      "4 LCD Soft Menu Keys",
      "6 Programmable Buttons",
    ],
  },
  {
    id: "pabx-005",
    title: "Panasonic KX-DT590X Digital DSS Console",
    category: "PABX",
    description:
      "Enhance your Panasonic digital phone system with the Panasonic KX-DT590X expansion module.",
    image: "/images/product/PABX/PABX-05.png",
    specifications: [
      "Add-on module offers a seamless extension",
      "Ctreamline call handling",
      "Clear display for easy labeling",
    ],
  },
  {
    id: "pabx-006",
    title: "KXT7705X Business Communication System",
    category: "PABX",
    description: "Specifically designed to work with Panasonic phone systems.",
    image: "/images/product/PABX.png",
    specifications: [
      "Single-line alphanumeric display",
      "Provides programmable keys",
      "Supports hands-free communication",
    ],
  },

  // DVR/NVR (6 products)
  {
    id: "dvr-001",
    title: "DVR Dahua Cooper XVR1B16H",
    category: "DVR/NVR",
    description:
      "16 Channel Penta-brid 4M-N/1080P Cooper 1U Digital Video Recorder.",
    image: "/images/product/DVR/DVR-01.png",
    specifications: [
      "H.265+/H.265 dual-stream video compression",
      "Max 24 channels IP camera inputs",
      "Supports 1 SATA HDD",
    ],
  },
  {
    id: "dvr-002",
    title: "Uniview XVR301-16G3 DVR",
    category: "DVR/NVR",
    description:
      " Supports up to 16 channels for video input, enabling connectivity with 16 cameras for surveillance purposes.",
    image: "/images/product/HDCVI/HDCVI-01.png",
    specifications: [
      "H.265+/H.265 dual-stream video compression",
      "4K UHD, Full HD, and lower resolutions",
      "Support for internal storage using SATA hard drives",
    ],
  },
  {
    id: "dvr-003",
    title: "Uniview XVR301-04F DVR",
    category: "DVR/NVR",
    description:
      " Supports up to 4 channels for video input, allowing connection to 4 cameras for surveillance purposes.",
    image: "/images/product/HDCVI/HDCVI-02.png",
    specifications: [
      "Enables compatibility with both analog and IP cameras",
      "4K UHD (Ultra High Definition) and lower resolutions",
      "Feature audio input and output ports",
    ],
  },
  {
    id: "dvr-004",
    title: "Uniview XVR301-04G3 DVR",
    category: "DVR/NVR",
    description:
      " Supports up to 4 channels for video input, allowing connectivity with 4 cameras for surveillance purposes.",
    image: "/images/product/HDCVI/HDCVI-01.png",
    specifications: [
      "4K UHD, Full HD, and lower resolutions",
      "Support for internal storage",
      "Motion detection functionality",
    ],
  },
  {
    id: "dvr-005",
    title: "Uniview XVR301-08F DVR",
    category: "DVR/NVR",
    description:
      "Supports up to 8 channels for video input, enabling connectivity with 8 cameras for surveillance purposes.",
    image: "/images/product/HDCVI/HDCVI-02.png",
    specifications: [
      "Provides compatibility with both analog and IP cameras",
      "Capable of recording video in high resolutions",
      "Allows remote access to live footage",
    ],
  },
  {
    id: "dvr-006",
    title: "HDCVI XVR16-I DVR",
    category: "DVR/NVR",
    description: "Supports a variety of camera types including Analog.",
    image: "/images/product/HDCVI.png",
    specifications: [
      "Connectivity for up to 16 video channels",
      "Full HD for clear and detailed video",
      "Offers internal storage options",
    ],
  },

  // ACCESS CONTROL (6 products)
  {
    id: "access-001",
    title: "Door Access System",
    category: "Access Control",
    description: "Utilizes advanced fingerprint technology for access.",
    image: "/images/product/AccessControl/AC-02.png",
    specifications: [
      "Utilizes advanced fingerprint",
      "Supports RFID cards, Standard EM cards",
      "Includes a PIN code keypad for entry.",
    ],
  },
  {
    id: "access-002",
    title: "Barrier Gate System",
    category: "Access Control",
    description:
      " Holds 1,000 to 3,000 fingerprint templates for authentication.",
    image: "/images/product/AccessControl/AC-01.png",
    specifications: [
      "Support 1,000 to 10,000 RFID card",
      "Offers rapid user identification",
      "Connectivity via Wi-Fi, Bluetooth, and USB",
    ],
  },
  {
    id: "access-003",
    title: "ZKTeco K20 Fingerprint",
    category: "Access Control",
    description: "Multi-door controller for centralized access management.",
    image: "/images/product/AC.png",
    specifications: [
      "500-1,000 fingerprints & RFID cards",
      "50,000 to 100,000 transaction logs",
      "Identification Speed ≤1 second",
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
  searchQuery: string,
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
