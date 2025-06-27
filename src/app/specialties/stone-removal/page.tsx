import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppFloat from '@/components/layout/WhatsAppFloat';
import SurgeryPageLayout from '@/components/surgery/SurgeryPageLayout';
import { BreadcrumbItem } from '@/components/layout/Breadcrumb';

export const metadata = {
  title: 'Stone Removal Surgery in Delhi NCR - Swasthya Health',
  description:
    'Advanced stone removal procedures for kidney, gall, and urinary stones in Delhi NCR. Quick recovery, low discomfort. Book expert consultation at Swasthya Health.',
};

const StoneRemoval = () => {
  const breadcrumbItems: BreadcrumbItem[] = [
    { label: 'Specialties', path: '/specialties' },
    { label: 'Stone Removal' },
  ];

  const surgeryData = {
    title: 'Stone Removal',
    description:
      'Our stone removal procedures utilize the latest techniques to treat kidney stones, gallstones, and urinary stones with minimal discomfort and quick recovery times.',
    image: '/assets/icons/stone-removal.jpg', // ✅ Updated to use local image
    eligibility: 'Patients with kidney, gall or urinary stones',
    recommended: true,
  };


  const procedures = [
    {
      name: 'Extracorporeal Shock Wave Lithotripsy (ESWL)',
      description:
        'Non-invasive procedure that uses shock waves to break kidney stones into small pieces that can pass through the urinary tract.',
    },
    {
      name: 'Percutaneous Nephrolithotomy (PCNL)',
      description:
        'Minimally invasive procedure to remove large kidney stones through a small incision in the back.',
    },
    {
      name: 'Laparoscopic Cholecystectomy',
      description:
        'Minimally invasive gallbladder removal to treat gallstones, performed through small incisions in the abdomen.',
    },
    {
      name: 'Ureteroscopy',
      description:
        'Procedure that uses a small scope to remove stones in the ureter or kidney, without requiring an incision.',
    },
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

export default StoneRemoval;
