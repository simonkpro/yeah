import Link from "next/link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const TermsPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Breadcrumb */}
          <div className="mb-8">
            <nav className="text-sm text-muted-foreground">
              <Link href="/" className="transition-colors hover:text-foreground">Home</Link> / <span className="text-foreground">Terms & Privacy</span>
            </nav>
          </div>

          {/* Page Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-4 font-space-grotesk">Terms & Privacy Policy</h1>
            <p className="text-lg text-muted-foreground">Last Updated: July 4, 2025</p>
          </div>

          {/* Section 1 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-foreground mb-4 font-space-grotesk">1. Introduction</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>This Privacy & Data Policy explains how SONAR collects, uses, and protects personal information from visitors and users of the site.</p>
              <p>By using the SONAR website, subscribing to our updates, or interacting with us in any way, you agree to the practices described in this policy.</p>
              <p>“We,” “us,” and “our” refer to SONAR. “You” and “your” refer to any person using our website or services.</p>
              <p>This policy is written in accordance with the General Data Protection Regulation (GDPR) and other relevant data protection laws.</p>
            </div>
          </section>

          {/* Section 2 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-foreground mb-4 font-space-grotesk">2. Contact Information</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>If you have questions about this policy or want to make a data request, you can reach us at:</p>
              <p>Email: <a href="mailto:privacy@readsonar.xyz" className="text-foreground hover:underline">privacy@readsonar.xyz</a></p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="mb-10">
            <h2 className="text-3xl font-semibold text-foreground mb-4 font-space-grotesk">3. Information We Collect</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <h3 className="text-xl font-semibold text-foreground/90 pt-2">Information you give us</h3>
              <p>We may collect the following information when you:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>fill out a form</li>
                <li>sign up for a newsletter</li>
                <li>contact us directly</li>
                <li>make a payment or register for a service (if applicable)</li>
              </ul>
              <p>This may include your name, email address, and any other details you choose to share.</p>
              
              <h3 className="text-xl font-semibold text-foreground/90 pt-2">Information we collect automatically</h3>
              <p>When you use the site, we may collect data such as:</p>
              <ul className="list-disc list-inside space-y-2">
                <li>IP address and general location</li>
                <li>browser type and device info</li>
                <li>pages visited and time spent on site</li>
                <li>referral source (e.g. how you got here)</li>
              </ul>
              <p>We use tools like analytics software and cookies to collect this data.</p>
            </div>
          </section>
          
          {/* ... Add other sections here following the same pattern ... */}

        </div>
      </main>
      <Footer />
    </>
  );
};

export default TermsPage;