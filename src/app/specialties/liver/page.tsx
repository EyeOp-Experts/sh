// app/specialties/liver-surgery/page.tsx

"use client";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import SurgeryPageLayout from "@/components/surgery/SurgeryPageLayout";
import { BreadcrumbItem } from "@/components/layout/Breadcrumb";

const LiverSurgeryPage = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Specialties", path: "/specialties" },
    { label: "Liver Surgery" }
  ];

  const surgeryData = {
    title: "Liver Surgery",
    description:
      "Our liver surgery department specializes in advanced surgical treatments for liver diseases, including tumors, cysts, and liver failure. We employ state-of-the-art techniques for optimal outcomes.",
    image:
      "https://images.unsplash.com/photo-1579154341057-1e7e071dcfe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
    recoveryTime: "2-12 weeks (varies by procedure)",
    costRange: "₹80,000 - ₹30,00,000",
    eligibility: "Patients with liver diseases requiring surgical intervention",
    recommended: false
  };

  const procedures = [
    {
      name: "Liver Resection",
      description:
        "Surgical removal of a portion of the liver, typically to treat liver cancer, metastases, or benign tumors.",
      duration: "3-6 hours",
      recovery: "4-8 weeks",
      cost: "₹1,50,000 - ₹4,00,000"
    },
    {
      name: "Liver Transplantation",
      description:
        "Replacement of a diseased liver with a healthy liver from a donor, for end-stage liver disease or acute liver failure.",
      duration: "6-12 hours",
      recovery: "2-3 months",
      cost: "₹20,00,000 - ₹30,00,000"
    },
    {
      name: "Laparoscopic Liver Surgery",
      description:
        "Minimally invasive approach to liver surgery using small incisions, cameras, and specialized instruments.",
      duration: "2-5 hours",
      recovery: "2-4 weeks",
      cost: "₹1,75,000 - ₹3,50,000"
    },
    {
      name: "Radiofrequency Ablation (RFA)",
      description:
        "A minimally invasive procedure that uses heat to destroy liver tumors without removing them surgically.",
      duration: "1-3 hours",
      recovery: "1-2 weeks",
      cost: "₹80,000 - ₹1,50,000"
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
                    <span className="font-medium text-medical-dark">Duration:</span>{" "}
                    {procedure.duration}
                  </div>
                  <div>
                    <span className="font-medium text-medical-dark">Recovery:</span>{" "}
                    {procedure.recovery}
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

export default LiverSurgeryPage;
