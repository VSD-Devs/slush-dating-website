import Image from "next/image";
import { BookOpen, Star, Clock } from "lucide-react";

export default function GuidelinesPage() {
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
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Community Guidelines</h1>
          <div className="w-24 h-1 bg-white/80 mx-auto mb-6"></div>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Our commitment to maintaining a safe and welcoming community
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto prose prose-blue">
          <div className="bg-blue-50 border-l-4 border-blue-500 p-8 mb-12">
            <p className="text-xl leading-relaxed">
              Slush is designed for all relationship-minded singles looking to find love and connect with other local singles in their cities, towns and communities, regardless of their gender, race, religion or sexual orientation. We welcome all people looking to find love and lasting relationships and strive to provide a safe and welcoming community.
            </p>
            <p className="text-xl leading-relaxed mt-4">
              The following community guidelines are not suggestions. These are our rules. Slush reserves the right to delete and ban anyone who breaks these rules.
            </p>
          </div>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Content: Photos & Videos</h2>
            <p className="text-lg leading-relaxed mb-6">
              To help ensure the integrity of our community, every profile, photo and video is screened by our AI technology for appropriateness before it is posted on the app. Content that violates these guidelines will be deleted, and in some cases may result in account removal.
            </p>
            
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <h3 className="text-xl font-semibold mb-4">Type of content that is unacceptable:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>No Nudity or Pornography</li>
                <li>No Violent or Graphic Content</li>
                <li>No Illegal Activity or Drugs</li>
                <li>No Under Aged Children or Teens</li>
              </ul>
            </div>
            
            <p className="text-lg leading-relaxed">
              This is for the protection of children and minors. Regardless of whether the picture is of you as a child or perhaps includes a picture of you with your own children, it has no place in the Slush community.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Profanity and Discriminatory language</h2>
            <p className="text-lg leading-relaxed">
              Profiles that include profanity and discriminatory language will be warned in the first instance, if they continue to disobey these rules will be permanently banned and deleted from our community.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Copyright Infringement</h2>
            <p className="text-lg leading-relaxed">
              Any images uploaded to the Slush App must adhere to our Terms of use. By posting any content, you confirm that you own the image and have the rights to post the content on the Slush app. *Slush claims no liability or responsibility if you have posted content for which you do not have legal permission to use.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Phone Numbers or Private Information</h2>
            <p className="text-lg leading-relaxed">
              We help protect your private & confidential information by not including it on your public profile. To learn more about your privacy, see our Privacy Policy.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Messaging</h2>
            <p className="text-lg leading-relaxed">
              Bullying, Bigotry & Discrimination of any kind will not be tolerated in the Slush Community. We aim to provide a safe space and judgment-free zone for all our members, with zero tolerance for anyone who violates these community guidelines.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Hate Speech & Harassment</h2>
            <p className="text-lg leading-relaxed">
              Slush celebrates diversity and welcomes all people from different cultures, races and ethnic backgrounds. Any use of derogatory language or hate speech that promotes or incites violence against individuals or groups based on race or ethnicity, religion, disability, gender, age, nationality, sexual orientation or gender identity is strictly forbidden and may result in you being permanently banned.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Scamming</h2>
            <p className="text-lg leading-relaxed">
              There is no place for scammers or predators in the Slush community and we maintain a zero-tolerance policy against anyone attempting to steal or coerce other users into sharing their private information for fraudulent or illegal objectives. Any users found or reported to be engaging in this type of activity may be banned. In addition, any user caught sharing their own financial account information for the purpose of receiving money from other users may be banned from Slush.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Spamming</h2>
            <p className="text-lg leading-relaxed">
              Slush is designed for real, genuine people looking to find other authentic people for dating and relationships. Slush uses Facebook, Google, Apple or Email to try to confirm our members are real people. Any targeting or solicitation of our users with the objective of driving our users to external sites, including; payment processing, pornography and phishing schemes is strictly prohibited. Any such activity is a violation of our terms of service and must be reported immediately in order for action to be taken on. Any evidence of spamming other users will result in a ban.
            </p>
          </section>

          <div className="bg-blue-50 p-6 rounded-lg mt-12">
            <h2 className="text-3xl font-bold mb-8 pb-4 border-b border-gray-200">Reporting Abuse</h2>
            <p className="text-lg leading-relaxed mb-4">
              If you are having problems with or are being harassed by a member you have met online and/or offline, contact local law enforcement, then email support@slushdating.com
            </p>
            <a 
              href="/help" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-500 hover:bg-blue-600"
            >
              Learn How to Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 