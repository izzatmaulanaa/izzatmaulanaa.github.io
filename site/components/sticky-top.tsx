"use client"

import { useEffect, useMemo, useState } from "react"
import { Target, FolderKanban, GraduationCap, Briefcase, Sparkles, PanelsTopLeft, MessageCircle, User } from "lucide-react"

function toLabel(id: string) {
  if (!id) return "Who am i?"
  const map: Record<string, string> = {
    projects: "Projects",
    objective: "Objective",
    education: "Education",
    experience: "Experience",
    skills: "Skills",
    software: "Software",
    portfolio: "Portfolio",
    contact: "Contact",
  }
  return map[id] ?? id.replace(/-/g, " ").replace(/\b\w/g, (m) => m.toUpperCase())
}

export default function StickyTop() {
  const [current, setCurrent] = useState<string>("Who am i?")
  const [currentId, setCurrentId] = useState<string>("")
  const [show, setShow] = useState<boolean>(false)

  useEffect(() => {
    const ids = [
      "projects",
      "objective",
      "education",
      "experience",
      "skills",
      "software",
      "portfolio",
      "contact",
    ]
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el)

    if (sections.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Prefer the most visible; if tie, prefer the one closest to the top
        const visible = entries.filter((e) => e.isIntersecting)
        if (visible.length === 0) return

        const selected = visible
          .sort((a, b) => {
            const ratioDiff = (b.intersectionRatio || 0) - (a.intersectionRatio || 0)
            if (Math.abs(ratioDiff) > 0.01) return ratioDiff
            const aTop = (a.target as HTMLElement).getBoundingClientRect().top
            const bTop = (b.target as HTMLElement).getBoundingClientRect().top
            // Prefer the one whose top is closer to 0 but not far above
            return Math.abs(aTop) - Math.abs(bTop)
          })[0]

        const id = selected?.target?.id
        if (id) {
          setCurrent(toLabel(id))
          setCurrentId(id)
          const isHome = toLabel(id) === 'Who am i?'
            if (!isHome) setShow(true)
            else if (window.scrollY <= 10) setShow(false)
          }
      },
      { root: null, threshold: [0.1, 0.3, 0.6, 0.9], rootMargin: "-15% 0px -60% 0px" }
    )

    sections.forEach((el) => observer.observe(el))

    const onScroll = () => {
      if (window.scrollY > 10) {
        setShow(true)
      } else {
        // At top: always hide and reset label to "Who am i?"
        setShow(false)
        setCurrent('Who am i?')
        setCurrentId("")
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', onScroll)
    }
  }, [current])

  const Icon = useMemo(() => {
    const map: Record<string, React.ComponentType<{ className?: string }>> = {
      objective: Target,
      projects: FolderKanban,
      education: GraduationCap,
      experience: Briefcase,
      skills: Sparkles,
      software: PanelsTopLeft,
      portfolio: FolderKanban,
      contact: MessageCircle,
    }
    return currentId ? map[currentId] : User
  }, [currentId])

  return (
    <div
      className={
        `sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border px-4 sm:px-6 lg:px-8 ` +
        `transition-all duration-300 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'}`
      }
      aria-hidden={!show}
    >
      <div className="py-4 flex items-center text-sm text-accent w-full">
        <span className="font-semibold" aria-live="polite">Ahmad Izzat Maulana</span>
        <span className="ml-1 sm:ml-auto inline-flex items-center gap-1">
          {Icon && (
            <span className="inline-grid place-items-center h-5 w-5 rounded-full bg-accent/20">
              <Icon className="h-3.5 w-3.5 text-accent" />
            </span>
          )}
          <span>{current}</span>
        </span>
      </div>
    </div>
  )
}
