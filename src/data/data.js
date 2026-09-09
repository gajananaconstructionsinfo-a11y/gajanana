// GAJANANA CONSTRUCTIONS & MATERIALS - Core Data Store (React Vite Edition)
// Brand Positioning: "Building Dreams. Supplying Quality. Delivering Strength."

export const DEFAULT_DATA = {
  company: {
    name: "GAJANANA CONSTRUCTIONS & MATERIALS",
    shortName: "GCM",
    tagline: "Building Dreams. Supplying Quality. Delivering Strength.",
    subheading: "Complete Construction Solutions & One-Stop Building Materials Destination",
    trustStatement: "Construction • Materials • Engineering • Project Solutions",
    phone: "+91 98450 12345",
    phoneDisplay: "+91 98450 12345",
    whatsapp: "+91 98450 12345",
    whatsappNumber: "919845012345",
    email: "contact@gajananaconstructions.com",
    address: "Plot No. 42, Heavy Industrial & Construction Supply Zone, Outer Ring Road, Bengaluru, Karnataka, India",
    workingHours: "Monday - Saturday: 8:00 AM – 7:30 PM | Sunday: 9:00 AM – 2:00 PM",
    establishedYear: 1999,
    experienceYears: "25+",
    stats: [
      { id: "01", label: "Complete Construction Solutions", value: "Turnkey & Civil Engineering" },
      { id: "02", label: "Wide Material Range", value: "16+ Verified Categories" },
      { id: "03", label: "Quality-Focused Approach", value: "IS Standard & NABL Certified" },
      { id: "04", label: "Customer-Centric Service", value: "Transparent Milestone Billing" }
    ]
  },

  services: [
    {
      id: "residential-construction",
      slug: "residential-construction",
      title: "Residential Construction",
      subtitle: "Independent houses, villas and residential buildings.",
      desc: "Comprehensive turnkey residential building solutions. We manage every phase from soil test, foundation layout, structural RCC casting, brickwork, to high-end interior finishes with engineering precision.",
      deliverables: ["Custom Architectural & Structural Drawings", "Seismic-Resilient RCC Foundation & Framing", "End-to-End Turnkey Execution (Grey to Finishes)", "Direct Quality Material Assurance & Testing"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      badge: "Turnkey Solutions",
      applications: ["Custom Luxury Villas", "Duplex Residences", "Multi-Family Residential Apartments", "Row Houses & Gated Communities"],
      faqs: [
        { q: "How do you ensure material quality during construction?", a: "Because Gajanana Constructions & Materials operates its own certified material depot, all steel rebars, cement, and aggregates undergo rigorous batch testing with NABL mill test reports before site delivery." },
        { q: "Can we customize the floor plan and material specifications?", a: "Yes. Our in-house structural engineers and architects collaborate with you to create tailored architectural floor plans and itemized material schedules." }
      ]
    },
    {
      id: "commercial-construction",
      slug: "commercial-construction",
      title: "Commercial Construction",
      subtitle: "Shops, offices, commercial buildings and business spaces.",
      desc: "Robust, scalable commercial spaces engineered for longevity, high footfall, and municipal safety compliance. Designed for maximum space utilization, structural safety, and fast-track milestone execution.",
      deliverables: ["Multi-Storey Post-Tensioned & RCC Frameworks", "Commercial Grade High-Traffic Flooring & MEP Utilities", "Fire, Life Safety & Municipal Code Compliance", "Dedicated Milestone Delivery Schedules"],
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      badge: "Commercial Grade",
      applications: ["Corporate IT Parks & Office Complexes", "Retail Plazas & Commercial Showrooms", "Commercial Warehouses & Logistics Hubs", "Hospitality & Healthcare Facilities"],
      faqs: [
        { q: "Do you handle structural civil works and MEP integration?", a: "Yes, our commercial turnkey contracts cover full civil superstructure, electrical substations, plumbing risers, fire suppression lines, and HVAC ducting." }
      ]
    },
    {
      id: "civil-construction",
      slug: "civil-construction",
      title: "Civil Construction",
      subtitle: "Civil works and structural construction services.",
      desc: "Heavy-duty civil infrastructure and earthworks executed with certified machinery and strict civil engineering standards for commercial, industrial, and infrastructure sectors.",
      deliverables: ["Deep Excavation & Earth Retaining Systems", "Heavy Machine Foundations & Piling Works", "Industrial RCC Roadways & Compound Enclosures", "Stormwater Drainage & Site Civil Infrastructure"],
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
      badge: "Heavy Infrastructure",
      applications: ["Industrial Factories & Shed Foundations", "Bridge & Culvert Works", "Earth Retaining & Shoring Walls", "Substation & Utility Civil Bases"],
      faqs: [
        { q: "What heavy machinery do you mobilize on site?", a: "We operate our own fleet of hydraulic excavators, batching plants, transit mixers, mobile cranes, and automated soil compactors." }
      ]
    },
    {
      id: "renovation",
      slug: "renovation",
      title: "Renovation & Remodeling",
      subtitle: "Renovation, remodeling and structural improvement solutions.",
      desc: "Breathe new life into aging structures. We reinforce structural integrity, reconfigure layouts, replace outdated plumbing and electrical setups, and modernize exterior facades.",
      deliverables: ["Structural Retrofitting & Column Jacketing", "Architectural Facade Modernization", "Flooring, Waterproofing & Interior Upgrades", "Acoustic & Thermal Performance Improvements"],
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80",
      badge: "Restoration",
      applications: ["Heritage Home Restorations", "Commercial Office Overhauls", "Structural Distress Strengthening", "Retail Space Refurbishment"],
      faqs: [
        { q: "How do you assess structural safety before renovation?", a: "Our structural engineers perform non-destructive concrete rebound hammer tests, ultrasonic pulse velocity, and load analysis before commencing structural modifications." }
      ]
    },
    {
      id: "project-management",
      slug: "project-management",
      title: "Project Management",
      subtitle: "Professional coordination and project execution support.",
      desc: "Eliminate delays, budget overruns, and coordination friction. Our veteran site supervisors and project managers track schedules, quality benchmarks, safety protocols, and material logistics.",
      deliverables: ["Accurate Cost Estimation & Bill of Quantities (BOQ)", "Material Logistics & Batch Quality Inspection", "Daily Digital Site Supervision & Milestone Tracking", "Zero-Escalation Budget & Timeline Guarantee"],
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&q=80",
      badge: "Full Oversight",
      applications: ["Turnkey Project Coordination", "Independent Engineer Supervision", "Contractor Material Audits", "Quality Control Compliance"],
      faqs: [
        { q: "Can we engage project management for an ongoing construction project?", a: "Yes, we provide independent project management, quality audits, and procurement supervision for active construction sites." }
      ]
    },
    {
      id: "structural-works",
      slug: "structural-works",
      title: "Structural Works",
      subtitle: "Foundation, RCC, structural and related construction works.",
      desc: "The core backbone of any lasting edifice. We specialize in deep piling, isolated footings, seismic-resilient RCC frames, structural steel truss fabrication, and high-load civil engineering.",
      deliverables: ["Seismic-Resilient RCC Framing (Zone III/IV)", "High-Load Pile, Raft & Combined Footings", "Structural Steel Fabrications & Portals", "High-Grade Concrete Quality Control & Curing"],
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=800&q=80",
      badge: "Core Engineering",
      applications: ["High-Rise RCC Frames", "Industrial Steel Shed Trusses", "Heavy Equipment Machine Foundations", "Basement Retaining Structures"],
      faqs: [
        { q: "What concrete grades do you test and pour?", a: "We pour design mixes from M20 up to M50 with 7-day and 28-day cube compressive strength verification." }
      ]
    },
    {
      id: "finishing",
      slug: "finishing",
      title: "Finishing Works",
      subtitle: "Flooring, walls, ceilings, painting and finishing solutions.",
      desc: "Turn raw masonry into breathtaking living and working spaces. Precision vitrified and natural stone tiling, designer false ceilings, premium acoustic paneling, and flawless exterior weather coatings.",
      deliverables: ["Vitrified, Granite & Marble Precision Tiling", "Designer Gypsum False Ceilings & Lighting Coves", "Architectural Wall Emulsions & Textured Finishes", "Custom Solid Wood Joinery & Flush Doors"],
      image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80",
      badge: "Finishing",
      applications: ["Luxury Residences", "Corporate Executive Suites", "Commercial Retail Outlets", "Hospitality Interiors"],
      faqs: [
        { q: "Can we inspect tile and sanitaryware samples before installation?", a: "Yes! You can visit our material depot or inspect curated sample boards for tiles, paints, sanitaryware, and hardware." }
      ]
    },
    {
      id: "custom-construction",
      slug: "custom-construction",
      title: "Custom Construction Solutions",
      subtitle: "Construction solutions based on individual project requirements.",
      desc: "Have bespoke architectural plans or complex spatial challenges? We provide tailored construction blueprints, specialized material sourcing, and dedicated craft teams.",
      deliverables: ["Bespoke Architectural Execution", "Specialized Material Procurement", "Flexible Milestone Billing", "Dedicated Project Engineering Team"],
      image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80",
      badge: "Bespoke",
      applications: ["Unique Architectural Homes", "Eco-Friendly Sustainable Builds", "Specialized Industrial Enclosures", "Custom Structural Expansions"],
      faqs: [
        { q: "Do you work with third-party architects?", a: "Yes, we regularly collaborate with leading architectural firms, executing their blueprints with engineering rigor." }
      ]
    }
  ],

  materialCategories: [
    { id: "cement", slug: "cement", name: "Cement", count: "8 Products", icon: "box", shortDesc: "OPC 53, OPC 43, PPC, White Cement and specialized waterproofing cement.", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { id: "steel", slug: "steel", name: "Steel & TMT Bars", count: "6 Products", icon: "layers", shortDesc: "Fe 550D, Fe 500 TMT rebars, MS angles, channels and binding wires.", image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80" },
    { id: "bricks-blocks", slug: "bricks-blocks", name: "Bricks & Blocks", count: "5 Products", icon: "grid", shortDesc: "First-class red clay bricks, AAC lightweight blocks, solid concrete blocks.", image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80" },
    { id: "sand-aggregates", slug: "sand-aggregates", name: "Sand & Aggregates", count: "5 Products", icon: "disc", shortDesc: "Graded river sand, M-sand, P-sand, 20mm/40mm blue metal aggregates.", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80" },
    { id: "tiles", slug: "tiles", name: "Tiles", count: "7 Products", icon: "layout", shortDesc: "Glazed vitrified tiles (GVT/PGVT), parking tiles, digital wall tiles.", image: "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=600&q=80" },
    { id: "plumbing", slug: "plumbing", name: "Plumbing & Pipes", count: "7 Products", icon: "droplets", shortDesc: "Rigid PVC, CPVC hot & cold pipes, UPVC drainage lines and pressure valves.", image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80" },
    { id: "electrical", slug: "electrical", name: "Electrical Materials", count: "6 Products", icon: "zap", shortDesc: "FR-LSH copper wires, armoured cables, modular switches, PVC conduits.", image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80" },
    { id: "hardware", slug: "hardware", name: "Hardware", count: "6 Products", icon: "tool", shortDesc: "High-tensile fasteners, concrete anchors, mortise locksets, stainless hinges.", image: "https://images.unsplash.com/photo-1581783898377-1c85bf937427?auto=format&fit=crop&w=600&q=80" },
    { id: "paints", slug: "paints", name: "Paints & Wall Finishes", count: "6 Products", icon: "feather", shortDesc: "Exterior weather-proof emulsions, acrylic interior paints, primers and putty.", image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80" },
    { id: "sanitaryware", slug: "sanitaryware", name: "Sanitaryware", count: "5 Products", icon: "shield", shortDesc: "Wall-hung closets, one-piece toilets, countertop basins, ceramic pedestals.", image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=600&q=80" },
    { id: "roofing", slug: "roofing", name: "Roofing Materials", count: "4 Products", icon: "home", shortDesc: "Zinc-aluminium colour coated sheets, UPVC roofing tiles, insulation sheets.", image: "https://images.unsplash.com/photo-1632759145351-1d592919f522?auto=format&fit=crop&w=600&q=80" },
    { id: "waterproofing", slug: "waterproofing", name: "Waterproofing", count: "5 Products", icon: "umbrella", shortDesc: "Liquid polymer membranes, crystalline waterproofing, epoxy crack fillers.", image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80" },
    { id: "construction-chemicals", slug: "construction-chemicals", name: "Construction Chemicals", count: "5 Products", icon: "flask", shortDesc: "Concrete plasticizers, bonding agents, tile adhesives and non-shrink grouts.", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80" },
    { id: "doors-windows", slug: "doors-windows", name: "Doors & Windows", count: "4 Products", icon: "maximize", shortDesc: "Engineered timber flush doors, architectural UPVC & aluminium windows.", image: "https://images.unsplash.com/photo-1534349762230-e0cadf78f5da?auto=format&fit=crop&w=600&q=80" }
  ],

  // Heavy Construction SKUs matching Stitch Screen 2
  heavySKUs: [
    {
      id: "sku-tata-550d",
      name: "Tata Tiscon 550D Super Ductile TMT Rebar",
      category: "Steel & TMT Rebar",
      catSlug: "steel",
      tag: "Primary Mill Direct",
      specSummary: "IS 1786:2008 Fe 550D | 8mm to 32mm | High Elongation",
      specs: [
        { label: "Grade", val: "Fe 550D High Ductility" },
        { label: "Yield Strength", val: ">= 585 N/mm2" },
        { label: "Elongation", val: ">= 16.5%" },
        { label: "Carbon Equivalent", val: "<= 0.42%" }
      ],
      priceGuide: "₹61,500 - ₹64,200 / MT (Tier-1 Direct)",
      availability: "1,200 MT In Stock",
      testReportId: "TR-TISCON-9821",
      image: "https://images.unsplash.com/photo-1535813547-99c456a41d4a?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sku-ultratech-53",
      name: "UltraTech 53-Grade Ordinary Portland Cement (OPC)",
      category: "Cement & Binders",
      catSlug: "cement",
      tag: "Fresh Batch / Dry Silo",
      specSummary: "IS 12269:2013 | 50 kg HDPE Bags | Initial Setting >= 30m",
      specs: [
        { label: "Grade", val: "OPC 53 Structural" },
        { label: "28-Day Strength", val: ">= 58.0 MPa" },
        { label: "Soundness", val: "<= 1.5 mm (Le-Chat)" },
        { label: "Fineness", val: ">= 280 m2/kg" }
      ],
      priceGuide: "₹385 - ₹415 / Bag (Direct site rake discount)",
      availability: "18,000 Bags Ready",
      testReportId: "TR-ULTRA-4412",
      image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sku-jsw-crs",
      name: "JSW Neosteel Fe 550D Corrosion Resistant Steel (CRS)",
      category: "Steel & TMT Rebar",
      catSlug: "steel",
      tag: "Coastal & Sunken Slabs",
      specSummary: "Copper & Chromium Alloyed | Extreme Marine Grade",
      specs: [
        { label: "Corrosion Index", val: "1.45x Standard" },
        { label: "Yield Strength", val: ">= 575 N/mm2" },
        { label: "Bend Test", val: "180 deg Mandrel Pass" },
        { label: "Sizes", val: "10mm to 25mm" }
      ],
      priceGuide: "₹63,200 - ₹65,800 / MT",
      availability: "450 MT Available",
      testReportId: "TR-JSW-7730",
      image: "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sku-aerocon-aac",
      name: "Aerocon Precision Autoclaved Aerated Blocks",
      category: "Bricks & Blocks",
      catSlug: "bricks-blocks",
      tag: "High Thermal Insulation",
      specSummary: "600x200x150/200mm | IS 2185 Part 3 | Fire Rating 4 Hrs",
      specs: [
        { label: "Dry Density", val: "550 - 650 kg/m3" },
        { label: "Compressive Strength", val: ">= 4.0 N/mm2" },
        { label: "Thermal Conductivity", val: "0.16 W/m-K" },
        { label: "Dead Load Red.", val: "50% vs Clay Brick" }
      ],
      priceGuide: "₹58 - ₹68 / Piece (Volume tiered rates)",
      availability: "35,000 Units Stocked",
      testReportId: "TR-AAC-1092",
      image: "https://images.unsplash.com/photo-1590069261209-f8e9b8642343?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sku-astral-silencio",
      name: "Astral Silencio 3-Layer Acoustic Drainage System",
      category: "Plumbing & Pipes",
      catSlug: "plumbing",
      tag: "Ultra-Quiet SWR",
      specSummary: "Mineral-Reinforced Polypropylene | Sound Level < 13 dB",
      specs: [
        { label: "Sizes", val: "75mm, 110mm, 160mm" },
        { label: "Impact Resistance", val: "-10 deg C Certified" },
        { label: "Hot Water Resist", val: "Up to 95 deg C" },
        { label: "Joint Type", val: "Factory Push-fit Ring" }
      ],
      priceGuide: "Contractor Rake Discount Available",
      availability: "Immediate Logistics",
      testReportId: "TR-ASTRAL-882",
      image: "https://images.unsplash.com/photo-1584992236310-6edddc08acff?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sku-vsi-msand",
      name: "Triple Washed VSI Manufactured Concrete Sand (M-Sand)",
      category: "Sand & Aggregates",
      catSlug: "sand-aggregates",
      tag: "Zero-Silt Concrete Grade",
      specSummary: "Zone II Fine Aggregate | IS 383:2016 | 100% Cubical",
      specs: [
        { label: "Grading Zone", val: "Zone II Standard" },
        { label: "Silt Content", val: "< 0.8% (Double Hydro)" },
        { label: "Bulk Density", val: "1,550 kg/m3" },
        { label: "Specific Gravity", val: "2.65" }
      ],
      priceGuide: "₹1,150 - ₹1,250 / Tonne (Bulk site tipping)",
      availability: "Daily 800 Tonne Dispatch",
      testReportId: "TR-SAND-304",
      image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sku-fosroc-grout",
      name: "Fosroc Conbextra GP High-Flow Non-Shrink Grout",
      category: "Construction Chemicals",
      catSlug: "construction-chemicals",
      tag: "Pre-Bagged Chemical",
      specSummary: "Free-Flowing Precision Grout for Stanchions & Machine Bases",
      specs: [
        { label: "Packaging", val: "25 kg Bag" },
        { label: "Compressive 28D", val: ">= 65 N/mm2" },
        { label: "Expansion", val: "+0.5% to +2.0%" },
        { label: "Flow Cone", val: "10-12 Seconds" }
      ],
      priceGuide: "₹540 - ₹585 / 25kg Bag",
      availability: "850 Bags In Stock",
      testReportId: "TR-FOSROC-664",
      image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=600&q=80"
    },
    {
      id: "sku-schneider-acti9",
      name: "Schneider Electric Acti9 Heavy Distribution Panels",
      category: "Electrical Materials",
      catSlug: "electrical",
      tag: "Industrial Sub-Panels",
      specSummary: "IP43 Enclosures | VisiTrip & VisiSafe | 10kA Breaking Capacity",
      specs: [
        { label: "Incomer Range", val: "40A to 125A 4P" },
        { label: "Way Capacity", val: "4, 8, 12, 16 Way TPN" },
        { label: "Standard", val: "IS/IEC 61439-3" },
        { label: "Sheet Metal", val: "1.2mm Galvanized" }
      ],
      priceGuide: "Project Net Discount Available",
      availability: "In Stock",
      testReportId: "TR-SCHN-112",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=600&q=80"
    }
  ],

  // Mill Heat Sheets & Certified Reports Table
  millReports: [
    { date: "04 Sep 2026", material: "Tata Tiscon Fe 550D Rebar", mill: "Jamshedpur Primary Rolling", heatNo: "HEAT-26/517-A", yieldStrength: "592 N/mm2", chemicalCheck: "Carbon 0.18%", status: "NABL Passed" },
    { date: "03 Sep 2026", material: "UltraTech 53-Grade OPC", mill: "Awarpur Unit", heatNo: "SILO-08/BATCH-14", yieldStrength: "59.4 MPa (28D)", chemicalCheck: "SO3 2.1%", status: "NABL Passed" },
    { date: "02 Sep 2026", material: "JSW Neosteel CRS 16mm", mill: "Vijayanagar Works", heatNo: "HEAT-NEO-8812", yieldStrength: "588 N/mm2", chemicalCheck: "Chromium 0.42%", status: "NABL Passed" },
    { date: "01 Sep 2026", material: "Aerocon AAC 150mm Blocks", mill: "Hinjawadi Plant", heatNo: "AUTOCLAVE-04-B", yieldStrength: "4.4 N/mm2", chemicalCheck: "Density 590 kg/m3", status: "NABL Passed" }
  ],

  // BOQ Estimation Constants (per sq ft of standard RCC residential/commercial build)
  boqRatios: {
    steelKgPerSqFt: 3.8,      // ~3.8 kg TMT steel per sq ft
    cementBagsPerSqFt: 0.38,  // ~0.38 bags cement per sq ft
    aacBlocksPerSqFt: 0.83,   // ~0.83 AAC block units per sq ft
    sandTonnesPerSqFt: 0.036, // ~0.036 tonnes sand per sq ft
    baselineCostMin: 420,     // basic core material rate per sq ft
    baselineCostMax: 470
  },

  projects: [
    {
      id: "proj-1",
      slug: "heritage-duplex-residence",
      title: "The Heritage Duplex Residence",
      type: "Residential Construction",
      category: "residential",
      location: "Koramangala, Bengaluru",
      area: "4,800 sq ft",
      duration: "14 Months",
      client: "P. R. Hegde & Family",
      architect: "Studio Earth Architecture",
      desc: "Turnkey luxury villa built with reinforced seismic-resistant RCC framework, Italian marble flooring, insulated glass facade, and custom woodwork. Completed on schedule with full direct material sourcing under one roof.",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
      ],
      scope: ["Soil Investigation & Deep Isolated RCC Footings", "Fe 550D TMT Superstructure Framework", "Waterproof Sunken Slabs & Terrace Barrier", "Turnkey Interior Woodwork & Finishes"],
      stats: ["4,800 sq ft Built-up", "Fe 550D TMT Reinforcement", "Turnkey Finish"]
    },
    {
      id: "proj-2",
      slug: "apex-corporate-tech-park",
      title: "Apex Corporate Technology Park",
      type: "Commercial Construction",
      category: "commercial",
      location: "Whitefield, Bengaluru",
      area: "36,000 sq ft",
      duration: "20 Months",
      client: "Apex Infra & Technologies",
      architect: "Urban Form Consultants",
      desc: "Multi-level commercial tech facility featuring deep raft piling, structural steel span roofs, automated HVAC ducting, high-traffic vitrified floor installation, and complete fire suppression integration.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1504917599217-d4dc5ebe6122?auto=format&fit=crop&w=800&q=80"
      ],
      scope: ["G+4 Concrete Superstructure", "Post-Tensioned Flat Slabs", "Underground Fire Water Tank & Risers", "Institutional Facade Glazing"],
      stats: ["G+4 Commercial Complex", "Post-Tensioned Slabs", "Complete MEP Works"]
    },
    {
      id: "proj-3",
      slug: "greenwood-contemporary-villa",
      title: "Greenwood Contemporary Villa",
      type: "Residential Construction",
      category: "residential",
      location: "Mysuru Road, Karnataka",
      area: "3,200 sq ft",
      duration: "11 Months",
      client: "R. Chandrashekar",
      architect: "GreenLine Design Studio",
      desc: "Eco-conscious private residence engineered using lightweight AAC block masonry, rainwater harvesting systems, and terrace thermal barrier waterproofing coatings.",
      image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=800&q=80"
      ],
      scope: ["AAC Block Work", "Zero-Silt Concrete Pours", "Integrated Solar Conduit Infrastructure", "Rainwater Percolation Sump"],
      stats: ["AAC Block Masonry", "Zero Silt M-Sand Pours", "Integrated Waterproofing"]
    },
    {
      id: "proj-4",
      slug: "grand-horizon-retail-plaza",
      title: "Grand Horizon Retail Promenade",
      type: "Commercial & Structural",
      category: "commercial",
      location: "Hubballi, Karnataka",
      area: "22,500 sq ft",
      duration: "16 Months",
      client: "Mohan Kumar Holdings",
      architect: "Skyline Architects",
      desc: "Commercial retail promenade with expansive column-free spans, reinforced mezzanine structures, architectural aluminium curtain walls, and heavy-duty vitrified floor tiling.",
      image: "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80",
      gallery: [
        "https://images.unsplash.com/photo-1541888946425-d0fbb186c5f7?auto=format&fit=crop&w=800&q=80"
      ],
      scope: ["Column-free Atrium Engineering", "Heavy Load Vitrified Tiling", "Industrial Electrical Substation"],
      stats: ["Column-free Atrium", "Heavy Load Flooring", "Curtain Glazing"]
    }
  ],

  workflow: [
    { step: "01", name: "UNDERSTAND", desc: "Understand the client's site parameters, architectural blueprint, and budget objectives." },
    { step: "02", name: "PLAN & ESTIMATE", desc: "Develop the detailed structural specifications and comprehensive material requirement schedule." },
    { step: "03", name: "SOURCE MATERIALS", desc: "Arrange certified NABL-tested construction materials directly from our trusted inventory depot." },
    { step: "04", name: "BUILD & SUPERVISE", desc: "Execute construction with qualified civil site engineers and daily digital supervision." },
    { step: "05", name: "QUALITY AUDIT", desc: "Complete utility pressure testing, concrete cube testing, and architectural quality audits." },
    { step: "06", name: "HANDOVER", desc: "Deliver the completed project or bulk materials with full compliance documentation." }
  ],

  testimonials: [
    {
      quote: "Gajanana Constructions & Materials built our 4-bedroom duplex from foundation to finishing. Having both their civil construction team and their direct material supply under one roof saved us immense coordination hassle and kept our project completely on budget.",
      author: "P. R. Hegde",
      role: "Homeowner",
      project: "Heritage Duplex Residence, Bengaluru",
      rating: 5
    },
    {
      quote: "As a commercial builder, on-time material supply is make-or-break. Gajanana Constructions & Materials consistently delivers Fe 550D TMT steel and M-Sand on schedule with certified test reports. Their transparency and reliability have made them our default partner.",
      author: "V. Shankar",
      role: "Managing Director, Apex Infra & Projects",
      project: "Commercial Corporate Park, Whitefield",
      rating: 5
    },
    {
      quote: "Exceptional engineering discipline and honest customer communication. From soil testing to roof waterproofing, their team maintained impeccable standards. Highly recommended for anyone seeking true quality construction.",
      author: "R. Chandrashekar",
      role: "Independent Villa Owner",
      project: "Greenwood Villa, Karnataka",
      rating: 5
    }
  ],

  enquiries: [
    {
      id: "GCM-ENQ-901",
      type: "Quote Request",
      name: "Suresh Gowda",
      phone: "+91 98441 23091",
      email: "suresh.g@example.com",
      location: "Bengaluru South",
      projectType: "Residential Construction",
      requirement: "Turnkey G+2 Independent Villa (approx 3,600 sq ft)",
      materials: "Full Structural & Finishing Package",
      quantity: "Turnkey Build",
      message: "Looking to begin foundation works next month. Need comprehensive estimate and site visit.",
      date: "2026-09-02",
      status: "New"
    }
  ]
};

const STORAGE_KEY = "GCM_REACT_PLATFORM_DATA_V1";

export function getPlatformData() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.company && parsed.services && parsed.materialCategories) {
        return parsed;
      }
    }
  } catch (e) {
    console.warn("Could not load from localStorage, using defaults", e);
  }
  return DEFAULT_DATA;
}

export function savePlatformData(data) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return true;
  } catch (e) {
    console.error("Failed to save to localStorage", e);
    return false;
  }
}

export function resetPlatformData() {
  localStorage.removeItem(STORAGE_KEY);
  return DEFAULT_DATA;
}
