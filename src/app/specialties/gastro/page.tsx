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
      "https://images.unsplash.com/photo-1530497610245-94d3c16cda28?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    recoveryTime: "1-14 days (varies by procedure)",
    costRange: "₹4,000 - ₹80,000",
    eligibility: "Patients with digestive system disorders",
    recommended: false,
  };

  const procedures = [
    {
      name: "Upper GI Endoscopy",
      description:
        "Diagnostic procedure to examine the esophagus, stomach, and first part of the small intestine using a flexible tube with a camera.",
      duration: "15-30 minutes",
      recovery: "24 hours",
      cost: "₹4,000 - ₹10,000",
    },
    {
      name: "Colonoscopy",
      description:
        "Examination of the large intestine (colon) using a flexible camera tube to screen for cancer and investigate symptoms.",
      duration: "30-60 minutes",
      recovery: "24-48 hours",
      cost: "₹5,000 - ₹15,000",
    },
    {
      name: "ERCP (Endoscopic Retrograde Cholangiopancreatography)",
      description:
        "Combined endoscopic and X-ray procedure to diagnose and treat conditions of the bile ducts and pancreatic ducts.",
      duration: "30-90 minutes",
      recovery: "1-2 days",
      cost: "₹15,000 - ₹40,000",
    },
    {
      name: "Laparoscopic Hernia Repair",
      description:
        "Minimally invasive surgery to fix hernias using small incisions, cameras and specialized surgical instruments.",
      duration: "1-2 hours",
      recovery: "1-2 weeks",
      cost: "₹40,000 - ₹80,000",
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
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="font-medium text-medical-dark">
                      Duration:
                    </span>{" "}
                    {procedure.duration}
                  </div>
                  <div>
                    <span className="font-medium text-medical-dark">
                      Recovery:
                    </span>{" "}
                    {procedure.recovery}
                  </div>
                  <div>
                    <span className="font-medium text-medical-dark">Cost:</span>{" "}
                    {procedure.cost}
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

export default Gastroenterology;
