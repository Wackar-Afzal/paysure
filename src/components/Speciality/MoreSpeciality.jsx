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
    { name: "Orthopedics", icon: <Accessibility className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
    { name: "Cardiology", icon: <Favorite className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Pediatrics", icon: <ChildCare className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
    { name: "Anesthesia", icon: <LocalHospital className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
    { name: "Family Medicine", icon: <FamilyRestroom className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
  
    { name: "Oral and Maxillofacial Surgery", icon: <MedicalServices className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
    { name: "General Practice", icon: <Person className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Chiropractor", icon: <FitnessCenter className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
    { name: "Dermatology", icon: <WbSunny className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Podiatry", icon: <DirectionsWalk className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
  
    { name: "Endocrinology", icon: <ChildCareIcon  className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Osteopathic", icon: <Spa className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Surgery", icon: <LocalPharmacy className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
    { name: "Internal Medicine", icon: <MonitorHeart className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Respiratory", icon: <Air className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
  
    { name: "Occupational Therapy", icon: <AccessibilityNew className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
    { name: "Vascular Surgery", icon: <Bloodtype className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Urology", icon: <WaterDrop className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Speech Therapy", icon: <RecordVoiceOver className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Physical Therapy", icon: <DirectionsRun className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
  
    { name: "Psychiatry", icon: <Psychology className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Radiology", icon: <RadioButtonChecked className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Plastic Surgery", icon: <Face className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Physiotherapy", icon: <SelfImprovement className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
    { name: "NEMT", icon: <AirportShuttle className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
  
    { name: "Pathologists", icon: <Science className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Emergency Medicine", icon: <EmergencyShare className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Pain Management", icon: <Healing className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Ophthalmology", icon: <Visibility className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Gastroenterology", icon: <Restaurant className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
  
    { name: "Oncology", icon: <BiotechOutlined className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Neurology", icon: <PsychologyAlt className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
    { name: "Neonatology", icon: <ChildFriendly className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Mental Health", icon: <FavoriteAlt className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
    { name: "Infectious Disease", icon: <Coronavirus className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
  
    { name: "Hepatology", icon: <MonitorWeight className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Hematology", icon: <BloodtypeOutlined className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "Geriatrics", icon: <ElderlyWoman className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
    { name: "ENT", icon: <Hearing className="text-blue-600 w-[18rem] h-10 !text-[4rem]" /> ,text:"text1"},
    { name: "Otolaryngology", icon: <EarbudsOutlined className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
  
    { name: "Dentistry", icon: <MedicalServices className="text-blue-600 w-[18rem] h-10 !text-[4rem]" />,text:"text1" },
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
  
  