import { DepartmentCategory, ProductItem } from '../types/healthcare';

export const CATEGORIES: DepartmentCategory[] = [
  {
    id: 'all',
    name: 'All Departments',
    shortName: 'Overview',
    iconName: 'Building2',
    image: '/Departments/radiology.jpg',
    description: 'Comprehensive directory of medical equipment and clinical solutions supplied by Alpha Healthcare Solutions worldwide.',
    badge: 'Full Directory',
    equipmentList: [
      'Color Doppler Ultrasound',
      'Patient Monitors',
      'ECG Machines',
      'Ventilators & Suction',
      'Hematology Analyzers',
      'Operating Tables',
      'Defibrillators & Pacemakers',
      'Endoscopy & Laparoscopy',
      'Obstetric & Fetal Care',
      'Power Wheelchairs',
      'Dental Suites',
      'Ophthalmic Diagnostic Systems'
    ]
  },
  {
    id: 'radiology',
    name: 'Radiology & Imaging',
    shortName: 'Radiology',
    iconName: 'ScanLine',
    image: '/Departments/radiology.jpg',
    description: 'Advanced diagnostic imaging modalities for clear clinical visualization and radiological diagnosis.',
    badge: 'Diagnostic Imaging',
    equipmentList: [
      'Color Doppler Ultrasound Workstation',
      'Digital Radiography (DR) Flat Panel X-Ray System',
      'Computed Radiography (CR) Laser Digitizer Scanner',
      'Full-Field Digital Mammography System'
    ]
  },
  {
    id: 'cardiology',
    name: 'Cardiology & Vascular',
    shortName: 'Cardiology',
    iconName: 'HeartPulse',
    image: '/Departments/cardiology.jpg',
    description: 'Diagnostic electrocardiography, cardiac hemodynamic telemetry, and emergency defibrillation units.',
    badge: 'Cardiac Care',
    equipmentList: [
      'Patient Monitor System (Multi-Parameter)',
      'Bionet Cardio-7 12-Channel ECG Machine',
      '7-Inch Touch Screen Patient Monitor',
      'Biphasic Defibrillator & External Pacemaker Monitor'
    ]
  },
  {
    id: 'respiratory',
    name: 'Respiratory Systems',
    shortName: 'Respiratory',
    iconName: 'Wind',
    image: '/Departments/respiratory.jpg',
    description: 'High-flow oxygen concentrators, hospital suction apparatus, and non-invasive sleep therapy devices.',
    badge: 'Airway & Oxygen',
    equipmentList: [
      'AirSense 11 AutoSetTRI 4G CPAP System',
      'BIO PLUS Portable Suction Machine',
      'Yuwell 7A-23A Electric Suction Apparatus',
      'Yuwell 8F-5A / 8F-5AW 5-Liter Oxygen Concentrator'
    ]
  },
  {
    id: 'icu-ot',
    name: 'ICU & OT Equipment',
    shortName: 'ICU & OT',
    iconName: 'Activity',
    image: '/Departments/icu-ot.jpg',
    description: 'Critical care monitoring, electro-hydraulic surgical operating suites, and emergency life support devices.',
    badge: 'Critical Care',
    equipmentList: [
      'Electro-Hydraulic Electric Surgical Operating Table',
      '7-Inch Touch Screen Patient Monitor',
      'Patient Monitor System (Multi-Parameter)',
      'Bionet Cardio-7 12-Channel ECG Machine'
    ]
  },
  {
    id: 'laboratory',
    name: 'Laboratory Diagnostics',
    shortName: 'Laboratory',
    iconName: 'FlaskConical',
    image: '/Departments/laboratory.jpg',
    description: 'Clinical laboratory automated analyzers, compound optical microscopy, and high-speed refrigerated centrifuges.',
    badge: 'Pathology & Lab',
    equipmentList: [
      'Digital Trinocular Compound Microscope',
      'Automated 5-Part Differential Hematology Analyzer',
      'Fully Automated Clinical Chemistry Analyzer',
      'High-Speed Refrigerated Laboratory Centrifuge'
    ]
  },
  {
    id: 'gynecology',
    name: 'Gynecology & Obstetrics',
    shortName: 'Gynecology',
    iconName: 'Baby',
    image: '/Departments/gynecology.jpg',
    description: 'Comprehensive maternal-fetal care systems, 4D obstetric ultrasound imaging, and motorized delivery suites.',
    badge: 'Maternal Health',
    equipmentList: [
      '4D HD Live Obstetric & Gynecology Ultrasound System',
      'Dual-Channel Twin Fetal Monitor (CTG)',
      'Handheld Ultrasonic Fetal Doppler',
      'Multi-Function Electric Obstetric Delivery Bed'
    ]
  },
  {
    id: 'endoscopy',
    name: 'Endoscopy & Laparoscopy',
    shortName: 'Endoscopy',
    iconName: 'Video',
    image: '/Departments/endoscopy.jpg',
    description: 'Minimally invasive 4K surgical endoscopy towers, high-flow CO2 insufflators, and diagnostic hysteroscopy.',
    badge: 'Minimally Invasive',
    equipmentList: [
      '4K Ultra HD Video Endoscopy Tower System',
      'High-Flow CO2 Laparoscopic Insufflator 40L',
      'HD Diagnostic & Operative Hysteroscope System',
      'Medical High-Intensity LED Endoscopy Light Source'
    ]
  },
  {
    id: 'ent',
    name: 'ENT Equipment',
    shortName: 'ENT',
    iconName: 'Ear',
    image: '/Departments/radiology.jpg',
    description: 'Integrated otolaryngology examination workstations, motorized patient chairs, and clinical tympanometry.',
    badge: 'Otolaryngology',
    equipmentList: [
      'Integrated ENT Diagnostic & Treatment Workstation',
      'Motorized Ergonomic ENT Patient Examination Chair',
      'Digital Clinical Impedance Tympanometer',
      'HD Fiberoptic Flexible ENT Laryngoscope'
    ]
  },
  {
    id: 'refurbished',
    name: 'Refurbished Equipment',
    shortName: 'Refurbished',
    iconName: 'Sparkles',
    image: '/Departments/radiology.jpg',
    description: 'OEM-certified, fully recalibrated hospital imaging and diagnostic systems backed by comprehensive warranties.',
    badge: 'Certified Warranty',
    equipmentList: [
      'Certified Refurbished 64-Slice CT Scanner',
      'Certified Refurbished 1.5T High-Field MRI Scanner',
      'Certified Refurbished HD Laparoscopy Tower',
      'Certified Refurbished Biphasic Defibrillator Unit'
    ]
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy & Rehab',
    shortName: 'Physiotherapy',
    iconName: 'Dumbbell',
    image: '/Departments/physiotherapy.jpg',
    description: 'Therapeutic ultrasound, multi-channel TENS electrotherapy, high-intensity laser, and traction units.',
    badge: 'Physical Rehab',
    equipmentList: [
      'Dual-Frequency Clinical Ultrasound Therapy System',
      'Multi-Channel Clinical Electrotherapy & TENS Unit',
      'Class IV High-Intensity Laser Therapy System',
      'Digital Motorized Cervical & Lumbar Traction Unit'
    ]
  },
  {
    id: 'neonatal',
    name: 'Neonatal & Pediatric',
    shortName: 'Neonatal',
    iconName: 'HeartHandshake',
    image: '/Departments/neonatal.jpg',
    description: 'Neonatal intensive care incubators, overhead infant radiant warmers, and LED phototherapy jaundice systems.',
    badge: 'NICU Care',
    equipmentList: [
      'Advanced Neonatal Intensive Care Incubator',
      'Overhead Infant Radiant Warmer with Resuscitation',
      'Microprocessor LED Phototherapy Jaundice Unit',
      'Infant Bubble CPAP Non-Invasive Respiratory System'
    ]
  },
  {
    id: 'dental',
    name: 'Dental Equipments',
    shortName: 'Dental',
    iconName: 'Smile',
    image: '/Departments/dental.jpg',
    description: 'Ergonomic dental chair treatment suites, digital panoramic OPG systems, and Class-B autoclave sterilizers.',
    badge: 'Dental Suite',
    equipmentList: [
      'Ergonomic Hydraulic Dental Chair Treatment Unit',
      'Digital Panoramic Dental OPG & CBCT System',
      'High-Frequency Dental Intraoral X-Ray & RVG Sensor',
      'Class-B Vacuum Dental Autoclave & Sterilizer'
    ]
  },
  {
    id: 'dermatology',
    name: 'Dermatology & Aesthetics',
    shortName: 'Dermatology',
    iconName: 'ShieldCheck',
    image: '/Departments/physiotherapy.jpg',
    description: 'Medical diode laser systems, liquid nitrogen cryosurgery, polarized dermatoscopes, and phototherapy.',
    badge: 'Aesthetic Care',
    equipmentList: [
      'Triple-Wavelength Diode Laser Hair Removal System',
      'Liquid Nitrogen Clinical Cryosurgery System',
      'Polarized LED Clinical Dermatoscope & Skin Scanner',
      'Narrowband UVB Full-Body Phototherapy Cabin'
    ]
  },
  {
    id: 'emergency',
    name: 'Emergency & Trauma',
    shortName: 'Emergency',
    iconName: 'Siren',
    image: '/Departments/emergency.jpg',
    description: 'Emergency resuscitation defibrillators, trauma patient monitors, and high-vacuum transport suction units.',
    badge: 'Emergency Triage',
    equipmentList: [
      'Biphasic Defibrillator & External Pacemaker Monitor',
      '7-Inch Touch Screen Patient Monitor',
      'Patient Monitor System (Multi-Parameter)',
      'BIO PLUS Portable Suction Machine'
    ]
  },
  {
    id: 'ophthalmic',
    name: 'Ophthalmic Equipment',
    shortName: 'Ophthalmic',
    iconName: 'Eye',
    image: '/Departments/ophthalmic.jpg',
    description: 'High-precision slit lamp biomicroscopy, computerized auto-refractometers, and ophthalmic ultrasound scanners.',
    badge: 'Eye Care',
    equipmentList: [
      'High-Resolution Digital Slit Lamp Biomicroscope',
      'Computerized Auto Refractometer & Keratometer',
      'Ophthalmic A/B Scan Ultrasound Diagnostic System',
      'Non-Contact Air-Puff Optical Tonometer'
    ]
  },
  {
    id: 'rehab-homecare',
    name: 'Rehabilitation & Homecare',
    shortName: 'Rehabilitation',
    iconName: 'Accessibility',
    image: '/Departments/physiotherapy.jpg',
    description: 'Foldable power mobility wheelchairs, hydraulic patient transfer hoists, and adjustable electric homecare beds.',
    badge: 'Mobility & Home',
    equipmentList: [
      'Foldable Electric Power Wheelchair',
      'Heavy-Duty Electric Patient Transfer Lift Hoist',
      '5-Function Electric Adjustable Homecare Medical Bed',
      'Alternating Pressure Anti-Decubitus Mattress System'
    ]
  },
  {
    id: 'furniture-disposables',
    name: 'Hospital Furniture & Ward',
    shortName: 'Ward Furniture',
    iconName: 'BedDouble',
    image: '/Departments/icu-ot.jpg',
    description: 'Emergency resuscitation crash carts, hydraulic patient transport stretchers, and stainless steel medical trolleys.',
    badge: 'Hospital Supplies',
    equipmentList: [
      'Emergency Resuscitation Crash Cart Trolley',
      'Hydraulic Dual-Pedal Patient Transport Stretcher',
      'Pneumatic Height-Adjustable Overbed Dining Table',
      'Heavy-Duty Stainless Steel Medical Instrument Trolley'
    ]
  }
];

export const PRODUCTS_DATA: ProductItem[] = [
  // =========================================================================
  // 1. RADIOLOGY & IMAGING (4 Products)
  // =========================================================================
  {
    id: 'prod-color-doppler-ultrasound',
    name: 'Color Doppler Ultrasound Workstation',
    category: 'radiology',
    categoryName: 'Radiology & Imaging',
    relatedDepartments: ['radiology', 'cardiology', 'gynecology'],
    tagline: 'High-resolution digital color Doppler ultrasound system with multi-frequency probes',
    description: 'Ergonomic clinical ultrasound workstation featuring continuous wave Doppler, pulsed wave Doppler, color flow imaging, and a 21.5-inch articulated medical LED monitor.',
    modelNumber: 'RAD-US8000',
    badge: 'Flagship Doppler',
    warrantyYears: 3,
    image: '/Products/Color Doppler Ultrasound Workstation.jpg',
    certifications: ['CE 0123', 'ISO 13485:2016', 'US-FDA 510(k)'],
    applications: ['Abdominal Radiology', 'Vascular Assessment', 'Cardiology Doppler', 'OB/GYN Scanning'],
    features: [
      '21.5-inch high-definition anti-glare medical monitor on articulating arm',
      'Advanced 3D/4D volume rendering with speckle reduction technology',
      'Four active transducer ports supporting Convex, Linear, and Phased Array probes',
      'Integrated DICOM 3.0 networking for seamless PACS hospital workflow'
    ],
    fullSpecs: [
      { label: 'Display Screen', value: '21.5" High-Resolution LED with 13.3" Touch Command Panel' },
      { label: 'Doppler Modes', value: 'B, 2B, 4B, M, B/M, CFM, PDI, PW, CW' },
      { label: 'Probe Connectors', value: '4 Active Transducer Ports with Electronic Switching' },
      { label: 'Digital Storage', value: '1TB High-Speed SSD with DICOM 3.0 PACS Integration' }
    ]
  },
  {
    id: 'prod-dr-xray-system',
    name: 'Digital Radiography (DR) Flat Panel X-Ray System',
    category: 'radiology',
    categoryName: 'Radiology & Imaging',
    relatedDepartments: ['radiology', 'emergency'],
    tagline: 'Ceiling-suspended dual-detector digital radiography system with motorized auto-tracking',
    description: 'High-throughput 65kW high-frequency digital radiography suite equipped with wireless cesium iodide (CsI) flat-panel detectors and floating elevating table.',
    modelNumber: 'RAD-DR650',
    badge: 'High Frequency',
    warrantyYears: 3,
    image: '/Products/Digital Radiography DR X-Ray System.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'AERB Approved'],
    applications: ['General Hospital Radiography', 'Orthopedic Imaging', 'Chest Radiography', 'Trauma Emergency'],
    features: [
      '65kW / 150kV high-frequency X-ray generator with low patient dose protocol',
      'Wireless 17x17-inch Cesium Iodide (CsI) digital flat panel detector',
      'Motorized auto-tracking ceiling suspension tube and chest stand',
      'Real-time image acquisition preview in under 3 seconds'
    ],
    fullSpecs: [
      { label: 'Generator Power', value: '65 kW High-Frequency (400 kHz)' },
      { label: 'Tube Voltage', value: '40 kV to 150 kV in 1 kV steps' },
      { label: 'Detector Type', value: '17x17 Inch Wireless Cesium Iodide (CsI) FPD' },
      { label: 'Table Weight Capacity', value: '250 kg Motorized 4-Way Floating Top' }
    ]
  },
  {
    id: 'prod-cr-scanner',
    name: 'Computed Radiography (CR) Laser Digitizer Scanner',
    category: 'radiology',
    categoryName: 'Radiology & Imaging',
    relatedDepartments: ['radiology'],
    tagline: 'High-throughput desktop computed radiography digitizer with touch review monitor',
    description: 'Reliable, compact computed radiography laser reader capable of processing up to 70 phosphor plates per hour with exceptional spatial resolution and wide dynamic range.',
    modelNumber: 'CR-VITA70',
    badge: 'Compact CR',
    warrantyYears: 2,
    image: '/Products/Computed Radiography CR Laser Digitizer Scanner.jpg',
    certifications: ['CE 0123', 'ISO 13485:2016'],
    applications: ['Diagnostic Clinics', 'Secondary Radiology Suites', 'Mobile Health Camps', 'Veterinary & Dental'],
    features: [
      'Processes standard 14x17", 10x12", 8x10", and 15x30 cm CR phosphor cassettes',
      'High scanning throughput up to 70 imaging plates per hour',
      'Integrated touch review console with auto-enhancement contrast algorithm',
      'Compact footprint designed for tight clinic spaces and mobile installations'
    ],
    fullSpecs: [
      { label: 'Throughput', value: 'Up to 70 Cassettes / Hour (14x17 inch)' },
      { label: 'Sampling Pitch', value: '10 pixels/mm (Standard) & 20 pixels/mm (High Res)' },
      { label: 'Grayscale Depth', value: '16-bit / pixel Linear Acquisition' },
      { label: 'Connectivity', value: 'Gigabit Ethernet, DICOM 3.0 Print & Store' }
    ]
  },
  {
    id: 'prod-mammography-system',
    name: 'Full-Field Digital Mammography System',
    category: 'radiology',
    categoryName: 'Radiology & Imaging',
    relatedDepartments: ['radiology', 'gynecology'],
    tagline: 'High-definition digital breast screening system with smart comfort compression',
    description: 'State-of-the-art digital mammography unit delivering ultra-low dose breast imaging with motorized isocentric gantry, smart micro-compression paddle, and radiation shield station.',
    modelNumber: 'MAMMO-TECH 500',
    badge: 'Ultra Low Dose',
    warrantyYears: 3,
    image: '/Products/Full-Field Digital Mammography System.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'US-FDA Cleared'],
    applications: ['Breast Cancer Screening', 'Diagnostic Mammography', 'Maternal Health Clinics', 'Women Wellness'],
    features: [
      'Direct-conversion amorphous Selenium (a-Se) flat panel detector',
      'Intelligent motorized Soft-Touch compression paddle for patient comfort',
      'Isocentric motorized C-arm gantry with multi-angle motorized positioning',
      'Dedicated acquisition workstation with dual high-luminance diagnostic monitors'
    ],
    fullSpecs: [
      { label: 'Detector Material', value: 'Amorphous Selenium (a-Se) Direct Conversion' },
      { label: 'Pixel Pitch', value: '85 um High-Resolution Matrix' },
      { label: 'X-Ray Tube Target', value: 'Molybdenum / Tungsten Dual Target' },
      { label: 'Gantry Rotation', value: '+180° to -180° Motorized Isocentric' }
    ]
  },

  // =========================================================================
  // 2. CARDIOLOGY & VASCULAR (4 Products)
  // =========================================================================
  {
    id: 'prod-patient-monitors',
    name: 'Patient Monitor System (Multi-Parameter)',
    category: 'cardiology',
    categoryName: 'Cardiology & Vascular',
    relatedDepartments: ['cardiology', 'icu-ot', 'emergency'],
    tagline: 'High-end multi-parameter patient monitor for ICU, CCU, and Operation Theatre',
    description: 'Comprehensive clinical patient monitor providing continuous real-time tracking of ECG, SpO2, NIBP, Respiration, Dual Temp, and optional invasive blood pressure (IBP).',
    modelNumber: 'MPM-1200',
    badge: 'Clinical Grade',
    warrantyYears: 3,
    image: '/Products/Patient Monitors.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'IEC 60601-1'],
    applications: ['Intensive Care ICU', 'Operation Theatre', 'Emergency Trauma', 'Cardiac Care CCU'],
    features: [
      '12.1-inch color anti-glare TFT display with multi-lead waveform layout',
      'Advanced arrhythmia analysis and ST-segment elevation tracking',
      'Central monitoring network compatibility via wired or wireless LAN',
      'Large data storage for 96-hour trend graphic & tabular records'
    ],
    fullSpecs: [
      { label: 'Screen Display', value: '12.1-inch Anti-Glare Color TFT LCD' },
      { label: 'Standard Parameters', value: '3/5-Lead ECG, SpO2, NIBP, RESP, 2-TEMP, PR' },
      { label: 'Battery Backup', value: 'Rechargeable Lithium-Ion (4+ Hours)' },
      { label: 'Network Output', value: 'RJ45 LAN / Central Monitoring System Interface' }
    ]
  },
  {
    id: 'prod-bionet-cardio7',
    name: 'Bionet Cardio-7 12-Channel ECG Machine',
    category: 'cardiology',
    categoryName: 'Cardiology & Vascular',
    relatedDepartments: ['cardiology', 'icu-ot', 'emergency'],
    tagline: '12-channel electrocardiograph with 7-inch color touch TFT display and Minnesota interpretation',
    description: 'High-precision 12-channel ECG machine featuring simultaneous 12-lead acquisition, automatic diagnostic interpretation algorithm, and built-in A4 thermal printer.',
    modelNumber: 'CARDIO-7-12CH',
    badge: 'Diagnostic Flagship',
    warrantyYears: 3,
    image: '/Products/Bionet Cardio - 7 12 - Channel ECG Machine.jpg',
    certifications: ['CE 0123', 'US-FDA 510(k)', 'ISO 13485'],
    applications: ['Cardiology Clinics', 'Emergency Department', 'ICU Diagnostics', 'Health Checkups'],
    features: [
      '7-inch color TFT touchscreen displaying 12-lead waveforms simultaneously',
      'Advanced Minnesota Code diagnostic interpretation for fast clinical triage',
      'High-resolution A4 size thermal paper printing and digital PDF export',
      'Internal memory storing up to 120 ECG tests with USB memory support'
    ],
    fullSpecs: [
      { label: 'Channels', value: '12-Channel Simultaneous Acquisition' },
      { label: 'Display Panel', value: '7" Color Touchscreen TFT (800 x 480)' },
      { label: 'Printer Mechanism', value: 'Built-in High-Resolution A4 Thermal Array' },
      { label: 'Data Export', value: 'USB Flash Drive / PDF / XML / DICOM' }
    ]
  },
  {
    id: 'prod-7inch-monitor',
    name: '7-Inch Touch Screen Patient Monitor',
    category: 'cardiology',
    categoryName: 'Cardiology & Vascular',
    relatedDepartments: ['cardiology', 'icu-ot', 'emergency'],
    tagline: 'Portable 7-inch color touch screen multi-parameter vital signs monitor',
    description: 'Compact and lightweight 7-inch color touch screen patient monitor designed for continuous tracking of ECG, SpO2, NIBP, Respiration, and Temperature in critical care and transport.',
    modelNumber: 'PM-7000T',
    badge: 'Touchscreen',
    warrantyYears: 2,
    image: '/Products/7-inch touch screen patient monitor.jpg',
    certifications: ['CE 0123', 'ISO 13485:2016'],
    applications: ['Critical Care ICU', 'Emergency Transport', 'General Wards', 'Post-Op Recovery'],
    features: [
      'High-resolution 7-inch color TFT touch screen with clear multi-waveform display',
      'Real-time monitoring of ECG, SpO2, NIBP, Respiration, and Temperature',
      'Audible and visual multi-level alarms for vital signs threshold safety',
      'Built-in rechargeable battery for mobile emergency and transport use'
    ],
    fullSpecs: [
      { label: 'Display Screen', value: '7.0-inch Color Capacitive Touch Screen' },
      { label: 'Vital Parameters', value: 'ECG, NIBP, SpO2, Pulse Rate, Temperature' },
      { label: 'Battery Life', value: '3.5 Hours Continuous Operation' },
      { label: 'Weight', value: '1.8 kg (Portable Transport Housing)' }
    ]
  },
  {
    id: 'prod-biphasic-defibrillator',
    name: 'Biphasic Defibrillator & External Pacemaker Monitor',
    category: 'cardiology',
    categoryName: 'Cardiology & Vascular',
    relatedDepartments: ['cardiology', 'emergency', 'icu-ot', 'refurbished'],
    tagline: 'Advanced biphasic defibrillator monitor with manual sync, AED, and non-invasive transcutaneous pacing',
    description: 'Hospital-grade biphasic 360J defibrillator monitor equipped with adult/pediatric paddles, 7-inch color ECG monitor, synchronized cardioversion, and pacing mode.',
    modelNumber: 'MED-DEFIB-360B',
    badge: 'Life Support',
    warrantyYears: 3,
    image: '/Products/Biphasic Defibrillator and External Pacemaker Monitor.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'IEC 60601-2-4'],
    applications: ['Cardiac Resuscitation CCU', 'Emergency Trauma ER', 'Ambulance Transport', 'Cath Lab'],
    features: [
      'Biphasic truncated exponential waveform delivering up to 360 Joules',
      'Integrated non-invasive transcutaneous pacing with demand and fixed modes',
      'Fast charging in under 5 seconds to maximum 360J energy level',
      'High-luminance 7-inch multi-channel ECG and SpO2 display'
    ],
    fullSpecs: [
      { label: 'Energy Output', value: 'Manual 1J to 360J Biphasic Truncated Exponential' },
      { label: 'Pacing Mode', value: 'Demand / Fixed Transcutaneous (40 to 180 ppm)' },
      { label: 'Display', value: '7.0" Color TFT LCD with 3-Lead ECG Waveform' },
      { label: 'Printer', value: 'Built-in 50mm High-Speed Thermal Strip Chart' }
    ]
  },

  // =========================================================================
  // 3. RESPIRATORY SYSTEMS (4 Products)
  // =========================================================================
  {
    id: 'prod-airsense-11',
    name: 'AirSense 11 AutoSetTRI 4G CPAP System',
    category: 'respiratory',
    categoryName: 'Respiratory Systems',
    relatedDepartments: ['respiratory'],
    tagline: 'Premium auto-adjusting CPAP with integrated heated humidifier and cellular connectivity',
    description: 'Next-generation sleep apnea therapy machine featuring AutoSet algorithm, integrated heated humidifier, touchscreen controls, and over-the-air clinical telemetry.',
    modelNumber: '39485-AS11',
    badge: 'Connected CPAP',
    warrantyYears: 2,
    image: '/Products/AirSense 11 AutoSetTRI 4G.jpg',
    certifications: ['CE Mark', 'US-FDA 510(k)', 'ISO 13485'],
    applications: ['Obstructive Sleep Apnea (OSA)', 'Homecare Respiratory', 'Sleep Clinics', 'Pulmonary Care'],
    features: [
      'AutoSet algorithm automatically modulates pressure breath-by-breath',
      'Integrated heated HumidAir tub with ClimateLineAir heated tubing option',
      'Color LCD touch display with intuitive patient setup guidance',
      'Built-in 4G cellular and Bluetooth connectivity for cloud reporting'
    ],
    fullSpecs: [
      { label: 'Pressure Range', value: '4 to 20 cm H2O (Auto-Adjusting)' },
      { label: 'Sound Level', value: '27 dBA Ultra-Quiet Operation' },
      { label: 'Connectivity', value: 'Built-in 4G Cellular + Bluetooth Telemetry' },
      { label: 'Dimensions', value: '94 mm x 259 mm x 138 mm (Lightweight)' }
    ]
  },
  {
    id: 'prod-bioplus-suction',
    name: 'BIO PLUS Portable Suction Machine',
    category: 'respiratory',
    categoryName: 'Respiratory Systems',
    relatedDepartments: ['respiratory', 'icu-ot', 'emergency'],
    tagline: 'High-vacuum portable phlegm suction unit for clinical and emergency aspiration',
    description: 'Oil-free piston pump suction machine delivering powerful negative pressure for clearing airways, tracheotomy care, and clinical phlegm drainage.',
    modelNumber: 'BIO-SUCT-20P',
    badge: 'Heavy Duty',
    warrantyYears: 2,
    image: '/Products/BIO PLUS Portable Suction Machine.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'GMP Certified'],
    applications: ['Emergency Airway Aspiration', 'Post-Surgical Care', 'Tracheostomy Nursing', 'General Wards'],
    features: [
      'Oil-free lubrication piston pump for zero maintenance and clean air',
      'Stepless vacuum regulation dial with high-precision pointer gauge',
      'Overflow protection valve preventing liquid ingress into pump chamber',
      'Durable polycarbonate 1000ml autoclavable collection jar'
    ],
    fullSpecs: [
      { label: 'Max Vacuum', value: '= 0.075 MPa (Stepless Regulated)' },
      { label: 'Pumping Flow Rate', value: '= 18 Liters / Minute' },
      { label: 'Collection Jar', value: '1000 ml Autoclavable Polycarbonate' },
      { label: 'Noise Level', value: '< 65 dB(A) Clinical Acoustic Damping' }
    ]
  },
  {
    id: 'prod-yuwell-suction',
    name: 'Yuwell 7A-23A Electric Suction Apparatus',
    category: 'respiratory',
    categoryName: 'Respiratory Systems',
    relatedDepartments: ['respiratory', 'icu-ot'],
    tagline: 'Dual-jar high-capacity electric suction apparatus for hospital and surgical wards',
    description: 'Heavy-duty electric suction unit featuring dual 2500ml glass collection jars, foot pedal switch, and high-flow oil-free vacuum pump for surgical drainage.',
    modelNumber: '7A-23A',
    badge: 'Dual Jar System',
    warrantyYears: 2,
    image: '/Products/Yuwell 7A-23A Electric Suction Apparatus.jpg',
    certifications: ['CE 0123', 'ISO 13485:2016'],
    applications: ['Surgical Operation Theatre', 'Hospital Wards', 'Emergency Rooms', 'Endoscopy Suites'],
    features: [
      'Dual 2500ml large-capacity graduated collection jars with overflow trap',
      'High-vacuum high-flow rate exceeding 20 Liters/min for rapid suction',
      'Foot-switch and manual switch dual operating modes for surgical sterility',
      'All-metal mobile trolley structure with omni-directional smooth wheels'
    ],
    fullSpecs: [
      { label: 'Max Vacuum', value: '= 0.09 MPa (Stepless Controlled)' },
      { label: 'Flow Rate', value: '= 20 Liters / Minute' },
      { label: 'Jars Capacity', value: '2500 ml x 2 Glass Autoclavable Jars' },
      { label: 'Control', value: 'Foot-Pedal Switch + Manual Control Knob' }
    ]
  },
  {
    id: 'prod-yuwell-oxygen',
    name: 'Yuwell 8F-5A / 8F-5AW 5-Liter Oxygen Concentrator',
    category: 'respiratory',
    categoryName: 'Respiratory Systems',
    relatedDepartments: ['respiratory'],
    tagline: 'High-purity 93% 5-liter medical grade oxygen concentrator with nebulizer function',
    description: 'Compact medical oxygen concentrator using imported lithium molecular sieve technology to produce up to 5L/min continuous therapeutic medical oxygen.',
    modelNumber: '8F-5A/5AW',
    badge: '93% Medical Purity',
    warrantyYears: 3,
    image: '/Products/Yuwell 8F-5A  8F-5AW 5-Liter Oxygen Concentrator.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'TUV Rheinland'],
    applications: ['COPD Oxygen Therapy', 'Respiratory Care Wards', 'Homecare Recovery', 'Emergency Clinics'],
    features: [
      'High-efficiency oil-free compressor producing steady 93% +/- 3% oxygen purity',
      'Real-time LCD display showing oxygen concentration, flow rate, and timer',
      'Built-in atomization / nebulizer outlet port for respiratory medications',
      'Comprehensive alarm system for low oxygen purity, power failure, and overheat'
    ],
    fullSpecs: [
      { label: 'Oxygen Flow Range', value: '0.5 to 5.0 Liters / Minute' },
      { label: 'Oxygen Concentration', value: '93% +/- 3% at all flow rates' },
      { label: 'Output Pressure', value: '40 to 70 kPa' },
      { label: 'Power Consumption', value: '400 VA (Energy Efficient)' }
    ]
  },

  // =========================================================================
  // 4. ICU & OT EQUIPMENT (4 Products)
  // =========================================================================
  {
    id: 'prod-surgical-table',
    name: 'Electro-Hydraulic Electric Surgical Operating Table',
    category: 'icu-ot',
    categoryName: 'ICU & OT Equipment',
    relatedDepartments: ['icu-ot'],
    tagline: 'Universal electro-hydraulic operating table with radiolucent carbon fiber tabletop',
    description: 'Multi-functional surgical operating table designed for general surgery, orthopedic, cardiology, neurology, and bariatric operations with full C-arm fluoroscopy access.',
    modelNumber: 'OT-HYDRA-900',
    badge: 'Universal OT',
    warrantyYears: 3,
    image: '/Products/electro-hydraulic  electric surgical operating table.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'IEC 60601-1'],
    applications: ['General Laparoscopic Surgery', 'Orthopedic Surgery', 'Cardiothoracic Surgery', 'Neurosurgery'],
    features: [
      'Microprocessor electro-hydraulic system delivering smooth micro-positioning',
      'Ultra-low height adjustment starting at 550mm for sitting surgical comfort',
      'Full radiolucent tabletop with 350mm longitudinal slide for C-arm imaging',
      'Dual control system with handheld remote pendant and column backup panel'
    ],
    fullSpecs: [
      { label: 'Load Capacity', value: '300 kg Max Patient Weight' },
      { label: 'Elevation Range', value: '550 mm to 1050 mm Motorized Hydraulic' },
      { label: 'Trendelenburg Angle', value: '+30° / -30° Smooth Tilting' },
      { label: 'Tabletop Material', value: 'High-Transmittance Carbon Fiber Radiolucent' }
    ]
  },

  // =========================================================================
  // 5. LABORATORY DIAGNOSTICS (4 Products)
  // =========================================================================
  {
    id: 'prod-trinocular-microscope',
    name: 'Digital Trinocular Compound Microscope',
    category: 'laboratory',
    categoryName: 'Laboratory Diagnostics',
    relatedDepartments: ['laboratory'],
    tagline: 'Infinity optical system research microscope with 4K HDMI digital camera output',
    description: 'High-end trinocular clinical laboratory microscope featuring infinity plan achromatic objectives, Kohler LED illumination, and high-definition digital sensor.',
    modelNumber: 'OPT-TRI-4K',
    badge: 'Infinity Optics',
    warrantyYears: 3,
    image: '/Products/digital trinocular compound microscope.jpg',
    certifications: ['CE Mark', 'ISO 9001', 'ISO 13485'],
    applications: ['Clinical Pathology', 'Hematology Smears', 'Cytology & Histology', 'Microbiology Labs'],
    features: [
      'Infinity plan achromatic optical objectives (4X, 10X, 40X, 100X Oil)',
      'Trinocular photo-port compatible with digital C-mount camera modules',
      'Variable-intensity 3W warm LED Kohler illumination with field diaphragm',
      'Ergonomic double-layer mechanical stage with vernier scale control'
    ],
    fullSpecs: [
      { label: 'Magnification', value: '40X to 1000X (Expandable to 1600X)' },
      { label: 'Eyepieces', value: 'Widefield WF10X/22mm High-Eyepoint' },
      { label: 'Objectives', value: 'Plan Achromat 4X, 10X, 40X(S), 100X(S, Oil)' },
      { label: 'Stage Dimensions', value: '180 x 145 mm with Coaxial X-Y Control' }
    ]
  },
  {
    id: 'prod-hematology-analyzer',
    name: 'Automated 5-Part Differential Hematology Analyzer',
    category: 'laboratory',
    categoryName: 'Laboratory Diagnostics',
    relatedDepartments: ['laboratory'],
    tagline: 'High-throughput 5-part CBC analyzer with semiconductor laser flow cytometry',
    description: 'Fully automated clinical hematology analyzer processing 60 samples per hour with 29 parameters, 3-D scattergrams, and 10.4-inch color touchscreen.',
    modelNumber: 'HEMAFLOW DX-5',
    badge: '5-Part Differential',
    warrantyYears: 3,
    image: '/Products/Automated 5-Part Differential Hematology Analyzer.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'IVD Certified'],
    applications: ['Hospital Pathology Labs', 'Diagnostic Blood Centers', 'Oncology Clinics', 'Pediatric Blood Screening'],
    features: [
      'Semiconductor laser scatter flow cytometry combined with chemical dye method',
      '29 reporting parameters including 5-part differential and 4 research parameters',
      'Only 15 uL whole blood sample volume requirement for pediatric tests',
      'Integrated barcode reader and bidirectional LIS communication'
    ],
    fullSpecs: [
      { label: 'Throughput', value: '60 Samples / Hour' },
      { label: 'Parameters', value: '29 Parameters + 3 Histograms + 3D Scattergrams' },
      { label: 'Sample Volume', value: '15 uL Whole Blood / 20 uL Prediluted' },
      { label: 'Display & OS', value: '10.4" Color Touchscreen with Linux Diagnostics' }
    ]
  },
  {
    id: 'prod-biochemistry-analyzer',
    name: 'Fully Automated Clinical Chemistry Analyzer',
    category: 'laboratory',
    categoryName: 'Laboratory Diagnostics',
    relatedDepartments: ['laboratory'],
    tagline: 'Benchtop clinical biochemistry analyzer delivering 200 tests per hour with refrigerated reagents',
    description: 'Precision automated clinical chemistry analyzer with continuous sample loading, 40 reagent positions with onboard refrigeration, and inverted matrix spectrophotometry.',
    modelNumber: 'BIOLAB C-CHEM 500',
    badge: 'Automated Chem',
    warrantyYears: 3,
    image: '/Products/Fully Automated Clinical Chemistry Analyzer.jpg',
    certifications: ['CE 0123', 'ISO 13485:2016', 'IVD Directive'],
    applications: ['Liver Function Tests (LFT)', 'Renal Profiles (KFT)', 'Lipid Panels', 'Electrolytes & Enzymes'],
    features: [
      'Constant throughput of 200 photometric tests per hour (expandable with ISE)',
      '24-hour non-stop refrigerated reagent compartment (2°C - 8°C)',
      'Liquid level detection, vertical collision protection, and inventory tracking',
      'Reaction cuvette auto-washing station with low water consumption'
    ],
    fullSpecs: [
      { label: 'Throughput', value: '200 Tests/Hour (Up to 320 with ISE)' },
      { label: 'Reagent Positions', value: '40 Refrigerated Positions (2°C - 8°C)' },
      { label: 'Wavelength Range', value: '340 nm to 800 nm (12 Wavelengths)' },
      { label: 'Sample Pipetting', value: '2 uL to 45 uL with 0.1 uL Precision' }
    ]
  },
  {
    id: 'prod-benchtop-centrifuge',
    name: 'High-Speed Refrigerated Laboratory Centrifuge',
    category: 'laboratory',
    categoryName: 'Laboratory Diagnostics',
    relatedDepartments: ['laboratory'],
    tagline: 'Microprocessor refrigerated clinical centrifuge with brushless induction motor (15,000 RPM)',
    description: 'High-performance benchtop refrigerated centrifuge delivering up to 21,130 xg RCF with eco-friendly CFC-free fast pre-cooling down to -20°C.',
    modelNumber: 'H-15R CENTRI',
    badge: 'Refrigerated 15K',
    warrantyYears: 2,
    image: '/Products/High-Speed Refrigerated Laboratory Centrifuge.jpg',
    certifications: ['CE Mark', 'ISO 9001', 'ISO 13485'],
    applications: ['Serum & Plasma Separation', 'PCR & Molecular Biology', 'Cell Harvesting', 'Blood Banking'],
    features: [
      'Maximum speed of 15,000 RPM (21,130 xg) with brushless maintenance-free motor',
      'Wide temperature range from -20°C to +40°C with pre-cooling function',
      'Motorized lid lock with electronic imbalance detection sensor for safety',
      'Dual display showing speed (RPM), relative centrifugal force (RCF), and time'
    ],
    fullSpecs: [
      { label: 'Max Speed', value: '15,000 RPM (Adjustable in 10 RPM increments)' },
      { label: 'Max RCF', value: '21,130 xg High Acceleration' },
      { label: 'Temperature Range', value: '-20°C to +40°C (CFC-Free Refrigerant)' },
      { label: 'Rotor Capacity', value: '24 x 1.5/2.0 ml Micro-tubes & Swing-Out Rotors' }
    ]
  },

  // =========================================================================
  // 6. GYNECOLOGY & OBSTETRICS (4 Products)
  // =========================================================================
  {
    id: 'prod-obgyn-4d-ultrasound',
    name: '4D HD Live Obstetric & Gynecology Ultrasound System',
    category: 'gynecology',
    categoryName: 'Gynecology & Obstetrics',
    relatedDepartments: ['gynecology', 'radiology'],
    tagline: 'Advanced 4D volume ultrasound with HD Live realistic fetal surface rendering',
    description: 'Flagship OB/GYN ultrasound platform featuring photorealistic HD Live fetal rendering, high-density transvaginal probes, and automated follicular measurement algorithms.',
    modelNumber: 'VOLU-GYN 4D',
    badge: 'HD Live 4D',
    warrantyYears: 3,
    image: '/Products/4D HD Live Obstetric and Gynecology Ultrasound System.jpg',
    certifications: ['CE 0123', 'ISO 13485:2016', 'FDA 510(k)'],
    applications: ['Fetal Anatomy Screening', 'First Trimester Nuchal Translucency', 'Gynecological Pelvic Scanning', 'IVF Folliculometry'],
    features: [
      'HD Live rendering simulating realistic internal light source on fetal face and anatomy',
      'Auto-NT automated nuchal translucency measurement algorithm',
      'High-resolution wide-angle endocavity probe with biopsy bracket guides',
      'Motorized height-adjustable control console with 21.5" floating LED display'
    ],
    fullSpecs: [
      { label: 'Imaging Modes', value: '4D Volume, HD Live, CFM, PDI, PW Doppler' },
      { label: 'Display Monitor', value: '21.5" IPS Medical Display with 10.1" Touch Panel' },
      { label: 'Volume Frame Rate', value: 'Up to 45 Volumes / Second High Speed' },
      { label: 'Probe Support', value: 'Convex, Linear, Endocavity, 4D Real-Time Volume' }
    ]
  },
  {
    id: 'prod-fetal-monitor-ctg',
    name: 'Dual-Channel Twin Fetal Monitor (CTG)',
    category: 'gynecology',
    categoryName: 'Gynecology & Obstetrics',
    relatedDepartments: ['gynecology'],
    tagline: 'Clinical cardiotocograph with folding color TFT screen and twin fetal heart rate monitoring',
    description: 'High-precision obstetric fetal monitor tracking fetal heart rate (FHR1, FHR2), uterine contractions (TOCO), and automatic fetal movement detection with built-in thermal chart recorder.',
    modelNumber: 'FETAWAVE CTG-9',
    badge: 'Twin Fetal CTG',
    warrantyYears: 3,
    image: '/Products/Dual-Channel Twin Fetal Monitor CTG.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'IEC 60601-1'],
    applications: ['Antepartum Clinics', 'Labor & Delivery Suites', 'High-Risk Pregnancy Wards', 'Maternity Hospitals'],
    features: [
      '12.1-inch folding color TFT screen displaying real-time FHR curves and TOCO waveforms',
      'Dual 12-crystal waterproof ultrasound transducers for simultaneous twin monitoring',
      'Automatic and manual fetal movement recording with baseline analysis algorithms',
      'Built-in 152mm wide thermal printer with multi-speed real-time printing'
    ],
    fullSpecs: [
      { label: 'Screen Display', value: '12.1" Folding Color TFT (0° to 90° Tilt)' },
      { label: 'FHR Measurement', value: '50 to 240 bpm (Dual 1.0 MHz 12-Crystal Probes)' },
      { label: 'TOCO Range', value: '0 to 100 Relative Units' },
      { label: 'Recorder', value: 'Built-in 152 mm Z-fold Thermal Chart Paper' }
    ]
  },
  {
    id: 'prod-fetal-doppler',
    name: 'Handheld Ultrasonic Fetal Doppler',
    category: 'gynecology',
    categoryName: 'Gynecology & Obstetrics',
    relatedDepartments: ['gynecology'],
    tagline: 'Pocket ultrasonic fetal heart detector with backlit LCD screen and built-in loudspeaker',
    description: 'Compact, sensitive handheld ultrasonic fetal doppler equipped with a 3.0 MHz waterproof probe for clear early detection of fetal heartbeats from 9-10 weeks gestation.',
    modelNumber: 'FD-200 PRO',
    badge: 'Handheld Doppler',
    warrantyYears: 2,
    image: '/Products/Handheld Ultrasonic Fetal Doppler.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'RoHS'],
    applications: ['OB/GYN Outpatient Clinics', 'Midwife Practices', 'Maternal Checkups', 'Home Pregnancy Care'],
    features: [
      'High-sensitivity 3.0 MHz interchangeable waterproof ultrasound probe',
      'Backlit LCD display showing real-time numerical FHR, average FHR, and battery level',
      'Crystal clear audio playback via built-in speaker and 3.5mm headphone jack',
      'Auto power-off function after 1 minute of no signal to preserve battery life'
    ],
    fullSpecs: [
      { label: 'Ultrasound Frequency', value: '3.0 MHz +/- 10% Continuous Wave' },
      { label: 'FHR Display Range', value: '50 bpm to 210 bpm (+/- 2 bpm Accuracy)' },
      { label: 'Audio Output', value: 'Built-in 1.5W Speaker + Headphone Output' },
      { label: 'Power Source', value: '2x AA Standard Alkaline / Rechargeable Batteries' }
    ]
  },
  {
    id: 'prod-obstetric-bed',
    name: 'Multi-Function Electric Obstetric Delivery Bed',
    category: 'gynecology',
    categoryName: 'Gynecology & Obstetrics',
    relatedDepartments: ['gynecology', 'furniture-disposables'],
    tagline: 'Ergonomic electric birthing and delivery bed with detachable foot section and leg stirrups',
    description: 'Versatile electric labor, delivery, and recovery (LDR) bed offering motorized backrest elevation, Trendelenburg tilting, comfortable padded leg stirrups, and stainless steel basin.',
    modelNumber: 'OB-LDR-700',
    badge: 'Electric Birthing Bed',
    warrantyYears: 3,
    image: '/Products/Multi-Function Electric Obstetric Delivery Bed.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'IEC 60601-2-52'],
    applications: ['Hospital Labor & Delivery Rooms', 'Maternity Wards', 'Gynecological Examination', 'Postpartum Recovery'],
    features: [
      'Medical-grade linear electric actuators for silent height, backrest, and tilt adjustments',
      'Quick-release retractable leg section converting the bed into a delivery chair',
      'Ergonomic padded knee crutches / leg stirrups with 360-degree multi-axis articulation',
      'Seamless antimicrobial PU foam mattress with waterproof fluid protection'
    ],
    fullSpecs: [
      { label: 'Weight Capacity', value: '250 kg Safe Working Load' },
      { label: 'Height Adjustment', value: '580 mm to 980 mm Motorized Range' },
      { label: 'Trendelenburg Angle', value: '= 15° / Reverse Trendelenburg = 10°' },
      { label: 'Accessories', value: 'Padded Leg Crutches, Armrests, SS Debris Basin' }
    ]
  },

  // =========================================================================
  // 7. ENDOSCOPY SYSTEM (4 Products)
  // =========================================================================
  {
    id: 'prod-endoscopy-tower',
    name: '4K Ultra HD Video Endoscopy Tower System',
    category: 'endoscopy',
    categoryName: 'Endoscopy & Laparoscopy',
    relatedDepartments: ['endoscopy', 'icu-ot'],
    tagline: 'State-of-the-art 4K UHD surgical video processor with integrated LED light and recording',
    description: 'Complete minimally invasive surgical visualization workstation including a 4K UHD video camera system, high-output cold LED illumination, CO2 insufflation, and 32-inch surgical monitor.',
    modelNumber: 'ENDO-4K TOWER',
    badge: '4K Ultra HD',
    warrantyYears: 3,
    image: '/Products/4K Ultra HD Video Endoscopy Tower System.jpg',
    certifications: ['CE 0123', 'ISO 13485:2016', 'IEC 60601-2-18'],
    applications: ['Laparoscopic Cholecystectomy', 'Arthroscopy', 'Urological Resection', 'Thoracoscopy'],
    features: [
      'Ultra-high-definition 3840 x 2160 resolution video sensor delivering vivid tissue color',
      '300W equivalent high-flux medical LED light source with 50,000-hour service life',
      'Integrated real-time USB 3.0 4K surgical video recording and still image capture',
      'Heavy-duty medical cart with gas cylinder rack and balanced articulating monitor arm'
    ],
    fullSpecs: [
      { label: 'Video Resolution', value: '4K UHD 3840 x 2160 pixels @ 60 fps' },
      { label: 'Light Source', value: 'Cold White Medical LED (= 2,000,000 Lux)' },
      { label: 'Monitor Screen', value: '32-inch 4K HDR Medical Grade Color Display' },
      { label: 'Outputs', value: 'HDMI 2.0, 12G-SDI, DVI, 3G-SDI, USB 3.0 Recording' }
    ]
  },
  {
    id: 'prod-co2-insufflator',
    name: 'High-Flow CO2 Laparoscopic Insufflator 40L',
    category: 'endoscopy',
    categoryName: 'Endoscopy & Laparoscopy',
    relatedDepartments: ['endoscopy', 'icu-ot'],
    tagline: 'High-flow 40 L/min laparoscopic gas insufflator with active gas heating and pressure safety',
    description: 'Microprocessor controlled 40-liter high-flow CO2 insufflator ensuring stable pneumoperitoneum during complex laparoscopic and robotic surgeries with integrated gas pre-heating.',
    modelNumber: 'INSUF-40L PRO',
    badge: '40L High Flow',
    warrantyYears: 3,
    image: '/Products/4K Ultra HD Video Endoscopy Tower System.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'IEC 60601-1'],
    applications: ['Advanced Laparoscopic Surgery', 'Gynecological Laparoscopy', 'Robotic Surgery', 'Pediatric Endoscopy'],
    features: [
      'Stepless gas flow rate modulation from 1 to 40 Liters/min for rapid cavity filling',
      'Integrated gas pre-heating technology preventing lens fogging and patient hypothermia',
      'Dual pressure sensor monitoring with automated acoustic overpressure release',
      'Large high-contrast digital display showing real-time abdominal pressure and flow'
    ],
    fullSpecs: [
      { label: 'Max Gas Flow', value: '40 Liters / Minute Stepless Flow' },
      { label: 'Pressure Range', value: '1 to 30 mmHg (0.1 to 4.0 kPa)' },
      { label: 'Gas Heating', value: 'Built-in Heated Tube Chamber (37°C Output)' },
      { label: 'Gas Supply', value: 'CO2 High Pressure Cylinder (50-60 bar input)' }
    ]
  },
  {
    id: 'prod-hysteroscope-system',
    name: 'HD Diagnostic & Operative Hysteroscope System',
    category: 'endoscopy',
    categoryName: 'Endoscopy & Laparoscopy',
    relatedDepartments: ['endoscopy', 'gynecology'],
    tagline: 'Autoclavable sapphire lens hysteroscopy set with continuous flow diagnostic and operative sheaths',
    description: 'Precision German stainless steel hysteroscope featuring high-transmission rod lens optics, 2.9mm and 4.0mm telescopes, working channels, and continuous irrigation stopcocks.',
    modelNumber: 'HYST-PRO 30',
    badge: 'Sapphire Optics',
    warrantyYears: 2,
    image: '/Products/4K Ultra HD Video Endoscopy Tower System.jpg',
    certifications: ['CE 0123', 'ISO 13485'],
    applications: ['Diagnostic Hysteroscopy', 'Endometrial Polypectomy', 'Submucosal Myomectomy', 'Infertility Workups'],
    features: [
      'Scratch-resistant sapphire tip window with wide 30-degree direction of view',
      'High-grade rod lens optical system providing crisp distortion-free distortion edge-to-edge',
      'Fully autoclavable and submersible in high-level disinfectant solutions',
      'Continuous flow inner and outer sheath system with 360-degree rotating luer stopcocks'
    ],
    fullSpecs: [
      { label: 'Telescope Diameter', value: '2.9 mm & 4.0 mm / 30° Direction of View' },
      { label: 'Working Length', value: '302 mm German Stainless Steel Tube' },
      { label: 'Sterilization', value: 'Autoclavable 134°C / Sterrad / ETO Compatible' },
      { label: 'Working Channels', value: '5 Fr & 7 Fr Instrument Channels' }
    ]
  },
  {
    id: 'prod-led-light-source',
    name: 'Medical High-Intensity LED Endoscopy Light Source',
    category: 'endoscopy',
    categoryName: 'Endoscopy & Laparoscopy',
    relatedDepartments: ['endoscopy', 'ent'],
    tagline: '300W equivalent cold white medical LED illumination module for rigid and flexible endoscopy',
    description: 'Ultra-bright 80W cold LED surgical light generator delivering pure 6500K daylight-spectrum illumination with universal turret adapting to Storz, Olympus, Wolf, and ACMI cables.',
    modelNumber: 'LED-LUX 300',
    badge: '50,000h Life',
    warrantyYears: 3,
    image: '/Products/4K Ultra HD Video Endoscopy Tower System.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'IEC 60601-1'],
    applications: ['Laparoscopy OT', 'Arthroscopy', 'ENT Endoscopy', 'Cystoscopy Suites'],
    features: [
      'High-luminance solid-state LED emitter delivering over 2,000,000 Lux brightness',
      'Color rendering index (CRI) = 92 for faithful true-to-life tissue distinction',
      'Multi-port universal cable turret compatible with all major fiberoptic brand connectors',
      'Whisper-quiet thermostatic fan cooling with intelligent heat sink management'
    ],
    fullSpecs: [
      { label: 'Color Temperature', value: '6500 K Pure Daylight Spectrum' },
      { label: 'Luminous Flux', value: '> 2,000,000 Lux Output Intensity' },
      { label: 'LED Lifespan', value: '= 50,000 Hours (Zero Bulb Replacement)' },
      { label: 'Turret Adaptors', value: 'Storz, Olympus, Wolf, ACMI Universal Ports' }
    ]
  },

  // =========================================================================
  // 8. ENT EQUIPMENT (4 Products)
  // =========================================================================
  {
    id: 'prod-ent-workstation',
    name: 'Integrated ENT Diagnostic & Treatment Workstation',
    category: 'ent',
    categoryName: 'ENT Equipment',
    relatedDepartments: ['ent'],
    tagline: 'Complete otolaryngology clinical unit with integrated suction, spray, mirror defogger, and LED light',
    description: 'Ergonomic ENT workstation equipped with precision medical vacuum aspiration, positive pressure medication atomizers, pre-heated instrument trays, and endoscopic camera mount.',
    modelNumber: 'ENT-LUX 5000',
    badge: 'All-in-One ENT',
    warrantyYears: 3,
    image: '/Products/Integrated ENT Diagnostic & Treatment Workstation.jpg',
    certifications: ['CE 0123', 'ISO 13485'],
    applications: ['Otolaryngology OPD', 'Ear Syringing & Suction', 'Nasal Endoscopic Exams', 'Laryngeal Diagnostics'],
    features: [
      'Built-in oil-free high-vacuum suction pump with graduated collection jar',
      'Integrated medical air compressor with dual fine-mist liquid atomizers',
      'Automatic instant mirror defogger with timer heater',
      'High-luminance cold LED illumination source for fiberoptic endoscopes'
    ],
    fullSpecs: [
      { label: 'Suction Capacity', value: '= 0.08 MPa Vacuum (25 L/min Flow)' },
      { label: 'Compressor Pressure', value: '0.1 to 0.15 MPa Atomizing Pressure' },
      { label: 'Mirror Pre-Heater', value: '450W Rapid Induction Defogger' },
      { label: 'Body Construction', value: 'Anti-Bacterial Acrylic Top with Steel Chassis' }
    ]
  },
  {
    id: 'prod-ent-chair',
    name: 'Motorized Ergonomic ENT Patient Examination Chair',
    category: 'ent',
    categoryName: 'ENT Equipment',
    relatedDepartments: ['ent'],
    tagline: 'Multi-motor electric ENT examination chair with 360-degree rotation and auto-reset',
    description: 'Heavy-duty electric otolaryngology examination chair featuring quiet linear motors for height, backrest, and leg-rest articulation, plus 360-degree swivel lock.',
    modelNumber: 'ENT-CHAIR 800',
    badge: '360° Swivel',
    warrantyYears: 3,
    image: '/Products/Integrated ENT Diagnostic & Treatment Workstation.jpg',
    certifications: ['CE Mark', 'ISO 13485'],
    applications: ['ENT Consultations', 'Minor In-Office Procedures', 'Audiology Clinics', 'Endoscopic Exams'],
    features: [
      'Triple silent linear motors controlling elevation, backrest, and leg sync',
      '360-degree rotation with mechanical foot brake for precise positioning',
      'Adjustable and lockable ergonomic headrest designed for ear/throat access',
      'One-touch automatic zero-reset button for quick patient entry and exit'
    ],
    fullSpecs: [
      { label: 'Lifting Range', value: '530 mm to 880 mm Silent Electric' },
      { label: 'Backrest Recline', value: '90° to 180° Flat Table Position' },
      { label: 'Rotation', value: '360° Swivel with Locking Pedal' },
      { label: 'Weight Capacity', value: '200 kg Max Patient Load' }
    ]
  },
  {
    id: 'prod-tympanometer',
    name: 'Digital Clinical Impedance Tympanometer',
    category: 'ent',
    categoryName: 'ENT Equipment',
    relatedDepartments: ['ent'],
    tagline: 'High-speed diagnostic middle ear tympanometer with acoustic reflex testing and thermal printer',
    description: 'Fast, automated impedance tympanometer providing 226 Hz probe tone compliance curves, ipsilateral and contralateral acoustic reflex evaluations, and high-contrast digital display.',
    modelNumber: 'TYMP-PRO 300',
    badge: 'Clinical Audiometry',
    warrantyYears: 2,
    image: '/Products/Integrated ENT Diagnostic & Treatment Workstation.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'IEC 60645-5'],
    applications: ['Middle Ear Effusion Screening', 'Eustachian Tube Function', 'Otitis Media Diagnostics', 'Pediatric Audiology'],
    features: [
      'Ultra-fast automatic tympanometry test cycle completed in under 3 seconds',
      'Four ipsilateral reflex frequencies (500Hz, 1kHz, 2kHz, 4kHz) with auto-pass threshold',
      'Lightweight ergonomic probe with multi-color LED seal indicator status',
      'Internal memory for 100 patient tests with USB PC software sync'
    ],
    fullSpecs: [
      { label: 'Probe Tone', value: '226 Hz +/- 1% at 85 dB SPL' },
      { label: 'Pressure Range', value: '-400 to +200 daPa with Auto-Safety Release' },
      { label: 'Compliance Range', value: '0.1 to 8.0 ml' },
      { label: 'Printer Output', value: 'High-Speed Thermal Graphic Printout' }
    ]
  },
  {
    id: 'prod-ent-endoscope',
    name: 'HD Fiberoptic Flexible ENT Laryngoscope',
    category: 'ent',
    categoryName: 'ENT Equipment',
    relatedDepartments: ['ent'],
    tagline: 'Slim 3.4mm flexible nasopharyngoscope with high-density optical fiber bundle and wide angulation',
    description: 'Slim-insertion flexible video-compatible nasolaryngoscope designed for comfortable pediatric and adult upper airway visualization with 130-degree two-way tip deflection.',
    modelNumber: 'FIBER-ENT 34',
    badge: '3.4mm Slim',
    warrantyYears: 2,
    image: '/Products/Integrated ENT Diagnostic & Treatment Workstation.jpg',
    certifications: ['CE Mark', 'ISO 13485'],
    applications: ['Vocal Cord Assessment', 'Nasopharyngeal Carcinoma Screening', 'Dysphagia Swallowing Exams', 'Pediatric Airway'],
    features: [
      'Ultra-thin 3.4mm insertion tube outer diameter for minimal patient discomfort',
      'High-resolution 18,000 pixel fiber bundle offering bright, sharp field of view',
      'Wide tip deflection (130° Up / 130° Down) for smooth anatomical navigation',
      'Fully submersible and waterproof for standard clinical enzymatic soaking'
    ],
    fullSpecs: [
      { label: 'Outer Diameter', value: '3.4 mm Insertion Tube' },
      { label: 'Working Length', value: '300 mm Flexible Section' },
      { label: 'Bending Range', value: 'Up 130° / Down 130° Dual-Direction' },
      { label: 'Field of View', value: '85° Wide Angle with 3-50mm Depth of Field' }
    ]
  },

  // =========================================================================
  // 9. REFURBISHED EQUIPMENT (4 Products)
  // =========================================================================
  {
    id: 'prod-refurb-ct',
    name: 'Certified Refurbished 64-Slice CT Scanner',
    category: 'refurbished',
    categoryName: 'Refurbished Equipment',
    relatedDepartments: ['refurbished', 'radiology'],
    tagline: 'OEM-recalibrated 64-slice high-resolution computed tomography scanner with new X-ray tube',
    description: 'Fully factory-reconditioned 64-slice CT system with full gantry diagnostic calibration, new replacement X-ray tube, updated workstation software, and 1-year comprehensive warranty.',
    modelNumber: 'CT-64 REFURB',
    badge: 'OEM Certified',
    warrantyYears: 1,
    image: '/Products/Digital Radiography DR X-Ray System.jpg',
    certifications: ['CE Mark', 'AERB Compliant', 'ISO 13485 Recalibrated'],
    applications: ['Cardiac CT Angiography', 'Whole Body Trauma CT', 'Neurovascular Imaging', 'Oncology Staging'],
    features: [
      'Sub-millimeter 0.625mm isotropic slice resolution with fast 0.35s rotation speed',
      'Brand-new OEM high-capacity 7.5 MHU liquid-cooled X-ray tube installed',
      'Iterative dose reconstruction algorithm reducing radiation dose up to 50%',
      'Complete installation, de-installation, and site planning support included'
    ],
    fullSpecs: [
      { label: 'Slice Count', value: '64 Slices per Gantry Rotation' },
      { label: 'Gantry Aperture', value: '70 cm Bore with +/- 30° Tilting' },
      { label: 'Generator', value: '80 kW High-Frequency Solid State' },
      { label: 'Warranty', value: '12 Months Full Parts & Tube Warranty' }
    ]
  },
  {
    id: 'prod-refurb-mri',
    name: 'Certified Refurbished 1.5T High-Field MRI Scanner',
    category: 'refurbished',
    categoryName: 'Refurbished Equipment',
    relatedDepartments: ['refurbished', 'radiology'],
    tagline: 'Superconducting 1.5-Tesla whole body magnetic resonance imaging system with zero-boiloff magnet',
    description: 'High-field 1.5T superconducting MRI scanner fully refurbished with upgraded RF multi-channel coil package, zero-boiloff helium cryostat, and high-performance gradient system.',
    modelNumber: 'MRI-1.5T PRO',
    badge: 'Zero Boil-Off',
    warrantyYears: 1,
    image: '/Products/Full-Field Digital Mammography System.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'OEM Verified'],
    applications: ['Brain & Spine Imaging', 'Musculoskeletal (MSK) MRI', 'Abdominal & Pelvic MR', 'Cardiac MRI'],
    features: [
      'Short-bore 1.5T superconducting magnet offering superb patient comfort and claustrophobia reduction',
      'Zero-helium boil-off technology minimizing recurring cryogen operational costs',
      'Comprehensive 16-channel coil suite for Neuro, Spine, Body, Knee, and Shoulder',
      'Advanced parallel acquisition imaging sequences for shortened scan times'
    ],
    fullSpecs: [
      { label: 'Magnetic Field', value: '1.5 Tesla Superconducting Magnet' },
      { label: 'Gradient Strength', value: '33 mT/m with 120 T/m/s Slew Rate' },
      { label: 'RF Channels', value: '16-Channel Parallel Digital Receiver' },
      { label: 'Helium Refill', value: 'Zero Boil-Off Closed Cryogenic Loop' }
    ]
  },
  {
    id: 'prod-refurb-laparoscopy',
    name: 'Certified Refurbished HD Laparoscopy Tower',
    category: 'refurbished',
    categoryName: 'Refurbished Equipment',
    relatedDepartments: ['refurbished', 'endoscopy'],
    tagline: 'Complete German-engineered full HD surgical laparoscopy stack with optical inspection certificate',
    description: 'Pre-owned high-definition laparoscopic tower meticulously refurbished with tested camera head, xenon/LED light generator, high-flow insufflator, and calibrated surgical monitor.',
    modelNumber: 'HD-LAP-REFURB',
    badge: 'Fully Calibrated',
    warrantyYears: 1,
    image: '/Products/4K Ultra HD Video Endoscopy Tower System.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'Bio-Medical Inspected'],
    applications: ['General Laparoscopic OT', 'Gynecological Surgeries', 'Cholecystectomy', 'Hernia Repair'],
    features: [
      'Full HD 1080p 3-CCD surgical camera head with zoom optical coupler',
      'High-output cold light generator with replacement lamp/LED engine',
      'Calibrated 30L/min CO2 electronic insufflator with leak test verification',
      'Includes 10mm 0° and 30° rigid laparoscopes with crystal clear rod lenses'
    ],
    fullSpecs: [
      { label: 'Camera Quality', value: '1080p Full HD Progressive Scan' },
      { label: 'Insufflator Flow', value: '30 Liters / Minute Electronic Control' },
      { label: 'Light Generator', value: '300W High-Intensity Cold Light Unit' },
      { label: 'Warranty Term', value: '12 Months Comprehensive Service Cover' }
    ]
  },
  {
    id: 'prod-refurb-defibrillator',
    name: 'Certified Refurbished Biphasic Defibrillator Unit',
    category: 'refurbished',
    categoryName: 'Refurbished Equipment',
    relatedDepartments: ['refurbished', 'emergency', 'cardiology'],
    tagline: 'Biomedical-certified biphasic 360J emergency defibrillator with fresh internal battery',
    description: 'Thoroughly tested clinical biphasic defibrillator unit with new rechargeable battery pack, tested hard paddles, multi-lead ECG cables, and calibrated energy output testing.',
    modelNumber: 'DEFIB-REFURB-B',
    badge: 'New Battery Pack',
    warrantyYears: 1,
    image: '/Products/Biphasic Defibrillator and External Pacemaker Monitor.jpg',
    certifications: ['CE Mark', 'Biomedical Calibrated'],
    applications: ['Hospital Crash Carts', 'Recovery Rooms', 'Ambulance Units', 'Outpatient Surgery'],
    features: [
      'Recalibrated biphasic energy delivery certified from 2J up to 360J',
      'Brand new high-capacity internal lithium battery pack with zero cycle degradation',
      'Clean adult and pediatric dual-mode external paddles with contact impedance indicator',
      'Built-in 50mm strip chart recorder with clean printhead test patterns'
    ],
    fullSpecs: [
      { label: 'Energy Range', value: '2 to 360 Joules Biphasic Waveform' },
      { label: 'Battery Health', value: '100% Brand New Replacement Battery' },
      { label: 'Calibration', value: 'Includes NIST-Traceable Biomedical Calibration Certificate' },
      { label: 'Accessories', value: 'ECG Leads, Hard Paddles, Power Cable, Chart Paper' }
    ]
  },

  // =========================================================================
  // 10. PHYSIOTHERAPY (4 Products)
  // =========================================================================
  {
    id: 'prod-physio-ultrasound',
    name: 'Dual-Frequency Clinical Ultrasound Therapy System',
    category: 'physiotherapy',
    categoryName: 'Physiotherapy & Rehab',
    relatedDepartments: ['physiotherapy'],
    tagline: '1 MHz & 3 MHz therapeutic ultrasound unit with multi-mode continuous and pulsed output',
    description: 'Microprocessor clinical ultrasound physiotherapy device designed for deep and superficial musculoskeletal rehabilitation, pain relief, and soft tissue repair.',
    modelNumber: 'US-THERAPY 500',
    badge: '1 & 3 MHz Dual',
    warrantyYears: 2,
    image: '/Products/Color Doppler Ultrasound Workstation.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'IEC 60601-2-5'],
    applications: ['Tendinitis & Bursitis', 'Muscle Spasms & Tightness', 'Joint Contractures', 'Sports Injury Rehab'],
    features: [
      'Dual-frequency 1 MHz (deep tissue) and 3 MHz (superficial tissue) ergonomic soundhead',
      'Pulsed and continuous acoustic output modes with adjustable duty cycles (10% to 100%)',
      'Waterproof multi-crystal transducer with contact quality indicator light',
      'Pre-programmed clinical treatment protocols for all major anatomical zones'
    ],
    fullSpecs: [
      { label: 'Operating Frequencies', value: '1.0 MHz & 3.0 MHz +/- 5%' },
      { label: 'Max Power Output', value: '3.0 W/cm² Continuous & Pulsed' },
      { label: 'Duty Cycles', value: '10%, 20%, 50%, 100% (Continuous)' },
      { label: 'Timer Control', value: '1 to 30 Minutes with Auto-Shutoff' }
    ]
  },
  {
    id: 'prod-physio-tens',
    name: 'Multi-Channel Clinical Electrotherapy & TENS Unit',
    category: 'physiotherapy',
    categoryName: 'Physiotherapy & Rehab',
    relatedDepartments: ['physiotherapy'],
    tagline: '4-channel multi-waveform electrotherapy stimulator with Interferential (IFT), TENS, and Russian currents',
    description: 'Versatile 4-channel clinical electrotherapy device providing 12 therapeutic current waveforms for muscle re-education, chronic pain relief, and edema reduction.',
    modelNumber: 'STIM-400 PRO',
    badge: '4-Channel IFT',
    warrantyYears: 2,
    image: '/Products/Bionet Cardio - 7 12 - Channel ECG Machine.jpg',
    certifications: ['CE 0123', 'ISO 13485'],
    applications: ['Post-Op Pain Management', 'Neuromuscular Re-Education', 'Interferential Therapy (IFT)', 'Chronic Sciatica'],
    features: [
      'Four independent galvanic isolated channels for treating up to 2 patients simultaneously',
      'Comprehensive waveforms: 4-Pole IFT, 2-Pole IFT, TENS, Russian, Trabert, Galvanic, and Faradic',
      'Full-color 7-inch touchscreen with animated electrode placement guide',
      'High-durability rubber electrode pads and vacuum suction cup options'
    ],
    fullSpecs: [
      { label: 'Channels', value: '4 Independent Channels (8 Electrodes)' },
      { label: 'Waveforms', value: '12 Clinical Electrotherapy Modalities' },
      { label: 'Intensity Range', value: '0 to 100 mA in 0.5 mA Precise Steps' },
      { label: 'Display Panel', value: '7.0" Color Touch LCD' }
    ]
  },
  {
    id: 'prod-physio-laser',
    name: 'Class IV High-Intensity Laser Therapy System',
    category: 'physiotherapy',
    categoryName: 'Physiotherapy & Rehab',
    relatedDepartments: ['physiotherapy', 'dermatology'],
    tagline: '15W high-intensity multi-wavelength medical diode laser for fast biostimulation and deep tissue healing',
    description: 'Cutting-edge Class IV medical laser emitting simultaneous 810nm, 980nm, and 1064nm wavelengths to stimulate ATP cellular regeneration and provide instantaneous analgesia.',
    modelNumber: 'HILT-15W PLUS',
    badge: '15W Class IV',
    warrantyYears: 3,
    image: '/Products/4K Ultra HD Video Endoscopy Tower System.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'FDA Cleared'],
    applications: ['Spinal Disc Herniation', 'Arthritis Pain Relief', 'Plantar Fasciitis', 'Athletic Soft Tissue Trauma'],
    features: [
      'Triple-wavelength technology (810nm for biostimulation, 980nm for analgesia, 1064nm for deep tissue penetration)',
      'Continuous and high-frequency super-pulsed emission modes up to 10,000 Hz',
      'Ergonomic handpiece with magnetic spot size lenses and foot pedal trigger',
      'Patient safety sensor and emergency interlock system'
    ],
    fullSpecs: [
      { label: 'Peak Laser Power', value: '15 Watts Continuous Wave (CW)' },
      { label: 'Wavelengths', value: '810 nm + 980 nm + 1064 nm Simultaneous' },
      { label: 'Pulse Frequency', value: '1 Hz to 10,000 Hz Super-Pulsed' },
      { label: 'Laser Class', value: 'Class IV Medical Laser System' }
    ]
  },
  {
    id: 'prod-physio-traction',
    name: 'Digital Motorized Cervical & Lumbar Traction Unit',
    category: 'physiotherapy',
    categoryName: 'Physiotherapy & Rehab',
    relatedDepartments: ['physiotherapy'],
    tagline: 'Computerized spinal decompression and traction system with friction-free split treatment table',
    description: 'Advanced motorized traction machine delivering progressive, intermittent, and harmonic decompression forces for relieving lumbar disc compression, spinal stenosis, and cervical radiculopathy.',
    modelNumber: 'TRAC-SPINE 900',
    badge: 'Spinal Decompression',
    warrantyYears: 3,
    image: '/Products/Multi-Function Electric Obstetric Delivery Bed.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'IEC 60601-1'],
    applications: ['Lumbar Disc Herniation', 'Cervical Spondylosis', 'Sciatica Decompression', 'Spinal Facet Syndrome'],
    features: [
      'Smooth motorized pulling tension up to 90 kg (200 lbs) for lumbar and 20 kg for cervical therapy',
      'Four-section friction-free roller bearing split table preventing muscle resistance',
      'Interactive patient safety hand-held emergency abort switch',
      'Digital touch console with real-time traction curve graphing'
    ],
    fullSpecs: [
      { label: 'Traction Tension', value: 'Lumbar: 1 to 90 kg / Cervical: 1 to 20 kg' },
      { label: 'Traction Patterns', value: 'Intermittent, Static, Harmonic, Progressive' },
      { label: 'Table Design', value: '4-Section Motorized Frictionless Split Bed' },
      { label: 'Safety Abort', value: 'Handheld Patient Remote Stop Switch' }
    ]
  },

  // =========================================================================
  // 11. NEONATAL & PEDIATRIC (4 Products)
  // =========================================================================
  {
    id: 'prod-neonatal-incubator',
    name: 'Advanced Neonatal Intensive Care Incubator',
    category: 'neonatal',
    categoryName: 'Neonatal & Pediatric',
    relatedDepartments: ['neonatal', 'icu-ot'],
    tagline: 'Microprocessor controlled infant incubator with servo-humidity, skin temperature, and oxygen concentration',
    description: 'High-end closed neonatal incubator designed for premature and critically ill newborns, offering double-wall acrylic hood, servo humidity control, integrated baby scale, and low-noise circulation.',
    modelNumber: 'NICU-INC 8000',
    badge: 'Servo Humidity',
    warrantyYears: 3,
    image: '/Products/Advanced Neonatal Intensive Care Incubator.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'IEC 60601-2-19'],
    applications: ['Premature Infant Care', 'Neonatal Intensive Care NICU', 'Thermoregulation Support', 'Infection Isolation'],
    features: [
      'Microprocessor temperature control with Air Mode and dual Skin Temperature Modes',
      'Ultrasonic servo-controlled active humidity system maintaining up to 95% RH',
      'Double-wall acrylic canopy with 6 operating ports and iris diaphragm access',
      'Integrated in-bed digital electronic infant weight scale with zero-reset'
    ],
    fullSpecs: [
      { label: 'Temp Control Range', value: 'Air: 25.0°C - 37.0°C / Skin: 34.0°C - 38.0°C' },
      { label: 'Humidity Range', value: '30% to 95% RH Servo-Controlled' },
      { label: 'Mattress Tilt', value: '+/- 12° Stepless Electric Tilting' },
      { label: 'Acoustic Noise', value: '< 45 dB(A) Inside Canopy (Ultra-Quiet)' }
    ]
  },
  {
    id: 'prod-infant-warmer',
    name: 'Overhead Infant Radiant Warmer with Resuscitation',
    category: 'neonatal',
    categoryName: 'Neonatal & Pediatric',
    relatedDepartments: ['neonatal', 'emergency'],
    tagline: 'Open neonatal resuscitation station with infrared ceramic heater, APGAR timer, and suction/O2 module',
    description: 'Complete neonatal warming and resuscitation workstation featuring an overhead quartz radiant heater, T-piece resuscitator module, LED examination lighting, and motorized height adjustment.',
    modelNumber: 'WARM-CARE 500',
    badge: 'Resuscitation Station',
    warrantyYears: 3,
    image: '/Products/Overhead Infant Radiant Warmer with Resuscitation.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'IEC 60601-2-21'],
    applications: ['Labor & Delivery NICU Triage', 'Newborn Resuscitation', 'Postnatal Warming', 'Minor Infant Surgery'],
    features: [
      'High-efficiency ceramic infrared heating element with 90-degree dual-axis swivel for X-ray access',
      'Integrated APGAR timer with acoustic signals at 1, 5, and 10 minutes',
      'Built-in T-piece resuscitator, medical suction regulator, and oxygen flowmeter',
      'Four drop-down transparent acrylic side panels with damping hinges'
    ],
    fullSpecs: [
      { label: 'Heater Output', value: '600W Quartz Ceramic Infrared Element' },
      { label: 'Temperature Modes', value: 'Servo Skin Mode, Manual Mode, Pre-Warm Mode' },
      { label: 'Mattress Bed', value: 'Soft Gel Core Mattress with +/- 15° Tilting' },
      { label: 'Phototherapy Option', value: 'Integrated Under-Bed Blue LED Tube Option' }
    ]
  },
  {
    id: 'prod-led-phototherapy',
    name: 'Microprocessor LED Phototherapy Jaundice Unit',
    category: 'neonatal',
    categoryName: 'Neonatal & Pediatric',
    relatedDepartments: ['neonatal'],
    tagline: 'High-intensity blue LED phototherapy system for effective neonatal hyperbilirubinemia treatment',
    description: 'Narrowband high-intensity blue LED phototherapy lamp delivering peak 450-470nm irradiance for rapid bilirubin breakdown without emitting harmful UV or excessive infrared heat.',
    modelNumber: 'BILI-LUX LED',
    badge: '450-470nm Blue',
    warrantyYears: 2,
    image: '/Products/Microprocessor LED Phototherapy Jaundice Unit.jpg',
    certifications: ['CE Mark', 'ISO 13485'],
    applications: ['Neonatal Jaundice Treatment', 'Hyperbilirubinemia Management', 'NICU & Postnatal Wards'],
    features: [
      'High-power medical LEDs producing irradiance > 50 uW/cm²/nm at 40cm distance',
      'Dual irradiance intensity levels (High / Low) for individualized bilirubin titration',
      'Digital treatment timer with total operational hour counter for lamp monitoring',
      'Mobile height-adjustable stand with 360-degree angle swivel lamp head'
    ],
    fullSpecs: [
      { label: 'Peak Wavelength', value: '450 to 470 nm Narrowband Blue Spectrum' },
      { label: 'Irradiance Output', value: '> 55 uW/cm²/nm (High) / 30 uW/cm²/nm (Low)' },
      { label: 'LED Lifespan', value: '= 50,000 Hours Continuous Output' },
      { label: 'Height Adjustment', value: '1100 mm to 1600 mm Gas Spring Pole' }
    ]
  },
  {
    id: 'prod-bubble-cpap',
    name: 'Infant Bubble CPAP Non-Invasive Respiratory System',
    category: 'neonatal',
    categoryName: 'Neonatal & Pediatric',
    relatedDepartments: ['neonatal', 'respiratory'],
    tagline: 'Gentle non-invasive bubble CPAP with integrated medical air/O2 blender and heated humidifier',
    description: 'Safe, low-cost non-invasive respiratory support system for premature infants with respiratory distress syndrome (RDS), producing oscillating positive airway pressure via water bubble generator.',
    modelNumber: 'BUBBLE-VENT 200',
    badge: 'Non-Invasive RDS',
    warrantyYears: 2,
    image: '/Products/Infant Bubble CPAP Non-Invasive Respiratory System.jpg',
    certifications: ['CE 0123', 'ISO 13485'],
    applications: ['Neonatal Respiratory Distress (RDS)', 'Meconium Aspiration', 'Post-Extubation Support', 'Apnea of Prematurity'],
    features: [
      'Precision air-oxygen blender providing FiO2 titration from 21% to 100%',
      'Calibrated water column bubble generator producing consistent positive pressure (3 to 10 cm H2O)',
      'Integrated servo-controlled heated respiratory humidifier preventing airway drying',
      'Soft silicone nasal prongs and infant head bonnet interface in multiple sizes'
    ],
    fullSpecs: [
      { label: 'CPAP Pressure', value: '3 to 10 cm H2O (Water Column Regulated)' },
      { label: 'FiO2 Blender Range', value: '21% to 100% (+/- 3% Accuracy)' },
      { label: 'Flow Rate', value: '2 to 15 Liters / Minute Continuous' },
      { label: 'Humidification', value: 'Servo Heated Chamber (37°C Saturated Vapor)' }
    ]
  },

  // =========================================================================
  // 12. DENTAL EQUIPMENTS (4 Products)
  // =========================================================================
  {
    id: 'prod-dental-chair-unit',
    name: 'Ergonomic Hydraulic Dental Chair Treatment Unit',
    category: 'dental',
    categoryName: 'Dental Equipments',
    relatedDepartments: ['dental'],
    tagline: 'Luxury computerized dental chair with touch delivery cart, LED sensor lamp, and rotary cuspidor',
    description: 'Comprehensive dental treatment suite featuring electro-hydraulic silent chair movement, 9-program memory positions, doctor delivery cart, high/low suction, and panoramic X-ray viewer.',
    modelNumber: 'DENT-SUITE 9000',
    badge: 'Luxury Dental Suite',
    warrantyYears: 3,
    image: '/Products/Ergonomic Hydraulic Dental Chair Treatment Unit.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'IEC 60601-1'],
    applications: ['General Dentistry', 'Endodontics & Crowns', 'Periodontal Scaling', 'Oral & Maxillofacial Surgery'],
    features: [
      'Seamless micro-fiber leather upholstery with synchronized ergonomic backrest motion',
      'Induction shadowless LED dental operating lamp with yellow anti-curing filter',
      'Down-hanging / Top-mounted doctor tray with 5 instrument holders and silicone pads',
      'Integrated rotatable ceramic spittoon with automatic timed bowl flush and cup filler'
    ],
    fullSpecs: [
      { label: 'Elevation System', value: 'Silent Electro-Hydraulic Linear Motor' },
      { label: 'Chair Weight Capacity', value: '200 kg Safe Working Load' },
      { label: 'Operating Lamp', value: '6-LED Shadowless (8,000 - 35,000 Lux)' },
      { label: 'Water & Suction', value: 'Pure Water Bottle System + Central Vacuum Drain' }
    ]
  },
  {
    id: 'prod-dental-opg',
    name: 'Digital Panoramic Dental OPG & CBCT System',
    category: 'dental',
    categoryName: 'Dental Equipments',
    relatedDepartments: ['dental', 'radiology'],
    tagline: 'High-resolution panoramic dental X-ray with cone beam CT 3D volumetric reconstruction',
    description: 'State-of-the-art extraoral digital dental imaging system providing sharp panoramic tomograms, cephalometric projections, and 3D Cone Beam CT scans for dental implants and orthodontics.',
    modelNumber: 'DENT-3D OPG',
    badge: '3D CBCT & OPG',
    warrantyYears: 3,
    image: '/Products/Digital Panoramic Dental OPG & CBCT System.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'US-FDA Cleared'],
    applications: ['Dental Implant Planning', 'Orthodontic Cephalometry', 'Impacted Wisdom Teeth', 'TMJ & Sinus Imaging'],
    features: [
      'High-precision CMOS flat panel detector delivering ultra-sharp 75 um voxel resolution',
      'Multi-FOV selection (5x5cm up to 16x10cm) for targeted low-dose imaging',
      'Automatic patient face-to-face laser positioning with motorized column height',
      'Comprehensive 3D implant planning and nerve canal tracing software suite'
    ],
    fullSpecs: [
      { label: 'Focal Spot', value: '0.5 mm IEC 60336' },
      { label: 'Tube Voltage / Current', value: '60 to 90 kV / 2 to 14 mA' },
      { label: 'Scan Time', value: 'Panoramic: 9-14 sec / CBCT 3D: 10-18 sec' },
      { label: 'Voxel Size', value: '75 um to 200 um Isotropic 3D Volume' }
    ]
  },
  {
    id: 'prod-dental-rvg-xray',
    name: 'High-Frequency Dental Intraoral X-Ray & RVG Sensor',
    category: 'dental',
    categoryName: 'Dental Equipments',
    relatedDepartments: ['dental'],
    tagline: 'DC high-frequency wall-mounted dental X-ray with direct USB CMOS digital RVG sensor',
    description: 'High-resolution intraoral imaging bundle featuring a 0.4mm micro-focal spot DC X-ray generator and waterproof ergonomic CMOS digital radiography sensor for instantaneous chairside X-rays.',
    modelNumber: 'X-DENT RVG-2',
    badge: 'Instant Digital RVG',
    warrantyYears: 2,
    image: '/Products/High-Frequency Dental Intraoral X-Ray & RVG Sensor.jpg',
    certifications: ['CE Mark', 'ISO 13485'],
    applications: ['Endodontic Root Canal Therapy', 'Caries Detection', 'Periapical Pathology', 'Crown Seating Checks'],
    features: [
      'Constant potential 65kV DC high-frequency generator reducing soft radiation exposure',
      'Size 1 and Size 2 ergonomic CMOS sensors with rounded corners for patient comfort',
      'High theoretical spatial resolution of 25 line pairs/mm for fine bone trabeculae display',
      'Direct USB 2.0 plug-and-play connection without requiring an external interface box'
    ],
    fullSpecs: [
      { label: 'X-Ray Generator', value: '65 kV / 2.5 mA High-Frequency DC (0.4mm Focal Spot)' },
      { label: 'Sensor Technology', value: 'CMOS Sensor with Optical Fiber Plate & Scintillator' },
      { label: 'Spatial Resolution', value: '25 lp/mm (True 20+ lp/mm Clinical Resolution)' },
      { label: 'Cable Durability', value: '3.0 Meter Reinforced Flexible Kevlar Cable' }
    ]
  },
  {
    id: 'prod-dental-autoclave',
    name: 'Class-B Vacuum Dental Autoclave & Sterilizer',
    category: 'dental',
    categoryName: 'Dental Equipments',
    relatedDepartments: ['dental', 'icu-ot'],
    tagline: '23-liter front-loading Class-B vacuum steam sterilizer for hollow and solid dental instruments',
    description: 'Medical Class-B fractional pre-vacuum autoclave compliant with EN 13060 standards, ensuring 100% sterile steam penetration into hollow dental handpieces and surgical sets.',
    modelNumber: 'STERI-VAC 23B',
    badge: 'Class-B EN13060',
    warrantyYears: 2,
    image: '/Products/Class-B Vacuum Dental Autoclave & Sterilizer.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'EN 13060 Standard'],
    applications: ['Dental Handpieces & Burs', 'Surgical Implant Kits', 'Orthodontic Pliers', 'Porous Cotton Packs'],
    features: [
      'Triple fractional pulsating vacuum pump ensuring complete air removal from hollow instruments',
      'High-grade SUS304 seamless stainless steel 23-liter sterilization chamber',
      'Automatic cycle data logging to USB flash drive and built-in thermal printer option',
      'Fast 15-minute emergency sterilization cycle for unwrapped clinical tools'
    ],
    fullSpecs: [
      { label: 'Chamber Volume', value: '23 Liters (250 mm Diameter x 450 mm Depth)' },
      { label: 'Sterilization Temp', value: '121°C (1.1 bar) & 134°C (2.1 bar)' },
      { label: 'Vacuum System', value: 'Fractional Pre-Vacuum & Forced Hot Air Drying' },
      { label: 'Safety Protections', value: 'Dual Pressure Lock, Overheat Cutoff, Safety Valve' }
    ]
  },

  // =========================================================================
  // 13. DERMATOLOGY (4 Products)
  // =========================================================================
  {
    id: 'prod-diode-laser',
    name: 'Triple-Wavelength Diode Laser Hair Removal System',
    category: 'dermatology',
    categoryName: 'Dermatology & Aesthetics',
    relatedDepartments: ['dermatology'],
    tagline: '808nm + 755nm + 1064nm triple diode laser with sapphire contact cooling (-10°C)',
    description: 'High-power 1200W aesthetic diode laser combining Alexandrite, Diode, and Nd:YAG wavelengths for virtually painless hair reduction and skin rejuvenation across all Fitzpatrick skin types (I-VI).',
    modelNumber: 'LASER-DERM 3W',
    badge: 'Triple Wave Diode',
    warrantyYears: 2,
    image: '/Products/4K Ultra HD Video Endoscopy Tower System.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'FDA Cleared'],
    applications: ['Permanent Hair Reduction', 'Skin Rejuvenation', 'Pseudofolliculitis Barbae', 'Vascular Lesions'],
    features: [
      'Simultaneous triple wavelength output: 755nm (light hair), 808nm (classic), 1064nm (darker skin)',
      'Continuous TEC contact cooling chiller chilling tip to -10°C for epidermal protection',
      'High repetition rate up to 10 Hz in-motion sweeping mode for rapid body treatments',
      'Large 15x25 mm spot size applicator with light-weight ergonomic silicone hose'
    ],
    fullSpecs: [
      { label: 'Laser Power', value: '1200 W Optical Diode Bar Output' },
      { label: 'Wavelengths', value: '755 nm + 808 nm + 1064 nm Combined' },
      { label: 'Fluence Range', value: '1 to 120 J/cm² Adjustable' },
      { label: 'Cooling System', value: 'Sapphire Contact + TEC + Water + Air Cooling' }
    ]
  },
  {
    id: 'prod-cryosurgery-unit',
    name: 'Liquid Nitrogen Clinical Cryosurgery System',
    category: 'dermatology',
    categoryName: 'Dermatology & Aesthetics',
    relatedDepartments: ['dermatology'],
    tagline: '500ml stainless steel liquid nitrogen spray cryotherapy device with 6 aperture spray tips',
    description: 'Dermatological liquid nitrogen spray unit designed for rapid in-office cryo-ablation of warts, skin tags, actinic keratoses, and benign cutaneous lesions with precision fingertip trigger.',
    modelNumber: 'CRYO-DERM 500',
    badge: 'Liquid Nitrogen',
    warrantyYears: 2,
    image: '/Products/Yuwell 7A-23A Electric Suction Apparatus.jpg',
    certifications: ['CE Mark', 'ISO 13485'],
    applications: ['Wart & Verruca Removal', 'Actinic Keratosis', 'Skin Tag Cryo-Destruction', 'Basal Cell Carcinoma'],
    features: [
      'Double-walled vacuum insulated stainless steel flask with 500ml LN2 capacity',
      'Holding time exceeding 20-24 hours without significant cryogen pressure loss',
      'Includes 6 interchangeable precision spray nozzles and contact cryo-probes',
      'Ergonomic brass fingertip trigger valve providing precise freeze-thaw control'
    ],
    fullSpecs: [
      { label: 'Flask Capacity', value: '500 ml Liquid Nitrogen (LN2)' },
      { label: 'Operating Temp', value: '-196°C Liquid Nitrogen Boiling Point' },
      { label: 'Nozzles Included', value: '6 Spray Apertures (A, B, C, D) + 2 Contact Probes' },
      { label: 'Flask Construction', value: 'Double-Walled Surgical Stainless Steel Dewar' }
    ]
  },
  {
    id: 'prod-dermatoscope',
    name: 'Polarized LED Clinical Dermatoscope & Skin Scanner',
    category: 'dermatology',
    categoryName: 'Dermatology & Aesthetics',
    relatedDepartments: ['dermatology'],
    tagline: 'Cross-polarized and non-polarized optical dermatoscope with universal smartphone camera adapter',
    description: 'High-magnification clinical skin dermatoscope featuring achromatic optical lenses, 10X optical magnification, cross-polarized LED light for deep melanin visualization, and rechargeable battery.',
    modelNumber: 'DERMA-SCAN 10X',
    badge: 'Polarized 10X',
    warrantyYears: 2,
    image: '/Products/digital trinocular compound microscope.jpg',
    certifications: ['CE Mark', 'ISO 13485'],
    applications: ['Melanoma Early Detection', 'Dysplastic Nevi Mapping', 'Trichoscopy Hair Exams', 'Inflammatory Dermatoses'],
    features: [
      '25mm wide-field 4-element optical lens system providing distortion-free edge clarity',
      'Toggle switch between Cross-Polarized and Non-Polarized LED modes without immersion oil',
      'Removable glass contact plate with millimeter scale reticle for measuring lesion borders',
      'Universal magnetic smartphone attachment ring for high-res digital dermoscopy photography'
    ],
    fullSpecs: [
      { label: 'Optical Magnification', value: '10X Optical Magnification (25mm Lens)' },
      { label: 'Illumination', value: '32 High-CRI Medical LEDs (Polarized & Non-Polarized)' },
      { label: 'Battery', value: 'Rechargeable USB-C Lithium Battery (4+ Hours)' },
      { label: 'Contact Plate', value: 'Autoclavable Snap-On Glass with 10mm Scale' }
    ]
  },
  {
    id: 'prod-phototherapy-cabin',
    name: 'Narrowband UVB Full-Body Phototherapy Cabin',
    category: 'dermatology',
    categoryName: 'Dermatology & Aesthetics',
    relatedDepartments: ['dermatology'],
    tagline: 'Clinical 311nm Narrowband UVB walk-in therapy booth with microprocessor dosimeter control',
    description: 'Full-body walk-in phototherapy cabin equipped with 24 medical-grade Philips 311nm NB-UVB tubes, smart dose calculation, patient emergency stop, and internal ventilation fans.',
    modelNumber: 'UVB-CABIN 311',
    badge: '311nm NB-UVB',
    warrantyYears: 3,
    image: '/Products/Microprocessor LED Phototherapy Jaundice Unit.jpg',
    certifications: ['CE 0123', 'ISO 13485'],
    applications: ['Severe Psoriasis Plaque', 'Vitiligo Repigmentation', 'Atopic Dermatitis / Eczema', 'Mycosis Fungoides'],
    features: [
      '24 medical narrowband UVB lamps (peak wavelength 311nm) for maximum clinical efficacy',
      'Real-time UV optical sensor dosimeter measuring exact Joules/cm² delivered to skin',
      'Octagonal mirrored interior panels ensuring 360-degree uniform irradiance distribution',
      'Internal emergency grab handle allowing patient to immediately push open door and shut off lamps'
    ],
    fullSpecs: [
      { label: 'Lamps', value: '24 x Philips 100W Narrowband UVB (TL-01/311nm)' },
      { label: 'Radiation Spectrum', value: 'Peak at 311 nm Narrowband UVB' },
      { label: 'Dosimetry Control', value: 'Microprocessor Joules (J/cm²) / Time Controller' },
      { label: 'Safety Protections', value: 'Patient Emergency Stop, Interlock Door, Auto-Vent' }
    ]
  },

  // =========================================================================
  // 14. EMERGENCY & TRAUMA (4 Products)
  // =========================================================================
  // (Uses defibrillator, 7-inch monitor, multi-parameter monitor, bio plus suction)

  // =========================================================================
  // 15. OPHTHALMIC (4 Products)
  // =========================================================================
  {
    id: 'prod-slit-lamp',
    name: 'High-Resolution Digital Slit Lamp Biomicroscope',
    category: 'ophthalmic',
    categoryName: 'Ophthalmic Equipment',
    relatedDepartments: ['ophthalmic'],
    tagline: '5-step Galilean magnification slit lamp with integrated HD beam splitter digital camera',
    description: 'Precision ophthalmic slit lamp offering 5-step magnification (6X, 10X, 16X, 25X, 40X), warm LED slit illumination, yellow barrier filter, and high-definition clinical imaging capture.',
    modelNumber: 'SLIT-PRO 500',
    badge: '5-Step Galilean',
    warrantyYears: 3,
    image: '/Products/High-Resolution Digital Slit Lamp Biomicroscope.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'IEC 60601-1'],
    applications: ['Corneal Pathology', 'Cataract Grading', 'Anterior Segment Slit Imaging', 'Contact Lens Fitting'],
    features: [
      'Galilean converging binocular optical tube with parallel optical path',
      'Continuously adjustable 0 to 14mm slit length and width with 0° to 180° rotation',
      'Integrated optical beam splitter with 24-megapixel high-speed camera sensor',
      'High-luminance warm LED illumination preserving corneal natural color temperature'
    ],
    fullSpecs: [
      { label: 'Magnification Steps', value: '6X, 10X, 16X, 25X, 40X Galilean Drum' },
      { label: 'Slit Width / Length', value: '0 to 14 mm Continuously Adjustable' },
      { label: 'Filters', value: 'Cobalt Blue, Red-Free, Heat Absorption, Yellow' },
      { label: 'Camera Sensor', value: '24 MP Digital Sensor with Foot Switch Capture' }
    ]
  },
  {
    id: 'prod-auto-refractometer',
    name: 'Computerized Auto Refractometer & Keratometer',
    category: 'ophthalmic',
    categoryName: 'Ophthalmic Equipment',
    relatedDepartments: ['ophthalmic'],
    tagline: 'Hartmann-Shack sensor auto ref-keratometer with 7-inch tilting color touch display',
    description: 'High-speed computerized autorefractor keratometer measuring corneal curvature, sphere, cylinder, and pupil diameter in milliseconds with auto-tracking 3D joystick alignment.',
    modelNumber: 'ARK-AUTOFOCUS 9',
    badge: '3D Auto-Tracking',
    warrantyYears: 2,
    image: '/Products/Computerized Auto Refractometer & Keratometer.jpg',
    certifications: ['CE Mark', 'ISO 13485'],
    applications: ['Refractive Error Screening', 'Astigmatism Assessment', 'Contact Lens Base Curve', 'Pre-LASIK Workup'],
    features: [
      'Advanced Hartmann-Shack wavefront sensor ensuring precise readings even on small pupils (2.0mm)',
      '3D motorized auto-tracking and auto-firing mechanism when alignment is achieved',
      'Tilting 7.0-inch color LCD touchscreen allowing sitting and standing examiner comfort',
      'Built-in high-speed thermal paper printer with automatic paper cutter'
    ],
    fullSpecs: [
      { label: 'Sphere (SPH)', value: '-25.00 D to +22.00 D (0.12/0.25 D steps)' },
      { label: 'Cylinder (CYL)', value: '-10.00 D to +10.00 D (0.12/0.25 D steps)' },
      { label: 'Corneal Curvature', value: '5.0 mm to 10.2 mm (Radius of Curvature)' },
      { label: 'Min Pupil Diameter', value: '2.0 mm Pupil Measurement Capability' }
    ]
  },
  {
    id: 'prod-ab-scan-ultrasound',
    name: 'Ophthalmic A/B Scan Ultrasound Diagnostic System',
    category: 'ophthalmic',
    categoryName: 'Ophthalmic Equipment',
    relatedDepartments: ['ophthalmic', 'radiology'],
    tagline: 'Combined 10 MHz B-Scan sector imaging and 10 MHz precision A-Scan biometer with IOL calculation',
    description: 'Comprehensive ophthalmic ultrasound workstation featuring high-resolution 10 MHz B-scan sector probe for vitreoretinal pathology, 10 MHz A-scan biometry probe, and 6 IOL calculation formulas.',
    modelNumber: 'OPHTHA-SONO 300',
    badge: 'A/B Scan Biometer',
    warrantyYears: 2,
    image: '/Products/Ophthalmic AB Scan Ultrasound Diagnostic System.jpg',
    certifications: ['CE 0123', 'ISO 13485'],
    applications: ['Vitreous Hemorrhage & Retinal Detachment', 'Axial Length Measurement', 'IOL Power Calculation', 'Ocular Tumors'],
    features: [
      'High-gain 10 MHz magnetic sector B-scan probe providing crisp vitreoretinal imaging',
      'Precision A-scan biometry probe with immersion and contact measurement modes',
      'Built-in standard IOL calculation formulas: SRK-T, SRK-II, Holladay, Hoffer-Q, Binkhorst',
      'Integrated touchscreen workstation with PDF report generator and DICOM network'
    ],
    fullSpecs: [
      { label: 'B-Scan Probe', value: '10 MHz Sector Probe with 53° Scan Angle' },
      { label: 'A-Scan Accuracy', value: '+/- 0.04 mm Axial Length Measurement Precision' },
      { label: 'Gain Range', value: '0 to 105 dB Adjustable' },
      { label: 'IOL Formulas', value: 'SRK-II, SRK-T, Binkhorst-II, Holladay, Hoffer-Q' }
    ]
  },
  {
    id: 'prod-non-contact-tonometer',
    name: 'Non-Contact Air-Puff Optical Tonometer',
    category: 'ophthalmic',
    categoryName: 'Ophthalmic Equipment',
    relatedDepartments: ['ophthalmic'],
    tagline: 'Soft air-puff non-contact intraocular pressure (IOP) tonometer with auto-alignment and corneal thickness compensation',
    description: 'Gentle, automated air-puff tonometer measuring intraocular pressure without corneal contact or topical anesthesia, featuring pachymetry-adjusted IOP calculation for glaucoma screening.',
    modelNumber: 'TONO-AIR 800',
    badge: 'Soft Air-Puff',
    warrantyYears: 2,
    image: '/Products/Non-Contact Air-Puff Optical Tonometer.jpg',
    certifications: ['CE Mark', 'ISO 13485'],
    applications: ['Glaucoma Screening', 'Routine Eye Pressure Checks', 'Post-Op Cataract Monitoring', 'Refractive Surgery Followup'],
    features: [
      'Smart soft air-puff mechanism providing gentle, whisper-quiet patient comfort',
      '3D auto-tracking and auto-puff system when pupil alignment is reached',
      'Corneal thickness compensation algorithm calculating true adjusted intraocular pressure',
      'High-speed measurement completed in milliseconds with dual safety distance stopper'
    ],
    fullSpecs: [
      { label: 'IOP Measurement', value: '1 mmHg to 60 mmHg (1 mmHg increments)' },
      { label: 'Measurement Distance', value: '11 mm from Corneal Vertex' },
      { label: 'Corneal Correction', value: 'Input CCT 300-800 um for Adjusted True IOP' },
      { label: 'Printer', value: 'Built-in High-Speed Thermal Strip Chart' }
    ]
  },

  // =========================================================================
  // 16. REHABILITATION & HOMECARE (4 Products)
  // =========================================================================
  {
    id: 'prod-electric-wheelchair',
    name: 'Foldable Electric Power Wheelchair',
    category: 'rehab-homecare',
    categoryName: 'Rehabilitation & Homecare',
    relatedDepartments: ['rehab-homecare'],
    tagline: 'Ultra-lightweight aviation aluminum alloy motorized wheelchair with 360-degree joystick',
    description: 'Compact foldable electric wheelchair featuring dual 250W brushless motors, long-range lithium battery, electromagnetic braking system, and 3-second rapid fold mechanism.',
    modelNumber: 'AL-MOBIL-500',
    badge: 'Ultra Lightweight',
    warrantyYears: 2,
    image: '/Products/foldable electric power wheelchair.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'UN38.3 Air Transport Certified'],
    applications: ['Elderly Mobility Assistance', 'Post-Stroke Rehabilitation', 'Paraplegia Support', 'Travel & Airline Transport'],
    features: [
      'Aviation-grade aluminum alloy frame weighing only 24kg including battery',
      'Dual 250W high-torque brushless hub motors with smooth hill climbing capability',
      'Quick 3-second one-motion folding mechanism fitting easily into car trunks',
      'Intelligent 360-degree ergonomic joystick controller with speed adjustment dial'
    ],
    fullSpecs: [
      { label: 'Weight Capacity', value: '130 kg Maximum User Load' },
      { label: 'Motor Power', value: 'Dual 250W Brushless Motors (500W Total)' },
      { label: 'Driving Range', value: '20 to 25 km per Full Charge' },
      { label: 'Braking System', value: 'Intelligent Electromagnetic Safety Braking' }
    ]
  },
  {
    id: 'prod-patient-lift-hoist',
    name: 'Heavy-Duty Electric Patient Transfer Lift Hoist',
    category: 'rehab-homecare',
    categoryName: 'Rehabilitation & Homecare',
    relatedDepartments: ['rehab-homecare', 'furniture-disposables'],
    tagline: 'Motorized patient lifting hoist with rechargeable battery, emergency lowering, and universal sling',
    description: 'Safe electric patient transfer lift hoist designed for transferring bedridden, bariatric, or disabled patients between beds, wheelchairs, and commodes with zero caregiver spinal strain.',
    modelNumber: 'HOIST-LIFT 200',
    badge: 'Electric Hoist',
    warrantyYears: 3,
    image: '/Products/foldable electric power wheelchair.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'IEC 60601-1'],
    applications: ['Homecare Bed-to-Chair Transfers', 'Hospital Nursing Wards', 'Rehabilitation Centers', 'Bath & Commode Transfer'],
    features: [
      'Heavy-duty electric linear lifting actuator with 200 kg (440 lbs) safe working load',
      'Spreader base legs easily opened with foot pedal for accessing wide armchairs and wheelchairs',
      'Manual and electric dual emergency lowering mechanism for complete patient safety',
      'Includes comfortable 4-point breathable mesh padded patient transfer sling'
    ],
    fullSpecs: [
      { label: 'Safe Working Load', value: '200 kg (440 lbs) Heavy Duty' },
      { label: 'Lifting Range', value: '750 mm to 1750 mm Boom Height' },
      { label: 'Base Width', value: '620 mm Closed / 920 mm Foot-Pedal Expanded' },
      { label: 'Battery Capacity', value: '24V Rechargeable Pack (80+ Lift Cycles / Charge)' }
    ]
  },
  {
    id: 'prod-homecare-bed',
    name: '5-Function Electric Adjustable Homecare Medical Bed',
    category: 'rehab-homecare',
    categoryName: 'Rehabilitation & Homecare',
    relatedDepartments: ['rehab-homecare', 'furniture-disposables'],
    tagline: '5-motor electric nursing home bed with wood grain panels, collapsible aluminum rails, and central locking',
    description: 'Comfortable home-style electric nursing medical bed providing motorized height adjustment, backrest recline, knee-break elevation, Trendelenburg tilt, and cardiac chair positioning.',
    modelNumber: 'HOME-BED 500E',
    badge: '5-Function Electric',
    warrantyYears: 3,
    image: '/Products/Multi-Function Electric Obstetric Delivery Bed.jpg',
    certifications: ['CE Mark', 'ISO 13485', 'EN 60601-2-52'],
    applications: ['Long-Term Home Nursing', 'Elderly Palliative Care', 'Post-Operative Convalescence', 'Stroke Rehabilitation'],
    features: [
      'Five quiet medical linear actuators controlling all bed articulations via backlit handheld remote',
      'Warm wood-grain head and foot boards designed for comfortable home aesthetic integration',
      'Collapsible aluminum alloy side protection rails with one-button squeeze release',
      'Low height feature lowering to 380mm to prevent patient fall injuries'
    ],
    fullSpecs: [
      { label: 'Safe Working Load', value: '250 kg Max Load Capacity' },
      { label: 'Height Range', value: '380 mm to 780 mm Motorized Elevation' },
      { label: 'Backrest / Leg Tilt', value: 'Backrest 0° to 75° / Knee-Rest 0° to 45°' },
      { label: 'Casters', value: '125 mm Individual Locking Medical Casters' }
    ]
  },
  {
    id: 'prod-anti-decubitus-mattress',
    name: 'Alternating Pressure Anti-Decubitus Mattress System',
    category: 'rehab-homecare',
    categoryName: 'Rehabilitation & Homecare',
    relatedDepartments: ['rehab-homecare', 'icu-ot'],
    tagline: 'Tubular alternating air cell medical mattress with whisper-quiet pump for Stage I-IV pressure ulcer prevention',
    description: 'Hospital-grade dynamic alternating pressure ripple mattress featuring 20 replaceable TPU air cells, micro-air loss ventilation, CPR quick deflate valve, and low-pressure acoustic alarms.',
    modelNumber: 'AIR-CELL 20T',
    badge: 'Stage I-IV Ulcer Care',
    warrantyYears: 2,
    image: '/Products/Multi-Function Electric Obstetric Delivery Bed.jpg',
    certifications: ['CE Mark', 'ISO 13485'],
    applications: ['Bedridden Patient Care', 'ICU Pressure Sore Prevention', 'Stage I-IV Decubitus Ulcers', 'Paralysis Long-Term Nursing'],
    features: [
      '20 individual nylon-TPU tubular air cells operating in alternating A-B cycle (10 min cycle time)',
      'Micro-porous laser ventilation holes circulating air across skin to keep patient dry',
      'CPR quick-release pull cord allowing instantaneous emergency deflation in under 15 seconds',
      'Waterproof, vapor-permeable, antimicrobial zippered top cover'
    ],
    fullSpecs: [
      { label: 'Air Cells', value: '20 x 8-Inch Replaceable Nylon/TPU Tubes' },
      { label: 'Weight Capacity', value: '180 kg Patient Weight Support' },
      { label: 'Cycle Time', value: '10 to 12 Minutes Alternating Inflation' },
      { label: 'Pump Noise', value: '< 20 dB Ultra-Quiet Acoustic Isolation' }
    ]
  },

  // =========================================================================
  // 17. HOSPITAL FURNITURE & WARD (4 Products)
  // =========================================================================
  {
    id: 'prod-crash-cart',
    name: 'Emergency Resuscitation Crash Cart Trolley',
    category: 'furniture-disposables',
    categoryName: 'Hospital Furniture & Ward',
    relatedDepartments: ['furniture-disposables', 'emergency', 'icu-ot'],
    tagline: 'Heavy-duty ABS emergency resuscitation trolley with central key seal lock, defibrillator shelf, and IV pole',
    description: 'Ergonomic mobile emergency crash cart equipped with 5 modular drawers, CPR cardiac board, 360-degree rotating defibrillator tray, oxygen tank holder, and central disposable seal locking system.',
    modelNumber: 'CART-EMERG 500',
    badge: 'Emergency Crash Cart',
    warrantyYears: 3,
    image: '/Products/Biphasic Defibrillator and External Pacemaker Monitor.jpg',
    certifications: ['CE Mark', 'ISO 9001', 'ISO 13485'],
    applications: ['Emergency Room Triage', 'ICU Resuscitation Units', 'Cardiac Arrest Teams', 'Operating Suites'],
    features: [
      'High-impact ABS injection-molded body with scratch-resistant stainless steel side rails',
      'Five ball-bearing sliding drawers with custom partition dividers for emergency medications',
      'Rotatable 360-degree top shelf designed to secure transport defibrillators and monitors',
      'Includes back-mounted rigid CPR board, stainless IV pole, and twin waste bins'
    ],
    fullSpecs: [
      { label: 'Dimensions', value: '850 mm (L) x 520 mm (W) x 1010 mm (H)' },
      { label: 'Drawers', value: '2 Small, 2 Medium, 1 Large with Modular Dividers' },
      { label: 'Casters', value: '100 mm Dual-Wheel Medical Casters with 2 Diagonal Brakes' },
      { label: 'Accessories', value: 'Defibrillator Shelf, CPR Board, IV Pole, O2 Holder' }
    ]
  },
  {
    id: 'prod-patient-stretcher',
    name: 'Hydraulic Dual-Pedal Patient Transport Stretcher',
    category: 'furniture-disposables',
    categoryName: 'Hospital Furniture & Ward',
    relatedDepartments: ['furniture-disposables', 'emergency'],
    tagline: 'Hydraulic emergency patient transfer trolley with central locking brake and retractable 5th wheel steering',
    description: 'Rugged hospital emergency transport stretcher featuring dual-sided foot hydraulic pedals for smooth height adjustment, collapsible full-length side rails, and high-density waterproof mattress.',
    modelNumber: 'TROLLEY-HYD 800',
    badge: 'Hydraulic Transport',
    warrantyYears: 3,
    image: '/Products/Multi-Function Electric Obstetric Delivery Bed.jpg',
    certifications: ['CE 0123', 'ISO 13485', 'EN 60601-2-52'],
    applications: ['Emergency Patient Transport', 'Post-Op Recovery Transfer', 'Trauma Resuscitation', 'Ambulance Bay Intake'],
    features: [
      'Dual hydraulic foot pumps on both sides for elevation and Trendelenburg tilting',
      'Retractable directional 5th wheel ensuring effortless straight-line tracking around corners',
      'Fold-down full-length safety side rails with easy one-hand squeeze latch',
      'Central braking pedal locking all 4 wheels simultaneously from any corner'
    ],
    fullSpecs: [
      { label: 'Safe Load Capacity', value: '250 kg Maximum Patient Weight' },
      { label: 'Height Range', value: '590 mm to 910 mm Hydraulic Lift' },
      { label: 'Trendelenburg Angle', value: '+18° / -18° Smooth Tilting' },
      { label: 'Mattress', value: '70 mm High-Density Antimicrobial Waterproof Foam' }
    ]
  },
  {
    id: 'prod-overbed-table',
    name: 'Pneumatic Height-Adjustable Overbed Dining Table',
    category: 'furniture-disposables',
    categoryName: 'Hospital Furniture & Ward',
    relatedDepartments: ['furniture-disposables', 'rehab-homecare'],
    tagline: 'One-touch pneumatic gas-spring hospital overbed table with spill-containment rim and low-profile base',
    description: 'High-durability hospital overbed table with smooth pneumatic gas spring height adjustment from 720mm to 1020mm, scratch-resistant walnut/white laminate top, and low-clearance mobile casters.',
    modelNumber: 'TAB-PNEU 100',
    badge: 'Pneumatic Lift',
    warrantyYears: 2,
    image: '/Products/Multi-Function Electric Obstetric Delivery Bed.jpg',
    certifications: ['CE Mark', 'ISO 9001'],
    applications: ['Hospital Inpatient Wards', 'ICU Patient Dining', 'Elderly Nursing Care', 'Homecare Bedrooms'],
    features: [
      'One-touch effortless fingertip upward lifting mechanism with smooth gas spring',
      'Molded spill-retaining perimeter lip preventing liquid spills from dripping onto floor',
      'Slim low-profile U-shaped steel base sliding easily under low-clearance hospital beds',
      'Four hidden omni-directional swivel casters with non-marking rubber wheels'
    ],
    fullSpecs: [
      { label: 'Tabletop Size', value: '800 mm (L) x 400 mm (W) High-Pressure Laminate' },
      { label: 'Height Range', value: '720 mm to 1020 mm Continuous Gas-Spring Lift' },
      { label: 'Load Capacity', value: '25 kg Distributed Weight' },
      { label: 'Base Material', value: 'Heavy-Duty Powder-Coated Carbon Steel' }
    ]
  },
  {
    id: 'prod-instrument-trolley',
    name: 'Heavy-Duty Stainless Steel Medical Instrument Trolley',
    category: 'furniture-disposables',
    categoryName: 'Hospital Furniture & Ward',
    relatedDepartments: ['furniture-disposables', 'icu-ot', 'laboratory'],
    tagline: 'Grade 304 surgical stainless steel 2-tier dressing and instrument trolley with 3-sided guard rails',
    description: 'Sterile surgical instrument and medication dressing trolley constructed from heavy-gauge seamless AISI 304 stainless steel with double shelves, safety guardrails, and antistatic swivel casters.',
    modelNumber: 'SS-TROLLEY 304',
    badge: 'AISI 304 Steel',
    warrantyYears: 5,
    image: '/Products/electro-hydraulic  electric surgical operating table.jpg',
    certifications: ['CE Mark', 'ISO 9001', 'GMP Compliant'],
    applications: ['Operation Theatre Sterile Tables', 'Ward Dressing & Injections', 'Lab Sample Transport', 'Dental Clinics'],
    features: [
      'Fabricated from high-purity corrosion-resistant AISI 304 stainless steel with satin polish',
      'Dual shelves equipped with 3-sided safety guard rails preventing instruments from falling',
      'Seamless smooth argon-welded joints without sharp edges for effortless sterilization wiping',
      'Four 75mm medical antistatic swivel casters with 2 diagonal brake locks'
    ],
    fullSpecs: [
      { label: 'Material', value: '1.2 mm Thick AISI 304 Surgical Stainless Steel' },
      { label: 'Overall Dimensions', value: '750 mm (L) x 450 mm (W) x 850 mm (H)' },
      { label: 'Shelves', value: '2-Tier Stainless Steel with 3-Sided Guardrails' },
      { label: 'Casters', value: '75 mm Silent Swivel Wheels with Precision Bearings' }
    ]
  }
];
