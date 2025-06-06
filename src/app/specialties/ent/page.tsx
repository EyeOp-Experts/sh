// app/specialties/ent-surgery/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import SurgeryPageLayout from "@/components/surgery/SurgeryPageLayout";
import { BreadcrumbItem } from "@/components/layout/Breadcrumb";

const ENTSurgery = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Specialties", path: "/specialties" },
    { label: "ENT Surgery" }
  ];
  
  const surgeryData = {
    title: "ENT Surgery",
    description: "Our ENT (Ear, Nose, Throat) department specializes in surgical treatments for conditions affecting these vital areas. We offer advanced procedures with a focus on restoring function and enhancing quality of life.",
    image: "/assets/icons/ent.jpeg",
    eligibility: "Patients with ENT conditions requiring surgical intervention",
    recommended: false
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SurgeryPageLayout 
        breadcrumbItems={breadcrumbItems} 
        surgeryData={surgeryData}
      >
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-medical-dark mb-4">Available Procedures</h2>
          <div className="space-y-6">
            {[ 
              {
                name: "Tonsillectomy",
                description: "Surgical removal of the tonsils, typically to treat recurrent throat infections, sleep apnea, or breathing problems.",
              },
              {
                name: "Septoplasty",
                description: "Procedure to correct a deviated nasal septum, improving breathing and relieving nasal obstruction.",
              },
              {
                name: "Myringoplasty/Tympanoplasty",
                description: "Repair of a perforated eardrum to restore hearing and prevent recurring ear infections.",
              },
              {
                name: "Endoscopic Sinus Surgery",
                description: "Minimally invasive procedure to treat chronic sinusitis and nasal polyps using an endoscope.",
              }
            ].map((procedure, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-medical-dark">{procedure.name}</h3>
                <p className="text-gray-600 mb-3">{procedure.description}</p>
              </div>
            ))}
          </div>
        </div>
      </SurgeryPageLayout>
      <Footer />
      <WhatsAppFloat />
    </div>
  );
};

export default ENTSurgery;
