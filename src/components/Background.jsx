import { useEffect, useRef } from 'react'
import './Background.css'

const clouds = [
    // Far clouds: small, faint and slow
    { shape: 'puffy',  dir: 'to-right', w: 158, top: 75, o: 0.42, b: 4, dur: 109, delay: -50.8 },
    { shape: 'tower',  dir: 'to-right', w: 170, top: 82, o: 0.42, b: 4, dur: 88,  delay: -39.3 },
    { shape: 'pair',   dir: 'to-left',  w: 139, top: 15, o: 0.40, b: 4, dur: 107, delay: -67.9 },
    { shape: 'wisp',   dir: 'to-right', w: 168, top: 54, o: 0.44, b: 4, dur: 105, delay: -77.6 },
    // Middle clouds
    { shape: 'puffy',  dir: 'to-left',  w: 200, top: 5,  o: 0.52, b: 2, dur: 62, delay: -3.7 },
    { shape: 'tower',  dir: 'to-left',  w: 255, top: 29, o: 0.50, b: 2, dur: 80, delay: -23.5 },
    { shape: 'pair',   dir: 'to-right', w: 180, top: 14, o: 0.50, b: 2, dur: 68, delay: -27.7 },
    { shape: 'wisp',   dir: 'to-left',  w: 250, top: 14, o: 0.52, b: 2, dur: 70, delay: -53.1 },
    // Near clouds: big, clearer and faster
    { shape: 'puffy',  dir: 'to-right', w: 305, top: 40, o: 0.58, b: 1, dur: 45, delay: -18.0 },
    { shape: 'tower',  dir: 'to-right', w: 240, top: 31, o: 0.60, b: 1, dur: 43, delay: -20.2 },
    { shape: 'pair',   dir: 'to-left',  w: 330, top: 54, o: 0.60, b: 1, dur: 48, delay: -37.4 },
]

function Background() {
    const spotRef = useRef(null)

    useEffect(() => {
        function moveSpotlight(e) {
            spotRef.current.style.setProperty('--x', e.clientX + 'px')
            spotRef.current.style.setProperty('--y', e.clientY + 'px')
        }
        window.addEventListener('mousemove', moveSpotlight)
        return () => window.removeEventListener('mousemove', moveSpotlight)
    }, [])

    return (
        <>
            <div className="sky" aria-hidden="true">
                {clouds.map((c, index) => (
                    <div
                        key={index}
                        className={`cloud shape-${c.shape}`}
                        style={{
                            '--dir': c.dir,
                            '--w': c.w + 'px',
                            '--top': c.top + '%',
                            '--o': c.o,
                            '--b': c.b + 'px',
                            '--dur': c.dur + 's',
                            '--delay': c.delay + 's',
                        }}
                    />
                ))}
            </div>
            <div className="spotlight" ref={spotRef} aria-hidden="true" />
        </>
    )
}

export default Background
