export const ServiceIcon = ({ name }) => {
  const common = { width: 26, height: 26, fill: 'none', stroke: 'currentColor', strokeWidth: 1.7, strokeLinecap: 'round', strokeLinejoin: 'round' }
  switch (name) {
    case 'web':
      return (<svg {...common}><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M2 9h20M6 6.5h.01M9 6.5h.01" /></svg>)
    case 'mobile':
      return (<svg {...common}><rect x="6" y="2" width="12" height="20" rx="2.5" /><path d="M11 18h2" /></svg>)
    case 'backend':
      return (<svg {...common}><ellipse cx="12" cy="5" rx="8" ry="3" /><path d="M4 5v6c0 1.7 3.6 3 8 3s8-1.3 8-3V5M4 11v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6" /></svg>)
    case 'design':
      return (<svg {...common}><path d="M12 19a7 7 0 1 1 7-7c0 1.7-1.3 3-3 3h-1.5a1.5 1.5 0 0 0-1 2.6A1.5 1.5 0 0 1 12 19Z" /><circle cx="7.5" cy="10.5" r=".6" fill="currentColor" /><circle cx="12" cy="7.5" r=".6" fill="currentColor" /><circle cx="16" cy="10" r=".6" fill="currentColor" /></svg>)
    case 'cloud':
      return (<svg {...common}><path d="M7 18a4 4 0 0 1 .5-8 5.5 5.5 0 0 1 10.6 1.5A3.5 3.5 0 0 1 17.5 18H7Z" /></svg>)
    case 'consulting':
      return (<svg {...common}><path d="M3 13a9 9 0 1 1 4 7.5L3 21l.9-3.6A8.9 8.9 0 0 1 3 13Z" /><path d="M8.5 12h7M8.5 15h4" /></svg>)
    case 'bot':
      return (<svg {...common}><rect x="4" y="8" width="16" height="11" rx="3" /><path d="M12 8V4M9 13h.01M15 13h.01M9 16h6M2 12v3M22 12v3" /></svg>)
    case 'crm':
      return (<svg {...common}><circle cx="9" cy="8" r="3" /><path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 6h5M16 10h5M16 14h3" /></svg>)
    default:
      return null
  }
}

export const Arrow = (p) => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...p}>
    <path d="M5 12h14M13 6l6 6-6 6" />
  </svg>
)
