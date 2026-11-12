import { useMemo, useState } from 'react';
import { ThreeAnatomy } from './components/ThreeAnatomy';
import { medicineDatabase } from './data/medicineData';

type Language = 'en' | 'hi' | 'gu' | 'mr' | 'ur';

const translations = {
  en: {
    appName: 'MEDIVISION 3D AI',
    subtitle: 'Complete medical intelligence platform',
    dashboard: 'Dashboard',
    medicineDatabase: 'Medicine Database',
    ayurveda: 'Ayurveda',
    unani: 'Unani',
    tibb: 'Tibb-e-Nabawi',
    anatomy: '3D Anatomy',
    reports: 'AI Reports',
    patients: 'Patient Management',
    admin: 'Administration',
    search: 'Search',
    quickActions: 'Quick actions',
    aiAssistant: 'AI Medical Assistant',
    voiceAssistant: 'Voice Assistant',
    reportGenerator: 'Report Generator',
    knowledgeLibrary: 'Medical Knowledge Library',
    diseaseInfo: 'Disease Information',
    medicineSearch: 'Medicine Search',
    allopathy: 'Allopathy',
    ayurvedaShort: 'Ayurveda',
    unaniShort: 'Unani',
    herbal: 'Herbal',
    supplement: 'Supplements',
    patient: 'Patient',
    adminLogin: 'Admin Login',
    disclaimer: 'Educational and informational content only. Not a diagnostic or treatment substitute.',
    lookingFor: 'Looking for a medicine?',
    showHydration: 'Hydration and safety advice',
    showData: 'Clinical references',
    generatedNote: 'Preliminary report only. Not a diagnosis.',
    languageLabel: 'Language',
  },
  hi: {
    appName: 'मेडिविजन 3D AI',
    subtitle: 'पूर्ण मेडिकल इन्फॉर्मेशन प्लेटफॉर्म',
    dashboard: 'डैशबोर्ड',
    medicineDatabase: 'दवा डेटाबेस',
    ayurveda: 'आयुर्वेद',
    unani: 'यूनानी',
    tibb: 'तिब्ब-ए-नबवी',
    anatomy: '3D शरीर रचना',
    reports: 'एआई रिपोर्ट',
    patients: 'रोगी प्रबंधन',
    admin: 'प्रशासन',
    search: 'खोजें',
    quickActions: 'त्वरित क्रियाएँ',
    aiAssistant: 'एआई मेडिकल सहायक',
    voiceAssistant: 'वॉइस सहायक',
    reportGenerator: 'रिपोर्ट जनरेटर',
    knowledgeLibrary: 'मेडिकल ज्ञान पुस्तकालय',
    diseaseInfo: 'रोग सूचना',
    medicineSearch: 'दवा खोज',
    allopathy: 'एलोपैथी',
    ayurvedaShort: 'आयुर्वेद',
    unaniShort: 'यूनानी',
    herbal: 'हर्बल',
    supplement: 'सप्लीमेंट',
    patient: 'रोगी',
    adminLogin: 'एडमिन लॉगिन',
    disclaimer: 'केवल शैक्षिक और सूचनात्मक सामग्री। यह निदान या उपचार का विकल्प नहीं है।',
    lookingFor: 'किसी दवा की तलाश है?',
    showHydration: 'हाइड्रेशन और सुरक्षा सलाह',
    showData: 'नैदानिक संदर्भ',
    generatedNote: 'प्रारंभिक रिपोर्ट केवल। निदान नहीं।',
    languageLabel: 'भाषा',
  },
  gu: {
    appName: 'મેડીવિઝન 3D AI',
    subtitle: 'સંપૂર્ણ मेडिकल ઇન્ફરમેશન પ્લેટફોર્મ',
    dashboard: 'ડેશબોર્ડ',
    medicineDatabase: 'મેડિસિન ડેટાબેઝ',
    ayurveda: 'આયુર્વેદ',
    unani: 'યુનાની',
    tibb: 'તિબ્બ-એ-નબવી',
    anatomy: '3D તેમના શારીરિક રચના',
    reports: 'AI રિપોર્ટ',
    patients: 'રોગી મેનેજમેન્ટ',
    admin: 'સંચાલન',
    search: 'શોધો',
    quickActions: 'ઝડપી ક્રિયાઓ',
    aiAssistant: 'AI רפואા સહાયક',
    voiceAssistant: 'વોઇસ સહાયક',
    reportGenerator: 'રિપોર્ટ જનરેટર',
    knowledgeLibrary: 'મેડિકલ નોલેજ લાઇબ્રેરી',
    diseaseInfo: 'રોગ માહિતી',
    medicineSearch: 'મેડિસિન શોધ',
    allopathy: 'એલોપથી',
    ayurvedaShort: 'આયુર્વેદ',
    unaniShort: 'યુનાની',
    herbal: 'હર્બલ',
    supplement: 'સપ્લિમેન્ટ',
    patient: 'રોગી',
    adminLogin: 'એડમિન લૉગિન',
    disclaimer: 'માત્ર શૈક્ષણિક અને માહિતિત્વક્ષમ સામગ્રી. નિદાન અથવા સારવારનો વિકલ્પ નથી.',
    lookingFor: 'કઈ દવા શોધી રહ્યા છો?',
    showHydration: 'હાઈડ્રેશન અને સુરક્ષા સલાહ',
    showData: 'ક્લિનિકલ સંદર્ભ',
    generatedNote: 'પ્રાથમિક રિપોર્ટ માત્ર. નિદાન નથી.',
    languageLabel: 'ભાષા',
  },
  mr: {
    appName: 'मेडिव्हिजन 3D AI',
    subtitle: 'पूर्ण वैद्यकीय माहिती मंच',
    dashboard: 'डॅशबोर्ड',
    medicineDatabase: 'औषधी डेटाबेस',
    ayurveda: 'आयुर्वेद',
    unani: 'यूनानी',
    tibb: 'तिब्ब-ए-नबवी',
    anatomy: '3D शरीर रचना',
    reports: 'AI रिपोर्ट',
    patients: 'रुग्ण व्यवस्थापन',
    admin: 'प्रशासन',
    search: 'शोध',
    quickActions: 'त्वरित कृती',
    aiAssistant: 'AI वैद्यकीय सहाय्यक',
    voiceAssistant: 'व्हॉइस सहाय्यक',
    reportGenerator: 'रिपोर्ट जनरेटर',
    knowledgeLibrary: 'वैद्यकीय ज्ञान ग्रंथालय',
    diseaseInfo: 'रोग माहिती',
    medicineSearch: 'औषधी शोध',
    allopathy: 'एलोपॅथी',
    ayurvedaShort: 'आयुर्वेद',
    unaniShort: 'युनानी',
    herbal: 'हरबल',
    supplement: 'सप्लिमेंट',
    patient: 'रुग्ण',
    adminLogin: 'अ‍ॅडमिन लॉगिन',
    disclaimer: 'केवळ शैक्षणिक आणि माहितीपूर्ण मजकूर. निदान किंवा उपचाराचा पर्याय नाही.',
    lookingFor: 'कृपया औषधी शोधत आहात?',
    showHydration: 'हायड्रेशन आणि सुरक्षा सूचना',
    showData: 'क्लिनिकल संदर्भ',
    generatedNote: 'प्रारंभिक अहवाल फक्त. निदान नाही.',
    languageLabel: 'भाषा',
  },
  ur: {
    appName: 'MEDIVISION 3D AI',
    subtitle: 'مکمل طبی معلوماتی پلیٹ فارم',
    dashboard: 'ڈیش بورڈ',
    medicineDatabase: 'دوا ڈیٹا بیس',
    ayurveda: 'آیوید',
    unani: 'یونانی',
    tibb: 'طب نبوی',
    anatomy: '3D جسمانی ڈھانچہ',
    reports: 'AI رپورٹس',
    patients: 'مریض کا انتظام',
    admin: 'انتظامیہ',
    search: 'تلاش',
    quickActions: 'فوری اعمال',
    aiAssistant: 'AI طبی معاون',
    voiceAssistant: 'صوتی معاون',
    reportGenerator: 'رپورٹ جنریٹر',
    knowledgeLibrary: 'طبی علم کی لائبریری',
    diseaseInfo: 'مرض کی معلومات',
    medicineSearch: 'دوا تلاش',
    allopathy: 'الپتھی',
    ayurvedaShort: 'آیوید',
    unaniShort: 'یونانی',
    herbal: 'حیوانی',
    supplement: 'سپلیمنٹ',
    patient: 'مریض',
    adminLogin: 'ایڈمن لاگ ان',
    disclaimer: 'صرف تعلیمی اور معلوماتی مواد۔ تشخیص یا علاج کا متبادل نہیں۔',
    lookingFor: 'کسی دوا کی تلاش ہے؟',
    showHydration: 'ہائیڈریشن اور حفاظتی مشورہ',
    showData: 'کلینیکل حوالہ',
    generatedNote: 'ابتدائی رپورٹ صرف۔ تشخیص نہیں۔',
    languageLabel: 'زبان',
  },
} as const;

const navItems = ['dashboard', 'medicineDatabase', 'ayurveda', 'unani', 'tibb', 'anatomy', 'reports', 'patients', 'admin'] as const;

const organOptions = ['brain', 'heart', 'lungs', 'liver', 'kidneys', 'stomach', 'intestines'];

const demoReports = [
  'Persistent fatigue during the day',
  'Fever and body ache for three days',
  'Shortness of breath after exercise',
  'Persistent headache after travel',
];

const sampleCommands = [
  'Find information about this medicine.',
  'Explain this medical report.',
  'Show me the human heart in 3D.',
  'Compare these two medicines.',
  'Find traditional Unani references for this ingredient.',
];

function App() {
  const [language, setLanguage] = useState<Language>('en');
  const [activeView, setActiveView] = useState<typeof navItems[number]>('dashboard');
  const [query, setQuery] = useState('');
  const [selectedMedicineId, setSelectedMedicineId] = useState(medicineDatabase[0].id);
  const [selectedOrgan, setSelectedOrgan] = useState('heart');
  const [symptoms, setSymptoms] = useState('Mild fever and fatigue for 3 days with abdominal discomfort.');

  const t = translations[language];
  const isRtl = language === 'ur';

  const filteredMedicines = useMemo(() => {
    const safeQuery = query.trim().toLowerCase();
    if (!safeQuery) return medicineDatabase;
    return medicineDatabase.filter((medicine) =>
      `${medicine.name} ${medicine.genericName} ${medicine.activeIngredients.join(' ')} ${medicine.brandNames.join(' ')}`
        .toLowerCase()
        .includes(safeQuery),
    );
  }, [query]);

  const selectedMedicine = filteredMedicines.find((item) => item.id === selectedMedicineId) ?? medicineDatabase[0];

  const reportText = useMemo(() => {
    const symptomList = symptoms || 'No symptoms entered';
    return [
      'Patient-provided information: local prototype report',
      `Symptoms: ${symptomList}`,
      'Duration: 3 days',
      'Relevant history: mild dehydration, no known severe allergies recorded',
      'Possible explanations: viral illness, medication-related effect, or other non-emergency cause',
      'Relevant tests to discuss: CBC, inflammatory markers, renal function if indicated',
      'Warning signs: chest pain, severe breathing difficulty, confusion, prolonged bleeding',
      'Recommended next steps: consult a qualified clinician for review and further assessment',
      'Source references: local prototype dataset and evidence review; not a diagnosis',
    ].join('\n');
  }, [symptoms]);

  return (
    <div className={`app-shell ${isRtl ? 'rtl' : 'ltr'}`} dir={isRtl ? 'rtl' : 'ltr'}>
      <aside className="sidebar">
        <div className="brand-block">
          <div className="brand-mark">M</div>
          <div>
            <h1>{t.appName}</h1>
            <small>{t.subtitle}</small>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map((item) => (
            <button
              key={item}
              className={activeView === item ? 'nav-item active' : 'nav-item'}
              onClick={() => setActiveView(item)}
            >
              {t[item] || item}
            </button>
          ))}
        </nav>

        <div className="mini-card">
          <span>{t.languageLabel}</span>
          <div className="language-switcher">
            {(['en', 'hi', 'gu', 'mr', 'ur'] as Language[]).map((lang) => (
              <button
                key={lang}
                className={language === lang ? 'lang active' : 'lang'}
                onClick={() => setLanguage(lang)}
              >
                {lang.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </aside>

      <main className="content-area">
        <header className="topbar">
          <div>
            <p className="eyebrow">{t.quickActions}</p>
            <h2>{t.dashboard}</h2>
          </div>
          <div className="header-actions">
            <button className="primary-btn">{t.aiAssistant}</button>
            <button className="secondary-btn">{t.voiceAssistant}</button>
          </div>
        </header>

        {activeView === 'dashboard' && (
          <div className="page-section">
            <section className="hero-grid">
              <div className="hero-card large">
                <div className="hero-header">
                  <div>
                    <p className="eyebrow">{t.aiAssistant}</p>
                    <h3>Clinical triage support</h3>
                  </div>
                  <span className="status-pill">Hybrid</span>
                </div>
                <div className="hero-stats">
                  <div>
                    <strong>1.2K+</strong>
                    <span>Medications</span>
                  </div>
                  <div>
                    <strong>24/7</strong>
                    <span>Support</span>
                  </div>
                  <div>
                    <strong>5</strong>
                    <span>Languages</span>
                  </div>
                </div>
              </div>

              <div className="hero-card compact">
                <p className="eyebrow">{t.medicineSearch}</p>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t.lookingFor}
                />
                <ul className="chip-list">
                  <li>{t.allopathy}</li>
                  <li>{t.ayurvedaShort}</li>
                  <li>{t.unaniShort}</li>
                  <li>{t.herbal}</li>
                  <li>{t.supplement}</li>
                </ul>
              </div>
            </section>

            <section className="stats-grid">
              {[
                { label: 'Medicine catalog', value: '1,284', tone: 'purple' },
                { label: 'Clinical references', value: '349', tone: 'blue' },
                { label: 'Safety alerts', value: '18', tone: 'amber' },
                { label: 'Patients tracked', value: '592', tone: 'green' },
              ].map((item) => (
                <div key={item.label} className={`metric-card ${item.tone}`}>
                  <small>{item.label}</small>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </section>

            <section className="module-grid">
              {[
                t.aiAssistant,
                t.medicineSearch,
                t.allopathy,
                t.ayurvedaShort,
                t.unaniShort,
                t.tibb,
                t.anatomy,
                t.reports,
                t.patients,
                t.knowledgeLibrary,
              ].map((module) => (
                <div key={module} className="module-card">
                  <span>•</span>
                  <strong>{module}</strong>
                </div>
              ))}
            </section>
          </div>
        )}

        {activeView === 'medicineDatabase' && (
          <div className="page-section two-col">
            <div className="panel">
              <div className="panel-header">
                <h3>{t.medicineDatabase}</h3>
                <input
                  type="text"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder={t.search}
                />
              </div>
              <div className="medicine-list">
                {filteredMedicines.map((medicine) => (
                  <button
                    key={medicine.id}
                    className={selectedMedicine.id === medicine.id ? 'medicine-item active' : 'medicine-item'}
                    onClick={() => setSelectedMedicineId(medicine.id)}
                  >
                    <strong>{medicine.name}</strong>
                    <small>{medicine.genericName}</small>
                    <span>{medicine.type}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="panel detail-panel">
              <h3>{selectedMedicine.name}</h3>
              <div className="meta-row">
                <span>{selectedMedicine.genericName}</span>
                <span>{selectedMedicine.regulatoryStatus}</span>
              </div>
              <ul className="info-list">
                <li><b>Brand names:</b> {selectedMedicine.brandNames.join(', ')}</li>
                <li><b>Composition:</b> {selectedMedicine.composition}</li>
                <li><b>Active ingredients:</b> {selectedMedicine.activeIngredients.join(', ')}</li>
                <li><b>Dosage forms:</b> {selectedMedicine.dosageForms.join(', ')}</li>
                <li><b>Indications:</b> {selectedMedicine.approvedIndications.join(', ')}</li>
                <li><b>Contraindications:</b> {selectedMedicine.contraindications.join(', ')}</li>
                <li><b>Warnings:</b> {selectedMedicine.warnings.join(', ')}</li>
                <li><b>References:</b> {selectedMedicine.references.join(', ')}</li>
              </ul>
            </div>
          </div>
        )}

        {activeView === 'ayurveda' && (
          <div className="page-section">
            <div className="library-grid">
              {[
                { title: 'Charaka Samhita', info: 'Classical Ayurvedic medicine and clinical reasoning.' },
                { title: 'Sushruta Samhita', info: 'Surgical and anatomical traditional references.' },
                { title: 'Ashtanga Hridaya', info: 'Foundational integrative clinical practice.' },
                { title: 'Medicinal plants', info: 'Botanical evidence and safety discussions.' },
              ].map((entry) => (
                <div key={entry.title} className="library-card">
                  <h3>{entry.title}</h3>
                  <p>{entry.info}</p>
                  <button>Open section</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'unani' && (
          <div className="page-section">
            <div className="library-grid">
              {[
                { title: 'Al-Qanun fi al-Tibb', info: 'Ibn Sina — classical medical principles and pharmacology.' },
                { title: 'Kitab al-Hawi', info: 'Al-Razi — compilation of clinical observations and therapies.' },
                { title: 'Al-Tasrif', info: 'Al-Zahrawi — surgical and therapeutic sources.' },
                { title: 'Classical Unani formulations', info: 'Historical remedies requiring modern clinical review.' },
              ].map((entry) => (
                <div key={entry.title} className="library-card">
                  <h3>{entry.title}</h3>
                  <p>{entry.info}</p>
                  <button>Open source</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'tibb' && (
          <div className="page-section">
            <div className="library-grid">
              {[
                { title: 'Honey', info: 'Traditional use and modern evidence review.' },
                { title: 'Black seed (Kalonji)', info: 'Historical references and safety guidance.' },
                { title: 'Dates & Ajwa', info: 'Nutritional role and traditional context.' },
                { title: 'Olive oil & Zamzam water', info: 'Evidence-based educational references.' },
              ].map((entry) => (
                <div key={entry.title} className="library-card">
                  <h3>{entry.title}</h3>
                  <p>{entry.info}</p>
                  <button>Review notes</button>
                </div>
              ))}
            </div>
          </div>
        )}

        {activeView === 'anatomy' && (
          <div className="page-section anatomy-layout">
            <div className="panel">
              <div className="panel-header">
                <h3>Interactive 3D Human Anatomy</h3>
              </div>
              <ThreeAnatomy selectedOrgan={selectedOrgan} />
              <div className="organ-pills">
                {organOptions.map((organ) => (
                  <button
                    key={organ}
                    className={selectedOrgan === organ ? 'organ-btn active' : 'organ-btn'}
                    onClick={() => setSelectedOrgan(organ)}
                  >
                    {organ}
                  </button>
                ))}
              </div>
            </div>
            <div className="panel detail-panel">
              <h3>{selectedOrgan.toUpperCase()}</h3>
              <p>
                Educational overview: the selected organ is shown in a 3D educational model. User interaction is intended to support learning and not substitute medical evaluation.
              </p>
              <ul className="info-list">
                <li><b>System:</b> Cardiovascular / Nervous / Digestive / Respiratory</li>
                <li><b>Role:</b> Primary life-support function and tissue specialization</li>
                <li><b>Clinical caution:</b> Symptoms should be reviewed by a qualified clinician.</li>
              </ul>
            </div>
          </div>
        )}

        {activeView === 'reports' && (
          <div className="page-section two-col">
            <div className="panel">
              <div className="panel-header">
                <h3>{t.reportGenerator}</h3>
              </div>
              <textarea
                value={symptoms}
                onChange={(event) => setSymptoms(event.target.value)}
                rows={8}
                placeholder="Describe symptoms, duration and relevant history"
              />
              <div className="action-row">
                <button className="primary-btn">Generate report</button>
                <button className="secondary-btn">Export PDF</button>
              </div>
              <div className="voice-demo">
                <p>Voice commands</p>
                <ul>
                  {sampleCommands.map((cmd) => (
                    <li key={cmd}>{cmd}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="panel detail-panel">
              <h3>Preliminary report</h3>
              <pre>{reportText}</pre>
              <small>{t.generatedNote}</small>
            </div>
          </div>
        )}

        {activeView === 'patients' && (
          <div className="page-section two-col">
            <div className="panel">
              <div className="panel-header">
                <h3>Patient records</h3>
              </div>
              <div className="patient-list">
                {[
                  { name: 'Ayesha Khan', risk: 'Follow-up due', visit: '14 Nov' },
                  { name: 'Rohan Mehta', risk: 'Stable', visit: '15 Nov' },
                  { name: 'Nisha Patel', risk: 'Review labs', visit: '18 Nov' },
                ].map((patient) => (
                  <div key={patient.name} className="patient-row">
                    <strong>{patient.name}</strong>
                    <span>{patient.risk}</span>
                    <small>{patient.visit}</small>
                  </div>
                ))}
              </div>
            </div>

            <div className="panel detail-panel">
              <h3>Prescription & follow-up</h3>
              <ul className="info-list">
                <li>Medication list stored with privacy controls</li>
                <li>Appointment records and PDF export available</li>
                <li>Role-based access and audit logs are required before clinical deployment</li>
              </ul>
            </div>
          </div>
        )}

        {activeView === 'admin' && (
          <div className="page-section">
            <div className="admin-grid">
              {[
                'User management',
                'Medicine catalogue',
                'Reference management',
                'Language management',
                'Content verification',
                'Audit logs',
                'Backup & restore',
                'Permissions',
              ].map((item) => (
                <div key={item} className="admin-card">
                  <h3>{item}</h3>
                  <p>Secure admin workflow with verification requirements and privacy safeguards.</p>
                </div>
              ))}
            </div>
          </div>
        )}

        <footer className="site-footer">
          <p>{t.disclaimer}</p>
        </footer>
      </main>
    </div>
  );
}

export default App;
