import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";
import SurgeryPageLayout from "@/components/surgery/SurgeryPageLayout";
import { BreadcrumbItem } from "@/components/layout/Breadcrumb";

const breadcrumbItems: BreadcrumbItem[] = [
  { label: "Specialties", path: "/specialties" },
  { label: "Eye Surgeries" },
];

const surgeryData = {
  title: "Eye Surgeries",
  description:
    "Our ophthalmology department offers state-of-the-art surgical solutions for various eye conditions. From cataract removal to LASIK vision correction, we help restore and improve your vision with precision and care.",
  image:
    "https://images.unsplash.com/photo-1551884831-bbf3cdc6469e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2274&q=80",
  recoveryTime: "1-4 weeks (varies by procedure)",
  costRange: "₹25,000 - ₹1,20,000",
  eligibility: "Adults with stable eye prescription",
  recommended: true,
};

export default function EyeSurgeriesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <SurgeryPageLayout breadcrumbItems={breadcrumbItems} surgeryData={surgeryData}>
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-bold text-medical-dark mb-4">Available Procedures</h2>
          <div className="space-y-6">
            {[
              {
                name: "Cataract Surgery",
                description:
                  "Removal of cloudy lens and replacement with an artificial intraocular lens (IOL) to restore clear vision.",
                duration: "15-30 minutes",
                recovery: "1-2 weeks",
                cost: "₹25,000 - ₹80,000",
              },
              {
                name: "LASIK",
                description:
                  "Laser-assisted procedure to reshape the cornea and correct refractive errors like myopia, hyperopia, and astigmatism.",
                duration: "10-15 minutes per eye",
                recovery: "24-48 hours",
                cost: "₹30,000 - ₹1,00,000",
              },
              {
                name: "Glaucoma Surgery",
                description:
                  "Procedures to reduce intraocular pressure and prevent further damage to the optic nerve.",
                duration: "30-60 minutes",
                recovery: "2-4 weeks",
                cost: "₹35,000 - ₹90,000",
              },
              {
                name: "Retinal Detachment Repair",
                description:
                  "Surgical procedures to reattach the retina and restore vision affected by retinal detachment.",
                duration: "1-2 hours",
                recovery: "2-6 weeks",
                cost: "₹45,000 - ₹1,20,000",
              },
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

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold text-medical-dark mb-4">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              {
                question: "Is LASIK eye surgery painful?",
                answer:
                  "LASIK is generally not painful. Numbing eye drops are used before the procedure, and most patients report only slight pressure or discomfort during the surgery.",
              },
              {
                question: "How soon can I drive after cataract surgery?",
                answer:
                  "Most patients can resume driving 24-48 hours after surgery, once your doctor has confirmed that your vision meets the legal requirements for driving.",
              },
              {
                question: "Will I need glasses after cataract surgery?",
                answer:
                  "This depends on the type of intraocular lens (IOL) used. Standard IOLs may require glasses for certain activities, while premium multifocal IOLs may reduce or eliminate the need for glasses.",
              },
              {
                question: "How long does LASIK last?",
                answer:
                  "LASIK results are generally permanent, though natural age-related vision changes may still occur. A small percentage of patients may need an enhancement procedure after several years.",
              },
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                <h3 className="text-medical-dark font-semibold mb-1">{faq.question}</h3>
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
}
