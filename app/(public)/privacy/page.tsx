import Link from "next/link";
import { BookOpen, Star, Clock } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="relative">
      {/* Hero Header Section */}
      <div className="relative min-h-[300px] bg-gradient-to-r from-blue-600 to-blue-400 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23000000" fill-opacity="0.4"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }} />
        </div>

        {/* Decorative Elements */}
        <div className="absolute left-10 top-1/4 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-6 animate-float hidden md:block">
          <BookOpen className="w-6 h-6 text-white" />
        </div>
        <div className="absolute right-20 top-1/3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 animate-float-slow hidden md:block">
          <Star className="w-6 h-6 text-white" />
        </div>
        <div className="absolute left-1/4 bottom-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 animate-float hidden md:block">
          <Clock className="w-6 h-6 text-white" />
        </div>

        {/* Circular Gradient Blobs */}
        <div className="absolute -left-20 -top-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
        <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
        
        {/* Header Content */}
        <div className="container mx-auto px-4 py-16 text-center relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">PRIVACY NOTICE</h1>
          <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Last updated January 8, 2024
          </p>
        </div>
      </div>

      {/* Main Content */}
      <main id="main-content" className="container mx-auto px-4 py-12 prose prose-lg max-w-none">
        <div className="max-w-5xl mx-auto">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 mb-12">
            <p className="text-xl leading-relaxed">
              Thank you for choosing to be part of our community at Virtual Speed Date Ltd ("Company," "we," "us," or "our"). 
              We are committed to protecting your personal information and your right to privacy. If you have any questions 
              or concerns about this privacy notice or our practices with regard to your personal information, please contact 
              us at <a href="mailto:support@slushdating.com" className="text-blue-600 hover:text-blue-800">support@slushdating.com</a>
            </p>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">This privacy notice describes how we might use your information if you:</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li>Visit our website at <a href="http://www.slushdating.com" className="text-blue-600 hover:text-blue-800">http://www.slushdating.com</a></li>
              <li>Download and use our mobile application — Slush</li>
              <li>Use our Facebook application — Slush</li>
              <li>Engage with us in other related ways ― including any sales, marketing, or events</li>
            </ul>
          </div>

          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">In this privacy notice, if we refer to:</h2>
            <ul className="list-disc pl-6 space-y-3">
              <li><strong>"Website,"</strong> we are referring to any website of ours that references or links to this policy</li>
              <li><strong>"App,"</strong> we are referring to any application of ours that references or links to this policy, including any listed above</li>
              <li><strong>"Services,"</strong> we are referring to our Website, App, and other related services, including any sales, marketing, or events</li>
            </ul>
          </div>

          <div className="bg-gray-50 p-8 rounded-lg mb-12">
            <p className="text-lg leading-relaxed mb-4">
              The purpose of this privacy notice is to explain to you in the clearest way possible what information we collect, 
              how we use it, and what rights you have in relation to it.
            </p>
            <p className="text-lg leading-relaxed">
              If there are any terms in this privacy notice that you do not agree with, please discontinue use of our Services immediately.
            </p>
          </div>

          <div className="mb-16">
            <h2 className="text-3xl font-bold text-center mb-8">TABLE OF CONTENTS</h2>
            <ol className="list-decimal pl-6 grid md:grid-cols-2 gap-4 text-lg">
              <li><a href="#section-1" className="text-blue-600 hover:text-blue-800">WHAT INFORMATION DO WE COLLECT?</a></li>
              <li><a href="#section-2" className="text-blue-600 hover:text-blue-800">HOW DO WE USE YOUR INFORMATION?</a></li>
              <li><a href="#section-3" className="text-blue-600 hover:text-blue-800">WILL YOUR INFORMATION BE SHARED WITH ANYONE?</a></li>
              <li><a href="#section-4" className="text-blue-600 hover:text-blue-800">WHO WILL YOUR INFORMATION BE SHARED WITH?</a></li>
              <li><a href="#section-5" className="text-blue-600 hover:text-blue-800">DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</a></li>
              <li><a href="#section-6" className="text-blue-600 hover:text-blue-800">HOW DO WE HANDLE YOUR SOCIAL LOGINS?</a></li>
              <li><a href="#section-7" className="text-blue-600 hover:text-blue-800">WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</a></li>
              <li><a href="#section-8" className="text-blue-600 hover:text-blue-800">HOW LONG DO WE KEEP YOUR INFORMATION?</a></li>
              <li><a href="#section-9" className="text-blue-600 hover:text-blue-800">HOW DO WE KEEP YOUR INFORMATION SAFE?</a></li>
              <li><a href="#section-10" className="text-blue-600 hover:text-blue-800">DO WE COLLECT INFORMATION FROM MINORS?</a></li>
              <li><a href="#section-11" className="text-blue-600 hover:text-blue-800">WHAT ARE YOUR PRIVACY RIGHTS?</a></li>
              <li><a href="#section-12" className="text-blue-600 hover:text-blue-800">CONTROLS FOR DO-NOT-TRACK FEATURES</a></li>
              <li><a href="#section-13" className="text-blue-600 hover:text-blue-800">DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</a></li>
              <li><a href="#section-14" className="text-blue-600 hover:text-blue-800">DO WE MAKE UPDATES TO THIS NOTICE?</a></li>
              <li><a href="#section-15" className="text-blue-600 hover:text-blue-800">HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</a></li>
              <li><a href="#section-16" className="text-blue-600 hover:text-blue-800">HOW CAN YOU REVIEW, UPDATE OR DELETE THE DATA WE COLLECT FROM YOU?</a></li>
            </ol>
          </div>

          {/* Content sections with improved spacing and formatting */}
          <div className="space-y-16">
            <section id="section-1" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">1. WHAT INFORMATION DO WE COLLECT?</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4">Personal information you disclose to us</h3>
                  <div className="bg-gray-50 p-4 rounded-lg mb-6">
                    <p className="font-semibold">In Short: We collect personal information that you provide to us.</p>
                  </div>
                  <p className="text-lg leading-relaxed mb-6">
                    We collect personal information that you voluntarily provide to us when you register on the Services,
                    express an interest in obtaining information about us or our products and Services, when you participate
                    in activities on the Services (such as by posting messages in our online forums or entering competitions,
                    contests or giveaways) or otherwise when you contact us.
                  </p>
                </div>

                <div>
                  <p className="text-lg leading-relaxed mb-6">
                    The personal information that we collect depends on the context of your interactions with us and the Services,
                    the choices you make and the products and features you use. The personal information we collect may include the following:
                  </p>
                  <ul className="space-y-4 pl-6 list-disc">
                    <li className="text-lg">
                      <strong>Personal Information Provided by You.</strong> We collect names; phone numbers; email addresses;
                      mailing addresses; usernames; passwords; contact preferences; contact or authentication data; billing addresses;
                      debit/credit card numbers; and other similar information.
                    </li>
                    <li className="text-lg">
                      <strong>Payment Data.</strong> We may collect data necessary to process your payment if you make purchases,
                      such as your payment instrument number (such as a credit card number), and the security code associated with
                      your payment instrument. All payment data is stored by Apple. You may find their privacy notice link(s) here:
                      <a href="https://www.apple.com/uk/legal/privacy/en-ww/" className="text-blue-600 hover:text-blue-800 ml-1">
                        https://www.apple.com/uk/legal/privacy/en-ww/
                      </a>
                    </li>
                    <li className="text-lg">
                      <strong>Social Media Login Data.</strong> We may provide you with the option to register with us using
                      your existing social media account details, like your Facebook, Twitter or other social media account.
                      If you choose to register in this way, we will collect the information described in the section called
                      "HOW DO WE HANDLE YOUR SOCIAL LOGINS?" below.
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-2" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">2. HOW DO WE USE YOUR INFORMATION?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: We process your information for purposes based on legitimate business interests, the fulfillment of our contract with you, compliance with our legal obligations, and/or your consent.</p>
              </div>

              <div className="space-y-8">
                <p className="text-lg leading-relaxed">
                  We use personal information collected via our Services for a variety of business purposes described below. 
                  We process your personal information for these purposes in reliance on our legitimate business interests, 
                  in order to enter into or perform a contract with you, with your consent, and/or for compliance with our 
                  legal obligations.
                </p>

                <div>
                  <h3 className="text-xl font-semibold mb-4">We use the information we collect or receive:</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 list-disc">
                    <li className="text-lg">To facilitate account creation and logon process</li>
                    <li className="text-lg">To post testimonials</li>
                    <li className="text-lg">Request feedback</li>
                    <li className="text-lg">To enable user-to-user communications</li>
                    <li className="text-lg">To manage user accounts</li>
                    <li className="text-lg">To send administrative information to you</li>
                    <li className="text-lg">To protect our Services</li>
                    <li className="text-lg">To enforce our terms, conditions and policies</li>
                    <li className="text-lg">To respond to legal requests and prevent harm</li>
                    <li className="text-lg">Fulfill and manage your orders</li>
                    <li className="text-lg">Administer prize draws and competitions</li>
                    <li className="text-lg">To deliver and facilitate delivery of services</li>
                    <li className="text-lg">To respond to user inquiries/offer support</li>
                    <li className="text-lg">To send marketing communications</li>
                    <li className="text-lg">Deliver targeted advertising to you</li>
                    <li className="text-lg">For other business purposes</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="section-3" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">3. WILL YOUR INFORMATION BE SHARED WITH ANYONE?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: We only share information with your consent, to comply with laws, to provide you with services, to protect your rights, or to fulfill business obligations.</p>
              </div>

              <div className="space-y-8">
                <p className="text-lg leading-relaxed">We may process or share your data that we hold based on the following legal basis:</p>
                <ul className="space-y-6 pl-6 list-disc">
                  <li className="text-lg">
                    <strong>Consent:</strong> We may process your data if you have given us specific consent to use your personal information for a specific purpose.
                  </li>
                  <li className="text-lg">
                    <strong>Legitimate Interests:</strong> We may process your data when it is reasonably necessary to achieve our legitimate business interests.
                  </li>
                  <li className="text-lg">
                    <strong>Performance of a Contract:</strong> Where we have entered into a contract with you, we may process your personal information to fulfill the terms of our contract.
                  </li>
                  <li className="text-lg">
                    <strong>Legal Obligations:</strong> We may disclose your information where we are legally required to do so in order to comply with applicable law, governmental requests, a judicial proceeding, court order, or legal process.
                  </li>
                  <li className="text-lg">
                    <strong>Vital Interests:</strong> We may disclose your information where we believe it is necessary to investigate, prevent, or take action regarding potential violations of our policies, suspected fraud, situations involving potential threats to safety, or illegal activities.
                  </li>
                </ul>
              </div>
            </section>

            <section id="section-4" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">4. WHO WILL YOUR INFORMATION BE SHARED WITH?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: We only share information with the following categories of third parties.</p>
              </div>

              <div className="space-y-8">
                <p className="text-lg leading-relaxed">
                  We only share and disclose your information with the following categories of third parties. If you wish to revoke your consent, 
                  please contact us using the contact details provided in the section below titled "HOW CAN YOU CONTACT US ABOUT THIS NOTICE?".
                </p>
                <ul className="pl-6 list-disc space-y-3">
                  <li className="text-lg">Data Analytics Services</li>
                  <li className="text-lg">Sales & Marketing Tools</li>
                  <li className="text-lg">User Account Registration & Authentication Services</li>
                </ul>
              </div>
            </section>

            <section id="section-5" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">5. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: We may use cookies and other tracking technologies to collect and store your information.</p>
              </div>

              <p className="text-lg leading-relaxed">
                We may use cookies and similar tracking technologies (like web beacons and pixels) to access or store information. 
                Specific information about how we use such technologies and how you can refuse certain cookies is set out in our Cookie Notice.
              </p>
            </section>

            <section id="section-6" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">6. HOW DO WE HANDLE YOUR SOCIAL LOGINS?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: If you choose to register or log in to our services using a social media account, we may have access to certain information about you.</p>
              </div>

              <p className="text-lg leading-relaxed">
                Our Services offers you the ability to register and login using your third-party social media account details 
                (like your Facebook or Twitter logins). Where you choose to do this, we will receive certain profile information 
                about you from your social media provider. The profile information we receive may vary depending on the social 
                media provider concerned, but will often include your name, email address, friends list, profile picture as well 
                as other information you choose to make public on such social media platform.
              </p>
            </section>

            <section id="section-7" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">7. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: We are not responsible for the safety of any information that you share with third-party providers who advertise, but are not affiliated with, our Website.</p>
              </div>

              <p className="text-lg leading-relaxed">
                The Services may contain advertisements from third parties that are not affiliated with us and which may link 
                to other websites, online services or mobile applications. We cannot guarantee the safety and privacy of data 
                you provide to any third parties. Any data collected by third parties is not covered by this privacy notice. 
                We are not responsible for the content or privacy and security practices and policies of any third parties, 
                including other websites, services or applications that may be linked to or from the Services. You should 
                review the policies of such third parties and contact them directly to respond to your questions.
              </p>
            </section>

            <section id="section-8" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">8. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: We keep your information for as long as necessary to fulfill the purposes outlined in this privacy notice unless otherwise required by law.</p>
              </div>

              <p className="text-lg leading-relaxed">
                We will only keep your personal information for as long as it is necessary for the purposes set out in this 
                privacy notice, unless a longer retention period is required or permitted by law (such as tax, accounting or 
                other legal requirements). No purpose in this notice will require us keeping your personal information for 
                longer than twelve (12) months past the start of the idle period of the user's account.
              </p>
            </section>

            <section id="section-9" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">9. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: We aim to protect your personal information through a system of organizational and technical security measures.</p>
              </div>

              <p className="text-lg leading-relaxed">
                We have implemented appropriate technical and organizational security measures designed to protect the security 
                of any personal information we process. However, despite our safeguards and efforts to secure your information, 
                no electronic transmission over the Internet or information storage technology can be guaranteed to be 100% secure, 
                so we cannot promise or guarantee that hackers, cybercriminals, or other unauthorized third parties will not be 
                able to defeat our security, and improperly collect, access, steal, or modify your information. Although we will 
                do our best to protect your personal information, transmission of personal information to and from our Services 
                is at your own risk. You should only access the Services within a secure environment.
              </p>
            </section>

            <section id="section-10" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">10. DO WE COLLECT INFORMATION FROM MINORS?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: We do not knowingly collect data from or market to children under 18 years of age.</p>
              </div>

              <p className="text-lg leading-relaxed">
                We do not knowingly solicit data from or market to children under 18 years of age. By using the Services, 
                you represent that you are at least 18 or that you are the parent or guardian of such a minor and consent 
                to such minor dependent's use of the Services. If we learn that personal information from users less than 
                18 years of age has been collected, we will deactivate the account and take reasonable measures to promptly 
                delete such data from our records. If you become aware of any data we may have collected from children under 
                age 18, please contact us at support@virtualspeeddate.co.uk.
              </p>
            </section>

            <section id="section-11" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">11. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: In some regions, such as the European Economic Area (EEA) and United Kingdom (UK), you have rights that allow you greater access to and control over your personal information.</p>
              </div>

              <p className="text-lg leading-relaxed">
                In some regions (like the EEA and UK), you have certain rights under applicable data protection laws. These may include the right:
              </p>
              <ul className="pl-6 list-disc space-y-3 mt-4">
                <li className="text-lg">To request access and obtain a copy of your personal information</li>
                <li className="text-lg">To request rectification or erasure</li>
                <li className="text-lg">To restrict the processing of your personal information</li>
                <li className="text-lg">To data portability</li>
              </ul>
              <p className="text-lg leading-relaxed mt-6">
                In certain circumstances, you may also have the right to object to the processing of your personal information. 
                To make such a request, please use the contact details provided below.
              </p>
            </section>

            <section id="section-12" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">12. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
              <p className="text-lg leading-relaxed">
                Most web browsers and some mobile operating systems and mobile applications include a Do-Not-Track ("DNT") 
                feature or setting you can activate to signal your privacy preference not to have data about your online 
                browsing activities monitored and collected. At this stage no uniform technology standard for recognizing 
                and implementing DNT signals has been finalized. As such, we do not currently respond to DNT browser signals 
                or any other mechanism that automatically communicates your choice not to be tracked online. If a standard 
                for online tracking is adopted that we must follow in the future, we will inform you about that practice 
                in a revised version of this privacy notice.
              </p>
            </section>

            <section id="section-13" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">13. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: Yes, if you are a resident of California, you are granted specific rights regarding access to your personal information.</p>
              </div>

              <p className="text-lg leading-relaxed">
                California Civil Code Section 1798.83, also known as the "Shine The Light" law, permits our users who are 
                California residents to request and obtain from us, once a year and free of charge, information about 
                categories of personal information (if any) we disclosed to third parties for direct marketing purposes 
                and the names and addresses of all third parties with which we shared personal information in the 
                immediately preceding calendar year.
              </p>
            </section>

            <section id="section-14" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">14. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="font-semibold">In Short: Yes, we will update this notice as necessary to stay compliant with relevant laws.</p>
              </div>

              <p className="text-lg leading-relaxed">
                We may update this privacy notice from time to time. The updated version will be indicated by an updated 
                "Revised" date and the updated version will be effective as soon as it is accessible. If we make material 
                changes to this privacy notice, we may notify you either by prominently posting a notice of such changes 
                or by directly sending you a notification. We encourage you to review this privacy notice frequently to 
                be informed of how we are protecting your information.
              </p>
            </section>

            <section id="section-15" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">15. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
              <p className="text-lg leading-relaxed mb-6">
                If you have questions or comments about this notice, you may email us at{' '}
                <a href="mailto:support@slushdating.com" className="text-blue-600 hover:text-blue-800">
                  support@slushdating.com
                </a>{' '}
                or by post to:
              </p>

              <address className="text-lg not-italic bg-gray-50 p-6 rounded-lg">
                Virtual Speed Date Ltd<br />
                103 Colney Hatch Ln<br />
                Muswell Hill<br />
                Colney Hatch Lane<br />
                N10 1LR<br />
                United Kingdom
              </address>
            </section>

            <section id="section-16" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">
                16. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?
              </h2>
              <p className="text-lg leading-relaxed">
                Based on the applicable laws of your country, you may have the right to request access to the personal 
                information we collect from you, change that information, or delete it in some circumstances. To request 
                to review, update, or delete your personal information, please visit:{' '}
                <a href="https://www.slushdating.com/contact" className="text-blue-600 hover:text-blue-800">
                  https://www.slushdating.com/contact
                </a>
              </p>
              
            </section>

            {/* Footer Navigation */}
            <footer className="mt-24 pt-12 border-t border-gray-200">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Company</h3>
                  <ul className="space-y-3">
                    <li><Link href="/team" className="text-gray-600 hover:text-gray-900">Meet the team</Link></li>
                    <li><Link href="/privacy" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                    <li><Link href="/cookies" className="text-gray-600 hover:text-gray-900">Cookie Policy</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Resources</h3>
                  <ul className="space-y-3">
                    <li><Link href="/blog" className="text-gray-600 hover:text-gray-900">Blogs</Link></li>
                    <li><Link href="/contact" className="text-gray-600 hover:text-gray-900">Contact us</Link></li>
                    <li><Link href="/terms" className="text-gray-600 hover:text-gray-900">Terms of use</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Download</h3>
                  <ul className="space-y-3">
                    <li><Link href="/ios" className="text-gray-600 hover:text-gray-900">Download iOS</Link></li>
                    <li><Link href="/android" className="text-gray-600 hover:text-gray-900">Download Android</Link></li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <ul className="space-y-3">
                    <li><Link href="https://facebook.com/slushdating" className="text-gray-600 hover:text-gray-900">Facebook</Link></li>
                    <li><Link href="https://twitter.com/slushdating" className="text-gray-600 hover:text-gray-900">Twitter</Link></li>
                    <li><Link href="https://instagram.com/slushdating" className="text-gray-600 hover:text-gray-900">Instagram</Link></li>
                  </ul>
                </div>
              </div>
              <div className="mt-12 pt-8 border-t border-gray-200 text-center text-gray-600">
                <p className="text-lg">Sheffield Science Park Cooper Buildings, Arundel St, Sheffield City Centre, Sheffield S1 2NS</p>
                <p className="mt-4 text-lg">©2023 - Website | All rights reserved.</p>
              </div>
            </footer>
          </div>
        </div>
      </main>
    </div>
  );
} 