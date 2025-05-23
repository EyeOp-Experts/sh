// app/specialties/dental-surgery/page.tsx

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import SurgeryPageLayout from "@/components/surgery/SurgeryPageLayout";
import { BreadcrumbItem } from "@/components/layout/Breadcrumb";

const DentalSurgery = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Specialties", path: "/specialties" },
    { label: "Dental Surgery" }
  ];

  const surgeryData = {
    title: "Dental Surgery",
    description:
      "Our dental surgery department offers comprehensive surgical solutions for complex dental issues. From extractions to advanced reconstructive procedures, we provide precision care with patient comfort as our priority.",
    image:
      "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    recoveryTime: "1 day - 3 months (varies by procedure)",
    costRange: "₹3,000 - ₹60,000 per procedure",
    eligibility: "Most patients with dental issues",
    recommended: true
  };

  const procedures = [
    {
      name: "Dental Implants",
      description:
        "Surgical placement of titanium posts that serve as artificial roots for replacement teeth, providing a permanent solution for missing teeth.",
      duration: "1-2 hours per implant",
      recovery: "3-6 months total",
      cost: "₹25,000 - ₹60,000 per implant"
    },
    {
      name: "Wisdom Teeth Extraction",
      description:
        "Removal of third molars (wisdom teeth) that are impacted, causing pain, or potentially problematic.",
      duration: "30-60 minutes",
      recovery: "7-10 days",
      cost: "₹5,000 - ₹20,000"
    },
    {
      name: "Root Canal Treatment",
      description:
        "Procedure to treat infection at the center of a tooth by removing the pulp and replacing it with filling.",
      duration: "1-2 hours",
      recovery: "1-2 days",
      cost: "₹3,000 - ₹15,000"
    },
    {
      name: "Dental Bone Grafting",
      description:
        "Surgical procedure that adds volume and density to areas of the jaw where bone has been lost, often in preparation for dental implants.",
      duration: "30-90 minutes",
      recovery: "2 weeks - 3 months",
      cost: "₹15,000 - ₹40,000"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SurgeryPageLayout breadcrumbItems={breadcrumbItems} surgeryData={surgeryData}>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-medical-dark mb-4">Available Procedures</h2>
          <div className="space-y-6">
            {procedures.map((procedure, index) => (
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

export default DentalSurgery;
