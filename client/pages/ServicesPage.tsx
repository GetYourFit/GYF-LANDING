import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { ArrowLeft, Sparkles, Camera, Wand2, LifeBuoy } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero */}
      <section className="bg-gradient-to-b from-coral-400 to-coral-200/20 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link to="/" className="inline-flex items-center gap-2 text-black hover:text-gray-700 transition-colors duration-200">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-manrope font-medium">Back to Home</span>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-4xl lg:text-6xl font-manrope font-bold text-black mb-6">Services</h1>
            <p className="text-xl lg:text-2xl font-manrope text-black max-w-5xl mx-auto leading-relaxed">
              End‑to‑end fashion intelligence: analyze images, generate fit‑aware try‑ons, and deliver personalized looks at scale.
            </p>
          </div>
        </div>
      </section>

      {/* Services Detail */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {/* AI Styling API */}
          <article id="ai-styling-api" className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="bg-coral-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <Sparkles className="w-7 h-7 text-coral-600" />
              </div>
              <h2 className="text-3xl font-manrope font-bold text-black mb-3">AI Styling API</h2>
              <p className="text-gray-700 font-manrope">
                A REST API that transforms customer photos into actionable styling data. We run computer vision pipelines to infer body shape, key measurements (relative), undertone, and visual attributes. Responses include confidence scores and versioned schemas.
              </p>
            </div>
            <div className="lg:col-span-8 bg-gradient-to-b from-coral-400 to-coral-200/20 p-6 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-black font-manrope">
                <li>Endpoints: /analyze, /predict-outfit, /feedback</li>
                <li>Formats: JSON over HTTPS, Webhooks for async jobs</li>
                <li>SDKs: JavaScript/TypeScript, Swift, Kotlin</li>
                <li>Security: signed uploads, expiring URLs, PII‑safe processing</li>
                <li>Latency: p95 under 150ms for sync analysis (single image)</li>
              </ul>
            </div>
          </article>

          {/* Virtual Try‑On */}
          <article id="virtual-try-on" className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="bg-coral-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <Camera className="w-7 h-7 text-coral-600" />
              </div>
              <h2 className="text-3xl font-manrope font-bold text-black mb-3">Virtual Try‑On</h2>
              <p className="text-gray-700 font-manrope">
                Photorealistic try‑ons rendered with size‑aware draping and fabric priors. Works for tops, bottoms, dresses and layered looks. Output is CDN‑cacheable images or short clips ready for PDP and marketing.
              </p>
            </div>
            <div className="lg:col-span-8 bg-gradient-to-b from-coral-400 to-coral-200/20 p-6 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-black font-manrope">
                <li>Input: product mask or flat lay, user photo, target size</li>
                <li>Controls: pose normalization, background removal, watermark</li>
                <li>Modes: real‑time preview, batch rendering, A/B variants</li>
                <li>Compliance: opt‑in media, deletion SLAs, region pinning</li>
              </ul>
            </div>
          </article>

          {/* Style Recommendations */}
          <article id="style-recommendations" className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="bg-coral-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <Wand2 className="w-7 h-7 text-coral-600" />
              </div>
              <h2 className="text-3xl font-manrope font-bold text-black mb-3">Style Recommendations</h2>
              <p className="text-gray-700 font-manrope">
                Rank‑aware recommendations that blend user taste, catalog rules, and trends. Models learn from implicit signals and explicit feedback to compose complete outfits or compatible items.
              </p>
            </div>
            <div className="lg:col-span-8 bg-gradient-to-b from-coral-400 to-coral-200/20 p-6 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-black font-manrope">
                <li>Objectives: CTR, add‑to‑cart, margin, return risk</li>
                <li>Constraints: inventory, size availability, brand rules</li>
                <li>Surfaces: PDP bundles, homepage rails, emails, chat</li>
                <li>Evaluation: offline metrics + online A/B testing</li>
              </ul>
            </div>
          </article>

          {/* Enterprise Support */}
          <article id="enterprise-support" className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-4">
              <div className="bg-coral-100 w-14 h-14 rounded-xl flex items-center justify-center mb-5">
                <LifeBuoy className="w-7 h-7 text-coral-600" />
              </div>
              <h2 className="text-3xl font-manrope font-bold text-black mb-3">Enterprise Support</h2>
              <p className="text-gray-700 font-manrope">
                White‑glove onboarding, solution architecture, and SLAs tuned for retail calendars. Dedicated channels for incidents and performance tuning, with quarterly roadmap reviews.
              </p>
            </div>
            <div className="lg:col-span-8 bg-gradient-to-b from-coral-400 to-coral-200/20 p-6 rounded-lg">
              <ul className="list-disc pl-6 space-y-2 text-black font-manrope">
                <li>Support: 24/7 pager for critical paths, shared Slack</li>
                <li>Security: DPA, SOC‑2 reports, regional data residency</li>
                <li>Deployment: cloud, VPC peering, or on‑prem gateway</li>
                <li>Reporting: usage analytics, cost controls, success reviews</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </div>
  );
}
