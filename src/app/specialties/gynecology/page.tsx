
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import SurgeryPageLayout from "@/components/surgery/SurgeryPageLayout";
import { MessageCircle, AlertCircle, ClipboardList, Users } from "lucide-react";

const Hysteroscopy = () => {
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Specialties", href: "/specialties" },
    { label: "Gynaecology", href: "/specialties/gynaecology" },
    { label: "Hysteroscopy", href: "/specialties/gynaecology/hysteroscopy" },
  ];

  const hysteroscopyData = {
    title: "Hysteroscopy Procedure",
    description: "A minimally invasive diagnostic and surgical procedure used to examine the inside of the uterus (womb). During a hysteroscopy, your doctor inserts a hysteroscope through your vagina and cervix into the uterus.",
    image: "/assets/icons/gynaecology.jpg",
    recoveryTime: "1-2 days for diagnostic; 2-3 days for surgical",
    costRange: "₹15,000 - ₹40,000",
    eligibility: "Women with abnormal bleeding, fertility issues",
    recommended: true,
  };

  return (
    <SurgeryPageLayout
      breadcrumbItems={breadcrumbItems}
      surgeryData={hysteroscopyData}
    >
      <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
        <Tabs defaultValue="overview">
          <TabsList className="mb-6 w-full flex overflow-x-auto">
            <TabsTrigger value="overview" className="flex-1">
              <ClipboardList className="w-4 h-4 mr-2" /> Overview
            </TabsTrigger>
            <TabsTrigger value="procedure" className="flex-1">
              <AlertCircle className="w-4 h-4 mr-2" /> Procedure Details
            </TabsTrigger>
            <TabsTrigger value="faq" className="flex-1">
              <MessageCircle className="w-4 h-4 mr-2" /> FAQs
            </TabsTrigger>
            <TabsTrigger value="testimonials" className="flex-1">
              <Users className="w-4 h-4 mr-2" /> Patient Stories
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="overview" className="space-y-4">
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-medical-dark mb-4">What is Hysteroscopy?</h2>
              <p className="text-gray-700">
                Hysteroscopy is a procedure that allows your doctor to look inside your uterus in order to 
                diagnose and treat causes of abnormal bleeding. Hysteroscopy is performed using a 
                hysteroscope, a thin, lighted tube that is inserted into the vagina to examine the 
                cervix and inside of the uterus.
              </p>
              
              <div className="my-6">
                <img 
                  src="https://images.unsplash.com/photo-1631815588090-d1bcbe9d4b38?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                  alt="Hysteroscopy procedure illustration" 
                  className="rounded-lg w-full h-auto mb-4"
                />
                <p className="text-sm text-gray-500 italic">
                  Visualization of the uterine cavity during hysteroscopy procedure
                </p>
              </div>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-medical-dark mb-4">When is Hysteroscopy Needed?</h2>
              <p className="text-gray-700 mb-4">
                Your doctor may recommend hysteroscopy for:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2 text-gray-700">
                <li>Investigating abnormal uterine bleeding or heavy periods</li>
                <li>Diagnosing the cause of repeated miscarriages</li>
                <li>Removing polyps or fibroids</li>
                <li>Locating and removing an intrauterine device (IUD)</li>
                <li>Performing endometrial ablation for heavy periods</li>
                <li>Diagnosing and treating fertility issues</li>
              </ul>
            </div>
            
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-medical-dark mb-4">Benefits of Choosing Swasthya Health</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-medical-dark">Experienced Specialists</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Our gynecologists have performed over 1,000 hysteroscopies with excellent outcomes
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-medical-dark">Advanced Equipment</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    State-of-the-art flexible hysteroscopes for better visualization and comfort
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-medical-dark">Minimally Invasive</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Outpatient procedure with quick recovery and minimal discomfort
                  </p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-medical-dark">Comprehensive Care</h3>
                  <p className="text-gray-600 text-sm mt-1">
                    Complete support before, during, and after your procedure
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="procedure">
            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-medical-dark mb-4">Before the Procedure</h2>
                <p className="text-gray-700 mb-3">
                  Your doctor will explain the procedure and you may need to:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>Undergo blood tests and a pregnancy test</li>
                  <li>Stop taking certain medications like blood thinners</li>
                  <li>Fast for 8 hours if you'll be receiving general anesthesia</li>
                </ul>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-medical-dark mb-4">During the Procedure</h2>
                <p className="text-gray-700 mb-3">
                  The procedure typically follows these steps:
                </p>
                <ol className="list-decimal pl-6 space-y-2 text-gray-700">
                  <li>You'll receive either local or general anesthesia</li>
                  <li>The doctor will gently insert a speculum to open the vagina</li>
                  <li>The hysteroscope is inserted through the cervix into the uterus</li>
                  <li>A gas or liquid is introduced to expand the uterus for better viewing</li>
                  <li>Your doctor examines the lining of the uterus and the fallopian tube openings</li>
                  <li>If needed, small instruments are passed through the hysteroscope to perform treatments</li>
                </ol>
                <div className="my-6">
                  <img 
                    src="https://images.unsplash.com/photo-1551190822-a9333d879b1f?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Surgical procedure" 
                    className="rounded-lg w-full h-auto mb-2"
                  />
                  <p className="text-sm text-gray-500 italic">
                    Medical professionals performing a hysteroscopy procedure
                  </p>
                </div>
              </div>
              
              <div>
                <h2 className="text-xl font-semibold text-medical-dark mb-4">After the Procedure</h2>
                <p className="text-gray-700 mb-3">
                  After a hysteroscopy:
                </p>
                <ul className="list-disc pl-6 space-y-2 text-gray-700">
                  <li>You may experience mild cramping and light bleeding for a few days</li>
                  <li>Most patients return home the same day</li>
                  <li>Recovery typically takes 1-2 days for diagnostic procedures</li>
                  <li>For surgical hysteroscopy, recovery may take 2-3 days</li>
                  <li>You should avoid sex for at least one week</li>
                  <li>Full results are typically discussed at your follow-up appointment</li>
                </ul>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="faq">
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-medical-dark mb-4">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-medical-dark">Is hysteroscopy painful?</h3>
                  <p className="text-gray-600 mt-2">
                    Hysteroscopy is performed under anesthesia, so you shouldn't feel pain during the procedure. 
                    After the procedure, you may experience mild cramping similar to menstrual cramps for 1-2 days.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-medical-dark">How long does the procedure take?</h3>
                  <p className="text-gray-600 mt-2">
                    A diagnostic hysteroscopy typically takes 5-30 minutes. If surgical procedures are performed 
                    at the same time, it may take between 30 minutes to an hour.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-medical-dark">When can I resume normal activities?</h3>
                  <p className="text-gray-600 mt-2">
                    Most women can return to normal activities within 24-48 hours after a diagnostic hysteroscopy. 
                    For surgical hysteroscopy, you may need to rest for 2-3 days.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-medical-dark">Will I need someone to drive me home after?</h3>
                  <p className="text-gray-600 mt-2">
                    If you've received general anesthesia or sedation, you will need someone to drive you home. 
                    If only local anesthesia was used, you may be able to drive yourself home, but it's always 
                    recommended to have someone accompany you.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-medical-dark">What are the risks of hysteroscopy?</h3>
                  <p className="text-gray-600 mt-2">
                    Complications are rare but can include infection, bleeding, perforation of the uterus, or 
                    damage to the cervix. At Swasthya Health, our experienced specialists take all precautions 
                    to minimize these risks.
                  </p>
                </div>
                
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-medium text-medical-dark">How much does hysteroscopy cost?</h3>
                  <p className="text-gray-600 mt-2">
                    At Swasthya Health, hysteroscopy costs range from ₹15,000 for diagnostic procedures to 
                    ₹40,000 for complex surgical procedures. The final cost depends on the specific treatment 
                    needed and whether it's diagnostic or surgical. We accept most major health insurance plans.
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="testimonials">
            <div>
              <h2 className="text-xl font-semibold text-medical-dark mb-6">Patient Testimonials</h2>
              
              <div className="space-y-8">
                <div className="border-l-4 border-medical-primary pl-4 py-1">
                  <p className="text-gray-600 italic mb-3">
                    "I was nervous about getting a hysteroscopy, but Dr. Sharma at Swasthya Health was incredibly 
                    gentle and explained everything so well. The procedure was quick and I had minimal discomfort 
                    afterward. They identified and removed a polyp that was causing my heavy bleeding, and I've felt 
                    so much better since!"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/women/56.jpg" 
                      alt="Patient" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-medical-dark">Priya Patel</p>
                      <p className="text-sm text-gray-500">Age 34, Delhi</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-medical-primary pl-4 py-1">
                  <p className="text-gray-600 italic mb-3">
                    "After struggling with infertility for two years, I came to Swasthya Health and underwent 
                    a hysteroscopy which revealed a septum in my uterus. Dr. Gupta performed the surgery to 
                    remove it, and I'm happy to say I'm now 5 months pregnant! The care I received was exceptional."
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/women/65.jpg" 
                      alt="Patient" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-medical-dark">Anjali Singh</p>
                      <p className="text-sm text-gray-500">Age 29, Gurgaon</p>
                    </div>
                  </div>
                </div>
                
                <div className="border-l-4 border-medical-primary pl-4 py-1">
                  <p className="text-gray-600 italic mb-3">
                    "I had been suffering from severe menstrual pain for years. After a hysteroscopy at Swasthya Health, 
                    they found and removed fibroids I didn't know I had. The procedure was much easier than I expected, 
                    and the team made me feel comfortable throughout. My periods are now manageable for the first time 
                    in my adult life!"
                  </p>
                  <div className="flex items-center">
                    <img 
                      src="https://randomuser.me/api/portraits/women/32.jpg" 
                      alt="Patient" 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <p className="font-medium text-medical-dark">Meera Kapoor</p>
                      <p className="text-sm text-gray-500">Age 42, Noida</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-50 p-5 rounded-lg">
                  <h3 className="font-medium text-medical-dark mb-2">Patient Satisfaction Rate</h3>
                  <div className="flex items-center mb-4">
                    <div className="flex text-yellow-400">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118l-2.8-2.034c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    </div>
                    <p className="ml-2 text-gray-700 font-medium">4.9/5 from 128 patients</p>
                  </div>
                  <p className="text-gray-600">
                    Based on post-procedure surveys and follow-up appointments
                  </p>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </SurgeryPageLayout>
  );
};

export default Hysteroscopy;
