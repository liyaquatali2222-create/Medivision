export type MedicineType = 'allopathy' | 'ayurveda' | 'unani' | 'homeopathic' | 'herbal' | 'supplement';

export type MedicineRecord = {
  id: string;
  name: string;
  type: MedicineType;
  genericName: string;
  brandNames: string[];
  composition: string;
  activeIngredients: string[];
  strengths: string[];
  dosageForms: string[];
  approvedIndications: string[];
  contraindications: string[];
  sideEffects: string[];
  drugInteractions: string[];
  warnings: string[];
  storageInstructions: string[];
  manufacturer: string;
  regulatoryStatus: string;
  references: string[];
  reliability: string;
};

export const medicineDatabase: MedicineRecord[] = [
  {
    id: 'paracetamol-500',
    name: 'Paracetamol',
    type: 'allopathy',
    genericName: 'Paracetamol',
    brandNames: ['Crocin', 'Calpol', 'Dolo 650'],
    composition: 'Paracetamol tablet / suspension / oral solution',
    activeIngredients: ['Paracetamol'],
    strengths: ['500 mg', '650 mg', '125 mg/5 mL'],
    dosageForms: ['Tablet', 'Capsule', 'Suspension', 'Oral solution'],
    approvedIndications: ['Fever', 'Mild to moderate pain'],
    contraindications: ['Known severe liver disease'],
    sideEffects: ['Nausea', 'Liver injury with excessive dosing'],
    drugInteractions: ['Alcohol', 'Other acetaminophen-containing products'],
    warnings: ['Do not exceed the labelled dose.'],
    storageInstructions: ['Store in a cool dry place below 25°C.'],
    manufacturer: 'Demonstration dataset - verify with approved product label.',
    regulatoryStatus: 'Local demonstration dataset; verify with CDSCO / approved product information.',
    references: ['CDSCO product information', 'WHO medicines information', 'National formulary references'],
    reliability: 'Educational local dataset; not for clinical use without verification.',
  },
  {
    id: 'amoxicillin-500',
    name: 'Amoxicillin',
    type: 'allopathy',
    genericName: 'Amoxicillin',
    brandNames: ['Moxclav', 'Amoxil', 'Alphamox'],
    composition: 'Amoxicillin trihydrate capsule or suspension',
    activeIngredients: ['Amoxicillin'],
    strengths: ['250 mg', '500 mg'],
    dosageForms: ['Capsule', 'Suspension'],
    approvedIndications: ['Respiratory infections', 'Ear infection', 'Urt infection in selected cases'],
    contraindications: ['Penicillin allergy'],
    sideEffects: ['Diarrhoea', 'Nausea', 'Rash'],
    drugInteractions: ['Oral contraceptives', 'Methotrexate', 'Some anti-infectives'],
    warnings: ['Complete the prescribed course.', 'Discuss allergy history.'],
    storageInstructions: ['Store as directed on package label.'],
    manufacturer: 'Demonstration dataset - verify with approved product label.',
    regulatoryStatus: 'Local demonstration dataset; verify with CDSCO / approved product information.',
    references: ['CDSCO product information', 'WHO antibiotics guidance', 'Drug label review'],
    reliability: 'Educational local dataset; not for clinical use without verification.',
  },
  {
    id: 'metformin-500',
    name: 'Metformin',
    type: 'allopathy',
    genericName: 'Metformin hydrochloride',
    brandNames: ['Glucophage', 'Glycomet'],
    composition: 'Metformin hydrochloride tablets',
    activeIngredients: ['Metformin'],
    strengths: ['500 mg', '850 mg', '1000 mg'],
    dosageForms: ['Tablet'],
    approvedIndications: ['Type 2 diabetes mellitus'],
    contraindications: ['Severe renal impairment', 'Acute metabolic acidosis'],
    sideEffects: ['Gastrointestinal upset', 'Vitamin B12 deficiency'],
    drugInteractions: ['Alcohol', 'IV contrast media'],
    warnings: ['Stop in acute illness as advised by a clinician.'],
    storageInstructions: ['Store below 30°C in original packaging.'],
    manufacturer: 'Demonstration dataset - verify with approved product label.',
    regulatoryStatus: 'Local demonstration dataset; verify with CDSCO / approved product information.',
    references: ['Indian diabetes guidelines', 'CDSCO product information', 'WHO essential medicines list'],
    reliability: 'Educational local dataset; not for clinical use without verification.',
  },
  {
    id: 'ashwagandha',
    name: 'Ashwagandha',
    type: 'ayurveda',
    genericName: 'Withania somnifera',
    brandNames: ['Ashwagandha Churna', 'Stress Care', 'Ayurvedic adaptogen blend'],
    composition: 'Withania somnifera root powder',
    activeIngredients: ['Withanolides'],
    strengths: ['250 mg', '500 mg', '1 g'],
    dosageForms: ['Powder', 'Capsule', 'Tablet'],
    approvedIndications: ['Stress support', 'General vitality support'],
    contraindications: ['Pregnancy without clinician approval', 'Autoimmune conditions'],
    sideEffects: ['Sleepiness', 'Digestive upset'],
    drugInteractions: ['Sedatives', 'Immunosuppressants'],
    warnings: ['Evidence varies; traditional claims should be separated from clinical evidence.'],
    storageInstructions: ['Store in airtight container away from moisture.'],
    manufacturer: 'Demonstration dataset - verify with licensed Ayurvedic manufacturer.',
    regulatoryStatus: 'Local demonstration dataset; verify with licensing and safety guidance.',
    references: ['Ayurveda pharmacopoeia', 'Systematic reviews', 'Traditional use references'],
    reliability: 'Traditional use information only; not a substitute for medical advice.',
  },
  {
    id: 'triphala',
    name: 'Triphala',
    type: 'ayurveda',
    genericName: 'Triphala',
    brandNames: ['Triphala Churna', 'Ayurvedic bowel support'],
    composition: 'Haritaki + Bibhitaki + Amalaki',
    activeIngredients: ['Terminalia chebula', 'Terminalia bellirica', 'Emblica officinalis'],
    strengths: ['500 mg', '1 g'],
    dosageForms: ['Powder', 'Tablet'],
    approvedIndications: ['Digestive support', 'Traditional bowel health support'],
    contraindications: ['Severe diarrhoea', 'Dehydration'],
    sideEffects: ['Loose stools', 'Abdominal discomfort'],
    drugInteractions: ['Laxatives', 'Diuretics'],
    warnings: ['Traditional use only. Evaluate individual needs and medication interactions.'],
    storageInstructions: ['Store sealed, dry and away from humidity.'],
    manufacturer: 'Demonstration dataset - verify manufacturer licensing.',
    regulatoryStatus: 'Local demonstration dataset; verify with licensing and safety guidance.',
    references: ['Ayurvedic literature', 'Herbal pharmacology reviews', 'Traditional use references'],
    reliability: 'Traditional use information only; not a substitute for medical advice.',
  },
  {
    id: 'ajwa-date',
    name: 'Ajwa Dates',
    type: 'herbal',
    genericName: 'Phoenix dactylifera (Ajwa dates)',
    brandNames: ['Ajwa Dates', 'Madina Dates'],
    composition: 'Dried date fruit',
    activeIngredients: ['Natural sugars', 'Dietary fibre', 'Potassium'],
    strengths: ['Whole fruit'],
    dosageForms: ['Whole fruit', 'Powder'],
    approvedIndications: ['Traditional nutritional support'],
    contraindications: ['Diabetes unless clinically approved'],
    sideEffects: ['Hyperglycaemia in susceptible individuals'],
    drugInteractions: ['Blood glucose-lowering treatment'],
    warnings: ['Use as part of balanced diet. Assess blood sugar control if diabetic.'],
    storageInstructions: ['Store cool, dry and sealed.'],
    manufacturer: 'Natural food product',
    regulatoryStatus: 'Local demonstration dataset; verify with food standards and supplier quality documentation.',
    references: ['Food composition data', 'Traditional and historical references', 'Research reviews'],
    reliability: 'Traditional and nutritional information only; not medical treatment.',
  },
];
