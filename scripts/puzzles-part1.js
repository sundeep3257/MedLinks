/**
 * Generator + source of truth for Med Connections puzzles.
 * Run: node scripts/build-puzzles.js
 */
const fs = require("fs");
const path = require("path");

/**
 * Each puzzle: { id, groups: [{ category, difficulty: 1-4, terms: [4], explanation? }] }
 * Difficulties: 1=Easy, 2=Medium, 3=Hard, 4=Tricky
 */
const puzzles = [
  {
    id: 1,
    groups: [
      {
        category: "Beta Blockers",
        difficulty: 1,
        terms: ["Metoprolol", "Atenolol", "Propranolol", "Carvedilol"],
        explanation: "Common cardioselective and nonselective beta-adrenergic antagonists.",
      },
      {
        category: "Bones of the Wrist (Carpals)",
        difficulty: 2,
        terms: ["Scaphoid", "Lunate", "Capitate", "Hamate"],
        explanation: "Four of the eight carpal bones of the wrist.",
      },
      {
        category: "Named After Physicians",
        difficulty: 3,
        terms: ["Parkinson", "Alzheimer", "Crohn", "Hodgkin"],
        explanation: "Diseases eponymously named for the clinicians who described them.",
      },
      {
        category: "Things That Can Be “Staged”",
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
        category: "Types of Shock",
        difficulty: 1,
        terms: ["Hypovolemic", "Cardiogenic", "Distributive", "Obstructive"],
        explanation: "The four classic physiologic categories of shock.",
      },
      {
        category: "Gram-Positive Cocci",
        difficulty: 2,
        terms: ["Staphylococcus", "Streptococcus", "Enterococcus", "Pneumococcus"],
        explanation: "Common medically important gram-positive cocci.",
      },
      {
        category: "Heart Valves",
        difficulty: 3,
        terms: ["Mitral", "Tricuspid", "Aortic", "Pulmonic"],
        explanation: "The four valves of the heart.",
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
        category: "ACE Inhibitors",
        difficulty: 1,
        terms: ["Lisinopril", "Enalapril", "Ramipril", "Captopril"],
        explanation: "Angiotensin-converting enzyme inhibitors used for hypertension and heart failure.",
      },
      {
        category: "Fat-Soluble Vitamins",
        difficulty: 2,
        terms: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
        explanation: "Vitamins A, D, E, and K are absorbed with dietary fat.",
      },
      {
        category: "Cranial Nerves Involved in Eye Movement",
        difficulty: 3,
        terms: ["Oculomotor", "Trochlear", "Abducens", "Optic"],
        explanation: "CN III, IV, and VI move the eye; CN II provides vision that guides gaze (intentionally includes a near-miss).",
      },
      {
        category: "Can Be Measured in mm Hg",
        difficulty: 4,
        terms: ["Blood Pressure", "ICP", "CVP", "IOP"],
        explanation: "Arterial pressure, intracranial pressure, central venous pressure, and intraocular pressure.",
      },
    ],
  },
  {
    id: 4,
    groups: [
      {
        category: "Statins",
        difficulty: 1,
        terms: ["Atorvastatin", "Simvastatin", "Rosuvastatin", "Pravastatin"],
        explanation: "HMG-CoA reductase inhibitors used to lower LDL cholesterol.",
      },
      {
        category: "White Blood Cell Types",
        difficulty: 2,
        terms: ["Neutrophil", "Eosinophil", "Basophil", "Lymphocyte"],
        explanation: "Major circulating leukocyte lineages.",
      },
      {
        category: "Signs of Meningeal Irritation",
        difficulty: 3,
        terms: ["Nuchal Rigidity", "Kernig", "Brudzinski", "Photophobia"],
        explanation: "Classic clinical findings associated with meningitis.",
      },
      {
        category: "Medical “Codes” (Not Dress Codes)",
        difficulty: 4,
        terms: ["Blue", "Red", "Stroke", "STEMI"],
        explanation: "Hospital emergency activations: Code Blue, Code Red, Code Stroke, Code STEMI.",
      },
    ],
  },
  {
    id: 5,
    groups: [
      {
        category: "Loop Diuretics",
        difficulty: 1,
        terms: ["Furosemide", "Bumetanide", "Torsemide", "Ethacrynic Acid"],
        explanation: "Diuretics acting on the thick ascending limb of the loop of Henle.",
      },
      {
        category: "Layers of the Epidermis (Outer to Deep-ish)",
        difficulty: 2,
        terms: ["Corneum", "Lucidum", "Granulosum", "Spinosum"],
        explanation: "Stratum layers of the epidermis (basal layer omitted).",
      },
      {
        category: "Causes of Anion Gap Metabolic Acidosis",
        difficulty: 3,
        terms: ["Lactate", "Ketoacids", "Toxins", "Uremia"],
        explanation: "Key contributors recalled in gap acidosis mnemonics (e.g., MUDPILES/GOLDMARK).",
      },
      {
        category: "Named Fractures",
        difficulty: 4,
        terms: ["Colles", "Smith", "Jones", "Bennett"],
        explanation: "Eponymous fracture patterns of the distal radius, 5th metatarsal, and 1st metacarpal.",
      },
    ],
  },
  {
    id: 6,
    groups: [
      {
        category: "Benzodiazepines",
        difficulty: 1,
        terms: ["Lorazepam", "Diazepam", "Alprazolam", "Midazolam"],
        explanation: "GABA-A positive allosteric modulators used for anxiety, seizures, and sedation.",
      },
      {
        category: "Neurotransmitters",
        difficulty: 2,
        terms: ["Dopamine", "Serotonin", "Acetylcholine", "GABA"],
        explanation: "Major CNS neurotransmitters.",
      },
      {
        category: "Hormone-Producing Endocrine Glands",
        difficulty: 3,
        terms: ["Thyroid", "Adrenal", "Pituitary", "Parathyroid"],
        explanation: "Classic endocrine glands (pancreas omitted to avoid ambiguity with exocrine role).",
      },
      {
        category: "___ Syndrome (Psych / Neuro)",
        difficulty: 4,
        terms: ["Tourette", "Asperger", "Guillain-Barré", "Restless Legs"],
        explanation: "Well-known named syndromes spanning neurology and psychiatry history.",
      },
    ],
  },
  {
    id: 7,
    groups: [
      {
        category: "Penicillins / Beta-Lactams",
        difficulty: 1,
        terms: ["Amoxicillin", "Ampicillin", "Piperacillin", "Nafcillin"],
        explanation: "Beta-lactam antibiotics in the penicillin family.",
      },
      {
        category: "Arteries of the Arm",
        difficulty: 2,
        terms: ["Brachial", "Radial", "Ulnar", "Axillary"],
        explanation: "Major arterial segments of the upper extremity.",
      },
      {
        category: "Blood Types (ABO)",
        difficulty: 3,
        terms: ["A", "B", "AB", "O"],
        explanation: "The four ABO blood groups.",
      },
      {
        category: "Can Be “Positive” or “Negative”",
        difficulty: 4,
        terms: ["Rh Factor", "Gram Stain", "TB Skin Test", "Pregnancy Test"],
        explanation: "Common clinical tests reported as positive/negative.",
      },
    ],
  },
  {
    id: 8,
    groups: [
      {
        category: "SSRI Antidepressants",
        difficulty: 1,
        terms: ["Fluoxetine", "Sertraline", "Escitalopram", "Paroxetine"],
        explanation: "Selective serotonin reuptake inhibitors.",
      },
      {
        category: "Liver Function / Injury Markers",
        difficulty: 2,
        terms: ["AST", "ALT", "ALP", "Bilirubin"],
        explanation: "Labs commonly used to assess hepatocellular and cholestatic injury.",
      },
      {
        category: "Types of Hypersensitivity (Gell & Coombs)",
        difficulty: 3,
        terms: ["Type I", "Type II", "Type III", "Type IV"],
        explanation: "The classic four hypersensitivity reaction classifications.",
      },
      {
        category: "Medical Imaging Modalities",
        difficulty: 4,
        terms: ["MRI", "CT", "PET", "Ultrasound"],
        explanation: "Common cross-sectional and functional imaging techniques.",
      },
    ],
  },
  {
    id: 9,
    groups: [
      {
        category: "Opioid Analgesics",
        difficulty: 1,
        terms: ["Morphine", "Fentanyl", "Oxycodone", "Hydromorphone"],
        explanation: "Mu-opioid receptor agonists used for pain.",
      },
      {
        category: "Chambers of the Heart",
        difficulty: 2,
        terms: ["Left Atrium", "Right Atrium", "Left Ventricle", "Right Ventricle"],
        explanation: "The four cardiac chambers.",
      },
      {
        category: "Clotting Factors by Roman Numeral Fame",
        difficulty: 3,
        terms: ["Factor VIII", "Factor IX", "Factor X", "Factor II"],
        explanation: "Key coagulation factors (VIII/IX hemophilia; X and II in common pathway).",
      },
      {
        category: "___ Cell (Pathology)",
        difficulty: 4,
        terms: ["Reed-Sternberg", "Plasma", "Goblet", "Leydig"],
        explanation: "Distinctive cell types named or described in pathology and histology.",
      },
    ],
  },
  {
    id: 10,
    groups: [
      {
        category: "Macrolide Antibiotics",
        difficulty: 1,
        terms: ["Azithromycin", "Erythromycin", "Clarithromycin", "Fidaxomicin"],
        explanation: "Macrolides inhibiting bacterial protein synthesis at the 50S subunit.",
      },
      {
        category: "Electrolytes on a Basic Metabolic Panel",
        difficulty: 2,
        terms: ["Sodium", "Potassium", "Chloride", "Bicarbonate"],
        explanation: "The four electrolytes reported on a standard BMP/Chem-7.",
      },
      {
        category: "Phases of Mitosis",
        difficulty: 3,
        terms: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
        explanation: "The classic mitotic stages (cytokinesis not included).",
      },
      {
        category: "Sounds a Doctor Might Ask You to Say",
        difficulty: 4,
        terms: ["Ahh", "Eee", "Ninety-Nine", "Blue Balloons"],
        explanation: "Classic bedside prompts for oropharynx exam, cranial nerves, and fremitus.",
      },
    ],
  },
  {
    id: 11,
    groups: [
      {
        category: "Calcium Channel Blockers",
        difficulty: 1,
        terms: ["Amlodipine", "Diltiazem", "Verapamil", "Nifedipine"],
        explanation: "Dihydropyridine and non-dihydropyridine calcium channel blockers.",
      },
      {
        category: "Muscles of Mastication",
        difficulty: 2,
        terms: ["Masseter", "Temporalis", "Medial Pterygoid", "Lateral Pterygoid"],
        explanation: "The four muscles that move the mandible for chewing.",
      },
      {
        category: "DNA Nucleotides (Bases)",
        difficulty: 3,
        terms: ["Adenine", "Thymine", "Guanine", "Cytosine"],
        explanation: "The four nitrogenous bases of DNA.",
      },
      {
        category: "Can Be “Acute” or “Chronic”",
        difficulty: 4,
        terms: ["Leukemia", "Kidney Injury", "Cholecystitis", "Otitis Media"],
        explanation: "Conditions commonly classified by acute vs chronic time course.",
      },
    ],
  },
  {
    id: 12,
    groups: [
      {
        category: "Proton Pump Inhibitors",
        difficulty: 1,
        terms: ["Omeprazole", "Pantoprazole", "Esomeprazole", "Lansoprazole"],
        explanation: "Drugs that irreversibly inhibit the gastric H+/K+ ATPase.",
      },
      {
        category: "Rotator Cuff Muscles",
        difficulty: 2,
        terms: ["Supraspinatus", "Infraspinatus", "Teres Minor", "Subscapularis"],
        explanation: "The SITS muscles stabilizing the glenohumeral joint.",
      },
      {
        category: "Immunoglobulins",
        difficulty: 3,
        terms: ["IgG", "IgA", "IgM", "IgE"],
        explanation: "Major antibody isotypes (IgD omitted).",
      },
      {
        category: "Hospital Units / Floors",
        difficulty: 4,
        terms: ["ICU", "PACU", "NICU", "MICU"],
        explanation: "Common inpatient care unit acronyms.",
      },
    ],
  },
  {
    id: 13,
    groups: [
      {
        category: "Anticoagulants",
        difficulty: 1,
        terms: ["Warfarin", "Heparin", "Apixaban", "Enoxaparin"],
        explanation: "Agents used to prevent or treat thrombosis.",
      },
      {
        category: "Cranial Nerves by Number (I–IV)",
        difficulty: 2,
        terms: ["Olfactory", "Optic", "Oculomotor", "Trochlear"],
        explanation: "Cranial nerves I through IV.",
      },
      {
        category: "Papule-to-Tumor Skin Lesion Sizes",
        difficulty: 3,
        terms: ["Macule", "Papule", "Nodule", "Tumor"],
        explanation: "Primary skin lesion terms often taught by size/elevation progression.",
      },
      {
        category: "Things With a “Lead” in Toxicology",
        difficulty: 4,
        terms: ["Pencil", "Paint", "Pipes", "Batteries"],
        explanation: "Classic environmental sources of lead exposure (playful wording).",
      },
    ],
  },
  {
    id: 14,
    groups: [
      {
        category: "Antifungal Medications",
        difficulty: 1,
        terms: ["Fluconazole", "Amphotericin B", "Terbinafine", "Itraconazole"],
        explanation: "Systemic and common antifungal agents.",
      },
      {
        category: "Lung Lobes",
        difficulty: 2,
        terms: ["Right Upper", "Right Middle", "Right Lower", "Left Upper"],
        explanation: "Named pulmonary lobes (left lower omitted to fit four).",
      },
      {
        category: "Apgar Score Components",
        difficulty: 3,
        terms: ["Appearance", "Pulse", "Grimace", "Activity"],
        explanation: "Four of five Apgar components (Respiration omitted).",
      },
      {
        category: "___ Sign (Clinical Eponyms)",
        difficulty: 4,
        terms: ["Murphy", "McBurney", "Kehr", "Cullen"],
        explanation: "Bedside signs: cholecystitis, appendicitis, splenic injury, pancreatitis.",
      },
    ],
  },
  {
    id: 15,
    groups: [
      {
        category: "Insulin Types / Analog Names",
        difficulty: 1,
        terms: ["Lispro", "Aspart", "Glargine", "Detemir"],
        explanation: "Rapid-acting and long-acting insulin analogs.",
      },
      {
        category: "Taste Modalities",
        difficulty: 2,
        terms: ["Sweet", "Sour", "Salty", "Bitter"],
        explanation: "Classic taste qualities (umami often taught as a fifth).",
      },
      {
        category: "Cardiac Cycle Heart Sounds Context",
        difficulty: 3,
        terms: ["S1", "S2", "S3", "S4"],
        explanation: "Auscultated heart sounds.",
      },
      {
        category: "Can Be Transplanted",
        difficulty: 4,
        terms: ["Kidney", "Liver", "Heart", "Cornea"],
        explanation: "Organs/tissues commonly transplanted.",
      },
    ],
  },
  {
    id: 16,
    groups: [
      {
        category: "Fluoroquinolone Antibiotics",
        difficulty: 1,
        terms: ["Ciprofloxacin", "Levofloxacin", "Moxifloxacin", "Ofloxacin"],
        explanation: "DNA gyrase/topoisomerase-inhibiting antibiotics.",
      },
      {
        category: "B Vitamins by Number",
        difficulty: 2,
        terms: ["Thiamine", "Riboflavin", "Niacin", "Pyridoxine"],
        explanation: "Vitamins B1, B2, B3, and B6.",
      },
      {
        category: "Pituitary Hormones (Anterior)",
        difficulty: 3,
        terms: ["ACTH", "TSH", "GH", "Prolactin"],
        explanation: "Anterior pituitary hormones (gonadotropins omitted).",
      },
      {
        category: "Colors in Medicine (Not Moods)",
        difficulty: 4,
        terms: ["Cyanosis", "Jaundice", "Pallor", "Erythema"],
        explanation: "Clinical color findings on exam.",
      },
    ],
  },
  {
    id: 17,
    groups: [
      {
        category: "Antihistamines (H1)",
        difficulty: 1,
        terms: ["Diphenhydramine", "Loratadine", "Cetirizine", "Fexofenadine"],
        explanation: "First- and second-generation H1 receptor antagonists.",
      },
      {
        category: "Bones of the Lower Leg / Foot Region",
        difficulty: 2,
        terms: ["Tibia", "Fibula", "Talus", "Calcaneus"],
        explanation: "Major bones of the leg and hindfoot.",
      },
      {
        category: "Malaria Parasites",
        difficulty: 3,
        terms: ["P. falciparum", "P. vivax", "P. ovale", "P. malariae"],
        explanation: "The four classic Plasmodium species infecting humans.",
      },
      {
        category: "Medical Abbreviations for “As Needed” Care",
        difficulty: 4,
        terms: ["PRN", "STAT", "BID", "QHS"],
        explanation: "Common prescription frequency/timing abbreviations (STAT is immediate).",
      },
    ],
  },
  {
    id: 18,
    groups: [
      {
        category: "Corticosteroids",
        difficulty: 1,
        terms: ["Prednisone", "Dexamethasone", "Methylprednisolone", "Hydrocortisone"],
        explanation: "Glucocorticoids used for inflammation and adrenal replacement.",
      },
      {
        category: "Chambers / Spaces of the Eye",
        difficulty: 2,
        terms: ["Anterior Chamber", "Posterior Chamber", "Vitreous", "Aqueous"],
        explanation: "Fluid-filled regions and humor of the eye.",
      },
      {
        category: "Mycobacteria of Clinical Note",
        difficulty: 3,
        terms: ["M. tuberculosis", "M. leprae", "M. avium", "M. kansasii"],
        explanation: "Important pathogenic and atypical mycobacteria.",
      },
      {
        category: "___ Disease (Eponyms)",
        difficulty: 4,
        terms: ["Addison", "Cushing", "Graves", "Hashimoto"],
        explanation: "Classic endocrine diseases named for physicians.",
      },
    ],
  },
  {
    id: 19,
    groups: [
      {
        category: "Antiviral Medications",
        difficulty: 1,
        terms: ["Acyclovir", "Oseltamivir", "Remdesivir", "Valacyclovir"],
        explanation: "Agents used against herpesviruses, influenza, and other viruses.",
      },
      {
        category: "Spinal Curvature Terms",
        difficulty: 2,
        terms: ["Kyphosis", "Lordosis", "Scoliosis", "List"],
        explanation: "Abnormal or descriptive spinal alignment terms.",
      },
      {
        category: "Types of Seizures (Broad Classes)",
        difficulty: 3,
        terms: ["Absence", "Tonic-Clonic", "Myoclonic", "Atonic"],
        explanation: "Recognized seizure semiology categories.",
      },
      {
        category: "Things Measured With a Sphygmomanometer… or Not",
        difficulty: 4,
        terms: ["Systolic", "Diastolic", "MAP", "Pulse Pressure"],
        explanation: "Blood-pressure-derived values (MAP and pulse pressure are calculated).",
      },
    ],
  },
  {
    id: 20,
    groups: [
      {
        category: "NSAID Pain Relievers",
        difficulty: 1,
        terms: ["Ibuprofen", "Naproxen", "Indomethacin", "Diclofenac"],
        explanation: "Nonsteroidal anti-inflammatory drugs.",
      },
      {
        category: "Carpal Bones (Proximal Row)",
        difficulty: 2,
        terms: ["Scaphoid", "Lunate", "Triquetrum", "Pisiform"],
        explanation: "The four bones of the proximal carpal row.",
      },
      {
        category: "Hepatitis Viruses",
        difficulty: 3,
        terms: ["Hepatitis A", "Hepatitis B", "Hepatitis C", "Hepatitis E"],
        explanation: "Common hepatotropic viruses (D omitted as satellite of B).",
      },
      {
        category: "Can Be “Silent” Clinically",
        difficulty: 4,
        terms: ["MI", "Ischemia", "UTI in Elderly", "Gallstones"],
        explanation: "Conditions that may present with minimal or atypical symptoms.",
      },
    ],
  },
];

// Continue puzzles 21-50 in second half
module.exports = { puzzles, fs, path };
