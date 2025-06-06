import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import SurgeryPageLayout from "@/components/surgery/SurgeryPageLayout";
import { BreadcrumbItem } from "@/components/layout/Breadcrumb";

const CancerSurgeries = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: "Specialties", path: "/specialties" },
    { label: "Cancer Surgeries" },
  ];

  const surgeryData = {
    title: "Cancer Surgeries",
    description:
      "Our oncology department provides comprehensive surgical solutions for various types of cancer. With a focus on precision, minimal invasiveness, and patient comfort, we aim to deliver the highest standards of cancer care.",
    image:
      "/assets/icons/cancer.jpg",
    eligibility: "Based on cancer stage and patient condition",
    recommended: false,
  };

  const procedures = [
    {
      name: "Breast Cancer Surgery",
      description:
        "Procedures include lumpectomy, mastectomy, and breast reconstruction tailored to the patient's specific condition and needs.",
    },
    {
      name: "Colorectal Cancer Surgery",
      description:
        "Surgical removal of cancerous portions of the colon or rectum, often performed with minimally invasive techniques.",
    },
    {
      name: "Head & Neck Cancer Surgery",
      description:
        "Complex procedures to remove cancerous tissues while preserving function and appearance whenever possible.",
    },
    {
      name: "Thyroid Cancer Surgery",
      description:
        "Partial or complete removal of the thyroid gland with careful preservation of surrounding structures.",
    },
  ];

  const faqs = [
    {
      question: "Will I need additional treatments after cancer surgery?",
      answer:
        "Many cancer patients require additional treatments like chemotherapy or radiation therapy after surgery. Your oncologist will recommend a comprehensive treatment plan based on your specific case.",
    },
    {
      question:
        "How is minimally invasive cancer surgery different from traditional surgery?",
      answer:
        "Minimally invasive techniques use smaller incisions, resulting in less pain, reduced scarring, faster recovery, and lower risk of complications compared to traditional open surgery.",
    },
    {
      question: "What are the chances of cancer recurrence after surgery?",
      answer:
        "Recurrence risk varies based on cancer type, stage, and other factors. Your surgical oncologist will discuss your specific risk and strategies to minimize it through follow-up care and monitoring.",
    },
    {
      question: "How do I prepare for cancer surgery?",
      answer:
        "Preparation may include pre-surgical testing, medication adjustments, lifestyle changes, and nutritional preparation. Your surgical team will provide detailed instructions specific to your procedure.",
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

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-medical-dark mb-4">
            Frequently Asked Questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0"
              >
                <h3 className="text-medical-dark font-semibold mb-1">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
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

export default CancerSurgeries;
