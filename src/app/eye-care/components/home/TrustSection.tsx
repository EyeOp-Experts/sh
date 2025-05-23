import React from "react";
import { Shield, Award, Users, Stethoscope } from "lucide-react";

interface StatProps {
  value: string;
  label: string;
  icon: React.ReactNode;
}

const Stat = ({ value, label, icon }: StatProps) => {
  return (
    <div className="flex flex-col items-center text-center">
      <div className="mb-3 text-swasthya-blue">{icon}</div>
      <div className="text-3xl md:text-4xl font-bold mb-1 text-gray-900">{value}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
};

const TrustSection = () => {
  return (
    <section className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Swasthya Health</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine advanced technology with expert care to deliver exceptional results for our patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Stat
            value="20+"
            label="Years of Experience"
            icon={<Award size={40} />}
          />
          <Stat
            value="50,000+"
            label="Successful Surgeries"
            icon={<Shield size={40} />}
          />
          <Stat
            value="15+"
            label="Expert Surgeons"
            icon={<Stethoscope size={40} />}
          />
          <Stat
            value="98%"
            label="Patient Satisfaction"
            icon={<Users size={40} />}
          />
        </div>

        {/* <div className="mt-16 bg-gray-50 rounded-xl p-8 shadow-sm">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-8">
            <div className="flex-1">
              <h3 className="text-2xl font-semibold mb-3">Certified Excellence</h3>
              <p className="text-gray-600">
                Our facilities and surgeons are accredited by the highest medical authorities, ensuring you receive the safest and most effective treatments available.
              </p>
            </div>

            <div className="flex space-x-8">
              <img
                src="https://placehold.co/100x60?text=Cert+1"
                alt="Certification 1"
                className="h-14 object-contain"
              />
              <img
                src="https://placehold.co/100x60?text=Cert+2"
                alt="Certification 2"
                className="h-14 object-contain"
              />
              <img
                src="https://placehold.co/100x60?text=Cert+3"
                alt="Certification 3"
                className="h-14 object-contain"
              />
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default TrustSection;
