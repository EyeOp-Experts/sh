// app/specialties/gastroenterology/page.tsx
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import SurgeryPageLayout from "@/components/surgery/SurgeryPageLayout";
import { BreadcrumbItem } from "@/components/layout/Breadcrumb";

export const metadata = {
  title: "Gastroenterology | Swathya Health",
  description:
    "Advanced diagnosis and treatment for gastrointestinal disorders using endoscopy and surgery in Delhi NCR.",
};

const Gastroenterology = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Specialties", path: "/specialties" },
    { label: "Gastroenterology" },
  ];

  const surgeryData = {
    title: "Gastroenterology",
    description:
      "Our gastroenterology department specializes in diagnosing and treating disorders of the digestive system. We offer advanced endoscopic procedures and surgical interventions for comprehensive gastrointestinal care.",
    image:
     "/assets/icons/liver-surgery.jpg",
    eligibility: "Patients with digestive system disorders",
    recommended: false,
  };

  const procedures = [
    {
      name: "Upper GI Endoscopy",
      description:
        "Diagnostic procedure to examine the esophagus, stomach, and first part of the small intestine using a flexible tube with a camera.",
    },
    {
      name: "Colonoscopy",
      description:
        "Examination of the large intestine (colon) using a flexible camera tube to screen for cancer and investigate symptoms.", 
    },
    {
      name: "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
      description:
        "Combined endoscopic and X-ray procedure to diagnose and treat conditions of the bile ducts and pancreatic ducts.",  
    },
    {
      name: "Laparoscopic Hernia Repair",
      description:
        "Minimally invasive surgery to fix hernias using small incisions, cameras and specialized surgical instruments.", 
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SurgeryPageLayout
        breadcrumbItems={breadcrumbItems}
        surgeryData={surgeryData}
      >
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-medical-dark mb-4">
            Available Procedures
          </h2>
          <div className="space-y-6">
            {procedures.map((procedure, index) => (
              <div
                key={index}
                className="border border-gray-100 rounded-lg p-4 shadow-sm"
              >
                <h3 className="text-lg font-semibold text-medical-dark">
                  {procedure.name}
                </h3>
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

export default Gastroenterology;
