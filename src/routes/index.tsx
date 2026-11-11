import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import logoUrl from "@/assets/smith-installations-horizontal-color.svg?url";
import heroImage from "@/assets/hero-image.jpg";
import servicesImage from "@/assets/services-image.jpg";
import digitalWatchdogLogo from "@/assets/logos/digital-watchdog.svg";
import specoLogo from "@/assets/logos/speco.svg";
import ictLogo from "@/assets/logos/ict.svg";
import saltoLogo from "@/assets/logos/salto.svg";
import ubiquitiLogo from "@/assets/logos/ubiquiti.svg";
import ruckusLogo from "@/assets/logos/ruckus.png";
import ekahauLogo from "@/assets/logos/ekahau.svg";
import fortinetLogo from "@/assets/logos/fortinet.svg";
import arubaLogo from "@/assets/logos/aruba.svg";
import yealinkLogo from "@/assets/logos/yealink.png";
import grandstreamLogo from "@/assets/logos/grandstream.png";
import allworxLogo from "@/assets/logos/allworx.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Smith Installations LLC | Network, Surveillance, Access Control & IT Support" },
      {
        name: "description",
        content:
          "Smith Installations LLC delivers business technology services: network infrastructure, wireless surveys, phone systems, access control, video surveillance, alarm security, internet, and IT support.",
      },
      { property: "og:title", content: "Smith Installations LLC | Network, Surveillance, Access Control & IT Support" },
      {
        property: "og:description",
        content:
          "Business technology services: network infrastructure, wireless surveys, phone systems, access control, video surveillance, alarm security, internet, and IT support.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const services = [
  {
    title: "Network & Infrastructure",
    description:
      "Structured cabling, switching, routing, and secure high-performance networks designed, installed, and maintained for reliability.",
    capabilities: [
      "Cat 5e, Cat 6, and Cat 6A cabling installation",
      "Structured cabling system design",
      "Patch panel termination, testing & certification",
      "Racks, cabinets, and cable management",
    ],
  },
  {
    title: "Wireless Surveys & Design",
    description:
      "Site surveys, heat mapping, and enterprise Wi-Fi design that eliminates dead zones and supports dense, mission-critical environments.",
    capabilities: [
      "Predictive & on-site wireless surveys",
      "Heat mapping and coverage analysis",
      "Point-to-point and point-to-multipoint wireless",
      "Outdoor broadband and Wi-Fi hotspots",
    ],
  },
  {
    title: "Phone Systems & VoIP",
    description:
      "Modern voice solutions, from traditional PBX to cloud-based VoIP, tailored to how your team communicates.",
    capabilities: [
      "Cloud-hosted and on-premise VoIP",
      "PBX installation and migration",
      "Paging and intercom systems",
      "Wireless VoIP deployments",
    ],
  },
  {
    title: "Access Control",
    description:
      "Integrated entry management with leading platforms including ICT and Salto — keycards, fobs, biometrics, and mobile credentials.",
    capabilities: [
      "ICT and Salto certified installations",
      "Keycard, fob, and mobile credentials",
      "Intercom and door hardware integration",
      "Centralized multi-door management",
    ],
  },
  {
    title: "Video Surveillance",
    description:
      "Commercial camera systems from Digital WatchDog and Speco with remote viewing, storage, and alert integration.",
    capabilities: [
      "Digital WatchDog and Speco systems",
      "IP, dome, and wireless cameras",
      "NVR/DVR storage and remote viewing",
      "Indoor and outdoor coverage design",
    ],
  },
  {
    title: "Alarm & Security",
    description:
      "Intrusion detection, monitoring, surveillance integration, and alert systems that protect your people and property around the clock.",
    capabilities: [
      "Intrusion detection and alert systems",
      "24/7 monitoring options",
      "Camera and access control integration",
      "Fire and life-safety add-ons",
    ],
  },
  {
    title: "Internet Services",
    description:
      "Resold business internet and connectivity solutions, sourced and managed so you get dependable bandwidth without the hassle.",
    capabilities: [
      "Business-class internet circuits",
      "Carrier sourcing and management",
      "Failover and redundant connectivity",
      "Single point of contact for support",
    ],
  },
  {
    title: "General IT Support",
    description:
      "Day-to-day tech help, troubleshooting, and strategic guidance so you can focus on running your business.",
    capabilities: [
      "On-site and remote troubleshooting",
      "Equipment installation and relocation",
      "Router, switch, and workstation swaps",
      "Strategic technology planning",
    ],
  },
];

const highlights = [
  {
    title: "One call for everything",
    description:
      "Network, phones, cameras, access control, alarms, and internet — designed, installed, and supported by a single accountable partner.",
  },
  {
    title: "Design-first approach",
    description:
      "Every project starts with a survey and a plan, so your system fits your building, your budget, and where your business is headed.",
  },
  {
    title: "Installed to last",
    description:
      "Certified cabling, documented work, and tested systems — built right the first time and supported for the long haul.",
  },
  {
    title: "Local and responsive",
    description:
      "Real people who answer the phone, show up on site, and stand behind their work long after install day.",
  },
];

const platforms = [
  {
    category: "Cameras",
    logos: [
      { src: digitalWatchdogLogo, alt: "Digital WatchDog" },
      { src: specoLogo, alt: "Speco Technologies" },
    ],
  },
  {
    category: "Access Control",
    logos: [
      { src: ictLogo, alt: "ICT — Integrated Control Technology" },
      { src: saltoLogo, alt: "Salto Systems" },
    ],
  },
  {
    category: "Wireless",
    logos: [
      { src: ubiquitiLogo, alt: "Ubiquiti" },
      { src: ruckusLogo, alt: "Ruckus Networks" },
      { src: ekahauLogo, alt: "Ekahau" },
    ],
  },
  {
    category: "Network & Voice",
    logos: [
      { src: ubiquitiLogo, alt: "Ubiquiti" },
      { src: fortinetLogo, alt: "Fortinet" },
      { src: arubaLogo, alt: "HPE Aruba Networking" },
      { src: yealinkLogo, alt: "Yealink" },
      { src: grandstreamLogo, alt: "Grandstream" },
      { src: allworxLogo, alt: "Allworx" },
    ],
  },
];

function Index() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-5">
          <img
            src={logoUrl}
            alt="Smith Installations LLC"
            className="h-10 w-auto sm:h-12"
          />
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get a quote
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-6 py-16 sm:py-24">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-12">
              <div className="text-center lg:text-left">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                  Technology infrastructure built for growing businesses
                </h1>
                <p className="mt-6 text-lg text-muted-foreground">
                  From structured cabling and enterprise Wi-Fi to access control, video surveillance, phone systems, and alarm monitoring,{" "}
                  <strong className="text-foreground">Smith Installations LLC</strong> designs, installs,
                  and supports the technology that keeps businesses secure, connected, and productive —
                  with the responsiveness of a local partner and the capability to scale.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Get a free quote
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    Explore services
                  </a>
                </div>
                <p className="mt-6 text-sm text-muted-foreground">
                  Free on-site estimates · Certified installers · Ongoing support after install
                </p>
              </div>
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <img
                  src={heroImage}
                  alt="IT technician working on a network server rack"
                  width={1280}
                  height={720}
                  className="h-auto w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-16">
          <div className="mx-auto max-w-5xl">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {highlights.map((highlight) => (
                <div key={highlight.title} className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm">
                  <h3 className="text-base font-semibold">{highlight.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="services" className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="overflow-hidden rounded-2xl border border-border shadow-sm">
                <img
                  src={servicesImage}
                  alt="Modern office with access control, security camera, phones, and computers"
                  width={1024}
                  height={768}
                  loading="lazy"
                  className="h-auto w-full object-cover"
                />
              </div>
              <div>
                <h2 className="text-3xl font-semibold tracking-tight">What we do</h2>
                <p className="mt-3 text-muted-foreground">
                  End-to-end technology services tailored for your business — from cabling and
                  Wi-Fi to cameras, access control, and everything IT.
                </p>
                <a
                  href="#contact"
                  className="mt-6 inline-flex items-center justify-center rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Get a free quote
                </a>
              </div>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm"
                >
                  <h3 className="text-base font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                  <ul className="mt-4 space-y-1.5 border-t border-border pt-4 text-sm text-muted-foreground">
                    {service.capabilities.map((capability) => (
                      <li key={capability} className="flex gap-2">
                        <span aria-hidden="true" className="text-primary">•</span>
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="text-center">
              <h2 className="text-3xl font-semibold tracking-tight">Platforms & specialties</h2>
              <p className="mt-3 text-muted-foreground">
                We integrate proven hardware and design methods that fit your environment and budget.
              </p>
            </div>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {platforms.map((platform) => (
                <div
                  key={platform.category}
                  className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm"
                >
                  <h3 className="text-base font-semibold">{platform.category}</h3>
                  <div className="mt-4 flex flex-col items-center justify-center gap-6 border-t border-border pt-6">
                    {platform.logos.map((logo) => (
                      <img
                        key={logo.alt}
                        src={logo.src}
                        alt={logo.alt}
                        loading="lazy"
                        className="h-10 w-auto max-w-[160px] object-contain"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-2xl">
            <div className="mb-10 text-center">
              <h2 className="text-3xl font-semibold tracking-tight">Get in touch</h2>
              <p className="mt-3 text-muted-foreground">
                Tell us what you need and we will respond within one business day.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm sm:p-8">
              <ContactForm />
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border px-6 py-8">
        <div className="mx-auto max-w-5xl text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} Smith Installations LLC. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
