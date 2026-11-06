import { profile } from "@/data/profile";
import { projects } from "@/data/projects";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { ProjectGrid } from "@/components/project-grid";
import { SectionHeading } from "@/components/section-heading";
import { CopyEmail } from "@/components/copy-email";
import {
  ArrowRight,
  ArrowUpRight,
  GitHub,
  LinkedIn,
  Mail,
  Sparkle,
} from "@/components/icons";

const socialIcons = {
  GitHub: GitHub,
  LinkedIn: LinkedIn,
} as const;

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* ── Hero ───────────────────────────────────────────── */}
        <section className="relative overflow-hidden border-b border-line">
          <div className="grid-backdrop pointer-events-none absolute inset-0" />
          <div className="relative mx-auto grid w-full max-w-6xl items-center gap-14 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.15fr_0.85fr] lg:gap-10">
            <div>
              <div
                className="animate-fade-up inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1.5 text-xs text-muted backdrop-blur"
                style={{ animationDelay: "0ms" }}
              >
                <span className="animate-ring inline-block size-1.5 rounded-full bg-emerald-400" />
                {profile.availability}
              </div>

              <h1
                className="animate-fade-up mt-6 max-w-2xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl"
                style={{ animationDelay: "80ms" }}
              >
                Hi, I&apos;m {profile.name}. I build{" "}
                <span className="text-gradient">things for the web.</span>
              </h1>

              <p
                className="animate-fade-up mt-6 max-w-xl text-base leading-relaxed text-muted sm:text-lg"
                style={{ animationDelay: "160ms" }}
              >
                {profile.intro}
              </p>

              <div
                className="animate-fade-up mt-8 flex flex-wrap items-center gap-3"
                style={{ animationDelay: "240ms" }}
              >
                <a
                  href="#work"
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110"
                >
                  View my work
                  <ArrowRight className="size-4 transition group-hover:translate-x-0.5" />
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-5 py-3 text-sm font-medium transition hover:border-accent/60 hover:bg-surface"
                >
                  <Mail className="size-4 text-muted" />
                  Get in touch
                </a>
              </div>

              <div
                className="animate-fade-up mt-8 flex flex-wrap items-center gap-x-5 gap-y-3"
                style={{ animationDelay: "320ms" }}
              >
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                  Find me
                </span>
                <div className="flex items-center gap-2">
                  {profile.socials.map((social) => {
                    const Icon =
                      socialIcons[social.label as keyof typeof socialIcons] ??
                      ArrowUpRight;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={social.label}
                        className="flex size-9 items-center justify-center rounded-full border border-line bg-surface/50 text-muted transition hover:border-accent/60 hover:text-ink"
                      >
                        <Icon className="size-4" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Code card */}
            <div
              className="animate-fade-up relative mx-auto w-full max-w-md lg:mx-0"
              style={{ animationDelay: "200ms" }}
            >
              <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-accent/10 blur-3xl" />
              <div className="animate-float overflow-hidden rounded-3xl border border-line bg-surface/80 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.6)] backdrop-blur">
                <div className="flex items-center gap-2 border-b border-line px-5 py-3.5">
                  <span className="size-2.5 rounded-full bg-rose-400/80" />
                  <span className="size-2.5 rounded-full bg-amber-400/80" />
                  <span className="size-2.5 rounded-full bg-emerald-400/80" />
                  <span className="ml-2 font-mono text-[11px] text-muted">
                    developer.ts
                  </span>
                </div>
                <pre className="overflow-x-auto p-5 font-mono text-[12px] leading-6 sm:text-[13px]">
                  <code>
                    <span className="text-muted">const</span>{" "}
                    <span className="text-ink">developer</span>{" "}
                    <span className="text-muted">= {"{"}</span>
                    {"\n"}
                    {"  "}
                    <span className="text-accent">name</span>
                    <span className="text-muted">: </span>
                    <span className="text-emerald-500 dark:text-emerald-300">
                      &quot;{profile.name}&quot;
                    </span>
                    <span className="text-muted">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-accent">role</span>
                    <span className="text-muted">: </span>
                    <span className="text-emerald-500 dark:text-emerald-300">
                      &quot;{profile.role}&quot;
                    </span>
                    <span className="text-muted">,</span>
                    {"\n"}
                    {"  "}
                    <span className="text-accent">stack</span>
                    <span className="text-muted">: [</span>
                    <span className="text-emerald-500 dark:text-emerald-300">
                      &quot;Next.js&quot;
                    </span>
                    <span className="text-muted">, </span>
                    <span className="text-emerald-500 dark:text-emerald-300">
                      &quot;TypeScript&quot;
                    </span>
                    <span className="text-muted">, </span>
                    <span className="text-emerald-500 dark:text-emerald-300">
                      &quot;Node&quot;
                    </span>
                    <span className="text-muted">],</span>
                    {"\n"}
                    {"  "}
                    <span className="text-accent">available</span>
                    <span className="text-muted">: </span>
                    <span className="text-sky-500 dark:text-sky-300">true</span>
                    <span className="text-muted">,</span>
                    {"\n"}
                    <span className="text-muted">{"};"}</span>
                  </code>
                </pre>
                <div className="flex items-center justify-between border-t border-line px-5 py-3 text-[11px] text-muted">
                  <span className="inline-flex items-center gap-1.5">
                    <span className="size-1.5 rounded-full bg-emerald-400" />
                    {profile.location}
                  </span>
                  <span className="font-mono">v2026</span>
                </div>
              </div>

              <div className="animate-float absolute -bottom-5 -left-3 flex items-center gap-2 rounded-2xl border border-line bg-surface px-4 py-3 shadow-xl sm:-left-6">
                <Sparkle className="size-4 text-accent" />
                <span className="text-xs font-medium">
                  {profile.stats[0].value} years of craft
                </span>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="relative border-t border-line bg-surface/30">
            <dl className="mx-auto grid w-full max-w-6xl grid-cols-2 divide-line px-5 sm:grid-cols-4 sm:divide-x sm:px-8">
              {profile.stats.map((stat) => (
                <div key={stat.label} className="px-1 py-6 sm:px-6">
                  <dt className="order-2 mt-1 text-xs text-muted">{stat.label}</dt>
                  <dd className="font-display text-2xl font-semibold tracking-tight sm:text-3xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── Work ───────────────────────────────────────────── */}
        <section id="work" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected work"
              title="Projects I'm proud of"
              description="A mix of client work, products and experiments. Every project below has a dedicated page with the story behind it."
            />
            <a
              href={`mailto:${profile.email}?subject=Project%20enquiry`}
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-muted transition hover:text-ink"
            >
              Have a project in mind?
              <ArrowUpRight className="size-4 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
          </div>

          <div className="mt-10">
            <ProjectGrid />
          </div>
        </section>

        {/* ── About ──────────────────────────────────────────── */}
        <section id="about" className="scroll-mt-24 border-y border-line bg-surface/30">
          <div className="mx-auto grid w-full max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                eyebrow="About me"
                title="Curious by default, careful by habit."
              />
              <div className="mt-6 space-y-4 text-sm leading-relaxed text-muted sm:text-base">
                {profile.about.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-line bg-surface/60 p-5">
                <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                  Right now
                </p>
                <ul className="mt-3 space-y-2 text-sm text-muted">
                  <li className="flex gap-2">
                    <span className="text-accent">▸</span>
                    Building new products with Next.js and TypeScript
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">▸</span>
                    Exploring AI tooling and retrieval systems
                  </li>
                  <li className="flex gap-2">
                    <span className="text-accent">▸</span>
                    Open to freelance and full-time roles
                  </li>
                </ul>
              </div>
            </div>

            <div>
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
                Tools of the trade
              </p>
              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                {profile.skillGroups.map((group, index) => (
                  <div
                    key={group.title}
                    className={`rounded-2xl border border-line bg-surface/60 p-5 ${
                      index === 2 ? "sm:col-span-2" : ""
                    }`}
                  >
                    <h3 className="text-sm font-semibold">{group.title}</h3>
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-lg border border-line bg-bg/50 px-2.5 py-1.5 text-xs text-muted transition hover:border-accent/50 hover:text-ink"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div className="rounded-2xl border border-line bg-surface/60 p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    Currently reading
                  </p>
                  <p className="mt-2 text-sm font-medium">
                    The Design of Everyday Things
                  </p>
                  <p className="mt-1 text-xs text-muted">Don Norman</p>
                </div>
                <div className="rounded-2xl border border-line bg-surface/60 p-5">
                  <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
                    Based in
                  </p>
                  <p className="mt-2 text-sm font-medium">{profile.location}</p>
                  <p className="mt-1 text-xs text-muted">
                    Working with teams anywhere
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Experience ─────────────────────────────────────── */}
        <section id="experience" className="mx-auto w-full max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-24">
          <SectionHeading
            eyebrow="Experience"
            title="Where I've been"
            description="A short version of the journey. The full story usually comes out over coffee."
          />

          <div className="mt-10 border-l border-line">
            {profile.experience.map((job) => (
              <div
                key={`${job.company}-${job.period}`}
                className="relative grid gap-3 pb-10 pl-6 last:pb-0 sm:grid-cols-[170px_1fr] sm:gap-8 sm:pl-8"
              >
                <span className="absolute -left-[5px] top-1.5 size-2.5 rounded-full border-2 border-bg bg-accent" />
                <p className="font-mono text-xs text-muted">{job.period}</p>
                <div>
                  <h3 className="font-display text-lg font-semibold tracking-tight">
                    {job.role}
                  </h3>
                  <p className="mt-0.5 text-sm text-accent">{job.company}</p>
                  <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                    {job.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── Contact ────────────────────────────────────────── */}
        <section id="contact" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-24">
          <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-[2rem] border border-line bg-surface/60 p-8 sm:p-12">
            <div className="pointer-events-none absolute -right-24 -top-24 size-72 rounded-full bg-accent/15 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 opacity-[0.4] [background-image:radial-gradient(var(--line)_1px,transparent_1px)] [background-size:22px_22px] [mask-image:radial-gradient(ellipse_at_top,black,transparent_75%)]" />

            <div className="relative max-w-2xl">
              <p className="flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                <span className="inline-block size-1.5 rounded-full bg-accent" />
                Contact
              </p>
              <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight sm:text-4xl">
                Let&apos;s build something worth using.
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-muted sm:text-base">
                I&apos;m currently open to freelance projects and full-time roles.
                Tell me what you&apos;re working on and I&apos;ll get back to you
                within a day or two.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href={`mailto:${profile.email}`}
                  className="group inline-flex items-center gap-2 rounded-full bg-accent px-5 py-3 text-sm font-semibold text-accent-ink transition hover:brightness-110"
                >
                  <Mail className="size-4" />
                  Say hello
                  <ArrowUpRight className="size-3.5 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </a>
                <CopyEmail email={profile.email} />
              </div>

              <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
                {profile.socials.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm text-muted transition hover:text-ink"
                  >
                    {social.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                ))}
              </div>
            </div>

            <p className="relative mt-10 font-mono text-[11px] uppercase tracking-[0.18em] text-muted">
              {projects.length} projects · {profile.stats[0].value} years · one
              coffee at a time
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
