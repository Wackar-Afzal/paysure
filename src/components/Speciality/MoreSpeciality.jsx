import {
    Accessibility,
    Favorite,
    ChildCare,
    LocalHospital,
    FamilyRestroom,
    MedicalServices,
    Person,
    FitnessCenter,
    WbSunny,
    DirectionsWalk,
   
    Spa,
    LocalPharmacy,
    MonitorHeart,
    Air,
    AccessibilityNew,
    Bloodtype,
    WaterDrop,
    RecordVoiceOver,
    DirectionsRun,
    Psychology,
    RadioButtonChecked,
    Face,
    SelfImprovement,
    AirportShuttle,
    Science,
    EmergencyShare,
    Healing,
    Visibility,
    Restaurant,
    BiotechOutlined,
    Psychology as PsychologyAlt,
    ChildFriendly,
    Favorite as FavoriteAlt,
    Coronavirus,
    MonitorWeight,
    BloodtypeOutlined,
    ElderlyWoman,
    Hearing,
    EarbudsOutlined,
  } from "@mui/icons-material"

  import ChildCareIcon from '@mui/icons-material/ChildCare';
  
  // Define the specialty data structure
  const specialties = [
    { name: "Orthopedics", icon: <Accessibility className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Orthopedic billing services optimizing revenue and patient satisfaction."},
    { name: "Cardiology", icon: <Favorite className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Cardiology billing services boosting revenue and reducing denials." },
    { name: "Pediatrics", icon: <ChildCare className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Custom pediatric billing solutions to maximize revenue cycles."},
    { name: "Anesthesia", icon: <LocalHospital className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Anesthesiology billing services to maximize profits and reduce denials."},
    { name: "Family Medicine", icon: <FamilyRestroom className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Family medicine billing services optimizing revenue for general practitioners." },
  
    { name: "Oral and Maxillofacial Surgery", icon: <MedicalServices className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Custom billing solutions for maxillofacial surgeons with integrated health records management."},
    { name: "General Practice", icon: <Person className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Custom medical billing and coding services for general practices seeking faster reimbursements." },
    { name: "Chiropractor", icon: <FitnessCenter className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Tailored billing solutions for chiropractors to maximize profits and improve patient experience."},
    { name: "Dermatology", icon: <WbSunny className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Dermatology billing services maximizing revenue and minimizing denials for faster reimbursements." },
    { name: "Podiatry", icon: <DirectionsWalk className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Podiatry billing services to maximize profits and minimize denials." },
  
    { name: "Endocrinology", icon: <ChildCareIcon  className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Endocrinology coding services minimizing denials and optimizing claim submissions." },
    { name: "Osteopathic", icon: <Spa className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Osteopathic billing and coding services for swift OMT reimbursements and error-free claims." },
    { name: "Surgery", icon: <LocalPharmacy className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Outsource surgical medical billing to experts who maximize surgeon revenue."},
    { name: "Internal Medicine", icon: <MonitorHeart className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Medical billing services for internal medicine doctors seeking a streamlined billing cycle." },
    { name: "Respiratory", icon: <Air className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Custom billing solutions for pathologists to optimize revenue cycles." },
  
    { name: "Occupational Therapy", icon: <AccessibilityNew className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Custom medical billing services for OT clinicians ensuring coding compliance."},
    { name: "Vascular Surgery", icon: <Bloodtype className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Fast payments for vascular surgeons with electronic claims and precise coding." },
    { name: "Urology", icon: <WaterDrop className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Urology billing services by certified coders, optimizing revenue and resolving denials." },
    { name: "Speech Therapy", icon: <RecordVoiceOver className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Custom billing solutions for speech therapists to enhance revenue cycles." },
    { name: "Physical Therapy", icon: <DirectionsRun className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Tailored billing solutions for speech therapists to optimize revenue cycles." },
  
    { name: "Psychiatry", icon: <Psychology className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Psychiatry billing services to maximize profits and minimize denials." },
    { name: "Radiology", icon: <RadioButtonChecked className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Specialized radiology billing services for lab tests with accurate, error-free coding." },
    { name: "Plastic Surgery", icon: <Face className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Medical billing services for plastic surgeons to maximize revenue flow." },
    { name: "Physiotherapy", icon: <SelfImprovement className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Physiotherapy billing services to boost profits and improve patient satisfaction."},
    { name: "NEMT", icon: <AirportShuttle className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Custom billing solutions for EMT and NEMT providers to maximize financial performance." },
  
    { name: "Pathologists", icon: <Science className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Tailored pathology billing services designed to meet each client's unique needs." },
    { name: "Emergency Medicine", icon: <EmergencyShare className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Outsource emergency medicine billing for seamless revenue management." },
    { name: "Pain Management", icon: <Healing className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Outsource pain management billing and coding for seamless reimbursements." },
    { name: "Ophthalmology", icon: <Visibility className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Ophthalmology billing services with complete revenue cycle management." },
    { name: "Gastroenterology", icon: <Restaurant className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Gastroenterology billing services with rapid claim submission."},
  
    { name: "Oncology", icon: <BiotechOutlined className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Oncology-optimized billing solutions for error-free claims and fast revenue recovery." },
    { name: "Neurology", icon: <PsychologyAlt className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Neurology billing services ensuring accurate payments for neurologists."},
    { name: "Neonatology", icon: <ChildFriendly className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Mental health billing services for behavioral health practices and therapists." },
    { name: "Mental Health", icon: <FavoriteAlt className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Medical billing services for infectious disease practices to streamline the billing cycle."},
    { name: "Infectious Disease", icon: <Coronavirus className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Outsource hepatology billing to our experts for improved cash flow."},
  
    { name: "Hepatology", icon: <MonitorWeight className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Outsource your Hepatology billing to our medical billing company for better cash flow." },
    { name: "Hematology", icon: <BloodtypeOutlined className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Hematology billing services with automated claim scrubbing for optimized revenue growth." },
    { name: "Geriatrics", icon: <ElderlyWoman className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Geriatric billing services for optimized revenue cycle management." },
    { name: "ENT", icon: <Hearing className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"Comprehensive ENT billing solutions in one place."},
    { name: "Otolaryngology", icon: <EarbudsOutlined className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"Otolaryngology billing solutions ensuring prompt and accurate payments." },
  
    { name: "Dentistry", icon: <MedicalServices className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"We simplify billing and coding for dentists." },
  ]
  
  export default function MedicalSpecialtiesGrid() {
    return (
        <div className="bg-primary p-4 md:p-6 lg:p-8 min-h-screen">
        <div className="flex justify-center items-center flex-wrap gap-4">
          {specialties.map((specialty, index) => (
            <div
              key={index}
              className="relative w-[15rem] h-[10rem] rounded-xl shadow-md hover:shadow-lg transition-shadow overflow-hidden group"
            >
              {/* Front card (Icon + Name) */}
              <div className="absolute inset-0 bg-white p-4 flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out group-hover:translate-x-[-100%]">
                <div className="mb-2">{specialty.icon}</div>
                <div className="text-center text-xs sm:text-sm font-medium text-indigo-900">{specialty.name}</div>
              </div>
      
              {/* Back card (Text Description) */}
              <div className="absolute inset-0 bg-secondary p-4 flex items-center justify-center transform translate-x-full transition-transform duration-300 ease-in-out group-hover:translate-x-0">
                <p className="text-sm text-white text-center">{specialty.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    )
  }
  
  