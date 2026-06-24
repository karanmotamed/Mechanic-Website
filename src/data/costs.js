export const repairCategories = [
  {
    id: "routine",
    name: "Routine Maintenance",
    icon: "🔧",
    items: [
      { name: "Oil Change (conventional)", fair: "$35–$55", warning: "$80+", notes: "3,000-mile interval myth — only needed this often for very old cars" },
      { name: "Oil Change (full synthetic)", fair: "$65–$95", warning: "$130+", notes: "Worth the extra cost for most modern cars" },
      { name: "Air Filter", fair: "$20–$40 total", warning: "$60+", notes: "Part costs $15, installation is 2 minutes — very easy upsell" },
      { name: "Cabin Air Filter", fair: "$20–$45 total", warning: "$70+", notes: "Another 5-minute job shops charge labor for" },
      { name: "Tire Rotation", fair: "$20–$50", warning: "$80+", notes: "Free at many tire shops; often included with oil changes" },
      { name: "Spark Plugs (4-cyl, copper)", fair: "$80–$160", warning: "$280+", notes: "Iridium plugs cost more but last 100k miles" },
      { name: "Spark Plugs (V6/V8)", fair: "$150–$350", warning: "$500+", notes: "More cylinders = more plugs; some V6s have hard-to-reach plugs" },
      { name: "Wiper Blades (pair)", fair: "$25–$45 total", warning: "$70+", notes: "Buy at auto parts store; anyone can install in 2 minutes" },
    ],
  },
  {
    id: "brakes",
    name: "Brakes",
    icon: "🛑",
    items: [
      { name: "Brake Pads (front, both sides)", fair: "$100–$200", warning: "$350+", notes: "Includes parts and labor; ask to see old pads" },
      { name: "Brake Pads (rear, both sides)", fair: "$100–$200", warning: "$350+", notes: "Same ballpark as fronts" },
      { name: "Brake Pads + Rotors (one axle)", fair: "$250–$450", warning: "$700+", notes: "Full front or rear axle service; check if rotors truly need replacing" },
      { name: "Brake Fluid Flush", fair: "$80–$120", warning: "$200+", notes: "Needed every 2–3 years; often unnecessary as an upsell" },
      { name: "Caliper Replacement (one)", fair: "$100–$250", warning: "$400+", notes: "Usually only fails on high-mileage or older vehicles" },
      { name: "ABS Module Replacement", fair: "$300–$800", warning: "$1,500+", notes: "Check if reman unit is available — much cheaper" },
    ],
  },
  {
    id: "tires",
    name: "Tires",
    icon: "⭕",
    items: [
      { name: "Economy Tire (195/65R15)", fair: "$80–$130 each", warning: "$180+ each", notes: "Plus installation, balancing, and disposal fee" },
      { name: "Mid-Range Tire (225/60R17)", fair: "$120–$200 each", warning: "$280+ each", notes: "Brands like Cooper, Yokohama, General are good value" },
      { name: "Performance/Premium Tire", fair: "$180–$350 each", warning: "$500+ each", notes: "Michelin, Continental, Bridgestone flagships" },
      { name: "Tire Installation (per tire)", fair: "$15–$25", warning: "$50+", notes: "Includes mounting and balancing" },
      { name: "Wheel Alignment", fair: "$75–$150", warning: "$250+", notes: "Needed after suspension work or if car pulls to one side" },
      { name: "Flat Repair (plug/patch)", fair: "$20–$40", warning: "$75+", notes: "Simple repair; never let them talk you into a new tire for a small puncture" },
    ],
  },
  {
    id: "engine",
    name: "Engine & Drivetrain",
    icon: "⚙️",
    items: [
      { name: "Timing Belt Replacement", fair: "$400–$900", warning: "$1,500+", notes: "Do NOT skip this — interference engines can be destroyed if belt breaks" },
      { name: "Timing Chain Service", fair: "$600–$1,500", warning: "$2,500+", notes: "More expensive than belt but usually lasts longer" },
      { name: "Serpentine Belt", fair: "$75–$150", warning: "$300+", notes: "Simple job; do it preventively every 60–100k miles" },
      { name: "Water Pump Replacement", fair: "$200–$500", warning: "$900+", notes: "Often done with timing belt since labor overlaps" },
      { name: "Thermostat Replacement", fair: "$150–$300", warning: "$500+", notes: "Small part, some labor involved" },
      { name: "Head Gasket Replacement", fair: "$1,200–$2,500", warning: "N/A (just make sure they actually do it)", notes: "Major job — this is where shops can inflate hours significantly" },
      { name: "Transmission Service (fluid + filter)", fair: "$150–$300", warning: "$500+", notes: "Not needed every 30k miles as shops claim; check your manual" },
    ],
  },
  {
    id: "electrical",
    name: "Electrical & Battery",
    icon: "⚡",
    items: [
      { name: "Battery Replacement", fair: "$120–$220 total", warning: "$350+", notes: "Battery itself is $80–$150; buy at AutoZone/Costco" },
      { name: "Alternator Replacement", fair: "$350–$600", warning: "$900+", notes: "Labor-intensive on some cars; reman units are fine" },
      { name: "Starter Motor Replacement", fair: "$200–$450", warning: "$700+", notes: "Symptoms: clicking when starting, won't crank" },
      { name: "Check Engine Light Diagnosis", fair: "$75–$150", warning: "$300+", notes: "Auto parts stores often do this free; shops charge for shop time" },
      { name: "O2 Sensor Replacement", fair: "$150–$350", warning: "$600+", notes: "Usually 2–4 sensors per car; many are easy DIY" },
    ],
  },
  {
    id: "suspension",
    name: "Suspension & Steering",
    icon: "🚗",
    items: [
      { name: "Strut Replacement (pair)", fair: "$400–$800", warning: "$1,200+", notes: "Always do in pairs; includes alignment afterward" },
      { name: "Shock Absorber (pair)", fair: "$250–$550", warning: "$900+", notes: "Front and rear are separate jobs" },
      { name: "Ball Joint Replacement", fair: "$200–$450 each", warning: "$700+", notes: "Safety-critical — don't defer if mechanic shows evidence of failure" },
      { name: "Tie Rod End Replacement", fair: "$150–$350 each", warning: "$600+", notes: "Alignment needed after; inner tie rods cost more" },
      { name: "Sway Bar Link Replacement", fair: "$75–$150 each", warning: "$300+", notes: "Common cheap fix; links wear out, often causing clunking" },
      { name: "Power Steering Rack", fair: "$600–$1,200", warning: "$2,000+", notes: "Reman units save significant money" },
    ],
  },
];

export const priceComparisons = [
  {
    service: "Oil Change (Synthetic)",
    dealership: "$120–$160",
    chainShop: "$65–$90",
    independentShop: "$55–$75",
    diy: "$35–$55",
  },
  {
    service: "Front Brake Pads",
    dealership: "$350–$600",
    chainShop: "$250–$400",
    independentShop: "$150–$280",
    diy: "$45–$80 (parts only)",
  },
  {
    service: "Tire Rotation",
    dealership: "$50–$80",
    chainShop: "$20–$40",
    independentShop: "$20–$40",
    diy: "Free",
  },
  {
    service: "Air Filter Replacement",
    dealership: "$60–$100",
    chainShop: "$40–$70",
    independentShop: "$30–$50",
    diy: "$15–$25",
  },
  {
    service: "Serpentine Belt",
    dealership: "$250–$400",
    chainShop: "$150–$250",
    independentShop: "$100–$175",
    diy: "$20–$50 (parts only)",
  },
];

export const laborRates = [
  { region: "Rural Areas", range: "$70–$100/hr" },
  { region: "Suburban Areas", range: "$90–$130/hr" },
  { region: "Major Cities", range: "$110–$180/hr" },
  { region: "Dealerships (anywhere)", range: "$130–$200/hr" },
];
