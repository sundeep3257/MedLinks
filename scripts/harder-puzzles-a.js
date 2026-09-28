/**
 * Harder MedLinks puzzle set (50 puzzles).
 * Avoids easy orthographic giveaways (shared -olol/-pril/-statin/-mycin suffixes, Type I–IV, etc.).
 * Run: node scripts/build-harder-puzzles.js
 */
module.exports = [
  {
    id: 1,
    groups: [
      {
        category: "Classic Causes of Pancreatitis",
        difficulty: 1,
        terms: ["Gallstones", "Alcohol", "Triglycerides", "ERCP"],
        explanation: "Common precipitants of acute pancreatitis.",
      },
      {
        category: "Bones Forming the Acetabulum",
        difficulty: 2,
        terms: ["Ilium", "Ischium", "Pubis", "Triradiate Cartilage"],
        explanation: "The three pelvic bones meet at the acetabulum; the triradiate cartilage joins them in childhood.",
      },
      {
        category: "Vitamin Deficiencies With Classic Names",
        difficulty: 3,
        terms: ["Beriberi", "Pellagra", "Scurvy", "Rickets"],
        explanation: "B1, B3, C, and D deficiency syndromes.",
      },
      {
        category: "Things That Can Be Staged",
        difficulty: 4,
        terms: ["Cancer", "Sleep", "Labor", "Kidney Disease"],
        explanation: "Clinical staging systems exist for malignancy, sleep cycles, labor progress, and CKD.",
      },
    ],
  },
  {
    id: 2,
    groups: [
      {
        category: "Shock States",
        difficulty: 1,
        terms: ["Hypovolemic", "Cardiogenic", "Distributive", "Obstructive"],
        explanation: "The four physiologic categories of shock.",
      },
      {
        category: "Live Attenuated Vaccines",
        difficulty: 2,
        terms: ["MMR", "Varicella", "Yellow Fever", "Rotavirus"],
        explanation: "Vaccines typically avoided in pregnancy and severe immunocompromise.",
      },
      {
        category: "Heart Valves",
        difficulty: 3,
        terms: ["Mitral", "Tricuspid", "Aortic", "Pulmonary"],
        explanation: "The four cardiac valves.",
      },
      {
        category: "___ Fever",
        difficulty: 4,
        terms: ["Rheumatic", "Yellow", "Q", "Scarlet"],
        explanation: "Each completes a well-known febrile illness name.",
      },
    ],
  },
  {
    id: 3,
    groups: [
      {
        category: "Drugs That Prolong the QT Interval",
        difficulty: 1,
        terms: ["Ondansetron", "Haloperidol", "Azithromycin", "Methadone"],
        explanation: "Agents from unrelated classes that share QT-prolongation risk.",
      },
      {
        category: "Fat-Soluble Vitamins",
        difficulty: 2,
        terms: ["Retinol", "Cholecalciferol", "Tocopherol", "Phylloquinone"],
        explanation: "Vitamins A, D, E, and K by chemical name rather than letter.",
      },
      {
        category: "Parasympathetic Cranial Nerves",
        difficulty: 3,
        terms: ["Oculomotor", "Facial", "Glossopharyngeal", "Vagus"],
        explanation: "CN III, VII, IX, and X carry parasympathetic fibers.",
      },
      {
        category: "Pressures Reported in mm Hg",
        difficulty: 4,
        terms: ["Blood Pressure", "ICP", "CVP", "IOP"],
        explanation: "Arterial, intracranial, central venous, and intraocular pressures.",
      },
    ],
  },
  {
    id: 4,
    groups: [
      {
        category: "AIDS-Defining Illnesses",
        difficulty: 1,
        terms: ["Pneumocystis", "Kaposi Sarcoma", "Toxoplasmosis", "Cryptococcal Meningitis"],
        explanation: "Classic opportunistic conditions defining advanced HIV.",
      },
      {
        category: "Granulocytes",
        difficulty: 2,
        terms: ["Neutrophil", "Eosinophil", "Basophil", "Mast Cell"],
        explanation: "Granule-containing leukocytes (mast cells are tissue-based kin).",
      },
      {
        category: "Meningeal Signs",
        difficulty: 3,
        terms: ["Nuchal Rigidity", "Kernig", "Brudzinski", "Jolt Accentuation"],
        explanation: "Bedside findings used when evaluating meningitis.",
      },
      {
        category: "Hospital Emergency Codes",
        difficulty: 4,
        terms: ["Blue", "Red", "Stroke", "STEMI"],
        explanation: "Common hospital activation names for emergencies.",
      },
    ],
  },
  {
    id: 5,
    groups: [
      {
        category: "Causes of High Anion Gap Acidosis",
        difficulty: 1,
        terms: ["Lactate", "Ketoacidosis", "Methanol", "Uremia"],
        explanation: "Major contributors to elevated anion gap metabolic acidosis.",
      },
      {
        category: "Epidermal Strata",
        difficulty: 2,
        terms: ["Corneum", "Lucidum", "Granulosum", "Spinosum"],
        explanation: "Named layers of the epidermis (basal omitted).",
      },
      {
        category: "Jones Criteria Major Manifestations",
        difficulty: 3,
        terms: ["Carditis", "Polyarthritis", "Chorea", "Erythema Marginatum"],
        explanation: "Major Jones criteria for acute rheumatic fever (subcutaneous nodules omitted).",
      },
      {
        category: "Eponymous Fractures",
        difficulty: 4,
        terms: ["Colles", "Smith", "Jones", "Bennett"],
        explanation: "Named fracture patterns of the wrist, foot, and hand.",
      },
    ],
  },
  {
    id: 6,
    groups: [
      {
        category: "Reversible Causes of Dementia (Selected)",
        difficulty: 1,
        terms: ["B12 Deficiency", "Hypothyroidism", "Normal Pressure Hydrocephalus", "Depression"],
        explanation: "Treatable or partially reversible dementia mimics.",
      },
      {
        category: "Monoamine Neurotransmitters",
        difficulty: 2,
        terms: ["Dopamine", "Norepinephrine", "Epinephrine", "Serotonin"],
        explanation: "Catecholamines plus serotonin.",
      },
      {
        category: "Endocrine Glands",
        difficulty: 3,
        terms: ["Thyroid", "Adrenal", "Pituitary", "Parathyroid"],
        explanation: "Classic hormone-producing glands.",
      },
      {
        category: "___ Syndrome",
        difficulty: 4,
        terms: ["Tourette", "Guillain-Barre", "Nephrotic", "Compartment"],
        explanation: "Well-known named syndromes across specialties.",
      },
    ],
  },
  {
    id: 7,
    groups: [
      {
        category: "Drugs Requiring Peak and Trough Monitoring",
        difficulty: 1,
        terms: ["Vancomycin", "Gentamicin", "Tobramycin", "Amikacin"],
        explanation: "Antibiotics commonly dosed with serum level monitoring.",
      },
      {
        category: "Upper Extremity Arteries",
        difficulty: 2,
        terms: ["Subclavian", "Axillary", "Brachial", "Radial"],
        explanation: "Sequential major arteries of the arm.",
      },
      {
        category: "ABO Blood Groups",
        difficulty: 3,
        terms: ["A", "B", "AB", "O"],
        explanation: "The four ABO types.",
      },
      {
        category: "Reported as Positive or Negative",
        difficulty: 4,
        terms: ["Rh Factor", "Gram Stain", "hCG Test", "ANA"],
        explanation: "Common clinical results framed as positive/negative.",
      },
    ],
  },
  {
    id: 8,
    groups: [
      {
        category: "Serotonin Syndrome Culprits",
        difficulty: 1,
        terms: ["Linezolid", "Tramadol", "MAO Inhibitors", "Triptans"],
        explanation: "Agents that raise serotonergic tone and can precipitate serotonin syndrome.",
      },
      {
        category: "Markers of Cholestasis",
        difficulty: 2,
        terms: ["ALP", "GGT", "Bilirubin", "5'-Nucleotidase"],
        explanation: "Labs that rise with biliary obstruction or cholestasis.",
      },
      {
        category: "Imaging Without Ionizing Radiation",
        difficulty: 3,
        terms: ["MRI", "Ultrasound", "Echocardiography", "Doppler"],
        explanation: "Modalities that do not use x-rays or nuclear radiation.",
      },
      {
        category: "Hypersensitivity Classes",
        difficulty: 4,
        terms: ["Immediate", "Cytotoxic", "Immune Complex", "Delayed"],
        explanation: "Gell and Coombs types described by mechanism, not Roman numerals.",
      },
    ],
  },
  {
    id: 9,
    groups: [
      {
        category: "Opioids",
        difficulty: 1,
        terms: ["Morphine", "Fentanyl", "Methadone", "Buprenorphine"],
        explanation: "Mu-opioid agonists/partial agonists with mixed naming patterns.",
      },
      {
        category: "Cardiac Chambers",
        difficulty: 2,
        terms: ["Left Atrium", "Right Atrium", "Left Ventricle", "Right Ventricle"],
        explanation: "The four chambers of the heart.",
      },
      {
        category: "Hemophilia-Related Factors",
        difficulty: 3,
        terms: ["VIII", "IX", "XI", "von Willebrand"],
        explanation: "Factors tied to hemophilia A/B/C and vWD pathophysiology.",
      },
      {
        category: "___ Cell",
        difficulty: 4,
        terms: ["Reed-Sternberg", "Plasma", "Goblet", "Leydig"],
        explanation: "Distinctive named cell types in pathology and histology.",
      },
    ],
  },
  {
    id: 10,
    groups: [
      {
        category: "Causes of Metabolic Alkalosis",
        difficulty: 1,
        terms: ["Vomiting", "Diuretics", "Hyperaldosteronism", "Milk-Alkali"],
        explanation: "Classic generators of metabolic alkalosis.",
      },
      {
        category: "BMP Electrolytes",
        difficulty: 2,
        terms: ["Sodium", "Potassium", "Chloride", "Bicarbonate"],
        explanation: "The four electrolytes on a standard basic metabolic panel.",
      },
      {
        category: "Mitotic Phases",
        difficulty: 3,
        terms: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
        explanation: "Stages of mitosis (cytokinesis omitted).",
      },
      {
        category: "Things Patients Are Asked to Say",
        difficulty: 4,
        terms: ["Ahh", "Eee", "Ninety-Nine", "Blue Balloons"],
        explanation: "Classic bedside exam prompts.",
      },
    ],
  },
  {
    id: 11,
    groups: [
      {
        category: "Rate-Control Agents for Atrial Fibrillation",
        difficulty: 1,
        terms: ["Metoprolol", "Diltiazem", "Verapamil", "Digoxin"],
        explanation: "Common AV-nodal blockers used for AF rate control.",
      },
      {
        category: "Muscles of Mastication",
        difficulty: 2,
        terms: ["Masseter", "Temporalis", "Medial Pterygoid", "Lateral Pterygoid"],
        explanation: "The four muscles that move the mandible.",
      },
      {
        category: "DNA Bases",
        difficulty: 3,
        terms: ["Adenine", "Thymine", "Guanine", "Cytosine"],
        explanation: "The four nitrogenous bases of DNA.",
      },
      {
        category: "Can Be Acute or Chronic",
        difficulty: 4,
        terms: ["Leukemia", "Kidney Injury", "Cholecystitis", "Otitis Media"],
        explanation: "Conditions commonly split by time course.",
      },
    ],
  },
  {
    id: 12,
    groups: [
      {
        category: "Drugs That Cause Gynecomastia",
        difficulty: 1,
        terms: ["Spironolactone", "Ketoconazole", "Cimetidine", "Digoxin"],
        explanation: "Medications classically linked to male breast enlargement.",
      },
      {
        category: "Rotator Cuff Muscles",
        difficulty: 2,
        terms: ["Supraspinatus", "Infraspinatus", "Teres Minor", "Subscapularis"],
        explanation: "The SITS muscles of the shoulder.",
      },
      {
        category: "Antibody Isotypes",
        difficulty: 3,
        terms: ["IgG", "IgA", "IgM", "IgE"],
        explanation: "Major immunoglobulin classes (IgD omitted).",
      },
      {
        category: "Intensive Care Units",
        difficulty: 4,
        terms: ["ICU", "NICU", "PICU", "MICU"],
        explanation: "Common critical-care unit acronyms.",
      },
    ],
  },
  {
    id: 13,
    groups: [
      {
        category: "Anticoagulants",
        difficulty: 1,
        terms: ["Warfarin", "Heparin", "Argatroban", "Fondaparinux"],
        explanation: "Agents that impair clotting by different mechanisms.",
      },
      {
        category: "Carotid Sheath Contents",
        difficulty: 2,
        terms: ["Common Carotid", "Internal Jugular", "Vagus", "Deep Cervical Lymphatics"],
        explanation: "Major structures traveling in the carotid sheath.",
      },
      {
        category: "Raised Skin Lesions",
        difficulty: 3,
        terms: ["Papule", "Plaque", "Nodule", "Wheal"],
        explanation: "Elevated primary lesion morphologies.",
      },
      {
        category: "Heavy Metal Poisons",
        difficulty: 4,
        terms: ["Lead", "Mercury", "Arsenic", "Thallium"],
        explanation: "Classic toxic metals.",
      },
    ],
  },
];
