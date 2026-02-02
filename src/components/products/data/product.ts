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
  { label: "HDCVI Camera", slug: "hdcvi", href: "/products/hdcvi" },
  { label: "Wifi Camera", slug: "wifi", href: "/products/wifi" },
  { label: "DVR/NVR", slug: "dvrnvr", href: "/products/dvrnvr" },
  {
    label: "Access Control",
    slug: "accesscontrol",
    href: "/products/accesscontrol",
  },
  { label: "PABX", slug: "pabx", href: "/products/pabx" },

  { label: "Audio Paging", slug: "audiopaging", href: "/products/audiopaging" },
];

/**
 * Master product catalog
 */
export const PRODUCTS_DATA: Product[] = [
  // 1. IP Camera (Network Camera)
  {
    id: "ipcam-001",
    title: "IPC-HFW2441S-S",
    category: "IP Camera",
    description: "4MP IR Fixed-focal Bullet WizSense Network Camera.",
    image: "/images/product/IPCamera/IP-Bullet-Cam.png",
    specifications: [
      '4MP 1/2.9" CMOS image sensor, low luminance, and high definition image',
      "H.265 codec, high compression rate, ultra-low bit rate",
      "Abnormality detection: Motion detection, video tampering, audio detection",
      "IP67 protection, Built-in Mic, IR distance 30m",
    ],
  },
  {
    id: "ipcam-002",
    title: "IPC-HDBW2441E-S",
    category: "IP Camera",
    description: "4MP IR Fixed-focal Dome WizSense Network Camera.",
    image: "/images/product/IPCamera/IP-Dome-Cam.png",
    specifications: [
      '4MP 1/2.9" CMOS image sensor, high image definition',
      "Outputs max. 4MP (2688 × 1520) @20 fps",
      "Intelligent monitoring: Intrusion, tripwire (human & vehicle classification)",
      "IP67, IK10 protection, Micro SD card up to 256GB",
    ],
  },
  {
    id: "ipcam-003",
    title: "SD49425XB-HNR",
    category: "IP Camera",
    description: "4MP 25x Starlight IR WizSense Network PTZ Camera.",
    image: "/images/product/IPCamera/IP-PTZ-Cam.png",
    specifications: [
      '1/2.8" 4MP STARVIS™ CMOS with 25x optical zoom',
      "Starlight technology for ultra-low light performance",
      "Perimeter protection, Face detection, SMD Plus",
      "IR distance up to 100m, IP66 rating",
    ],
  },

  // 2. Analog / HDCVI Camera
  {
    id: "hdcvi-001",
    title: "HAC-HFW1200T",
    category: "HDCVI Camera",
    description: "2MP HDCVI IR Bullet Camera Lite Series.",
    image: "/images/product/HDCVI/Analog-Bullet.png",
    specifications: [
      "Max 30fps@1080P (1920 × 1080)",
      "CVI/CVBS/AHD/TVI switchable via one BNC port",
      "3.6mm fixed lens (2.8mm, 6mm optional)",
      "Max. IR length 30m, Smart IR, IP67, DC12V",
    ],
  },
  {
    id: "hdcvi-002",
    title: "HAC-HDW1200M",
    category: "HDCVI Camera",
    description: "2MP HDCVI IR Eyeball Camera Lite Series.",
    image: "/images/product/HDCVI/Analog-Dome.png",
    specifications: [
      "Max 30fps@1080P resolution",
      "Multi-language OSD, HD and SD output switchable",
      "Quick-to-install eyeball saves installation time",
      "Max. IR length 30m, Smart IR, IP67, DC12V",
    ],
  },
  {
    id: "hdcvi-003",
    title: "SD49225I-HC",
    category: "HDCVI Camera",
    description: "2MP 25x Starlight IR HDCVI PTZ Camera.",
    image: "/images/product/IPCamera/IP-PTZ-Cam.png",
    specifications: [
      '1/2.8" STARVIS™ CMOS, 25x optical zoom',
      "Starlight technology, 120dB true WDR, 3D DNR",
      "Max. 25/30fps@1080P, 25/30/50/60fps@720P",
      "IR distance up to 100m, IP66 protection",
    ],
  },

  // 3. Wifi Camera
  {
    id: "wifi-001",
    title: "Hero A1 (IPC-A22EP-L)",
    category: "Wifi Camera",
    description: "2MP H.265 Wi-Fi Pan & Tilt Camera.",
    image: "/images/product/CCTV/Wifi-Indoor.png",
    specifications: [
      "1080P Full HD Video with H.265 compression",
      "0 to 355° Pan & -5° to 80° Tilt rotation",
      "Human Detection and Smart Tracking",
      "Two-way Talk, Built-in Siren, Micro SD Slot (up to 256GB)",
    ],
  },
  {
    id: "wifi-002",
    title: "F22P-D (Bullet Wifi)",
    category: "Wifi Camera",
    description: "2MP Bullet WI-FI Camera Outdoor Series.",
    image: "/images/product/CCTV/Wifi-Outdoor.png",
    specifications: [
      "1080P Full HD Video & H.265 Compression",
      "Human Detection & Motion Activated built-in Mic",
      "IP67 Weatherproof for outdoor conditions",
      "Diversified Storage: NVR, Cloud Storage, or Micro SD card",
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
