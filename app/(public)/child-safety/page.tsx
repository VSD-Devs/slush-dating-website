import React from "react";
import Link from "next/link";
import { Shield, AlertTriangle, MessageCircle } from "lucide-react";
import Script from "next/script";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Child Protection Policy | Slush Dating Safety Guidelines',
  description: 'Learn about Slush Dating\'s comprehensive child protection policy, safety measures, and reporting mechanisms. We maintain a zero-tolerance policy for child exploitation.',
  alternates: {
    canonical: 'https://slushdating.com/child-safety'
  },
  openGraph: {
    title: 'Child Protection Policy | Slush Dating Safety Guidelines',
    description: 'Learn about Slush Dating\'s comprehensive child protection policy, safety measures, and reporting mechanisms.',
    url: 'https://slushdating.com/child-safety',
  }
};

export default function ChildProtectionPage() {
  return (
    <>
      <Script id="child-safety-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Child Protection Policy",
            "description": "Slush Dating's comprehensive child protection policy and safety guidelines",
            "publisher": {
              "@type": "Organization",
              "name": "Slush Dating"
            },
            "mainEntity": {
              "@type": "Article",
              "headline": "Child Protection Policy",
              "datePublished": "2024-01-09",
              "dateModified": "2024-01-09",
              "author": {
                "@type": "Organization",
                "name": "Slush Dating"
              },
              "publisher": {
                "@type": "Organization",
                "name": "Slush Dating"
              }
            }
          }
        `}
      </Script>
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
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="absolute right-20 top-1/3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 animate-float-slow hidden md:block">
            <AlertTriangle className="w-6 h-6 text-white" />
          </div>
          <div className="absolute left-1/4 bottom-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 animate-float hidden md:block">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>

          {/* Circular Gradient Blobs */}
          <div className="absolute -left-20 -top-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
          
          {/* Header Content */}
          <div className="container mx-auto px-4 py-16 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Child Protection Policy</h1>
            <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Last updated January 9, 2024
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main id="main-content" className="container mx-auto px-4 py-12 prose prose-lg max-w-none">
          <div className="max-w-5xl mx-auto">
            <article itemScope itemType="https://schema.org/Article">
              <div className="bg-blue-50 border-l-4 border-blue-500 p-8 mb-12">
                <p className="text-xl leading-relaxed" itemProp="description">
                  At Slush Dating, we are committed to providing a safe and secure environment for all our users, with particular emphasis on protecting children and young people from harm. This policy outlines our commitment to child safety and the measures we take to prevent child sexual abuse and exploitation (CSAE).
                </p>
              </div>

              <nav className="mb-16" aria-label="Table of Contents">
                <h2 className="text-3xl font-bold text-center mb-8">TABLE OF CONTENTS</h2>
                <ol className="list-decimal pl-6 grid md:grid-cols-2 gap-4 text-lg">
                  <li><a href="#section-1" className="text-blue-600 hover:text-blue-800">OUR COMMITMENT TO CHILD SAFETY</a></li>
                  <li><a href="#section-2" className="text-blue-600 hover:text-blue-800">AGE VERIFICATION AND RESTRICTIONS</a></li>
                  <li><a href="#section-3" className="text-blue-600 hover:text-blue-800">REPORTING MECHANISMS</a></li>
                  <li><a href="#section-4" className="text-blue-600 hover:text-blue-800">CONTENT MODERATION</a></li>
                  <li><a href="#section-5" className="text-blue-600 hover:text-blue-800">LEGAL COMPLIANCE</a></li>
                  <li><a href="#section-6" className="text-blue-600 hover:text-blue-800">CONTACT INFORMATION</a></li>
                </ol>
              </nav>

              <div className="space-y-16">
                <section id="section-1" className="scroll-mt-16" itemProp="articleSection">
                  <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">1. OUR COMMITMENT TO CHILD SAFETY</h2>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      Slush Dating maintains a zero-tolerance policy towards child sexual abuse and exploitation (CSAE). We are committed to:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Preventing the creation, distribution, and viewing of child sexual abuse material (CSAM)</li>
                      <li>Protecting minors from inappropriate content and potential predators</li>
                      <li>Working with law enforcement agencies to report and investigate any instances of CSAE</li>
                      <li>Regular review and updates of our safety measures and policies</li>
                      <li>Training our staff on child safety protocols and reporting procedures</li>
                    </ul>
                  </div>
                </section>

                <section id="section-2" className="scroll-mt-16" itemProp="articleSection">
                  <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">2. AGE VERIFICATION AND RESTRICTIONS</h2>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      To ensure the safety of minors, we implement strict age verification measures:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Minimum age requirement of 18 years to use our services</li>
                      <li>Multi-step age verification process during registration</li>
                      <li>Regular audits of user profiles for age compliance</li>
                      <li>Immediate account suspension for users found to be underage</li>
                      <li>Prohibition of content or behavior targeting minors</li>
                    </ul>
                  </div>
                </section>

                <section id="section-3" className="scroll-mt-16" itemProp="articleSection">
                  <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">3. REPORTING MECHANISMS</h2>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      We provide multiple channels for users to report concerns about child safety:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>In-app reporting button on all user profiles and messages</li>
                      <li>Dedicated email address: support@slushdating.com</li>
                      <li>24/7 monitoring of reports related to child safety</li>
                      <li>Immediate escalation of CSAE-related reports to relevant authorities</li>
                      <li>Option for anonymous reporting</li>
                    </ul>
                  </div>
                </section>

                <section id="section-4" className="scroll-mt-16" itemProp="articleSection">
                  <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">4. CONTENT MODERATION</h2>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      We employ robust content moderation systems to prevent CSAM and protect users:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>AI-powered image and video scanning for CSAM detection</li>
                      <li>Continuous moderation of profile photos and content</li>
                      <li>Immediate removal of any content flagged as potentially harmful to minors, with suspensions of accounts</li>
                    </ul>
                  </div>
                </section>

                <section id="section-5" className="scroll-mt-16" itemProp="articleSection">
                  <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">5. LEGAL COMPLIANCE</h2>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      We comply with all relevant UK and international laws regarding child protection:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Online Safety Act 2023</li>
                      <li>UK Child Safety Online Regulations</li>
                      <li>GDPR requirements for processing minors' data</li>
                      <li>Mandatory reporting of CSAM to law enforcement</li>
                      <li>Regular compliance audits and updates</li>
                    </ul>
                  </div>
                </section>

                <section id="section-6" className="scroll-mt-16" itemProp="articleSection">
                  <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">6. CONTACT INFORMATION</h2>
                  <div className="space-y-6">
                    <p className="text-lg leading-relaxed">
                      For any concerns or questions about child safety on our platform:
                    </p>
                    <ul className="list-disc pl-6 space-y-3">
                      <li>Child Safety Officer: support@slushdating.com</li>
                      <li>Report CSAM: https://www.slushdating.com/contact or in-app</li>
                      <li>General Inquiries: support@slushdating.com</li>
                    </ul>
                    <div className="bg-yellow-50 border-l-4 border-yellow-500 p-6 mt-8">
                      <p className="text-lg">
                        If you believe a child is in immediate danger, please contact the police on 999 (UK) or your local emergency services immediately.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </article>
          </div>
        </main>
      </div>
    </>
  );
} 