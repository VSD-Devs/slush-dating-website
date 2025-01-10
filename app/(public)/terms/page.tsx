import Link from "next/link";
import { BookOpen, Star, Clock } from "lucide-react";

export default function TermsPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Terms Of Service</h1>
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
              Slush is licensed to You (End-User) by Virtual Speed Date Ltd, located at 103 Colney Hatch Ln, 
              Muswell Hill, London, N10 1LR (hereinafter: Licensor), for use only under the terms of this License Agreement.
            </p>
          </div>

          <div className="space-y-8 mb-12">
            <p className="text-lg leading-relaxed">
              By downloading the Application from the Apple AppStore, and any update thereto (as permitted by this License Agreement), 
              You indicate that You agree to be bound by all of the terms and conditions of this License Agreement, and that You 
              accept this License Agreement.
            </p>

            <p className="text-lg leading-relaxed">
              The parties of this License Agreement acknowledge that Apple is not a Party to this License Agreement and is not 
              bound by any provisions or obligations with regard to the Application, such as warranty, liability, maintenance 
              and support thereof. Slush, not Apple, is solely responsible for the licensed Application and the content thereof.
            </p>

            <p className="text-lg leading-relaxed">
              This License Agreement may not provide for usage rules for the Application that are in conflict with the latest 
              App Store Terms of Service. Slush acknowledges that it had the opportunity to review said terms and this License 
              Agreement is not conflicting with them.
            </p>

            <p className="text-lg leading-relaxed font-semibold">
              All rights not expressly granted to You are reserved.
            </p>
          </div>

          <div className="space-y-16">
            <section id="section-1" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">1. THE APPLICATION</h2>
              <p className="text-lg leading-relaxed">
                Slush (hereinafter: Application) is a piece of software created to introduce a new way for people to date 
                online through 3 minute video-calls - and customized for Apple mobile devices. It is used to meet new people.
              </p>
            </section>

            <section id="section-2" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">2. SCOPE OF LICENSE</h2>
              <div className="space-y-6">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">2.1 License Grant</h3>
                  <p className="text-lg leading-relaxed">
                    You are given a non-transferable, non-exclusive, non-sublicensable license to install and use the Licensed 
                    Application on any Apple-branded Products that You (End-User) own or control and as permitted by the Usage 
                    Rules set forth in this section and the App Store Terms of Service, with the exception that such licensed 
                    Application may be accessed and used by other accounts associated with You (End-User, The Purchaser) via 
                    Family Sharing or volume purchasing.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">2.2 Updates</h3>
                  <p className="text-lg leading-relaxed">
                    This license will also govern any updates of the Application provided by Licensor that replace, repair, 
                    and/or supplement the first Application, unless a separate license is provided for such update in which 
                    case the terms of that new license will govern.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">2.3 Sharing Restrictions</h3>
                  <p className="text-lg leading-relaxed">
                    You may not share or make the Application available to third parties (unless to the degree allowed by the 
                    Apple Terms and Conditions, and with Slush's prior written consent), sell, rent, lend, lease or otherwise 
                    redistribute the Application.
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">2.4 Reverse Engineering</h3>
                  <p className="text-lg leading-relaxed">
                    You may not reverse engineer, translate, disassemble, integrate, decompile, integrate, remove, modify, 
                    combine, create derivative works or updates of, adapt, or attempt to derive the source code of the 
                    Application, or any part thereof (except with Slush's prior written consent).
                  </p>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold mb-4">2.5 Copying and Modifications</h3>
                  <p className="text-lg leading-relaxed">
                    You may not copy (excluding when expressly authorised by this license and the Usage Rules) or alter the 
                    Application or portions thereof. You may create and store copies only on devices that You own or control 
                    for backup keeping under the terms of this license, the App Store Terms of Service, and any other terms 
                    and conditions that apply to the device or software used. You may not remove any intellectual property 
                    notices. You acknowledge that no unauthorised third parties may gain access to these copies at any time.
                  </p>
                </div>

                <div className="space-y-4">
                  <p className="text-lg leading-relaxed">
                    2.6 Violations of the obligations mentioned above, as well as the attempt of such infringement, may be 
                    subject to prosecution and damages.
                  </p>

                  <p className="text-lg leading-relaxed">
                    2.7 Licensor reserves the right to modify the terms and conditions of licensing.
                  </p>

                  <p className="text-lg leading-relaxed">
                    2.8 Nothing in this license should be interpreted to restrict third-party terms. When using the 
                    Application, You must ensure that You comply with applicable third-party terms and conditions.
                  </p>
                </div>
              </div>
            </section>

            <section id="section-3" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">3. TECHNICAL REQUIREMENTS</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  3.1 Licensor attempts to keep the Application updated so that it complies with modified/new versions of 
                  the firmware and new hardware. You are not granted rights to claim such an update.
                </p>

                <p className="text-lg leading-relaxed">
                  3.2 You acknowledge that it is Your responsibility to confirm and determine that the app end-user device 
                  on which You intend to use the Application satisfies the technical specifications mentioned above.
                </p>

                <p className="text-lg leading-relaxed">
                  3.3 Licensor reserves the right to modify the technical specifications as it sees appropriate at any time.
                </p>
              </div>
            </section>

            <section id="section-4" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">4. MAINTENANCE AND SUPPORT</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  4.1 The Licensor is solely responsible for providing any maintenance and support services for this 
                  licensed Application. You can reach the Licensor at the email address listed in the App Store Overview 
                  for this licensed Application.
                </p>

                <p className="text-lg leading-relaxed">
                  4.2 Slush and the End-User acknowledge that Apple has no obligation whatsoever to furnish any maintenance 
                  and support services with respect to the licensed Application.
                </p>
              </div>
            </section>

            <section id="section-5" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">5. USE OF DATA</h2>
              <p className="text-lg leading-relaxed">
                You acknowledge that Licensor will be able to access and adjust Your downloaded licensed Application content 
                and Your personal information, and that Licensor's use of such material and information is subject to Your 
                legal agreements with Licensor and Licensor's privacy policy:{' '}
                <a href="https://www.slushdating.com/privacy-policy" className="text-blue-600 hover:text-blue-800">
                  https://www.slushdating.com/privacy-policy
                </a>
              </p>
            </section>

            <section id="section-6" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">6. USER GENERATED CONTRIBUTIONS</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  The Application may invite you to chat, contribute to, or participate in blogs, message boards, online forums, 
                  and other functionality, and may provide you with the opportunity to create, submit, post, display, transmit, 
                  perform, publish, distribute, or broadcast content and materials to us or in the Application, including but not 
                  limited to text, writings, video, audio, photographs, graphics, comments, suggestions, or personal information 
                  or other material (collectively, "Contributions"). Contributions may be viewable by other users of the Application 
                  and through third-party websites or applications. As such, any Contributions you transmit may be treated as 
                  non-confidential and non-proprietary.
                </p>

                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-lg font-semibold mb-4">When you create or make available any Contributions, you thereby represent and warrant that:</p>
                  <ol className="list-decimal space-y-4 pl-6">
                    <li className="text-lg leading-relaxed">The creation, distribution, transmission, public display, or performance, and the accessing, downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
                    <li className="text-lg leading-relaxed">You are the creator and owner of or have the necessary licenses, rights, consents, releases, and permissions to use and to authorize us, the Application, and other users of the Application to use your Contributions in any manner contemplated by the Application and these Terms of Use.</li>
                    <li className="text-lg leading-relaxed">You have the written consent, release, and/or permission of each and every identifiable individual person in your Contributions to use the name or likeness or each and every such identifiable individual person to enable inclusion and use of your Contributions in any manner contemplated by the Application and these Terms of Use.</li>
                    <li className="text-lg leading-relaxed">Your Contributions are not false, inaccurate, or misleading.</li>
                    <li className="text-lg leading-relaxed">Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
                    <li className="text-lg leading-relaxed">Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous, or otherwise objectionable (as determined by us).</li>
                    <li className="text-lg leading-relaxed">Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
                    <li className="text-lg leading-relaxed">Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other person and to promote violence against a specific person or class of people.</li>
                    <li className="text-lg leading-relaxed">Your Contributions do not violate any applicable law, regulation, or rule.</li>
                    <li className="text-lg leading-relaxed">Your Contributions do not violate the privacy or publicity rights of any third party.</li>
                    <li className="text-lg leading-relaxed">Your Contributions do not contain any material that solicits personal information from anyone under the age of 18 or exploits people under the age of 18 in a sexual or violent manner.</li>
                    <li className="text-lg leading-relaxed">Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended to protect the health or well-being of minors.</li>
                    <li className="text-lg leading-relaxed">Your Contributions do not include any offensive comments that are connected to race, national origin, gender, sexual preference, or physical handicap.</li>
                    <li className="text-lg leading-relaxed">Your Contributions do not otherwise violate, or link to material that violates, any provision of these Terms of Use, or any applicable law or regulation.</li>
                  </ol>
                </div>

                <p className="text-lg leading-relaxed">
                  Any use of the Application in violation of the foregoing violates these Terms of Use and may result in, 
                  among other things, termination or suspension of your rights to use the Application.
                </p>
              </div>
            </section>

            <section id="section-7" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">7. CONTRIBUTION LICENSE</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  By posting your Contributions to any part of the Application or making Contributions accessible to the 
                  Application by linking your account from the Application to any of your social networking accounts, you 
                  automatically grant, and you represent and warrant that you have the right to grant, to us an unrestricted, 
                  unlimited, irrevocable, perpetual, non-exclusive, transferable, royalty-free, fully-paid, worldwide right, 
                  and license to host, use copy, reproduce, disclose, sell, resell, publish, broadcast, retitle, archive, 
                  store, cache, publicly display, reformat, translate, transmit, excerpt (in whole or in part), and distribute 
                  such Contributions (including, without limitation, your image and voice) for any purpose, commercial 
                  advertising, or otherwise, and to prepare derivative works of, or incorporate in other works, such as 
                  Contributions, and grant and authorize sublicenses of the foregoing.
                </p>

                <p className="text-lg leading-relaxed">
                  This license will apply to any form, media, or technology now known or hereafter developed, and includes 
                  our use of your name, company name, and franchise name, as applicable, and any of the trademarks, service 
                  marks, trade names, logos, and personal and commercial images you provide.
                </p>

                <p className="text-lg leading-relaxed">
                  We do not assert any ownership over your Contributions. You retain full ownership of all of your 
                  Contributions and any intellectual property rights or other proprietary rights associated with your 
                  Contributions.
                </p>

                <p className="text-lg leading-relaxed">
                  We have the right, in our sole and absolute discretion, (1) to edit, redact, or otherwise change any 
                  Contributions; (2) to re-categorize any Contributions to place them in more appropriate locations in 
                  the Application; and (3) to pre-screen or delete any Contributions at any time and for any reason, 
                  without notice. We have no obligation to monitor your Contributions.
                </p>
              </div>
            </section>

            <section id="section-8" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">8. LIABILITY</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg leading-relaxed">
                  8.1 Licensor takes no accountability or responsibility for any damages caused due to a breach of duties 
                  according to Section 2 of this Agreement. To avoid data loss, You are required to make use of backup 
                  functions of the Application to the extent allowed by applicable third-party terms and conditions of use. 
                  You are aware that in case of alterations or manipulations of the Application, You will not have access 
                  to licensed Application.
                </p>
              </div>
            </section>

            <section id="section-9" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">9. WARRANTY</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  9.1 Licensor warrants that the Application is free of spyware, trojan horses, viruses, or any other 
                  malware at the time of Your download. Licensor warrants that the Application works as described in the 
                  user documentation.
                </p>

                <p className="text-lg leading-relaxed">
                  9.2 No warranty is provided for the Application that is not executable on the device, that has been 
                  unauthorizedly modified, handled inappropriately or culpably, combined or installed with inappropriate 
                  hardware or software, used with inappropriate accessories, regardless if by Yourself or by third parties, 
                  or if there are any other reasons outside of Slush's sphere of influence that affect the executability 
                  of the Application.
                </p>

                <p className="text-lg leading-relaxed">
                  9.3 You are required to inspect the Application immediately after installing it and notify Virtual Speed 
                  Date about issues discovered without delay by e-mail provided in Product Claims. The defect report will 
                  be taken into consideration and further investigated if it has been mailed within a period of three (3) 
                  days after discovery.
                </p>

                <p className="text-lg leading-relaxed">
                  9.4 If we confirm that the Application is defective, Slush reserves a choice to remedy the situation 
                  either by means of solving the defect or substitute delivery.
                </p>

                <p className="text-lg leading-relaxed">
                  9.5 In the event of any failure of the Application to conform to any applicable warranty, You may notify 
                  the App-Store-Operator, and Your Application purchase price will be refunded to You. To the maximum extent 
                  permitted by applicable law, the App-Store-Operator will have no other warranty obligation whatsoever with 
                  respect to the App, and any other losses, claims, damages, liabilities, expenses and costs attributable to 
                  any negligence to adhere to any warranty.
                </p>

                <p className="text-lg leading-relaxed">
                  9.6 If the user is an entrepreneur, any claim based on faults expires after a statutory period of limitation 
                  amounting to twelve (12) months after the Application was made available to the user. The statutory periods 
                  of limitation given by law apply for users who are consumers.
                </p>
              </div>
            </section>

            <section id="section-10" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">10. PRODUCT CLAIMS</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Slush and the End-User acknowledge that Slush, and not Apple, is responsible for addressing any claims of 
                  the End-User or any third party relating to the licensed Application or the End-User's possession and/or 
                  use of that licensed Application, including, but not limited to:
                </p>

                <ul className="list-disc pl-6 space-y-3">
                  <li className="text-lg">product liability claims;</li>
                  <li className="text-lg">any claim that the licensed Application fails to conform to any applicable legal or regulatory requirement;</li>
                  <li className="text-lg">claims arising under consumer protection, privacy, or similar legislation, including in connection with Your Licensed Application's use of the HealthKit and HomeKit.</li>
                </ul>
              </div>
            </section>

            <section id="section-11" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">11. LEGAL COMPLIANCE</h2>
              <p className="text-lg leading-relaxed">
                You represent and warrant that You are not located in a country that is subject to a U.S. Government embargo, 
                or that has been designated by the U.S / UK Government as a "terrorist supporting" country; and that You are 
                not listed on any U.S. / UK Government list of prohibited or restricted parties.
              </p>
            </section>

            <section id="section-12" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">12. CONTACT INFORMATION</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-lg leading-relaxed mb-4">
                  For general inquiries, complaints, questions or claims concerning the licensed Application, please contact:
                </p>
                <address className="text-lg not-italic">
                  Slush<br />
                  103 Colney Hatch Ln,<br />
                  Muswell Hill,<br />
                  London<br />
                  <a href="mailto:support@slushdating.com" className="text-blue-600 hover:text-blue-800">
                    support@slushdating.com
                  </a>
                </address>
              </div>
            </section>

            <section id="section-13" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">13. TERMINATION</h2>
              <p className="text-lg leading-relaxed">
                The license is valid until terminated by Slush or by You. Your rights under this license will terminate 
                automatically and without notice from Slush if You fail to adhere to any term(s) of this license. Upon 
                License termination, You shall stop all use of the Application, and destroy all copies, full or partial, 
                of the Application.
              </p>
            </section>

            <section id="section-14" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">14. THIRD-PARTY TERMS OF AGREEMENTS AND BENEFICIARY</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  Slush represents and warrants that Slush will comply with applicable third-party terms of agreement when 
                  using licensed Application.
                </p>

                <p className="text-lg leading-relaxed">
                  In Accordance with Section 9 of the "Instructions for Minimum Terms of Developer's End-User License Agreement," 
                  Apple and Apple's subsidiaries shall be third-party beneficiaries of this End User License Agreement and - 
                  upon Your acceptance of the terms and conditions of this license agreement, Apple will have the right (and 
                  will be deemed to have accepted the right) to enforce this End User License Agreement against You as a 
                  third-party beneficiary thereof.
                </p>
              </div>
            </section>

            <section id="section-15" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">15. INTELLECTUAL PROPERTY RIGHTS</h2>
              <p className="text-lg leading-relaxed">
                Slush and the End-User acknowledge that, in the event of any third-party claim that the licensed Application 
                or the End-User's possession and use of that licensed Application infringes on the third party's intellectual 
                property rights, Slush and not Apple, will be solely responsible for the investigation, defense, settlement 
                and discharge or any such intellectual property infringement claims.
              </p>
            </section>

            <section id="section-16" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">16. APPLICABLE LAW</h2>
              <p className="text-lg leading-relaxed">
                This license agreement is governed by the laws of the United Kingdom excluding its conflicts of law rules.
              </p>
            </section>

            <section id="section-17" className="scroll-mt-16">
              <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">17. MISCELLANEOUS</h2>
              <div className="space-y-6">
                <p className="text-lg leading-relaxed">
                  17.1 If any of the terms of this agreement should be or become invalid, the validity of the remaining 
                  provisions shall not be affected. Invalid terms will be replaced by valid ones formulated in a way that 
                  will achieve the primary purpose.
                </p>

                <p className="text-lg leading-relaxed">
                  17.2 Collateral agreements, changes and amendments are only valid if laid down in writing. The preceding 
                  clause can only be waived in writing.
                </p>
              </div>
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