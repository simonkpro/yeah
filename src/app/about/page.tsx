import Link from "next/link";
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';

const AboutPage = () => {
  return (
    <>
      <Header />
      <main className="container mx-auto px-6 py-12">
        {/* Breadcrumb */}
        <div className="mb-8">
          <nav className="text-sm text-muted-foreground">
            <Link href="/" className="transition-colors">Home</Link> / <span className="text-foreground">About</span>
          </nav>
        </div>

        {/* Page Header */}
        <div className="mb-16">
          <h1 className="text-4xl font-bold text-foreground mb-6 font-space-grotesk">About SONAR</h1>
          <p className="text-xl text-muted-foreground max-w-3xl leading-relaxed">
            SONAR is an independent publication tracking movements in crypto, equities, macro, and the tools that shape them. It exists to surface signal, synthesize complexity, and map what's next—without noise.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-6 font-space-grotesk">What SONAR Does</h2>
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              The financial internet is saturated with content but thin on context. SONAR fills that gap. It covers market events, policy shifts, price structure, and capital flows with a focus on clarity, continuity, and practical relevance.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From Layer 2 protocol releases to ETF filings and earnings reports, SONAR connects dots across domains—without hype, without filler, and without pretending markets move in isolation.
            </p>
          </div>
        </section>

        {/* Principles Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 font-space-grotesk">Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="cosmic-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Independence</h3>
              <p className="text-muted-foreground">
                SONAR is not funded by exchanges, protocols, or asset managers. Editorial calls are made without influence.
              </p>
            </div>
            <div className="cosmic-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Transparency</h3>
              <p className="text-muted-foreground">
                Sources are cited. Conflicts are disclosed. Errors are corrected. Opinions are labeled as such.
              </p>
            </div>
            <div className="cosmic-card p-6">
              <h3 className="text-xl font-semibold text-foreground mb-4">Clarity</h3>
              <p className="text-muted-foreground">
                Jargon gets explained. Models get unpacked. If it's not readable, it's not useful.
              </p>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-foreground mb-8 font-space-grotesk">Who’s Behind It</h2>
          <div className="max-w-4xl">
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              SONAR is written and maintained by [your name or pseudonym], a researcher and investor with experience across digital assets, public equities, and product analytics. This project started as an internal memo habit and became a public record of market attention.
            </p>
            <div className="cosmic-card p-8">
              <p className="text-muted-foreground italic">
                “The goal isn’t to predict markets. It’s to pay attention to the right things, early enough to matter.”
              </p>
              <p className="text-foreground font-medium mt-4">— SONAR</p>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section>
          <div className="cosmic-card p-8 text-center">
            <h2 className="text-2xl font-semibold text-foreground mb-4 font-space-grotesk">Contact</h2>
            <p className="text-muted-foreground mb-6">
              Editorial feedback, data questions, or collaboration inquiries → <Link href="/contact" className="underline underline-offset-4 hover:text-foreground">get in touch</Link>.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default AboutPage;