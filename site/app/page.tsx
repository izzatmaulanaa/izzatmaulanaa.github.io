import Image from 'next/image'
import Link from 'next/link'
import { Mail, Phone, Download, Trophy, TrendingUp, Building2, Folder, Target, FolderKanban, GraduationCap, Briefcase, Sparkles, PanelsTopLeft, MessageCircle } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Card, CardContent } from '../components/ui/card'
import { Progress } from '../components/ui/progress'
import StickyTop from '../components/sticky-top'

 

export default function Page() {
  return (
    <main className="px-6 lg:px-10 py-12">
      <StickyTop />
      <section className="flex flex-col-reverse lg:flex-row items-center gap-10 px-4 sm:px-6 lg:px-8">
        <div className="flex-1 space-y-6 lg:order-last">
          <h1 className="text-3xl lg:text-5xl font-extrabold text-accent tracking-tight">
            Ahmad Izzat Maulana
          </h1>
          <p className="text-foreground/90 max-w-2xl">
            Software Engineer, Content Designer, Digital Marketer, SEO Consultant, and Web Developer from Banyuwangi.
            Communicative and collaborative with experience across IT services, Apple Stores, property developer, social media agency, and tour & travel.
          </p>
          <div className="flex flex-wrap gap-3">
            <Button href="mailto:ahmadizzatmaulana@gmail.com">
              <Mail size={18} /> Hire Me
            </Button>
            <Button href="#portfolio" variant="outline">
              <FolderKanban size={18} /> See Portfolio
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
            <Card>
              <CardContent className="pt-5 px-4 pb-4">
                <div className="flex items-center gap-3">
                  <Folder className="text-accent" size={20} />
                  <div>
                    <div className="text-xl font-bold">2</div>
                    <div className="text-sm text-muted">IT Projects</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-5 px-4 pb-4">
                <div className="flex items-center gap-3">
                  <Building2 className="text-accent" size={20} />
                  <div>
                    <div className="text-xl font-bold">22+</div>
                    <div className="text-sm text-muted">Homes Sold</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-5 px-4 pb-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-accent" size={20} />
                  <div>
                    <div className="text-xl font-bold">421+</div>
                    <div className="text-sm text-muted">iPhones Sold</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-5 px-4 pb-4">
                <div className="flex items-center gap-3">
                  <Trophy className="text-accent" size={20} />
                  <div>
                    <div className="text-xl font-bold">28+</div>
                    <div className="text-sm text-muted">Travel Packages Sold</div>
                  </div>
                </div>
              </CardContent>
            </Card>
            
          </div>
        </div>

        <div className="flex-1 grid place-items-center lg:order-first">
          <div className="relative aspect-square w-72 lg:w-[420px]">
            <Image
              src="/portrait.png"
              alt="Portrait of Ahmad Izzat Maulana"
              fill
              priority
              sizes="(min-width: 1024px) 420px, 288px"
              quality={100}
              className="shadow-md object-cover"
            />
          </div>
        </div>
      </section>

      

      {/* Objective */}
      <section id="objective" className="mt-16 space-y-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-accent flex items-center gap-2">
          <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-accent/20">
            <Target className="h-4 w-4 text-accent" />
          </span>
          Objective
        </h2>
        <p className="text-muted max-w-4xl lg:max-w-5xl">
          I am a Software Engineer, Content Designer, Digital Marketer, SEO Consultant, and Web Developer based in Banyuwangi. I have cross-industry experience in IT services, Apple Stores (iMortal Store & Lion Store), a property developer (PT. Agro Ijen Sukses Makmur), a social media agency (Infinity Creator), and tour & travel (JOGJA75). Achievements include selling 22 subsidized housing units, 421 iPhones, and 28 tour packages.
        </p>
        <p className="text-muted max-w-4xl lg:max-w-5xl">
          Core skills: Frontend (Tailwind, Bootstrap), Backend (Python, TypeScript, Next.js), Machine Learning/Computer Vision (OpenCV, CNN, NumPy), SEO (On-Page & Off-Page), Growth Hacking, and website UI/UX. My working principle is simple: speed of work is the key—without sacrificing quality—grounded in a data‑driven and collaborative approach.
        </p>
      </section>

      {/* Projects */}
      <section id="projects" className="mt-12 space-y-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-accent flex items-center gap-2">
          <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-accent/20">
            <FolderKanban className="h-4 w-4 text-accent" />
          </span>
          Projects
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <Card className="relative group transition hover:-translate-y-0.5 hover:shadow-md outline outline-0 outline-transparent focus:outline-0 focus:outline-transparent active:outline-0 active:outline-transparent ring-0 ring-transparent focus:ring-0 focus:ring-transparent hover:outline hover:outline-2 hover:outline-yellow-400 cursor-pointer rounded-md">
            <Link href="https://protalent-hrd.com" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 focus:outline-none focus-visible:outline-none" aria-label="Open AI ATS for protalent-hrd.com" />
            <CardContent className="pt-5 px-4 pb-4 space-y-2">
              <div className="flex items-center gap-3">
                <img
                  src="https://www.google.com/s2/favicons?domain=protalent-hrd.com&sz=64"
                  alt="protalent-hrd favicon"
                  className="w-6 h-6"
                />
                <span className="font-semibold">AI ATS for protalent-hrd.com</span>
              </div>
              <p className="text-sm text-muted">Built with Next.js, React, Tailwind, and ML (Python) for CV analysis.</p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs bg-card/50">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" className="w-3.5 h-3.5" /> Next.js
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs bg-card/50">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" className="w-3.5 h-3.5" /> React
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs bg-card/50">
                  Tailwind
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs bg-card/50">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" className="w-3.5 h-3.5" /> Python
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs bg-card/50">
                  🤖 ML
                </span>
              </div>
              <ul className="text-sm text-muted list-disc pl-5 space-y-1">
                <li>Timeline: 18 days total</li>
                <li>Dataset training: 8 days</li>
                <li>Backend & Frontend: 10 days</li>
              </ul>
            </CardContent>
            <div className="pointer-events-none absolute right-3 bottom-3 z-20 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 translate-y-1 group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-all text-[11px]">
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 text-foreground px-2 py-1 border border-accent/30 shadow-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/></svg>
                See Results
              </span>
            </div>
          </Card>

          <Card className="relative group transition hover:-translate-y-0.5 hover:shadow-md outline outline-0 outline-transparent focus:outline-0 focus:outline-transparent active:outline-0 active:outline-transparent ring-0 ring-transparent focus:ring-0 focus:ring-transparent hover:outline hover:outline-2 hover:outline-yellow-400 cursor-pointer rounded-md">
            <Link href="https://bilivbacklink.com" target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 focus:outline-none focus-visible:outline-none" aria-label="Open bilivbacklink.com — Web App" />
            <CardContent className="pt-5 px-4 pb-4 space-y-2">
              <div className="flex items-center gap-3">
                <img
                  src="https://www.google.com/s2/favicons?domain=bilivbacklink.com&sz=64"
                  alt="bilivbacklink favicon"
                  className="w-6 h-6"
                />
                <span className="font-semibold">bilivbacklink.com — Web App</span>
              </div>
              <p className="text-sm text-muted">Built with JavaScript, Bootstrap, API integration on subdomain, and JS algorithm for tracking user behavior.</p>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs bg-card/50">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-3.5 h-3.5" /> JavaScript
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs bg-card/50">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" alt="Bootstrap" className="w-3.5 h-3.5" /> Bootstrap
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs bg-card/50">
                  🔌 API
                </span>
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1 text-xs bg-card/50">
                  📈 Tracking
                </span>
              </div>
              <ul className="text-sm text-muted list-disc pl-5 space-y-1">
                <li>Timeline: 48 days total</li>
                <li>Backend: 34 days</li>
                <li>Frontend: 14 days</li>
              </ul>
            </CardContent>
            <div className="pointer-events-none absolute right-3 bottom-3 z-20 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 translate-y-1 group-hover:translate-y-0 group-focus-visible:translate-y-0 transition-all text-[11px]">
              <span className="inline-flex items-center gap-1 rounded-full bg-accent/20 text-foreground px-2 py-1 border border-accent/30 shadow-sm">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" className="opacity-80"><path d="M14 3h7v7h-2V6.41l-9.29 9.3-1.42-1.42 9.3-9.29H14V3z"/></svg>
                See Results
              </span>
            </div>
          </Card>
        </div>
      </section>

      {/* Education */}
      <section id="education" className="mt-12 space-y-3 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-accent flex items-center gap-2">
          <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-accent/20">
            <GraduationCap className="h-4 w-4 text-accent" />
          </span>
          Education
        </h2>
        <Card>
          <CardContent className="pt-5 px-4 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
              <div>
                <p className="font-semibold">SMA Negeri 1 Paiton — Mathematics & Science</p>
                <p className="text-muted">Probolinggo, East Java</p>
              </div>
              <p className="text-sm text-muted">Aug 2016 - Aug 2019</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Experience & Achievements */}
      <section id="experience" className="mt-12 space-y-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-accent flex items-center gap-2">
          <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-accent/20">
            <Briefcase className="h-4 w-4 text-accent" />
          </span>
          Experience & Achievements
        </h2>

        <div className="space-y-4">
          <Card>
            <CardContent className="pt-5 px-4 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <p className="font-semibold">PT. Agro Ijen Sukses Makmur — Social Media Content & Digital Marketing</p>
                <p className="text-muted">Property Developer • Banyuwangi, East Java • Full Time</p>
              </div>
              <p className="text-sm text-muted">Jul - Nov 2022</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm text-muted space-y-1">
              <li>Create photo/video content for promotions.</li>
              <li>Design, implement, and analyze digital marketing strategies (Ads & KOL).</li>
              <li>[Achievement] Sold 22 subsidized housing units.</li>
            </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5 px-4 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <p className="font-semibold">iMortal Store — Social Media Content & Digital Marketing</p>
                <p className="text-muted">Apple Store & Service • Banyuwangi, East Java • Hybrid</p>
              </div>
              <p className="text-sm text-muted">Sept 2022 - May 2023</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm text-muted space-y-1">
              <li>Create photo/video content for promotions.</li>
              <li>Design, implement, and analyze digital marketing strategies (Ads & KOL).</li>
              <li>[Achievement] Sold 421 iPhone units.</li>
            </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5 px-4 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <p className="font-semibold">Lion Store — Social Media Content</p>
                <p className="text-muted">Apple Store & Service • Banyuwangi, East Java • Hybrid</p>
              </div>
              <p className="text-sm text-muted">Dec 2022 - Jan 2023</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm text-muted space-y-1">
              <li>Create photo/video content for promotions.</li>
            </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5 px-4 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <p className="font-semibold">Infinity Creator — Quality Control Design</p>
                <p className="text-muted">Social Media Agency • Banyuwangi, East Java • Full Time</p>
              </div>
              <p className="text-sm text-muted">Apr - May 2023</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm text-muted space-y-1">
              <li>Analyze and revise designs, provide solutions, create brand moodboards.</li>
              <li>Design and implement SOPs for employees.</li>
            </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5 px-4 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <p className="font-semibold">CV. Paket Wisata Jogja 75 (JOGJA75) — Graphic Design, Digital Marketing & Web Developer</p>
                <p className="text-muted">Tour n Travel • Bantul, D.I Yogyakarta • Full Time</p>
              </div>
              <p className="text-sm text-muted">Jun - Jul 2023</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm text-muted space-y-1">
              <li>Create photo/video content for promotions.</li>
              <li>Design, implement, and analyze digital marketing strategies (Ads & KOL).</li>
              <li>Create articles & landing pages, website maintenance, and website UI/UX.</li>
              <li>Implement Growth Hacking from data-driven to innovative marketing methods.</li>
              <li>[Achievement] Sold 28 Jogja Tour Packages.</li>
            </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5 px-4 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <p className="font-semibold">Digital Nawasena — Web Developer & Software Engineer</p>
                <p className="text-muted">Digital Marketing & IT Services • Banyuwangi, East Java • Full Time</p>
              </div>
              <p className="text-sm text-muted">Aug 2023 - Present</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm text-muted space-y-1">
              <li>Design web-based software from frontend, backend, database, framework to production.</li>
              <li>Integrate software with APIs and secure subdomains to protect code/flows.</li>
              <li>Create end-to-end algorithm flows using Python, OpenCV, CNN, Numpy, Pandas with ML/DL.</li>
            </ul>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="pt-5 px-4 pb-4">
            <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
              <div>
                <p className="font-semibold">Digital Nawasena — SEO On Page & Off Page Expert</p>
                <p className="text-muted">Digital Marketing & IT Services • Banyuwangi, East Java • Full Time</p>
              </div>
              <p className="text-sm text-muted">Aug 2023 - Present</p>
            </div>
            <ul className="list-disc pl-5 mt-2 text-sm text-muted space-y-1">
              <li>Optimize keywords, content, images, and page structure for search engines.</li>
              <li>Increase website authority and visibility via backlinks, link building, and branding.</li>
            </ul>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="mt-12 space-y-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-accent flex items-center gap-2">
          <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-accent/20">
            <Sparkles className="h-4 w-4 text-accent" />
          </span>
          Skills
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {[
            'Frontend: Tailwind, Bootstrap',
            'Social Media Content Designer',
            'Instagram Ads Expert',
            'E-commerce Expert',
            'Backend: Python, TypeScript, Next.js',
            'Digital Marketing Expert',
            'UI/UX Website',
            'AI Friendly',
            'AI Models: CNN, OpenCV, Numpy',
            'SEO & SERP Expert',
            'SEO Off Page & On Page',
            'Copywriting',
            'Machine Learning & Deep Learning',
            'Website Developer',
            'Google Ads',
            'Growth Hacking',
          ].map((label) => (
            <Card key={label}>
              <CardContent className="pt-4 px-4 pb-3 text-sm">{label}</CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Software Proficiency */}
      <section id="software" className="mt-12 space-y-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-accent flex items-center gap-2">
          <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-accent/20">
            <PanelsTopLeft className="h-4 w-4 text-accent" />
          </span>
          Software
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {(() => {
            const iconMap: Record<string, string> = {
              Tailwind: '',
              'Next.js': 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
              'Instagram Ads': 'https://cdn.simpleicons.org/instagram',
              Bootstrap: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg',
              CNN: '', // no direct brand icon; leave blank
              Figma: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
              Python: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
              OpenCV: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
              WordPress: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-original.svg',
              TypeScript: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-plain.svg',
              Numpy: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
              'Google Ads': 'https://cdn.simpleicons.org/googleads',
            }
            return [
            ["Tailwind", 85],
            ["Next.js", 91],
            ["Instagram Ads", 95],
            ["Bootstrap", 83],
            ["CNN", 82],
            ["Figma", 90],
            ["Python", 92],
            ["OpenCV", 93],
            ["WordPress", 99],
            ["TypeScript", 84],
            ["Numpy", 94],
            ["Google Ads", 85],
          ].map(([name, value]) => (
            <Card key={name as string}>
              <CardContent className="pt-5 px-4 pb-4">
                <div className="flex items-center justify-between mb-2 text-sm">
                  <span className="inline-flex items-center gap-2">
                    {iconMap[name as string] && (
                      <img src={iconMap[name as string]} alt={`${name as string} icon`} className="w-4 h-4" />
                    )}
                    <span>{name as string}</span>
                  </span>
                  <span className="text-yellow-400">{value as number}%</span>
                </div>
                <Progress value={value as number} />
              </CardContent>
            </Card>
          ))
          })()}
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="mt-12 space-y-4 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-accent flex items-center gap-2">
          <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-accent/20">
            <FolderKanban className="h-4 w-4 text-accent" />
          </span>
          Portfolio
        </h2>
        {(() => {
          const portfolioItems = [
            { src: "/igfeed.png", alt: "Google Ads — Campaign Overview", caption: "Google Ads — Campaign Overview" },
            { src: "/igstory.png", alt: "Google Ads — Campaign CTR", caption: "Google Ads — Campaign CTR" },
            { src: "/dm1.png", alt: "Google Ads — Campaign CTR", caption: "Google Ads — Campaign CTR" },
            { src: "/dm2.png", alt: "Google Ads — Campaign CTR", caption: "Google Ads — Campaign CTR" },
            { src: "/wd1.png", alt: "Google Ads — Campaign CTR", caption: "Google Ads — Campaign CTR" },
            { src: "/wd2.png", alt: "Google Ads — Campaign CTR", caption: "Google Ads — Campaign CTR" },
          ];
          const chunks: typeof portfolioItems[] = [];
          for (let i = 0; i < portfolioItems.length; i += 2) {
            chunks.push(portfolioItems.slice(i, i + 2));
          }
          return (
            <>
              {chunks.map((chunk, idx) => (
                <div key={idx} className="space-y-2">
                  {(() => {
                    const labels = [
                      "Social Media Design",
                      "Digital Marketing",
                      "Website Develop",
                    ];
                    const label = labels[idx] ?? "Portfolio";
                    return <div className="text-sm font-semibold">{label}</div>;
                  })()}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {chunk.map((item, i) => (
                      <Card key={i} className="rounded-md">
                        <CardContent className="pt-5 px-4 pb-4">
                          <div className="relative w-full aspect-video overflow-hidden rounded-md">
                            <Image src={item.src} alt={item.alt} fill className="object-cover rounded-md" />
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
              ))}
            </>
          );
        })()}
      </section>

      {/* CTA */}
      <section
        id="contact"
        className="mt-16 sticky bottom-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t border-border px-4 sm:px-6 lg:px-8"
      >
        <Card className="bg-transparent shadow-none">
          <CardContent className="p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-3">
            <div>
              <h3 className="text-xl font-bold text-accent flex items-center gap-2">
                <span className="inline-grid place-items-center h-7 w-7 rounded-full bg-accent/20">
                  <MessageCircle className="h-4 w-4 text-accent" />
                </span>
                Let’s work together
              </h3>
            </div>
            <div className="flex gap-3">
              <Button href="mailto:ahmadizzatmaulana@gmail.com" variant="outline"><Mail size={18} /> Email</Button>
              <Button href="https://wa.me/6285156624541"><Phone size={18} /> WhatsApp</Button>
            </div>
          </CardContent>
        </Card>
      </section>
    </main>
  )
}

