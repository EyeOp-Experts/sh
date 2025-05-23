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
    image:
      'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80',
    recoveryTime: '1 day - 2 weeks (varies by procedure)',
    costRange: '₹25,000 - ₹1,20,000',
    eligibility: 'Patients with kidney, gall or urinary stones',
    recommended: true,
  };

  const procedures = [
    {
      name: 'Extracorporeal Shock Wave Lithotripsy (ESWL)',
      description:
        'Non-invasive procedure that uses shock waves to break kidney stones into small pieces that can pass through the urinary tract.',
      duration: '30-60 minutes',
      recovery: '1-2 days',
      cost: '₹25,000 - ₹50,000',
    },
    {
      name: 'Percutaneous Nephrolithotomy (PCNL)',
      description:
        'Minimally invasive procedure to remove large kidney stones through a small incision in the back.',
      duration: '1-3 hours',
      recovery: '1-2 weeks',
      cost: '₹60,000 - ₹1,20,000',
    },
    {
      name: 'Laparoscopic Cholecystectomy',
      description:
        'Minimally invasive gallbladder removal to treat gallstones, performed through small incisions in the abdomen.',
      duration: '1-2 hours',
      recovery: '1-2 weeks',
      cost: '₹50,000 - ₹1,00,000',
    },
    {
      name: 'Ureteroscopy',
      description:
        'Procedure that uses a small scope to remove stones in the ureter or kidney, without requiring an incision.',
      duration: '1-2 hours',
      recovery: '1-7 days',
      cost: '₹40,000 - ₹80,000',
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
                <div className="grid grid-cols-3 gap-2 text-sm">
                  <div>
                    <span className="font-medium text-medical-dark">Duration:</span>{' '}
                    {procedure.duration}
                  </div>
                  <div>
                    <span className="font-medium text-medical-dark">Recovery:</span>{' '}
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

export default StoneRemoval;
