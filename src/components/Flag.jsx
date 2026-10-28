import { useId } from 'react'

function Flag({ country }) {
    const id = useId().replace(/[^a-zA-Z0-9-]/g, '')

    if (country === 'fr') {
        return (
            <svg viewBox="0 0 3 2" className="flag" aria-hidden="true">
                <rect width="1" height="2" x="0" fill="#002654" />
                <rect width="1" height="2" x="1" fill="#FFFFFF" />
                <rect width="1" height="2" x="2" fill="#CE1126" />
            </svg>
        )
    }

    if (country === 'jp') {
        return (
            <svg viewBox="0 0 3 2" className="flag" aria-hidden="true">
                <rect width="3" height="2" fill="#FFFFFF" />
                <circle cx="1.5" cy="1" r="0.6" fill="#BC002D" />
            </svg>
        )
    }

    // Default flag: United Kingdom
    return (
        <svg viewBox="0 0 60 30" className="flag" aria-hidden="true">
            <clipPath id={id + '-s'}><path d="M0,0 v30 h60 v-30 z" /></clipPath>
            <clipPath id={id + '-t'}><path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" /></clipPath>
            <g clipPath={'url(#' + id + '-s)'}>
                <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#FFFFFF" strokeWidth="6" />
                <path d="M0,0 L60,30 M60,0 L0,30" clipPath={'url(#' + id + '-t)'} stroke="#C8102E" strokeWidth="4" />
                <path d="M30,0 v30 M0,15 h60" stroke="#FFFFFF" strokeWidth="10" />
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
            </g>
        </svg>
    )
}

export default Flag
