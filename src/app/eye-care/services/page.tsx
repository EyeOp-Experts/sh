import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import FloatingContact from '@/components/FloatingContact';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, ArrowRight, Eye, EyeOff, Search, Shield } from 'lucide-react';

const Services = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="bg-swasthya-blue-light py-16 md:py-24">
          <div className="container-custom">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Services</h1>
              <p className="text-xl text-gray-700 mb-8">
                Advanced vision correction procedures tailored to your unique needs.
              </p>
            </div>
          </div>
        </section>

        {/* LASIK Section */}
        <section className="section-padding" id="lasik">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <Eye size={32} className="text-swasthya-blue mr-3" />
                  <h2 className="text-3xl font-bold">LASIK Surgery</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  LASIK (Laser-Assisted In Situ Keratomileusis) is a popular refractive surgery that reshapes your cornea using laser technology to correct nearsightedness, farsightedness, and astigmatism.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Quick 15-minute procedure with minimal discomfort</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Rapid recovery - most patients return to work within 24-48 hours</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Immediate vision improvement with stabilization within days</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">High success rate with 96% of patients achieving 20/20 vision or better</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  At Swasthya Health, we use the latest wavefront-guided LASIK technology for customized treatment that addresses your unique vision profile.
                </p>
                
                <Link href="/book-consultation">
                  <Button className="btn-primary">
                    Check LASIK Eligibility <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZXllJTIwc3VyZ2VyeXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="LASIK procedure" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* SMILE Section */}
        <section className="section-padding bg-gray-50" id="smile">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <img 
                  src="https://images.unsplash.com/photo-1551884170-09fb70a3a2ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZXllJTIwdGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="SMILE procedure" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover" 
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Search size={32} className="text-swasthya-blue mr-3" />
                  <h2 className="text-3xl font-bold">SMILE Surgery</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  SMILE (Small Incision Lenticule Extraction) is a minimally invasive laser vision correction procedure that treats myopia and astigmatism through a tiny incision without creating a corneal flap.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Minimally invasive with a tiny 2-3mm incision</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Reduced risk of dry eye compared to LASIK</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Greater preservation of corneal biomechanical strength</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Excellent option for active lifestyles and contact sports</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Swasthya Health is one of the few centers in the region offering this advanced procedure performed by our specially trained surgeons.
                </p>
                
                <Link href="/book-consultation">
                  <Button className="btn-primary">
                    Learn More About SMILE <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Cataract Section */}
        <section className="section-padding" id="cataract">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-4">
                  <EyeOff size={32} className="text-swasthya-blue mr-3" />
                  <h2 className="text-3xl font-bold">Cataract Surgery</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  Our advanced cataract surgery replaces your cloudy natural lens with a premium intraocular lens (IOL) to restore clear vision and potentially reduce dependency on glasses.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Micro-incision phacoemulsification with no-stitch recovery</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Multiple premium IOL options (multifocal, toric, extended depth of focus)</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Outpatient procedure with rapid vision improvement</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Opportunity to correct astigmatism during the same procedure</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Our surgeons will help you choose the right IOL option based on your vision needs, lifestyle, and preferences.
                </p>
                
                <Link href="/book-consultation">
                  <Button className="btn-primary">
                    Schedule Cataract Evaluation <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c2VuaW9yJTIwZXllc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Cataract surgery" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover" 
                />
              </div>
            </div>
          </div>
        </section>

        {/* Comprehensive Eye Care */}
        <section className="section-padding bg-gray-50" id="comprehensive">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="order-last lg:order-first">
                <img 
                  src="https://images.unsplash.com/photo-1521453510357-5c7a77db7074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8c2VuaW9yJTIwY2FybXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60" 
                  alt="Comprehensive care" 
                  className="rounded-lg shadow-lg w-full h-auto object-cover" 
                />
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <Shield size={32} className="text-swasthya-blue mr-3" />
                  <h2 className="text-3xl font-bold">Comprehensive Eye Care</h2>
                </div>
                <p className="text-lg text-gray-700 mb-6">
                  At Swasthya Health, we offer a full range of eye care services, from routine eye exams and pediatric care to advanced treatments for various conditions like glaucoma and diabetic retinopathy.
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Comprehensive vision exams for all ages</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Treatment for conditions like dry eye, cataract, and glaucoma</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Pediatric eye care and vision screenings for children</span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle size={20} className="text-swasthya-blue mr-2 mt-1" />
                    <span className="text-gray-700">Contact lens fittings and prescriptions</span>
                  </div>
                </div>
                
                <p className="text-gray-700 mb-6">
                  Our team of experienced optometrists and ophthalmologists is committed to providing the best care for your vision health.
                </p>
                
                <Link href="/book-consultation">
                  <Button className="btn-primary">
                    Schedule Your Eye Exam <ArrowRight size={16} className="ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Services;
