/**
 * Themed MedLinks puzzles (50).
 * Each puzzle has one board-wide theme so groups can't be spotted
 * merely as "the only vaccines / bones / labs on the board."
 */
module.exports = [
  // 1 — Cardiology
  {
    id: 1,
    theme: "Cardiology",
    groups: [
      {
        category: "Types of Shock",
        difficulty: 1,
        terms: ["Hypovolemic", "Cardiogenic", "Distributive", "Obstructive"],
        explanation: "The four physiologic shock categories.",
      },
      {
        category: "Heart Valves",
        difficulty: 2,
        terms: ["Mitral", "Tricuspid", "Aortic", "Pulmonary"],
        explanation: "The four cardiac valves.",
      },
      {
        category: "ACS Presentations",
        difficulty: 3,
        terms: ["STEMI", "NSTEMI", "Unstable Angina", "Prinzmetal"],
        explanation: "Acute coronary syndromes and variant angina.",
      },
      {
        category: "___ Heart",
        difficulty: 4,
        terms: ["Athletic", "Broken", "Soldier's", "Boot-Shaped"],
        explanation: "Descriptive cardiac nicknames and metaphors.",
      },
    ],
  },
  // 2 — Vaccines & immunization
  {
    id: 2,
    theme: "Immunization",
    groups: [
      {
        category: "Live Attenuated Vaccines",
        difficulty: 1,
        terms: ["MMR", "Varicella", "Yellow Fever", "Rotavirus"],
        explanation: "Live vaccines generally avoided in pregnancy/severe immunocompromise.",
      },
      {
        category: "Inactivated / Subunit Vaccines",
        difficulty: 2,
        terms: ["Hepatitis A", "Hepatitis B", "IPV", "Tdap"],
        explanation: "Non-live vaccine preparations.",
      },
      {
        category: "Vaccine-Preventable Diseases",
        difficulty: 3,
        terms: ["Polio", "Measles", "Tetanus", "Pertussis"],
        explanation: "Diseases targeted by routine immunization.",
      },
      {
        category: "___ Vaccine Schedule Word",
        difficulty: 4,
        terms: ["Booster", "Priming", "Catch-Up", "Cocooning"],
        explanation: "Terms used in immunization strategy discussions.",
      },
    ],
  },
  // 3 — Labor & delivery
  {
    id: 3,
    theme: "Labor and Delivery",
    groups: [
      {
        category: "Stages of Labor",
        difficulty: 1,
        terms: ["Latent", "Active", "Transition", "Second Stage"],
        explanation: "Phases of labor progress (second stage = pushing).",
      },
      {
        category: "Fetal Heart Tracing Categories",
        difficulty: 2,
        terms: ["Category I", "Category II", "Category III", "Sinusoidal"],
        explanation: "NICHD tracing classifications and a sinister pattern.",
      },
      {
        category: "Labor Induction / Augmentation Agents",
        difficulty: 3,
        terms: ["Oxytocin", "Misoprostol", "Dinoprostone", "Foley Balloon"],
        explanation: "Pharmacologic and mechanical ripening/induction methods.",
      },
      {
        category: "Apgar Components",
        difficulty: 4,
        terms: ["Appearance", "Pulse", "Grimace", "Activity"],
        explanation: "Four of five Apgar score elements.",
      },
    ],
  },
  // 4 — Orthopedics
  {
    id: 4,
    theme: "Orthopedics",
    groups: [
      {
        category: "Rotator Cuff Muscles",
        difficulty: 1,
        terms: ["Supraspinatus", "Infraspinatus", "Teres Minor", "Subscapularis"],
        explanation: "The SITS muscles.",
      },
      {
        category: "Carpal Bones (Distal Row)",
        difficulty: 2,
        terms: ["Trapezium", "Trapezoid", "Capitate", "Hamate"],
        explanation: "Distal carpal row.",
      },
      {
        category: "Eponymous Fractures",
        difficulty: 3,
        terms: ["Colles", "Smith", "Jones", "Bennett"],
        explanation: "Named fracture patterns.",
      },
      {
        category: "___ Fracture (Descriptive)",
        difficulty: 4,
        terms: ["Boxer's", "Nightstick", "March", "Greenstick"],
        explanation: "Fractures named by mechanism or appearance.",
      },
    ],
  },
  // 5 — Oncology
  {
    id: 5,
    theme: "Oncology",
    groups: [
      {
        category: "Tumor Suppressor Genes",
        difficulty: 1,
        terms: ["TP53", "RB1", "BRCA1", "APC"],
        explanation: "Classic tumor suppressors.",
      },
      {
        category: "Oncogenic Viruses",
        difficulty: 2,
        terms: ["HPV", "EBV", "HBV", "HTLV-1"],
        explanation: "Viruses linked to human cancers.",
      },
      {
        category: "Staging / Severity Systems",
        difficulty: 3,
        terms: ["TNM", "Ann Arbor", "Breslow", "Gleason"],
        explanation: "Cancer staging or grading tools.",
      },
      {
        category: "___ Cell Tumor Theme",
        difficulty: 4,
        terms: ["Reed-Sternberg", "Signet Ring", "Owl Eye", "Orphan Annie"],
        explanation: "Classic pathologic cell descriptors in oncology.",
      },
    ],
  },
  // 6 — Neurology
  {
    id: 6,
    theme: "Neurology",
    groups: [
      {
        category: "Generalized Seizure Types",
        difficulty: 1,
        terms: ["Absence", "Tonic-Clonic", "Myoclonic", "Atonic"],
        explanation: "Generalized seizure semiologies.",
      },
      {
        category: "Pathologic Gaits",
        difficulty: 2,
        terms: ["Antalgic", "Trendelenburg", "Steppage", "Parkinsonian"],
        explanation: "Abnormal gait patterns.",
      },
      {
        category: "Named Reflexes",
        difficulty: 3,
        terms: ["Babinski", "Moro", "Hoffman", "Clonus"],
        explanation: "Neurologic reflex findings.",
      },
      {
        category: "___ Spot",
        difficulty: 4,
        terms: ["Koplik", "Roth", "Brushfield", "Cafe-au-Lait"],
        explanation: "Named spots with neurologic/systemic associations (measles, endocarditis emboli, Down syndrome, NF).",
      },
    ],
  },
  // 7 — Endocrinology
  {
    id: 7,
    theme: "Endocrinology",
    groups: [
      {
        category: "Anterior Pituitary Hormones",
        difficulty: 1,
        terms: ["ACTH", "TSH", "GH", "Prolactin"],
        explanation: "Adenohypophysis hormones.",
      },
      {
        category: "Causes of Hypoglycemia",
        difficulty: 2,
        terms: ["Insulin Excess", "Sulfonylurea", "Ethanol", "Addison Disease"],
        explanation: "Classic hypoglycemia precipitants.",
      },
      {
        category: "Eponymous Endocrine Diseases",
        difficulty: 3,
        terms: ["Addison", "Cushing", "Graves", "Hashimoto"],
        explanation: "Named endocrine disorders.",
      },
      {
        category: "___ Crisis",
        difficulty: 4,
        terms: ["Thyroid", "Addisonian", "Hypercalcemic", "Pheochromocytoma"],
        explanation: "Endocrine emergencies called crises.",
      },
    ],
  },
  // 8 — Pulmonology
  {
    id: 8,
    theme: "Pulmonology",
    groups: [
      {
        category: "Obstructive Lung Diseases",
        difficulty: 1,
        terms: ["Asthma", "COPD", "Bronchiectasis", "CF"],
        explanation: "Diseases with obstructive spirometry patterns.",
      },
      {
        category: "Types of Pneumothorax",
        difficulty: 2,
        terms: ["Primary Spontaneous", "Secondary", "Tension", "Iatrogenic"],
        explanation: "Clinical pneumothorax categories.",
      },
      {
        category: "___ Embolism",
        difficulty: 3,
        terms: ["Pulmonary", "Amniotic", "Fat", "Air"],
        explanation: "Embolism types that affect (or present via) the lungs/circulation.",
      },
      {
        category: "Breath Sound Descriptors",
        difficulty: 4,
        terms: ["Wheeze", "Rhonchi", "Crackles", "Stridor"],
        explanation: "Adventitious lung sounds.",
      },
    ],
  },
  // 9 — Gastroenterology
  {
    id: 9,
    theme: "Gastroenterology",
    groups: [
      {
        category: "Causes of Pancreatitis",
        difficulty: 1,
        terms: ["Gallstones", "Alcohol", "Triglycerides", "ERCP"],
        explanation: "Common pancreatitis triggers.",
      },
      {
        category: "Upper GI Bleed Sources",
        difficulty: 2,
        terms: ["Peptic Ulcer", "Varices", "Mallory-Weiss", "Dieulafoy"],
        explanation: "Classic UGI bleeding lesions.",
      },
      {
        category: "Inflammatory Bowel Disease Features",
        difficulty: 3,
        terms: ["Skip Lesions", "Transmural", "Crypt Abscesses", "Cobblestoning"],
        explanation: "Path findings associated with Crohn/UC teaching contrasts.",
      },
      {
        category: "___ Sign (Abdomen)",
        difficulty: 4,
        terms: ["Murphy", "McBurney", "Cullen", "Grey Turner"],
        explanation: "Abdominal exam eponyms.",
      },
    ],
  },
  // 10 — Nephrology / electrolytes
  {
    id: 10,
    theme: "Nephrology",
    groups: [
      {
        category: "Causes of High Anion Gap Acidosis",
        difficulty: 1,
        terms: ["Lactate", "Ketoacids", "Toxins", "Uremia"],
        explanation: "Major gap acidosis contributors.",
      },
      {
        category: "Diuretic Classes",
        difficulty: 2,
        terms: ["Loop", "Thiazide", "Carbonic Anhydrase Inhibitor", "Osmotic"],
        explanation: "Diuretics by mechanism/site.",
      },
      {
        category: "Nephritic Syndrome Features",
        difficulty: 3,
        terms: ["Hematuria", "Oliguria", "Hypertension", "RBC Casts"],
        explanation: "Hallmarks of acute nephritic presentation.",
      },
      {
        category: "Things Measured in mEq/L",
        difficulty: 4,
        terms: ["Sodium", "Potassium", "Chloride", "Bicarbonate"],
        explanation: "Electrolytes commonly reported in mEq/L.",
      },
    ],
  },
  // 11 — Hematology
  {
    id: 11,
    theme: "Hematology",
    groups: [
      {
        category: "Coagulation Pathways",
        difficulty: 1,
        terms: ["Intrinsic", "Extrinsic", "Common", "Fibrinolysis"],
        explanation: "Classic cascade teaching arms.",
      },
      {
        category: "Microcytic Anemias",
        difficulty: 2,
        terms: ["Iron Deficiency", "Thalassemia", "Anemia of Chronic Disease", "Sideroblastic"],
        explanation: "Common microcytic anemia causes.",
      },
      {
        category: "Leukemia Categories",
        difficulty: 3,
        terms: ["ALL", "AML", "CLL", "CML"],
        explanation: "The four classic leukemias.",
      },
      {
        category: "___ Cell",
        difficulty: 4,
        terms: ["Reed-Sternberg", "Plasma", "Sickle", "Target"],
        explanation: "Named cell morphologies on smear/path.",
      },
    ],
  },
  // 12 — Infectious diseases (pathogens)
  {
    id: 12,
    theme: "Infectious Diseases",
    groups: [
      {
        category: "Gram-Positive Cocci",
        difficulty: 1,
        terms: ["Staphylococcus", "Streptococcus", "Enterococcus", "Peptostreptococcus"],
        explanation: "Gram-positive coccal genera.",
      },
      {
        category: "Tick-Borne Infections",
        difficulty: 2,
        terms: ["Lyme", "Anaplasmosis", "Babesiosis", "RMSF"],
        explanation: "North American tick-transmitted diseases.",
      },
      {
        category: "Acid-Fast Organisms",
        difficulty: 3,
        terms: ["M. tuberculosis", "M. leprae", "Nocardia", "Cryptosporidium"],
        explanation: "Organisms that stain acid-fast (modified for some).",
      },
      {
        category: "___ Fever",
        difficulty: 4,
        terms: ["Rheumatic", "Yellow", "Q", "Scarlet"],
        explanation: "Named febrile illnesses.",
      },
    ],
  },
  // 13 — Antibiotics / ID pharmacology
  {
    id: 13,
    theme: "Antimicrobials",
    groups: [
      {
        category: "Cell Wall Active Antibiotics",
        difficulty: 1,
        terms: ["Penicillin G", "Vancomycin", "Ceftriaxone", "Aztreonam"],
        explanation: "Agents that disrupt bacterial cell wall synthesis.",
      },
      {
        category: "Protein Synthesis Inhibitors",
        difficulty: 2,
        terms: ["Azithromycin", "Doxycycline", "Gentamicin", "Linezolid"],
        explanation: "Ribosome-targeting antibiotics from different classes.",
      },
      {
        category: "Antifungal Drug Classes",
        difficulty: 3,
        terms: ["Amphotericin B", "Fluconazole", "Caspofungin", "Terbinafine"],
        explanation: "Polyene, azole, echinocandin, and allylamine examples.",
      },
      {
        category: "Antivirals by Target",
        difficulty: 4,
        terms: ["Acyclovir", "Oseltamivir", "Remdesivir", "Zidovudine"],
        explanation: "Agents used against herpesviruses, influenza, RNA viruses, and HIV.",
      },
    ],
  },
];
