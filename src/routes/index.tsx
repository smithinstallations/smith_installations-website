import { createFileRoute } from "@tanstack/react-router";
import { ContactForm } from "@/components/ContactForm";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "IT Solutions | Network, Phone, Access Control & IT Support" },
      {
        name: "description",
        content:
          "Reliable IT services for businesses: network infrastructure, phone systems, access control, and general IT support. Get in touch for a free consultation.",
      },
      { property: "og:title", content: "IT Solutions | Network, Phone, Access Control & IT Support" },
      {
        property: "og:description",
        content:
          "Reliable IT services for businesses: network infrastructure, phone systems, access control, and general IT support.",
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
          <span className="text-lg font-semibold tracking-tight">IT Solutions</span>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get a quote
          </a>
        </div>
      </header>

      <main className="flex-1">
        <section className="px-6 py-20 sm:py-28">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Technology that just works
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              A man of many talents. We focus on network, phone, access control, alarm, and
              everything IT — so your business stays connected, secure, and supported.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
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
        </section>

        <section id="services" className="border-t border-border px-6 py-20">
          <div className="mx-auto max-w-5xl">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-semibold tracking-tight">What we do</h2>
              <p className="mt-3 text-muted-foreground">
                Practical technology services built around your business needs.
              </p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="rounded-xl border border-border bg-card p-6 text-card-foreground shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{service.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground">{service.description}</p>
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
          &copy; {new Date().getFullYear()} IT Solutions. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
