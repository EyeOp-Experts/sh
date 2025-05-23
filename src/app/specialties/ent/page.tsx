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
    image: "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    recoveryTime: "1-4 weeks (varies by procedure)",
    costRange: "₹20,000 - ₹90,000",
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
                duration: "30-45 minutes",
                recovery: "10-14 days",
                cost: "₹20,000 - ₹45,000"
              },
              {
                name: "Septoplasty",
                description: "Procedure to correct a deviated nasal septum, improving breathing and relieving nasal obstruction.",
                duration: "1-2 hours",
                recovery: "1-3 weeks",
                cost: "₹30,000 - ₹70,000"
              },
              {
                name: "Myringoplasty/Tympanoplasty",
                description: "Repair of a perforated eardrum to restore hearing and prevent recurring ear infections.",
                duration: "1-3 hours",
                recovery: "2-4 weeks",
                cost: "₹25,000 - ₹60,000"
              },
              {
                name: "Endoscopic Sinus Surgery",
                description: "Minimally invasive procedure to treat chronic sinusitis and nasal polyps using an endoscope.",
                duration: "1-3 hours",
                recovery: "1-2 weeks",
                cost: "₹40,000 - ₹90,000"
              }
            ].map((procedure, index) => (
              <div key={index} className="border border-gray-100 rounded-lg p-4 shadow-sm">
                <h3 className="text-lg font-semibold text-medical-dark">{procedure.name}</h3>
                <p className="text-gray-600 mb-3">{procedure.description}</p>
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="font-medium text-medical-dark">Duration:</span> {procedure.duration}
                  </div>
                  <div>
                    <span className="font-medium text-medical-dark">Recovery:</span> {procedure.recovery}
                  </div>
                  <div>
                    <span className="font-medium text-medical-dark">Cost:</span> {procedure.cost}
                  </div>
                </div>
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
