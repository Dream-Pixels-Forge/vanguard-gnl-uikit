import { cn } from '../../lib/utils'
import { getLiquidGlass, getAnimation } from '../../lib/tailwind-utils'
import { Twitter, Github, Linkedin, Box } from 'lucide-react'
import * as React from 'react'

export interface FooterLink {
  label: string
  href: string
}

export interface FooterSection {
  title: string
  links: FooterLink[]
}

export interface FooterProps extends React.HTMLAttributes<HTMLElement> {
  brand?: React.ReactNode
  sections?: FooterSection[]
  socials?: {
    twitter?: string
    github?: string
    linkedin?: string
  }
  copyright?: string
}

export const Footer = React.forwardRef<HTMLElement, FooterProps>(
  function Footer(
    { brand, sections = [], socials, copyright, className, ...props },
    ref,
  ) {
    const socialLinks = [
      socials?.twitter && { icon: Twitter, href: socials.twitter, label: 'Twitter' },
      socials?.github && { icon: Github, href: socials.github, label: 'GitHub' },
      socials?.linkedin && { icon: Linkedin, href: socials.linkedin, label: 'LinkedIn' },
    ].filter(Boolean) as { icon: React.ElementType; href: string; label: string }[]

    return (
      <footer
        ref={ref}
        className={cn(
          'border-t border-white/5',
          'bg-gradient-to-b from-transparent to-white/[0.02]',
          className,
        )}
        {...props}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 py-12 lg:py-16">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-5">
            {/* Brand */}
            <div className="lg:col-span-2">
              {brand || (
                <div>
                  <a href="/" className="inline-flex items-center gap-2">
                    <div
                      className={cn(
                        'p-2 rounded-xl',
                        getLiquidGlass(),
                        'text-blue-400',
                      )}
                    >
                      <Box size={18} />
                    </div>
                    <span className="font-bold text-sm tracking-tight bg-gradient-to-br from-white to-white/60 bg-clip-text text-transparent">
                      Vanguard
                    </span>
                  </a>
                  <p className="mt-4 text-sm text-white/30 max-w-xs leading-relaxed">
                    A modern dark-themed UI component library with glassmorphism,
                    neuromorphism, and liquid glass aesthetics.
                  </p>
                </div>
              )}
            </div>

            {/* Sections */}
            {sections.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-bold uppercase tracking-widest text-white/50 mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className={cn(
                          'text-sm text-white/30 hover:text-white/70',
                          getAnimation('fast'),
                        )}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom bar */}
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-white/20">
              {copyright || `© ${new Date().getFullYear()} Vanguard. All rights reserved.`}
            </p>

            {socialLinks.length > 0 && (
              <div className="flex items-center gap-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className={cn(
                      'p-2 rounded-xl',
                      'bg-white/5 hover:bg-white/10 border border-white/10',
                      'text-white/30 hover:text-white/60',
                      getAnimation('fast'),
                    )}
                  >
                    <social.icon size={14} />
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </footer>
    )
  },
)
Footer.displayName = 'Footer'
