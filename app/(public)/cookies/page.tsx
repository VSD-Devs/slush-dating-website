import React from "react";
import { Metadata } from "next";
import Script from "next/script";
import { Cookie, Shield, Settings } from "lucide-react";

export const metadata: Metadata = {
  title: 'Cookie Policy | Slush Dating - How We Use Cookies',
  description: 'Learn about how Slush Dating uses cookies and similar technologies to improve your experience. Understand your choices regarding cookie preferences.',
  alternates: {
    canonical: 'https://slushdating.com/cookies'
  },
  openGraph: {
    title: 'Cookie Policy | Slush Dating - How We Use Cookies',
    description: 'Learn about how Slush Dating uses cookies and similar technologies to improve your experience.',
    url: 'https://slushdating.com/cookies',
  }
};

export default function CookiePolicyPage() {
  return (
    <>
      <Script id="cookie-schema" type="application/ld+json">
        {`
          {
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Cookie Policy",
            "description": "Slush Dating's cookie policy and usage guidelines",
            "publisher": {
              "@type": "Organization",
              "name": "Slush Dating"
            },
            "mainEntity": {
              "@type": "Article",
              "headline": "Cookie Policy",
              "datePublished": "2024-01-09",
              "dateModified": "2024-01-09",
              "author": {
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
            <Cookie className="w-6 h-6 text-white" />
          </div>
          <div className="absolute right-20 top-1/3 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform rotate-12 animate-float-slow hidden md:block">
            <Shield className="w-6 h-6 text-white" />
          </div>
          <div className="absolute left-1/4 bottom-10 bg-white/10 backdrop-blur-sm rounded-2xl p-4 transform -rotate-12 animate-float hidden md:block">
            <Settings className="w-6 h-6 text-white" />
          </div>

          {/* Circular Gradient Blobs */}
          <div className="absolute -left-20 -top-20 w-72 h-72 bg-blue-300/20 rounded-full blur-3xl" />
          <div className="absolute -right-20 -bottom-20 w-72 h-72 bg-purple-300/20 rounded-full blur-3xl" />
          
          {/* Header Content */}
          <div className="container mx-auto px-4 py-16 text-center relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">COOKIE POLICY</h1>
            <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Last updated January 9, 2024
            </p>
          </div>
        </div>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <article itemScope itemType="https://schema.org/Article">
              {/* Introduction */}
              <div className="bg-gradient-to-br from-blue-50 to-white border border-blue-100 rounded-2xl p-8 shadow-sm mb-12">
                <p className="text-xl leading-relaxed text-gray-700">
                  This Cookie Policy explains how Slush Dating uses cookies and similar technologies to recognize you when you visit our website and mobile applications. 
                  It explains what these technologies are and why we use them, as well as your rights to control our use of them.
                </p>
              </div>

              {/* What are Cookies Section */}
              <section className="mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-6">What are Cookies?</h2>
                  <p className="text-gray-700 mb-4">
                    Cookies are small data files that are placed on your computer or mobile device when you visit a website. 
                    They are widely used by website owners to make their websites work, or work more efficiently, as well as 
                    to provide reporting information.
                  </p>
                  <p className="text-gray-700">
                    Cookies set by the website owner (in this case, Slush Dating) are called "first-party cookies". 
                    Cookies set by parties other than the website owner are called "third-party cookies". Third-party 
                    cookies enable third-party features or functionality to be provided on or through the website.
                  </p>
                </div>
              </section>

              {/* Types of Cookies We Use */}
              <section className="mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-6">Types of Cookies We Use</h2>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-xl font-medium mb-3">Essential Cookies</h3>
                      <p className="text-gray-700">
                        These cookies are necessary for the website to function and cannot be switched off. They are usually 
                        set in response to actions made by you such as setting your privacy preferences, logging in, or filling 
                        in forms.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Performance Cookies</h3>
                      <p className="text-gray-700">
                        These cookies allow us to count visits and traffic sources so we can measure and improve the performance 
                        of our site. They help us know which pages are the most and least popular and see how visitors move 
                        around the site.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Functionality Cookies</h3>
                      <p className="text-gray-700">
                        These cookies enable the website to provide enhanced functionality and personalization. They may be set 
                        by us or by third-party providers whose services we have added to our pages.
                      </p>
                    </div>
                    <div>
                      <h3 className="text-xl font-medium mb-3">Targeting Cookies</h3>
                      <p className="text-gray-700">
                        These cookies may be set through our site by our advertising partners. They may be used by those 
                        companies to build a profile of your interests and show you relevant adverts on other sites.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* How to Control Cookies */}
              <section className="mb-12">
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-6">How to Control Cookies</h2>
                  <p className="text-gray-700 mb-4">
                    You can set or amend your web browser controls to accept or refuse cookies. If you choose to reject cookies, 
                    you may still use our website though your access to some functionality and areas of our website may be restricted.
                  </p>
                  <div className="space-y-4">
                    <p className="text-gray-700">You can control cookies through your browser settings:</p>
                    <ul className="list-disc pl-6 space-y-2 text-gray-700">
                      <li>Chrome: Settings → Privacy and Security → Cookies and other site data</li>
                      <li>Firefox: Options → Privacy & Security → Cookies and Site Data</li>
                      <li>Safari: Preferences → Privacy → Cookies and website data</li>
                      <li>Edge: Settings → Cookies and site permissions → Cookies and site data</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* Updates to Policy */}
              <section className="mb-12">
                <div className="bg-gradient-to-br from-blue-50 to-white rounded-2xl p-8 border border-blue-100">
                  <h2 className="text-2xl font-semibold mb-4">Updates to This Policy</h2>
                  <p className="text-gray-700">
                    We may update this Cookie Policy from time to time in order to reflect changes to the cookies we use or for 
                    other operational, legal, or regulatory reasons. Please therefore revisit this Cookie Policy regularly to 
                    stay informed about our use of cookies and related technologies.
                  </p>
                </div>
              </section>

              {/* Contact Information */}
              <section>
                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                  <h2 className="text-2xl font-semibold mb-4">Questions?</h2>
                  <p className="text-gray-700">
                    If you have any questions about our use of cookies or other technologies, please email us at{' '}
                    <a href="mailto:support@slushdating.com" className="text-blue-600 hover:text-blue-800">
                      support@slushdating.com
                    </a>
                  </p>
                </div>
              </section>
            </article>
          </div>
        </main>
      </div>
    </>
  );
} 