/**
 * MedLinks — puzzle seed data (50 puzzles)
 * Runtime ground truth is /gamekey.csv. Regenerate CSV via:
 *   node scripts/build-harder-puzzles.js
 */
(function (global) {
  "use strict";
  const MED_PUZZLES = [
  {
    "id": 1,
    "groups": [
      {
        "category": "Classic Causes of Pancreatitis",
        "difficulty": 1,
        "terms": [
          "Gallstones",
          "Alcohol",
          "Triglycerides",
          "ERCP"
        ],
        "explanation": "Common precipitants of acute pancreatitis."
      },
      {
        "category": "Bones Forming the Acetabulum",
        "difficulty": 2,
        "terms": [
          "Ilium",
          "Ischium",
          "Pubis",
          "Triradiate Cartilage"
        ],
        "explanation": "The three pelvic bones meet at the acetabulum; the triradiate cartilage joins them in childhood."
      },
      {
        "category": "Vitamin Deficiencies With Classic Names",
        "difficulty": 3,
        "terms": [
          "Beriberi",
          "Pellagra",
          "Scurvy",
          "Rickets"
        ],
        "explanation": "B1, B3, C, and D deficiency syndromes."
      },
      {
        "category": "Things That Can Be Staged",
        "difficulty": 4,
        "terms": [
          "Cancer",
          "Sleep",
          "Labor",
          "Kidney Disease"
        ],
        "explanation": "Clinical staging systems exist for malignancy, sleep cycles, labor progress, and CKD."
      }
    ]
  },
  {
    "id": 2,
    "groups": [
      {
        "category": "Shock States",
        "difficulty": 1,
        "terms": [
          "Hypovolemic",
          "Cardiogenic",
          "Distributive",
          "Obstructive"
        ],
        "explanation": "The four physiologic categories of shock."
      },
      {
        "category": "Live Attenuated Vaccines",
        "difficulty": 2,
        "terms": [
          "MMR",
          "Varicella",
          "Yellow Fever",
          "Rotavirus"
        ],
        "explanation": "Vaccines typically avoided in pregnancy and severe immunocompromise."
      },
      {
        "category": "Heart Valves",
        "difficulty": 3,
        "terms": [
          "Mitral",
          "Tricuspid",
          "Aortic",
          "Pulmonary"
        ],
        "explanation": "The four cardiac valves."
      },
      {
        "category": "___ Fever",
        "difficulty": 4,
        "terms": [
          "Rheumatic",
          "Yellow",
          "Q",
          "Scarlet"
        ],
        "explanation": "Each completes a well-known febrile illness name."
      }
    ]
  },
  {
    "id": 3,
    "groups": [
      {
        "category": "Drugs That Prolong the QT Interval",
        "difficulty": 1,
        "terms": [
          "Ondansetron",
          "Haloperidol",
          "Azithromycin",
          "Methadone"
        ],
        "explanation": "Agents from unrelated classes that share QT-prolongation risk."
      },
      {
        "category": "Fat-Soluble Vitamins",
        "difficulty": 2,
        "terms": [
          "Retinol",
          "Cholecalciferol",
          "Tocopherol",
          "Phylloquinone"
        ],
        "explanation": "Vitamins A, D, E, and K by chemical name rather than letter."
      },
      {
        "category": "Parasympathetic Cranial Nerves",
        "difficulty": 3,
        "terms": [
          "Oculomotor",
          "Facial",
          "Glossopharyngeal",
          "Vagus"
        ],
        "explanation": "CN III, VII, IX, and X carry parasympathetic fibers."
      },
      {
        "category": "Pressures Reported in mm Hg",
        "difficulty": 4,
        "terms": [
          "Blood Pressure",
          "ICP",
          "CVP",
          "IOP"
        ],
        "explanation": "Arterial, intracranial, central venous, and intraocular pressures."
      }
    ]
  },
  {
    "id": 4,
    "groups": [
      {
        "category": "AIDS-Defining Illnesses",
        "difficulty": 1,
        "terms": [
          "Pneumocystis",
          "Kaposi Sarcoma",
          "Toxoplasmosis",
          "Cryptococcal Meningitis"
        ],
        "explanation": "Classic opportunistic conditions defining advanced HIV."
      },
      {
        "category": "Granulocytes",
        "difficulty": 2,
        "terms": [
          "Neutrophil",
          "Eosinophil",
          "Basophil",
          "Mast Cell"
        ],
        "explanation": "Granule-containing leukocytes (mast cells are tissue-based kin)."
      },
      {
        "category": "Meningeal Signs",
        "difficulty": 3,
        "terms": [
          "Nuchal Rigidity",
          "Kernig",
          "Brudzinski",
          "Jolt Accentuation"
        ],
        "explanation": "Bedside findings used when evaluating meningitis."
      },
      {
        "category": "Hospital Emergency Codes",
        "difficulty": 4,
        "terms": [
          "Blue",
          "Red",
          "Stroke",
          "STEMI"
        ],
        "explanation": "Common hospital activation names for emergencies."
      }
    ]
  },
  {
    "id": 5,
    "groups": [
      {
        "category": "Causes of High Anion Gap Acidosis",
        "difficulty": 1,
        "terms": [
          "Lactate",
          "Ketoacidosis",
          "Methanol",
          "Uremia"
        ],
        "explanation": "Major contributors to elevated anion gap metabolic acidosis."
      },
      {
        "category": "Epidermal Strata",
        "difficulty": 2,
        "terms": [
          "Corneum",
          "Lucidum",
          "Granulosum",
          "Spinosum"
        ],
        "explanation": "Named layers of the epidermis (basal omitted)."
      },
      {
        "category": "Jones Criteria Major Manifestations",
        "difficulty": 3,
        "terms": [
          "Carditis",
          "Polyarthritis",
          "Chorea",
          "Erythema Marginatum"
        ],
        "explanation": "Major Jones criteria for acute rheumatic fever (subcutaneous nodules omitted)."
      },
      {
        "category": "Eponymous Fractures",
        "difficulty": 4,
        "terms": [
          "Colles",
          "Smith",
          "Jones",
          "Bennett"
        ],
        "explanation": "Named fracture patterns of the wrist, foot, and hand."
      }
    ]
  },
  {
    "id": 6,
    "groups": [
      {
        "category": "Reversible Causes of Dementia (Selected)",
        "difficulty": 1,
        "terms": [
          "B12 Deficiency",
          "Hypothyroidism",
          "Normal Pressure Hydrocephalus",
          "Depression"
        ],
        "explanation": "Treatable or partially reversible dementia mimics."
      },
      {
        "category": "Monoamine Neurotransmitters",
        "difficulty": 2,
        "terms": [
          "Dopamine",
          "Norepinephrine",
          "Epinephrine",
          "Serotonin"
        ],
        "explanation": "Catecholamines plus serotonin."
      },
      {
        "category": "Endocrine Glands",
        "difficulty": 3,
        "terms": [
          "Thyroid",
          "Adrenal",
          "Pituitary",
          "Parathyroid"
        ],
        "explanation": "Classic hormone-producing glands."
      },
      {
        "category": "___ Syndrome",
        "difficulty": 4,
        "terms": [
          "Tourette",
          "Guillain-Barre",
          "Nephrotic",
          "Compartment"
        ],
        "explanation": "Well-known named syndromes across specialties."
      }
    ]
  },
  {
    "id": 7,
    "groups": [
      {
        "category": "Drugs Requiring Peak and Trough Monitoring",
        "difficulty": 1,
        "terms": [
          "Vancomycin",
          "Gentamicin",
          "Tobramycin",
          "Amikacin"
        ],
        "explanation": "Antibiotics commonly dosed with serum level monitoring."
      },
      {
        "category": "Upper Extremity Arteries",
        "difficulty": 2,
        "terms": [
          "Subclavian",
          "Axillary",
          "Brachial",
          "Radial"
        ],
        "explanation": "Sequential major arteries of the arm."
      },
      {
        "category": "ABO Blood Groups",
        "difficulty": 3,
        "terms": [
          "A",
          "B",
          "AB",
          "O"
        ],
        "explanation": "The four ABO types."
      },
      {
        "category": "Reported as Positive or Negative",
        "difficulty": 4,
        "terms": [
          "Rh Factor",
          "Gram Stain",
          "hCG Test",
          "ANA"
        ],
        "explanation": "Common clinical results framed as positive/negative."
      }
    ]
  },
  {
    "id": 8,
    "groups": [
      {
        "category": "Serotonin Syndrome Culprits",
        "difficulty": 1,
        "terms": [
          "Linezolid",
          "Tramadol",
          "MAO Inhibitors",
          "Triptans"
        ],
        "explanation": "Agents that raise serotonergic tone and can precipitate serotonin syndrome."
      },
      {
        "category": "Markers of Cholestasis",
        "difficulty": 2,
        "terms": [
          "ALP",
          "GGT",
          "Bilirubin",
          "5'-Nucleotidase"
        ],
        "explanation": "Labs that rise with biliary obstruction or cholestasis."
      },
      {
        "category": "Imaging Without Ionizing Radiation",
        "difficulty": 3,
        "terms": [
          "MRI",
          "Ultrasound",
          "Echocardiography",
          "Doppler"
        ],
        "explanation": "Modalities that do not use x-rays or nuclear radiation."
      },
      {
        "category": "Hypersensitivity Classes",
        "difficulty": 4,
        "terms": [
          "Immediate",
          "Cytotoxic",
          "Immune Complex",
          "Delayed"
        ],
        "explanation": "Gell and Coombs types described by mechanism, not Roman numerals."
      }
    ]
  },
  {
    "id": 9,
    "groups": [
      {
        "category": "Opioids",
        "difficulty": 1,
        "terms": [
          "Morphine",
          "Fentanyl",
          "Methadone",
          "Buprenorphine"
        ],
        "explanation": "Mu-opioid agonists/partial agonists with mixed naming patterns."
      },
      {
        "category": "Cardiac Chambers",
        "difficulty": 2,
        "terms": [
          "Left Atrium",
          "Right Atrium",
          "Left Ventricle",
          "Right Ventricle"
        ],
        "explanation": "The four chambers of the heart."
      },
      {
        "category": "Hemophilia-Related Factors",
        "difficulty": 3,
        "terms": [
          "VIII",
          "IX",
          "XI",
          "von Willebrand"
        ],
        "explanation": "Factors tied to hemophilia A/B/C and vWD pathophysiology."
      },
      {
        "category": "___ Cell",
        "difficulty": 4,
        "terms": [
          "Reed-Sternberg",
          "Plasma",
          "Goblet",
          "Leydig"
        ],
        "explanation": "Distinctive named cell types in pathology and histology."
      }
    ]
  },
  {
    "id": 10,
    "groups": [
      {
        "category": "Causes of Metabolic Alkalosis",
        "difficulty": 1,
        "terms": [
          "Vomiting",
          "Diuretics",
          "Hyperaldosteronism",
          "Milk-Alkali"
        ],
        "explanation": "Classic generators of metabolic alkalosis."
      },
      {
        "category": "BMP Electrolytes",
        "difficulty": 2,
        "terms": [
          "Sodium",
          "Potassium",
          "Chloride",
          "Bicarbonate"
        ],
        "explanation": "The four electrolytes on a standard basic metabolic panel."
      },
      {
        "category": "Mitotic Phases",
        "difficulty": 3,
        "terms": [
          "Prophase",
          "Metaphase",
          "Anaphase",
          "Telophase"
        ],
        "explanation": "Stages of mitosis (cytokinesis omitted)."
      },
      {
        "category": "Things Patients Are Asked to Say",
        "difficulty": 4,
        "terms": [
          "Ahh",
          "Eee",
          "Ninety-Nine",
          "Blue Balloons"
        ],
        "explanation": "Classic bedside exam prompts."
      }
    ]
  },
  {
    "id": 11,
    "groups": [
      {
        "category": "Rate-Control Agents for Atrial Fibrillation",
        "difficulty": 1,
        "terms": [
          "Metoprolol",
          "Diltiazem",
          "Verapamil",
          "Digoxin"
        ],
        "explanation": "Common AV-nodal blockers used for AF rate control."
      },
      {
        "category": "Muscles of Mastication",
        "difficulty": 2,
        "terms": [
          "Masseter",
          "Temporalis",
          "Medial Pterygoid",
          "Lateral Pterygoid"
        ],
        "explanation": "The four muscles that move the mandible."
      },
      {
        "category": "DNA Bases",
        "difficulty": 3,
        "terms": [
          "Adenine",
          "Thymine",
          "Guanine",
          "Cytosine"
        ],
        "explanation": "The four nitrogenous bases of DNA."
      },
      {
        "category": "Can Be Acute or Chronic",
        "difficulty": 4,
        "terms": [
          "Leukemia",
          "Kidney Injury",
          "Cholecystitis",
          "Otitis Media"
        ],
        "explanation": "Conditions commonly split by time course."
      }
    ]
  },
  {
    "id": 12,
    "groups": [
      {
        "category": "Drugs That Cause Gynecomastia",
        "difficulty": 1,
        "terms": [
          "Spironolactone",
          "Ketoconazole",
          "Cimetidine",
          "Digoxin"
        ],
        "explanation": "Medications classically linked to male breast enlargement."
      },
      {
        "category": "Rotator Cuff Muscles",
        "difficulty": 2,
        "terms": [
          "Supraspinatus",
          "Infraspinatus",
          "Teres Minor",
          "Subscapularis"
        ],
        "explanation": "The SITS muscles of the shoulder."
      },
      {
        "category": "Antibody Isotypes",
        "difficulty": 3,
        "terms": [
          "IgG",
          "IgA",
          "IgM",
          "IgE"
        ],
        "explanation": "Major immunoglobulin classes (IgD omitted)."
      },
      {
        "category": "Intensive Care Units",
        "difficulty": 4,
        "terms": [
          "ICU",
          "NICU",
          "PICU",
          "MICU"
        ],
        "explanation": "Common critical-care unit acronyms."
      }
    ]
  },
  {
    "id": 13,
    "groups": [
      {
        "category": "Anticoagulants",
        "difficulty": 1,
        "terms": [
          "Warfarin",
          "Heparin",
          "Argatroban",
          "Fondaparinux"
        ],
        "explanation": "Agents that impair clotting by different mechanisms."
      },
      {
        "category": "Carotid Sheath Contents",
        "difficulty": 2,
        "terms": [
          "Common Carotid",
          "Internal Jugular",
          "Vagus",
          "Deep Cervical Lymphatics"
        ],
        "explanation": "Major structures traveling in the carotid sheath."
      },
      {
        "category": "Raised Skin Lesions",
        "difficulty": 3,
        "terms": [
          "Papule",
          "Plaque",
          "Nodule",
          "Wheal"
        ],
        "explanation": "Elevated primary lesion morphologies."
      },
      {
        "category": "Heavy Metal Poisons",
        "difficulty": 4,
        "terms": [
          "Lead",
          "Mercury",
          "Arsenic",
          "Thallium"
        ],
        "explanation": "Classic toxic metals."
      }
    ]
  },
  {
    "id": 14,
    "groups": [
      {
        "category": "First-Line TB Drugs",
        "difficulty": 1,
        "terms": [
          "Isoniazid",
          "Rifampin",
          "Pyrazinamide",
          "Ethambutol"
        ],
        "explanation": "The RIPE regimen for active tuberculosis."
      },
      {
        "category": "Right Lung Anatomy",
        "difficulty": 2,
        "terms": [
          "Upper Lobe",
          "Middle Lobe",
          "Lower Lobe",
          "Horizontal Fissure"
        ],
        "explanation": "The right lung has three lobes and a horizontal fissure not present on the left."
      },
      {
        "category": "Apgar Components",
        "difficulty": 3,
        "terms": [
          "Appearance",
          "Pulse",
          "Grimace",
          "Activity"
        ],
        "explanation": "Four of five Apgar elements (respiration omitted)."
      },
      {
        "category": "___ Sign",
        "difficulty": 4,
        "terms": [
          "Murphy",
          "McBurney",
          "Kehr",
          "Cullen"
        ],
        "explanation": "Eponymous bedside signs in the abdomen."
      }
    ]
  },
  {
    "id": 15,
    "groups": [
      {
        "category": "Insulins by Action Profile",
        "difficulty": 1,
        "terms": [
          "Lispro",
          "Regular",
          "NPH",
          "Glargine"
        ],
        "explanation": "Rapid, short, intermediate, and long-acting preparations."
      },
      {
        "category": "Primary Taste Qualities",
        "difficulty": 2,
        "terms": [
          "Sweet",
          "Sour",
          "Salty",
          "Bitter"
        ],
        "explanation": "Classic taste modalities (umami often taught as a fifth)."
      },
      {
        "category": "Extra Heart Sounds",
        "difficulty": 3,
        "terms": [
          "S3",
          "S4",
          "Opening Snap",
          "Ejection Click"
        ],
        "explanation": "Added auscultatory findings beyond S1 and S2."
      },
      {
        "category": "Can Be Transplanted",
        "difficulty": 4,
        "terms": [
          "Kidney",
          "Liver",
          "Cornea",
          "Bone Marrow"
        ],
        "explanation": "Organs and tissues commonly transplanted."
      }
    ]
  },
  {
    "id": 16,
    "groups": [
      {
        "category": "Drugs That Cause Drug-Induced Lupus",
        "difficulty": 1,
        "terms": [
          "Hydralazine",
          "Procainamide",
          "Isoniazid",
          "Minocycline"
        ],
        "explanation": "Classic culprits of drug-induced SLE-like disease."
      },
      {
        "category": "Water-Soluble B Vitamins",
        "difficulty": 2,
        "terms": [
          "Thiamine",
          "Riboflavin",
          "Niacin",
          "Pyridoxine"
        ],
        "explanation": "B1, B2, B3, and B6."
      },
      {
        "category": "Anterior Pituitary Hormones",
        "difficulty": 3,
        "terms": [
          "ACTH",
          "TSH",
          "GH",
          "Prolactin"
        ],
        "explanation": "Adenohypophysis products (gonadotropins omitted)."
      },
      {
        "category": "Exam Color Findings",
        "difficulty": 4,
        "terms": [
          "Cyanosis",
          "Jaundice",
          "Pallor",
          "Erythema"
        ],
        "explanation": "Clinical color changes on physical exam."
      }
    ]
  },
  {
    "id": 17,
    "groups": [
      {
        "category": "Causes of Hyperkalemia",
        "difficulty": 1,
        "terms": [
          "ACE Inhibitors",
          "Spironolactone",
          "Succinylcholine",
          "Tumor Lysis"
        ],
        "explanation": "Diverse triggers that raise serum potassium."
      },
      {
        "category": "Tarsal Bones",
        "difficulty": 2,
        "terms": [
          "Talus",
          "Calcaneus",
          "Navicular",
          "Cuboid"
        ],
        "explanation": "Major bones of the hindfoot and midfoot."
      },
      {
        "category": "Human Malaria Species",
        "difficulty": 3,
        "terms": [
          "Falciparum",
          "Vivax",
          "Ovale",
          "Malariae"
        ],
        "explanation": "The four classic Plasmodium species (without the P. prefix)."
      },
      {
        "category": "Prescription Timing Abbreviations",
        "difficulty": 4,
        "terms": [
          "BID",
          "TID",
          "QID",
          "QHS"
        ],
        "explanation": "Twice, three times, four times daily, and at bedtime."
      }
    ]
  },
  {
    "id": 18,
    "groups": [
      {
        "category": "Indications for Systemic Steroids",
        "difficulty": 1,
        "terms": [
          "Adrenal Crisis",
          "Septic Shock",
          "COPD Flare",
          "Cerebral Edema"
        ],
        "explanation": "Settings where glucocorticoids are commonly given systemically."
      },
      {
        "category": "Refractive Errors",
        "difficulty": 2,
        "terms": [
          "Myopia",
          "Hyperopia",
          "Astigmatism",
          "Presbyopia"
        ],
        "explanation": "Common disorders of ocular focusing."
      },
      {
        "category": "Acid-Fast Organisms",
        "difficulty": 3,
        "terms": [
          "M. tuberculosis",
          "M. leprae",
          "Nocardia",
          "Cryptosporidium"
        ],
        "explanation": "Pathogens that retain carbol fuchsin (modified acid-fast for some)."
      },
      {
        "category": "___ Disease",
        "difficulty": 4,
        "terms": [
          "Addison",
          "Cushing",
          "Graves",
          "Hashimoto"
        ],
        "explanation": "Eponymous endocrine diseases."
      }
    ]
  },
  {
    "id": 19,
    "groups": [
      {
        "category": "Drugs for Influenza",
        "difficulty": 1,
        "terms": [
          "Oseltamivir",
          "Zanamivir",
          "Peramivir",
          "Baloxavir"
        ],
        "explanation": "Neuraminidase inhibitors and a cap-dependent endonuclease inhibitor."
      },
      {
        "category": "Abnormal Spinal Curves",
        "difficulty": 2,
        "terms": [
          "Kyphosis",
          "Lordosis",
          "Scoliosis",
          "List"
        ],
        "explanation": "Terms describing spinal alignment abnormalities."
      },
      {
        "category": "Generalized Seizure Types",
        "difficulty": 3,
        "terms": [
          "Absence",
          "Tonic-Clonic",
          "Myoclonic",
          "Atonic"
        ],
        "explanation": "Recognized generalized seizure semiologies."
      },
      {
        "category": "Blood Pressure Numbers",
        "difficulty": 4,
        "terms": [
          "Systolic",
          "Diastolic",
          "MAP",
          "Pulse Pressure"
        ],
        "explanation": "Values derived from arterial pressure measurement."
      }
    ]
  },
  {
    "id": 20,
    "groups": [
      {
        "category": "Causes of Upper GI Bleed",
        "difficulty": 1,
        "terms": [
          "Peptic Ulcer",
          "Varices",
          "Mallory-Weiss",
          "Gastritis"
        ],
        "explanation": "Common etiologies of bleeding proximal to the ligament of Treitz."
      },
      {
        "category": "Distal Carpal Row",
        "difficulty": 2,
        "terms": [
          "Trapezium",
          "Trapezoid",
          "Capitate",
          "Hamate"
        ],
        "explanation": "The four distal carpal bones."
      },
      {
        "category": "RNA Hepatitis Viruses",
        "difficulty": 3,
        "terms": [
          "HAV",
          "HCV",
          "HEV",
          "HDV"
        ],
        "explanation": "Hepatitis viruses with RNA genomes (HBV is DNA)."
      },
      {
        "category": "Often Clinically Silent",
        "difficulty": 4,
        "terms": [
          "MI",
          "Ischemia",
          "Bacteriuria",
          "Gallstones"
        ],
        "explanation": "Conditions that may present with few or atypical symptoms."
      }
    ]
  },
  {
    "id": 21,
    "groups": [
      {
        "category": "Causes of Pulmonary Embolism Mimics",
        "difficulty": 1,
        "terms": [
          "Pneumonia",
          "Pneumothorax",
          "Pericarditis",
          "Anxiety"
        ],
        "explanation": "Common differentials when PE is considered."
      },
      {
        "category": "Islet Cell Types",
        "difficulty": 2,
        "terms": [
          "Alpha",
          "Beta",
          "Delta",
          "PP"
        ],
        "explanation": "Pancreatic islet cells producing glucagon, insulin, somatostatin, and pancreatic polypeptide."
      },
      {
        "category": "Landmark Dermatomes",
        "difficulty": 3,
        "terms": [
          "C5",
          "T4",
          "T10",
          "L4"
        ],
        "explanation": "Shoulder, nipple line, umbilicus, and knee landmarks."
      },
      {
        "category": "___ Embolism",
        "difficulty": 4,
        "terms": [
          "Pulmonary",
          "Amniotic",
          "Fat",
          "Air"
        ],
        "explanation": "Clinically important embolism types."
      }
    ]
  },
  {
    "id": 22,
    "groups": [
      {
        "category": "Nephrotoxic Antibiotics",
        "difficulty": 1,
        "terms": [
          "Gentamicin",
          "Amphotericin",
          "Vancomycin",
          "Colistin"
        ],
        "explanation": "Antimicrobials notorious for kidney injury."
      },
      {
        "category": "Major Salivary Glands",
        "difficulty": 2,
        "terms": [
          "Parotid",
          "Submandibular",
          "Sublingual",
          "Von Ebner"
        ],
        "explanation": "Named salivary glands (von Ebner are minor serous glands of the tongue)."
      },
      {
        "category": "RAAS Components",
        "difficulty": 3,
        "terms": [
          "Renin",
          "Angiotensinogen",
          "ACE",
          "Aldosterone"
        ],
        "explanation": "Key players in the renin–angiotensin–aldosterone system."
      },
      {
        "category": "Mosquito-Borne Encephalitides",
        "difficulty": 4,
        "terms": [
          "West Nile",
          "St. Louis",
          "Eastern Equine",
          "Western Equine"
        ],
        "explanation": "Arboviral encephalitides transmitted by mosquitoes."
      }
    ]
  },
  {
    "id": 23,
    "groups": [
      {
        "category": "Extrapyramidal Side Effect Drugs",
        "difficulty": 1,
        "terms": [
          "Haloperidol",
          "Metoclopramide",
          "Prochlorperazine",
          "Fluphenazine"
        ],
        "explanation": "D2 blockers that commonly cause EPS."
      },
      {
        "category": "Diuretic Classes",
        "difficulty": 2,
        "terms": [
          "Loop",
          "Thiazide",
          "Carbonic Anhydrase Inhibitor",
          "Osmotic"
        ],
        "explanation": "Major diuretic categories by mechanism/site."
      },
      {
        "category": "Human Herpesviruses",
        "difficulty": 3,
        "terms": [
          "HSV-1",
          "VZV",
          "EBV",
          "CMV"
        ],
        "explanation": "Major herpesviruses of clinical importance."
      },
      {
        "category": "Specified as Left or Right",
        "difficulty": 4,
        "terms": [
          "Heart Failure",
          "Hemicolectomy",
          "Pneumothorax",
          "Hemisphere Stroke"
        ],
        "explanation": "Conditions or procedures commonly labeled by side."
      }
    ]
  },
  {
    "id": 24,
    "groups": [
      {
        "category": "Broad-Spectrum Antiepileptics",
        "difficulty": 1,
        "terms": [
          "Valproate",
          "Lamotrigine",
          "Levetiracetam",
          "Topiramate"
        ],
        "explanation": "Agents used across multiple seizure types."
      },
      {
        "category": "Cranial Vault Bones",
        "difficulty": 2,
        "terms": [
          "Frontal",
          "Parietal",
          "Temporal",
          "Occipital"
        ],
        "explanation": "Bones forming the calvarium."
      },
      {
        "category": "Complement Activation Routes",
        "difficulty": 3,
        "terms": [
          "Classical",
          "Alternative",
          "Lectin",
          "Terminal"
        ],
        "explanation": "Pathways converging on the membrane attack complex."
      },
      {
        "category": "Anatomic Triangles",
        "difficulty": 4,
        "terms": [
          "Calot",
          "Scarpa",
          "Femoral",
          "Auscultation"
        ],
        "explanation": "Named triangles used as clinical landmarks."
      }
    ]
  },
  {
    "id": 25,
    "groups": [
      {
        "category": "Causes of Hypoglycemia",
        "difficulty": 1,
        "terms": [
          "Insulin",
          "Sulfonylureas",
          "Ethanol",
          "Addison Disease"
        ],
        "explanation": "Classic precipitants of low blood glucose."
      },
      {
        "category": "Extraocular Muscles",
        "difficulty": 2,
        "terms": [
          "Medial Rectus",
          "Lateral Rectus",
          "Superior Oblique",
          "Inferior Rectus"
        ],
        "explanation": "Four of the six extraocular muscles."
      },
      {
        "category": "Primary Acid-Base Disorders",
        "difficulty": 3,
        "terms": [
          "Metabolic Acidosis",
          "Metabolic Alkalosis",
          "Respiratory Acidosis",
          "Respiratory Alkalosis"
        ],
        "explanation": "The four primary acid-base disturbances."
      },
      {
        "category": "___ Heart",
        "difficulty": 4,
        "terms": [
          "Athletic",
          "Broken",
          "Soldier's",
          "Boot-Shaped"
        ],
        "explanation": "Descriptive cardiac terms and eponymous metaphors."
      }
    ]
  },
  {
    "id": 26,
    "groups": [
      {
        "category": "Drugs for Osteoporosis",
        "difficulty": 1,
        "terms": [
          "Alendronate",
          "Denosumab",
          "Teriparatide",
          "Raloxifene"
        ],
        "explanation": "Agents from different classes used to treat osteoporosis."
      },
      {
        "category": "Meninges",
        "difficulty": 2,
        "terms": [
          "Dura",
          "Arachnoid",
          "Pia",
          "Falx Cerebri"
        ],
        "explanation": "The three meningeal layers plus a dural reflection."
      },
      {
        "category": "Delayed-Type Hypersensitivity",
        "difficulty": 3,
        "terms": [
          "PPD",
          "Contact Dermatitis",
          "Poison Ivy",
          "Transplant Rejection"
        ],
        "explanation": "Type IV T-cell–mediated reactions."
      },
      {
        "category": "Lab Unit Abbreviations",
        "difficulty": 4,
        "terms": [
          "mg/dL",
          "mEq/L",
          "IU/L",
          "mmHg"
        ],
        "explanation": "Common units on laboratory and vital-sign reports."
      }
    ]
  },
  {
    "id": 27,
    "groups": [
      {
        "category": "Anticoagulant Reversal Agents",
        "difficulty": 1,
        "terms": [
          "Vitamin K",
          "Protamine",
          "Idarucizumab",
          "Andexanet"
        ],
        "explanation": "Agents used to reverse warfarin, heparin, dabigatran, and factor Xa inhibitors."
      },
      {
        "category": "Intrinsic Hand Muscles",
        "difficulty": 2,
        "terms": [
          "Lumbricals",
          "Dorsal Interossei",
          "Palmar Interossei",
          "Adductor Pollicis"
        ],
        "explanation": "Intrinsic muscles of the hand."
      },
      {
        "category": "Hereditary Cancer Genes",
        "difficulty": 3,
        "terms": [
          "BRCA1",
          "BRCA2",
          "MLH1",
          "MSH2"
        ],
        "explanation": "Genes linked to breast/ovarian cancer and Lynch syndrome."
      },
      {
        "category": "Drainable Collections",
        "difficulty": 4,
        "terms": [
          "Abscess",
          "Empyema",
          "Hematoma",
          "Seroma"
        ],
        "explanation": "Fluid collections sometimes managed with drainage."
      }
    ]
  },
  {
    "id": 28,
    "groups": [
      {
        "category": "Second-Generation Antipsychotics",
        "difficulty": 1,
        "terms": [
          "Risperidone",
          "Olanzapine",
          "Quetiapine",
          "Clozapine"
        ],
        "explanation": "Atypical antipsychotics with varied metabolic/EPS profiles."
      },
      {
        "category": "Secondary Lymphoid Organs",
        "difficulty": 2,
        "terms": [
          "Spleen",
          "Lymph Nodes",
          "Tonsils",
          "Peyer Patches"
        ],
        "explanation": "Sites of adaptive immune activation."
      },
      {
        "category": "Neonatal Respiratory Distress Factors",
        "difficulty": 3,
        "terms": [
          "Surfactant Deficiency",
          "Prematurity",
          "Type II Cell",
          "Atelectasis"
        ],
        "explanation": "Concepts tied to RDS pathophysiology."
      },
      {
        "category": "ATLS Primary Survey",
        "difficulty": 4,
        "terms": [
          "Airway",
          "Breathing",
          "Circulation",
          "Disability"
        ],
        "explanation": "First four elements of the ABCDE trauma survey."
      }
    ]
  },
  {
    "id": 29,
    "groups": [
      {
        "category": "Drugs Affecting Thyroid Hormone",
        "difficulty": 1,
        "terms": [
          "Levothyroxine",
          "Methimazole",
          "Amiodarone",
          "Lithium"
        ],
        "explanation": "Agents that replace, block, or disrupt thyroid function."
      },
      {
        "category": "Cardiac Action Potential Phases",
        "difficulty": 2,
        "terms": [
          "Phase 0",
          "Phase 1",
          "Phase 2",
          "Phase 3"
        ],
        "explanation": "Ventricular myocyte depolarization and repolarization phases."
      },
      {
        "category": "Tick-Borne Infections",
        "difficulty": 3,
        "terms": [
          "Lyme",
          "Anaplasmosis",
          "Babesiosis",
          "RMSF"
        ],
        "explanation": "Important North American tick-transmitted diseases."
      },
      {
        "category": "___ Spot",
        "difficulty": 4,
        "terms": [
          "Koplik",
          "Roth",
          "Bitot",
          "Brushfield"
        ],
        "explanation": "Named spots in measles, endocarditis, vitamin A deficiency, and Down syndrome."
      }
    ]
  },
  {
    "id": 30,
    "groups": [
      {
        "category": "Asthma Controller Options",
        "difficulty": 1,
        "terms": [
          "Inhaled Steroid",
          "Montelukast",
          "Salmeterol",
          "Theophylline"
        ],
        "explanation": "Long-term control therapies from different classes."
      },
      {
        "category": "Gut Wall Layers",
        "difficulty": 2,
        "terms": [
          "Mucosa",
          "Submucosa",
          "Muscularis Externa",
          "Serosa"
        ],
        "explanation": "The four histologic layers of much of the GI tract."
      },
      {
        "category": "Clostridium Species",
        "difficulty": 3,
        "terms": [
          "Difficile",
          "Perfringens",
          "Tetani",
          "Botulinum"
        ],
        "explanation": "Major pathogenic clostridia (genus omitted for difficulty)."
      },
      {
        "category": "SOAP Note Sections",
        "difficulty": 4,
        "terms": [
          "Subjective",
          "Objective",
          "Assessment",
          "Plan"
        ],
        "explanation": "The four parts of a SOAP note."
      }
    ]
  },
  {
    "id": 31,
    "groups": [
      {
        "category": "Alkylating Chemotherapy",
        "difficulty": 1,
        "terms": [
          "Cyclophosphamide",
          "Busulfan",
          "Cisplatin",
          "Melphalan"
        ],
        "explanation": "DNA-crosslinking agents used in oncology (platinum included)."
      },
      {
        "category": "Purely Motor Cranial Nerves",
        "difficulty": 2,
        "terms": [
          "Trochlear",
          "Abducens",
          "Accessory",
          "Hypoglossal"
        ],
        "explanation": "CN IV, VI, XI, and XII are purely motor."
      },
      {
        "category": "Pulseless Arrest Rhythms",
        "difficulty": 3,
        "terms": [
          "VF",
          "pVT",
          "Asystole",
          "PEA"
        ],
        "explanation": "Rhythms in adult cardiac arrest algorithms."
      },
      {
        "category": "Can Be Culture-Negative",
        "difficulty": 4,
        "terms": [
          "Endocarditis",
          "Osteomyelitis",
          "Sepsis",
          "Pyelonephritis"
        ],
        "explanation": "Infections that sometimes fail to grow in culture."
      }
    ]
  },
  {
    "id": 32,
    "groups": [
      {
        "category": "Cardiotoxic Chemotherapeutics",
        "difficulty": 1,
        "terms": [
          "Doxorubicin",
          "Trastuzumab",
          "Cyclophosphamide",
          "5-FU"
        ],
        "explanation": "Cancer drugs associated with cardiomyopathy or cardiac injury."
      },
      {
        "category": "Glomerular Filtration Barrier",
        "difficulty": 2,
        "terms": [
          "Endothelium",
          "Basement Membrane",
          "Podocyte",
          "Slit Diaphragm"
        ],
        "explanation": "Layers of the glomerular filter."
      },
      {
        "category": "Dermatophyte Site Names",
        "difficulty": 3,
        "terms": [
          "Scalp Ringworm",
          "Body Ringworm",
          "Jock Itch",
          "Athlete's Foot"
        ],
        "explanation": "Common names for tinea capitis, corporis, cruris, and pedis."
      },
      {
        "category": "Standard PPE",
        "difficulty": 4,
        "terms": [
          "N95",
          "Gown",
          "Gloves",
          "Eye Protection"
        ],
        "explanation": "Core personal protective equipment items."
      }
    ]
  },
  {
    "id": 33,
    "groups": [
      {
        "category": "Abortive Migraine Therapies",
        "difficulty": 1,
        "terms": [
          "Sumatriptan",
          "Dihydroergotamine",
          "Metoclopramide",
          "High-Flow Oxygen"
        ],
        "explanation": "Acute treatments spanning triptans, ergot, antiemetic, and cluster-adjacent oxygen."
      },
      {
        "category": "Female Internal Genitalia",
        "difficulty": 2,
        "terms": [
          "Uterus",
          "Ovary",
          "Fallopian Tube",
          "Cervix"
        ],
        "explanation": "Major organs of the female reproductive tract."
      },
      {
        "category": "Coagulation Pathways",
        "difficulty": 3,
        "terms": [
          "Intrinsic",
          "Extrinsic",
          "Common",
          "Fibrinolysis"
        ],
        "explanation": "Classic cascade teaching pathways."
      },
      {
        "category": "___ Fracture",
        "difficulty": 4,
        "terms": [
          "Boxer's",
          "Nightstick",
          "March",
          "Greenstick"
        ],
        "explanation": "Descriptive fracture names by mechanism or appearance."
      }
    ]
  },
  {
    "id": 34,
    "groups": [
      {
        "category": "Pulmonary Hypertension Drug Classes",
        "difficulty": 1,
        "terms": [
          "Sildenafil",
          "Bosentan",
          "Epoprostenol",
          "Riociguat"
        ],
        "explanation": "PDE-5, endothelin, prostacyclin, and sGC stimulator examples."
      },
      {
        "category": "Middle Ear Ossicles",
        "difficulty": 2,
        "terms": [
          "Malleus",
          "Incus",
          "Stapes",
          "Oval Window"
        ],
        "explanation": "The three ossicles and the window they drive."
      },
      {
        "category": "Lysosomal Storage Diseases",
        "difficulty": 3,
        "terms": [
          "Gaucher",
          "Tay-Sachs",
          "Niemann-Pick",
          "Fabry"
        ],
        "explanation": "Classic sphingolipidoses."
      },
      {
        "category": "ABG Report Values",
        "difficulty": 4,
        "terms": [
          "pH",
          "PaCO2",
          "PaO2",
          "HCO3"
        ],
        "explanation": "Core arterial blood gas parameters."
      }
    ]
  },
  {
    "id": 35,
    "groups": [
      {
        "category": "Biologic Targets in Rheumatology",
        "difficulty": 1,
        "terms": [
          "TNF-alpha",
          "IL-6",
          "CD20",
          "JAK"
        ],
        "explanation": "Molecular targets of common rheumatologic biologics/small molecules."
      },
      {
        "category": "Spinal Regions",
        "difficulty": 2,
        "terms": [
          "Cervical",
          "Thoracic",
          "Lumbar",
          "Sacral"
        ],
        "explanation": "Regions of the vertebral column."
      },
      {
        "category": "Inheritance Patterns",
        "difficulty": 3,
        "terms": [
          "Autosomal Dominant",
          "Autosomal Recessive",
          "X-Linked Recessive",
          "Mitochondrial"
        ],
        "explanation": "Classic Mendelian and maternal inheritance modes."
      },
      {
        "category": "Pulse Oximeter Outputs",
        "difficulty": 4,
        "terms": [
          "SpO2",
          "Pulse Rate",
          "Plethysmograph",
          "Perfusion Index"
        ],
        "explanation": "Data commonly displayed by pulse oximetry."
      }
    ]
  },
  {
    "id": 36,
    "groups": [
      {
        "category": "Antiemetic Mechanisms",
        "difficulty": 1,
        "terms": [
          "5-HT3 Blockade",
          "D2 Blockade",
          "H1 Blockade",
          "NK1 Blockade"
        ],
        "explanation": "Receptor targets of major antiemetic classes."
      },
      {
        "category": "Hormones From the Kidney",
        "difficulty": 2,
        "terms": [
          "Erythropoietin",
          "Renin",
          "Calcitriol",
          "Prostaglandins"
        ],
        "explanation": "Endocrine and paracrine products of renal tissue."
      },
      {
        "category": "Dimorphic Fungi",
        "difficulty": 3,
        "terms": [
          "Histoplasma",
          "Blastomyces",
          "Coccidioides",
          "Paracoccidioides"
        ],
        "explanation": "Endemic fungi that switch forms with temperature."
      },
      {
        "category": "Named Reflexes",
        "difficulty": 4,
        "terms": [
          "Babinski",
          "Moro",
          "Cremasteric",
          "Gag"
        ],
        "explanation": "Neurologic reflexes tested clinically."
      }
    ]
  },
  {
    "id": 37,
    "groups": [
      {
        "category": "Anticholinergic Toxidrome Features",
        "difficulty": 1,
        "terms": [
          "Dry Mouth",
          "Mydriasis",
          "Urinary Retention",
          "Delirium"
        ],
        "explanation": "Classic findings of anticholinergic poisoning."
      },
      {
        "category": "Pregnancy Hormones",
        "difficulty": 2,
        "terms": [
          "hCG",
          "hPL",
          "Progesterone",
          "Estriol"
        ],
        "explanation": "Key hormones of gestation."
      },
      {
        "category": "Leukemia Categories",
        "difficulty": 3,
        "terms": [
          "ALL",
          "AML",
          "CLL",
          "CML"
        ],
        "explanation": "The four classic leukemia groupings."
      },
      {
        "category": "___ Crisis",
        "difficulty": 4,
        "terms": [
          "Myasthenic",
          "Addisonian",
          "Thyroid",
          "Sickle Cell"
        ],
        "explanation": "Medical emergencies named as crises."
      }
    ]
  },
  {
    "id": 38,
    "groups": [
      {
        "category": "Malaria Life-Cycle Drug Targets",
        "difficulty": 1,
        "terms": [
          "Blood Schizonts",
          "Liver Hypnozoites",
          "Gametocytes",
          "Heme Polymerase"
        ],
        "explanation": "Stages/enzymes targeted by antimalarial therapy."
      },
      {
        "category": "Carpal Tunnel Traversing Structures",
        "difficulty": 2,
        "terms": [
          "Median Nerve",
          "FDS",
          "FDP",
          "FPL"
        ],
        "explanation": "Contents of the carpal tunnel."
      },
      {
        "category": "Hypersensitivity Pneumonitis Names",
        "difficulty": 3,
        "terms": [
          "Farmer's Lung",
          "Bird Fancier's",
          "Humidifier Lung",
          "Cheese Worker's"
        ],
        "explanation": "Occupational HP syndromes."
      },
      {
        "category": "Graded 0 to 4+",
        "difficulty": 4,
        "terms": [
          "Reflexes",
          "Edema",
          "Tonsils",
          "Pulses"
        ],
        "explanation": "Bedside findings commonly scored 0–4+."
      }
    ]
  },
  {
    "id": 39,
    "groups": [
      {
        "category": "Causes of Methemoglobinemia",
        "difficulty": 1,
        "terms": [
          "Benzocaine",
          "Dapsone",
          "Nitrites",
          "Aniline Dyes"
        ],
        "explanation": "Classic acquired causes of methemoglobinemia."
      },
      {
        "category": "Thalamic Sensory Relays",
        "difficulty": 2,
        "terms": [
          "VPL",
          "VPM",
          "LGN",
          "MGN"
        ],
        "explanation": "Major thalamic nuclei for body, face, vision, and hearing."
      },
      {
        "category": "Oncogenic Viruses",
        "difficulty": 3,
        "terms": [
          "HPV",
          "EBV",
          "HBV",
          "HTLV-1"
        ],
        "explanation": "Viruses causally linked to human cancers."
      },
      {
        "category": "Scope Exams",
        "difficulty": 4,
        "terms": [
          "Laryngoscopy",
          "Otoscopy",
          "Ophthalmoscopy",
          "Colonoscopy"
        ],
        "explanation": "Procedures performed with a scope."
      }
    ]
  },
  {
    "id": 40,
    "groups": [
      {
        "category": "Calcineurin Inhibitors",
        "difficulty": 1,
        "terms": [
          "Tacrolimus",
          "Cyclosporine",
          "Pimecrolimus",
          "Voclosporin"
        ],
        "explanation": "Immunosuppressants blocking calcineurin–NFAT signaling."
      },
      {
        "category": "Paranasal Sinuses",
        "difficulty": 2,
        "terms": [
          "Maxillary",
          "Frontal",
          "Ethmoid",
          "Sphenoid"
        ],
        "explanation": "The four paired paranasal sinuses."
      },
      {
        "category": "Pathologic Gaits",
        "difficulty": 3,
        "terms": [
          "Antalgic",
          "Trendelenburg",
          "Steppage",
          "Parkinsonian"
        ],
        "explanation": "Classic abnormal gait patterns."
      },
      {
        "category": "Can Be Called Atypical",
        "difficulty": 4,
        "terms": [
          "Pneumonia",
          "Depression",
          "Antipsychotics",
          "Nevi"
        ],
        "explanation": "Medical terms frequently modified by “atypical.”"
      }
    ]
  },
  {
    "id": 41,
    "groups": [
      {
        "category": "Cold Medicine Mechanisms",
        "difficulty": 1,
        "terms": [
          "NMDA Antagonism",
          "Expectoration",
          "Alpha Agonism",
          "Antihistamine"
        ],
        "explanation": "Mechanisms behind common OTC cold remedies (DXM, guaifenesin, decongestants, antihistamines)."
      },
      {
        "category": "Male Urethra Segments",
        "difficulty": 2,
        "terms": [
          "Prostatic",
          "Membranous",
          "Bulbar",
          "Penile"
        ],
        "explanation": "Anatomic segments of the male urethra."
      },
      {
        "category": "Intestinal Nematodes",
        "difficulty": 3,
        "terms": [
          "Ascaris",
          "Enterobius",
          "Strongyloides",
          "Necator"
        ],
        "explanation": "Clinically important roundworms."
      },
      {
        "category": "___ Procedure",
        "difficulty": 4,
        "terms": [
          "Whipple",
          "Billroth",
          "Hartmann",
          "Nissen"
        ],
        "explanation": "Eponymous GI operations."
      }
    ]
  },
  {
    "id": 42,
    "groups": [
      {
        "category": "Vaughan Williams Class Examples",
        "difficulty": 1,
        "terms": [
          "Quinidine",
          "Metoprolol",
          "Amiodarone",
          "Verapamil"
        ],
        "explanation": "Representatives of antiarrhythmic classes I–IV."
      },
      {
        "category": "Bones of the Hip Bone",
        "difficulty": 2,
        "terms": [
          "Ilium",
          "Ischium",
          "Pubis",
          "Acetabulum"
        ],
        "explanation": "Components of the coxal bone; acetabulum is their shared socket."
      },
      {
        "category": "Hypersensitivity Prototypes",
        "difficulty": 3,
        "terms": [
          "Anaphylaxis",
          "Goodpasture",
          "Serum Sickness",
          "PPD"
        ],
        "explanation": "Classic examples of Types I–IV hypersensitivity."
      },
      {
        "category": "Ways to Record a QRS",
        "difficulty": 4,
        "terms": [
          "ECG",
          "Telemetry",
          "Holter",
          "Event Monitor"
        ],
        "explanation": "Modalities that capture ventricular depolarization."
      }
    ]
  },
  {
    "id": 43,
    "groups": [
      {
        "category": "HIV Drug Class Examples",
        "difficulty": 1,
        "terms": [
          "Zidovudine",
          "Efavirenz",
          "Darunavir",
          "Dolutegravir"
        ],
        "explanation": "NRTI, NNRTI, protease inhibitor, and integrase inhibitor."
      },
      {
        "category": "Central Auditory Pathway",
        "difficulty": 2,
        "terms": [
          "Cochlear Nucleus",
          "Superior Olive",
          "Inferior Colliculus",
          "Medial Geniculate"
        ],
        "explanation": "Major relays from brainstem to thalamus for hearing."
      },
      {
        "category": "Acute Hepatic Porphyrias",
        "difficulty": 3,
        "terms": [
          "AIP",
          "VP",
          "HCP",
          "ADP"
        ],
        "explanation": "Acute intermittent, variegate, hereditary coproporphyria, ALA dehydratase deficiency."
      },
      {
        "category": "Triage Color Language",
        "difficulty": 4,
        "terms": [
          "Red Flag",
          "Yellow Flag",
          "Green Light",
          "Black Tag"
        ],
        "explanation": "Color metaphors used in urgency and disaster triage teaching."
      }
    ]
  },
  {
    "id": 44,
    "groups": [
      {
        "category": "Shock Vasopressors",
        "difficulty": 1,
        "terms": [
          "Norepinephrine",
          "Vasopressin",
          "Epinephrine",
          "Phenylephrine"
        ],
        "explanation": "Pressors commonly used in distributive and other shock states."
      },
      {
        "category": "Breast Exam Quadrants",
        "difficulty": 2,
        "terms": [
          "UOQ",
          "UIQ",
          "LOQ",
          "LIQ"
        ],
        "explanation": "Upper/lower outer/inner quadrant abbreviations."
      },
      {
        "category": "Human Prion Diseases",
        "difficulty": 3,
        "terms": [
          "CJD",
          "vCJD",
          "FFI",
          "Kuru"
        ],
        "explanation": "Transmissible spongiform encephalopathies in humans."
      },
      {
        "category": "Cold-Reactive Lab Phenomena",
        "difficulty": 4,
        "terms": [
          "Cryoglobulin",
          "Cold Agglutinin",
          "Cryofibrinogen",
          "Donath-Landsteiner"
        ],
        "explanation": "Laboratory findings involving cold-precipitating or cold-reactive proteins."
      }
    ]
  },
  {
    "id": 45,
    "groups": [
      {
        "category": "IV Induction Agents",
        "difficulty": 1,
        "terms": [
          "Propofol",
          "Etomidate",
          "Ketamine",
          "Thiopental"
        ],
        "explanation": "Common intravenous agents used to induce general anesthesia."
      },
      {
        "category": "Fetal Circulatory Shunts",
        "difficulty": 2,
        "terms": [
          "Ductus Arteriosus",
          "Foramen Ovale",
          "Ductus Venosus",
          "Umbilical Vein"
        ],
        "explanation": "Key pathways of fetal blood flow."
      },
      {
        "category": "Neurocutaneous Syndromes",
        "difficulty": 3,
        "terms": [
          "NF1",
          "NF2",
          "Tuberous Sclerosis",
          "Sturge-Weber"
        ],
        "explanation": "Classic phakomatoses."
      },
      {
        "category": "___ Test",
        "difficulty": 4,
        "terms": [
          "Coombs",
          "Schilling",
          "Tinel",
          "Phalen"
        ],
        "explanation": "Eponymous diagnostic tests."
      }
    ]
  },
  {
    "id": 46,
    "groups": [
      {
        "category": "Parkinson Disease Therapies",
        "difficulty": 1,
        "terms": [
          "Levodopa",
          "Pramipexole",
          "Entacapone",
          "Benztropine"
        ],
        "explanation": "Dopaminergic and adjunct treatments for PD."
      },
      {
        "category": "Heart Wall Layers",
        "difficulty": 2,
        "terms": [
          "Endocardium",
          "Myocardium",
          "Epicardium",
          "Pericardium"
        ],
        "explanation": "Layers of the heart and pericardial sac."
      },
      {
        "category": "Spirochetal Genera",
        "difficulty": 3,
        "terms": [
          "Treponema",
          "Borrelia",
          "Leptospira",
          "Brachyspira"
        ],
        "explanation": "Medically relevant spirochetes."
      },
      {
        "category": "Auscultation Targets",
        "difficulty": 4,
        "terms": [
          "Heart Sounds",
          "Breath Sounds",
          "Bowel Sounds",
          "Bruits"
        ],
        "explanation": "What clinicians listen for with a stethoscope."
      }
    ]
  },
  {
    "id": 47,
    "groups": [
      {
        "category": "Gout Management Strategies",
        "difficulty": 1,
        "terms": [
          "XO Inhibition",
          "Uricosuric",
          "Pegloticase",
          "Colchicine"
        ],
        "explanation": "Approaches to acute and chronic gout (mechanisms/agents mixed)."
      },
      {
        "category": "Middle Ear Neighbors",
        "difficulty": 2,
        "terms": [
          "Tympanic Membrane",
          "Eustachian Tube",
          "Mastoid Cells",
          "Chorda Tympani"
        ],
        "explanation": "Structures bordering or traversing the middle ear."
      },
      {
        "category": "DNA Virus Families",
        "difficulty": 3,
        "terms": [
          "Adenoviridae",
          "Herpesviridae",
          "Poxviridae",
          "Papillomaviridae"
        ],
        "explanation": "Families of medically important DNA viruses."
      },
      {
        "category": "Staging Systems",
        "difficulty": 4,
        "terms": [
          "TNM",
          "Ann Arbor",
          "Breslow",
          "Child-Pugh"
        ],
        "explanation": "Widely used cancer and liver severity/staging tools."
      }
    ]
  },
  {
    "id": 48,
    "groups": [
      {
        "category": "Colony-Stimulating Strategies",
        "difficulty": 1,
        "terms": [
          "Epoetin",
          "Filgrastim",
          "Romiplostim",
          "Sargramostim"
        ],
        "explanation": "Agents stimulating RBC, neutrophil, platelet, or granulocyte-macrophage lines."
      },
      {
        "category": "De Quervain Compartment Tendons",
        "difficulty": 2,
        "terms": [
          "APL",
          "EPB",
          "Radial Styloid",
          "Snuffbox"
        ],
        "explanation": "Anatomy tied to first dorsal compartment tenosynovitis."
      },
      {
        "category": "Granulomatous Diseases",
        "difficulty": 3,
        "terms": [
          "Sarcoidosis",
          "Tuberculosis",
          "Crohn Disease",
          "Histoplasmosis"
        ],
        "explanation": "Conditions classically forming granulomas."
      },
      {
        "category": "Auscultatory Metaphors",
        "difficulty": 4,
        "terms": [
          "Gallop",
          "Rub",
          "Click",
          "Snap"
        ],
        "explanation": "Descriptive heart-sound findings."
      }
    ]
  },
  {
    "id": 49,
    "groups": [
      {
        "category": "Metal Chelation Pairings",
        "difficulty": 1,
        "terms": [
          "Deferoxamine",
          "EDTA",
          "Dimercaprol",
          "Succimer"
        ],
        "explanation": "Chelators used for iron, lead, and other heavy metals."
      },
      {
        "category": "Acute-Phase Reactants",
        "difficulty": 2,
        "terms": [
          "CRP",
          "Fibrinogen",
          "Ferritin",
          "Serum Amyloid A"
        ],
        "explanation": "Proteins that rise (or fall, for albumin) with inflammation — positive reactants listed."
      },
      {
        "category": "Pediatric Small Round Blue Cell Tumors",
        "difficulty": 3,
        "terms": [
          "Neuroblastoma",
          "Wilms Tumor",
          "Ewing Sarcoma",
          "Medulloblastoma"
        ],
        "explanation": "Classic tumors in the small round blue cell differential."
      },
      {
        "category": "___ Phenomenon",
        "difficulty": 4,
        "terms": [
          "Raynaud",
          "Koebner",
          "Ashman",
          "Dawn"
        ],
        "explanation": "Named clinical phenomena across specialties."
      }
    ]
  },
  {
    "id": 50,
    "groups": [
      {
        "category": "Toxin / Drug Antidotes",
        "difficulty": 1,
        "terms": [
          "Naloxone",
          "Flumazenil",
          "N-Acetylcysteine",
          "Fomepizole"
        ],
        "explanation": "Antidotes for opioids, benzos, acetaminophen, and toxic alcohols."
      },
      {
        "category": "Cations on Chem Panels",
        "difficulty": 2,
        "terms": [
          "Sodium",
          "Potassium",
          "Calcium",
          "Magnesium"
        ],
        "explanation": "Major cations monitored in acute care."
      },
      {
        "category": "Hypothalamic Nuclei",
        "difficulty": 3,
        "terms": [
          "Supraoptic",
          "Paraventricular",
          "Arcuate",
          "Suprachiasmatic"
        ],
        "explanation": "Nuclei tied to ADH/oxytocin, releasing factors, and circadian rhythm."
      },
      {
        "category": "End-of-Course Clinical Words",
        "difficulty": 4,
        "terms": [
          "Remission",
          "Cure",
          "Discharge",
          "Follow-Up"
        ],
        "explanation": "Terms associated with completing a clinical course."
      }
    ]
  }
];
  global.MED_PUZZLES = MED_PUZZLES;
})(typeof window !== "undefined" ? window : globalThis);
