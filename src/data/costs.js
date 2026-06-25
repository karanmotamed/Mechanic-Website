export const repairCategories = [
  {
    id: "routine",
    name: "Routine Maintenance",
    icon: "🔧",
    items: [
      { name: "Oil Change (conventional)", fair: "$55–$80", warning: "$110+", notes: "3,000-km interval myth — only needed this often for very old cars" },
      { name: "Oil Change (full synthetic)", fair: "$90–$130", warning: "$180+", notes: "Worth the extra cost for most modern cars" },
      { name: "Air Filter", fair: "$30–$55 total", warning: "$90+", notes: "Part costs $20–$30 at Canadian Tire or Lordco; installation is 2 minutes" },
      { name: "Cabin Air Filter", fair: "$30–$60 total", warning: "$100+", notes: "Another 5-minute job shops charge labour for" },
      { name: "Tire Rotation", fair: "$30–$60", warning: "$100+", notes: "Free at many tire shops; often included with oil changes" },
      { name: "Spark Plugs (4-cyl, copper)", fair: "$110–$220", warning: "$380+", notes: "Iridium plugs cost more but last 160,000 km" },
      { name: "Spark Plugs (V6/V8)", fair: "$200–$450", warning: "$680+", notes: "More cylinders = more plugs; some V6s have hard-to-reach plugs" },
      { name: "Wiper Blades (pair)", fair: "$35–$65 total", warning: "$100+", notes: "Buy at Canadian Tire; anyone can install in 2 minutes" },
    ],
  },
  {
    id: "brakes",
    name: "Brakes",
    icon: "🛑",
    items: [
      { name: "Brake Pads (front, both sides)", fair: "$150–$280", warning: "$480+", notes: "Includes parts and labour; ask to see old pads" },
      { name: "Brake Pads (rear, both sides)", fair: "$150–$280", warning: "$480+", notes: "Same ballpark as fronts" },
      { name: "Brake Pads + Rotors (one axle)", fair: "$350–$600", warning: "$950+", notes: "Full front or rear axle service; check if rotors truly need replacing" },
      { name: "Brake Fluid Flush", fair: "$110–$170", warning: "$280+", notes: "Needed every 2–3 years; often unnecessary as an upsell" },
      { name: "Caliper Replacement (one)", fair: "$150–$350", warning: "$550+", notes: "Usually only fails on high-mileage or older vehicles" },
      { name: "ABS Module Replacement", fair: "$400–$1,100", warning: "$2,000+", notes: "Check if reman unit is available — much cheaper" },
    ],
  },
  {
    id: "tires",
    name: "Tires",
    icon: "⭕",
    items: [
      { name: "Economy Tire (195/65R15)", fair: "$110–$180 each", warning: "$250+ each", notes: "Plus installation, balancing, and disposal fee" },
      { name: "Mid-Range Tire (225/60R17)", fair: "$160–$280 each", warning: "$380+ each", notes: "Brands like Cooper, Yokohama, General are good value" },
      { name: "Performance/Premium Tire", fair: "$250–$480 each", warning: "$680+ each", notes: "Michelin, Continental, Bridgestone flagships" },
      { name: "Winter Tires (required in BC mountain passes)", fair: "$150–$300 each", warning: "$450+ each", notes: "Required Oct 1–Apr 30 on most BC highways; budget for a second set of rims" },
      { name: "Tire Installation (per tire)", fair: "$20–$35", warning: "$65+", notes: "Includes mounting and balancing" },
      { name: "Wheel Alignment", fair: "$100–$200", warning: "$340+", notes: "Needed after suspension work or if car pulls to one side" },
      { name: "Flat Repair (plug/patch)", fair: "$30–$55", warning: "$100+", notes: "Simple repair; never let them talk you into a new tire for a small puncture" },
    ],
  },
  {
    id: "engine",
    name: "Engine & Drivetrain",
    icon: "⚙️",
    items: [
      { name: "Timing Belt Replacement", fair: "$550–$1,200", warning: "$2,000+", notes: "Do NOT skip this — interference engines can be destroyed if belt breaks" },
      { name: "Timing Chain Service", fair: "$800–$2,000", warning: "$3,400+", notes: "More expensive than belt but usually lasts longer" },
      { name: "Serpentine Belt", fair: "$100–$210", warning: "$420+", notes: "Simple job; do it preventively every 100,000–160,000 km" },
      { name: "Water Pump Replacement", fair: "$280–$700", warning: "$1,200+", notes: "Often done with timing belt since labour overlaps" },
      { name: "Thermostat Replacement", fair: "$200–$420", warning: "$680+", notes: "Small part, some labour involved" },
      { name: "Head Gasket Replacement", fair: "$1,700–$3,400", warning: "N/A (just make sure they actually do it)", notes: "Major job — this is where shops can inflate hours significantly" },
      { name: "Transmission Service (fluid + filter)", fair: "$200–$420", warning: "$680+", notes: "Not needed every 50,000 km as shops claim; check your manual" },
    ],
  },
  {
    id: "electrical",
    name: "Electrical & Battery",
    icon: "⚡",
    items: [
      { name: "Battery Replacement", fair: "$170–$300 total", warning: "$480+", notes: "Battery itself is $110–$200; buy at Canadian Tire or Costco" },
      { name: "Alternator Replacement", fair: "$480–$850", warning: "$1,200+", notes: "Labour-intensive on some cars; reman units are fine" },
      { name: "Starter Motor Replacement", fair: "$280–$620", warning: "$950+", notes: "Symptoms: clicking when starting, won't crank" },
      { name: "Check Engine Light Diagnosis", fair: "$100–$200", warning: "$400+", notes: "Some shops offer free code reads; NAPA and Lordco sometimes do too" },
      { name: "O2 Sensor Replacement", fair: "$200–$480", warning: "$820+", notes: "Usually 2–4 sensors per car; many are easy DIY" },
    ],
  },
  {
    id: "suspension",
    name: "Suspension & Steering",
    icon: "🚗",
    items: [
      { name: "Strut Replacement (pair)", fair: "$550–$1,100", warning: "$1,700+", notes: "Always do in pairs; includes alignment afterward" },
      { name: "Shock Absorber (pair)", fair: "$350–$750", warning: "$1,200+", notes: "Front and rear are separate jobs" },
      { name: "Ball Joint Replacement", fair: "$280–$620 each", warning: "$950+", notes: "Safety-critical — don't defer if mechanic shows evidence of failure" },
      { name: "Tie Rod End Replacement", fair: "$200–$480 each", warning: "$820+", notes: "Alignment needed after; inner tie rods cost more" },
      { name: "Sway Bar Link Replacement", fair: "$100–$210 each", warning: "$420+", notes: "Common cheap fix; links wear out, often causing clunking" },
      { name: "Power Steering Rack", fair: "$800–$1,700", warning: "$2,800+", notes: "Reman units save significant money" },
    ],
  },
];

export const priceComparisons = [
  {
    service: "Oil Change (Synthetic)",
    dealership: "$160–$220",
    chainShop: "$90–$125",
    independentShop: "$75–$110",
    diy: "$50–$80",
  },
  {
    service: "Front Brake Pads",
    dealership: "$480–$820",
    chainShop: "$340–$550",
    independentShop: "$200–$380",
    diy: "$60–$110 (parts only)",
  },
  {
    service: "Tire Rotation",
    dealership: "$65–$110",
    chainShop: "$30–$55",
    independentShop: "$30–$55",
    diy: "Free",
  },
  {
    service: "Air Filter Replacement",
    dealership: "$80–$140",
    chainShop: "$55–$95",
    independentShop: "$40–$70",
    diy: "$20–$35",
  },
  {
    service: "Serpentine Belt",
    dealership: "$340–$550",
    chainShop: "$200–$340",
    independentShop: "$135–$240",
    diy: "$30–$70 (parts only)",
  },
];

export const laborRates = [
  { region: "Rural BC", range: "$110–$140/hr" },
  { region: "Suburban BC (Langley, Abbotsford, etc.)", range: "$130–$170/hr" },
  { region: "Metro Vancouver / Victoria", range: "$150–$200/hr" },
  { region: "Dealerships in BC", range: "$180–$250/hr" },
];
