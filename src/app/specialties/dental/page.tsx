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
      "/assets/icons/dental.jpg",
    recoveryTime: "1 day - 3 months (varies by procedure)",
    eligibility: "Most patients with dental issues",
    recommended: true
  };

  const procedures = [
    {
      name: "Dental Implants",
      description:
        "Surgical placement of titanium posts that serve as artificial roots for replacement teeth, providing a permanent solution for missing teeth.",

    },
    {
      name: "Wisdom Teeth Extraction",
      description:
        "Removal of third molars (wisdom teeth) that are impacted, causing pain, or potentially problematic.",
    },
    {
      name: "Root Canal Treatment",
      description:
        "Procedure to treat infection at the center of a tooth by removing the pulp and replacing it with filling.",
    },
    {
      name: "Dental Bone Grafting",
      description:
        "Surgical procedure that adds volume and density to areas of the jaw where bone has been lost, often in preparation for dental implants.",
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
