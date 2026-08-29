import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";
import logoUrl from "@/assets/smith-installations-horizontal-color.svg?url";
import heroImage from "@/assets/hero-image.jpg";
import servicesImage from "@/assets/services-image.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Smith Installations LLC | Network, Phone, Access Control & IT Support" },
      {
        name: "description",
        content:
          "Smith Installations LLC delivers reliable IT services for businesses: network infrastructure, phone systems, access control, alarm security, internet, and IT support. Get in touch for a free consultation.",
      },
      { property: "og:title", content: "Smith Installations LLC | Network, Phone, Access Control & IT Support" },
      {
        property: "og:description",
        content:
          "Reliable IT services for businesses: network infrastructure, phone systems, access control, alarm security, internet, and IT support.",
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
      "Design, install, and maintain secure, high-performance networks that keep your business connected.",
  },
  {
    title: "Phone Systems & VoIP",
    description:
      "Modern voice solutions, from traditional PBX to cloud-based VoIP, tailored to how you communicate.",
  },
  {
    title: "Access Control",
    description:
      "Control who goes where with keycards, fobs, biometric readers, and integrated entry management.",
  },
  {
    title: "Alarm & Security",
    description:
      "Protect your people and property with intrusion detection, monitoring, surveillance, and alert systems.",
  },
  {
    title: "Internet Services",
    description:
      "Resold business internet plans and connectivity solutions, sourced and managed so you get reliable bandwidth.",
  },
  {
    title: "General IT Support",
    description:
      "Day-to-day tech help, troubleshooting, and strategic guidance so you can focus on running your business.",
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
                  From network cabling and phone systems to access control and alarm monitoring,{" "}
                  <strong className="text-foreground">Smith Installations LLC</strong> designs, installs,
                  and supports the technology that keeps businesses secure, connected, and productive —
                  with the responsiveness of a local partner and the capability to scale.
                </p>
                <div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
                  <a
                    href="#contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Start a project
                  </a>
                  <a
                    href="#services"
                    className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-accent"
                  >
                    Explore services
                  </a>
                </div>
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

        <section id="services" className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="order-2 lg:order-1">
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
              </div>
              <div className="order-1 lg:order-2">
                <h2 className="text-3xl font-semibold tracking-tight">What we do</h2>
                <p className="mt-3 text-muted-foreground">
                  Practical technology services built around your business needs.
                </p>
                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  {services.map((service) => (
                    <div
                      key={service.title}
                      className="rounded-xl border border-border bg-card p-5 text-card-foreground shadow-sm"
                    >
                      <h3 className="text-base font-semibold">{service.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
                    </div>
                  ))}
                </div>
              </div>
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
