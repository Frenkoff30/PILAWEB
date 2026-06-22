import { useEffect, useRef } from 'react'

const rings1 = [220,196,172,149,127,106,87,69,53,38,25,14]
const rings2 = [140,122,105,89,74,60,47,35,24,14]

export default function Background() {
  const r1 = useRef(null)
  const r2 = useRef(null)
  const r3 = useRef(null)

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY
      if (r1.current) r1.current.style.transform = `translateY(${y * 0.12}px)`
      if (r2.current) r2.current.style.transform = `translateY(${y * 0.07}px)`
      if (r3.current) r3.current.style.transform = `translateY(${y * 0.05}px)`
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div aria-hidden="true" style={{ position:'absolute', inset:0, zIndex:0, pointerEvents:'none', overflow:'hidden' }}>

      {/* ═══ WOOD GRAIN — horizontal fiber lines ═══ */}
      <div style={{
        position:'absolute', inset:0,
        backgroundImage:`
          repeating-linear-gradient(
            2deg,
            transparent 0px,
            transparent 14px,
            rgba(120,60,15,0.14) 14px,
            rgba(120,60,15,0.14) 15.2px,
            transparent 15.2px,
            transparent 19px,
            rgba(90,45,10,0.08) 19px,
            rgba(90,45,10,0.08) 19.6px
          ),
          repeating-linear-gradient(
            -1deg,
            transparent 0px,
            transparent 28px,
            rgba(100,50,12,0.1) 28px,
            rgba(100,50,12,0.1) 29px
          ),
          repeating-linear-gradient(
            1.5deg,
            transparent 0px,
            transparent 45px,
            rgba(140,70,18,0.13) 45px,
            rgba(140,70,18,0.13) 46.8px
          )
        `,
      }}/>

      {/* ═══ WARM GRADIENT BANDS between sections ═══ */}
      <div style={{
        position:'absolute', top:'18%', left:0, right:0, height:'15%',
        background:'linear-gradient(180deg, transparent, rgba(200,148,58,0.12) 40%, rgba(200,148,58,0.12) 60%, transparent)',
        pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', top:'48%', left:0, right:0, height:'12%',
        background:'linear-gradient(180deg, transparent, rgba(74,124,47,0.09) 40%, rgba(74,124,47,0.09) 60%, transparent)',
        pointerEvents:'none',
      }}/>
      <div style={{
        position:'absolute', top:'72%', left:0, right:0, height:'10%',
        background:'linear-gradient(180deg, transparent, rgba(200,148,58,0.1) 40%, rgba(200,148,58,0.1) 60%, transparent)',
        pointerEvents:'none',
      }}/>

      {/* ═══ KNOTS (suky ve dřevě) ═══ */}
      {[
        { top:'12%', left:'85%', s:75, o:0.4, r:0.45 },
        { top:'32%', left:'8%', s:55, o:0.35, r:0.5 },
        { top:'55%', left:'75%', s:85, o:0.38, r:0.42 },
        { top:'38%', left:'55%', s:40, o:0.28, r:0.55 },
        { top:'68%', left:'20%', s:65, o:0.35, r:0.48 },
        { top:'82%', left:'90%', s:48, o:0.3, r:0.52 },
        { top:'25%', left:'40%', s:35, o:0.25, r:0.5 },
      ].map((k,i) => (
        <div key={'knot'+i} style={{
          position:'absolute', top:k.top, left:k.left,
          width:k.s+'px', height:k.s+'px',
          opacity:k.o,
        }}>
          <svg viewBox="0 0 60 60" fill="none" style={{width:'100%',height:'100%'}}>
            <ellipse cx="30" cy="30" rx={28*k.r} ry={28*(1.1-k.r)}
              fill="none" stroke="#3A1A06" strokeWidth="3" opacity="0.6"/>
            <ellipse cx="30" cy="30" rx={20*k.r} ry={20*(1.05-k.r)}
              fill="none" stroke="#2A1005" strokeWidth="2" opacity="0.5"/>
            <ellipse cx="30" cy="30" rx={11*k.r} ry={11*(1-k.r+0.15)}
              fill="rgba(60,25,5,0.5)"/>
            <ellipse cx="30" cy="30" rx={5*k.r} ry={5}
              fill="rgba(40,15,3,0.7)"/>
          </svg>
        </div>
      ))}

      {/* ═══ TINY NEEDLE / LEAF SILHOUETTES ═══ */}
      {[
        { top:'6%',  left:'15%', rot:-20, s:1.3, o:0.25 },
        { top:'18%', left:'72%', rot:35,  s:1.5, o:0.22 },
        { top:'30%', left:'92%', rot:-45, s:1.1, o:0.28 },
        { top:'42%', left:'5%',  rot:15,  s:1.4, o:0.22 },
        { top:'58%', left:'60%', rot:-30, s:1.2, o:0.25 },
        { top:'65%', left:'35%', rot:50,  s:0.9, o:0.2 },
        { top:'78%', left:'80%', rot:-10, s:1.3, o:0.24 },
        { top:'85%', left:'12%', rot:25,  s:1.0, o:0.22 },
        { top:'10%', left:'50%', rot:-55, s:0.85, o:0.18 },
        { top:'50%', left:'45%', rot:40,  s:0.8, o:0.16 },
      ].map((n,i) => (
        <div key={'needle'+i} style={{
          position:'absolute', top:n.top, left:n.left,
          transform:`rotate(${n.rot}deg) scale(${n.s})`,
          opacity:n.o,
        }}>
          <svg viewBox="0 0 80 30" fill="none" style={{width:'80px',height:'30px'}}>
            {/* Pine needle cluster */}
            <path d="M5 15 Q20 2, 75 14 Q20 8, 5 15Z" fill="#2D5016" opacity="0.7"/>
            <path d="M5 15 Q20 28, 75 16 Q20 22, 5 15Z" fill="#3A6B1A" opacity="0.5"/>
            <line x1="5" y1="15" x2="75" y2="15" stroke="#1A3A0A" strokeWidth="0.8" opacity="0.6"/>
          </svg>
        </div>
      ))}

      {/* ═══ SMALL SCATTERED NEEDLES (single) ═══ */}
      {[
        { top:'22%', left:'25%', rot:70, o:0.2 },
        { top:'44%', left:'88%', rot:-25, o:0.22 },
        { top:'75%', left:'55%', rot:110, o:0.2 },
        { top:'90%', left:'30%', rot:-60, o:0.16 },
        { top:'15%', left:'65%', rot:45, o:0.2 },
      ].map((n,i) => (
        <div key={'sn'+i} style={{
          position:'absolute', top:n.top, left:n.left,
          transform:`rotate(${n.rot}deg)`,
          opacity:n.o,
        }}>
          <svg viewBox="0 0 40 4" fill="none" style={{width:'40px',height:'4px'}}>
            <path d="M0 2 Q10 0, 38 2 Q10 4, 0 2Z" fill="#2D5016"/>
          </svg>
        </div>
      ))}

      {/* ═══ Forest green glows ═══ */}
      <div style={{ position:'absolute', top:'-10%', left:'-5%', width:'60vw', height:'55vw', background:'radial-gradient(ellipse at 20% 20%, rgba(58,100,35,0.14) 0%, rgba(74,124,47,0.06) 40%, transparent 65%)', borderRadius:'50%' }}/>
      <div style={{ position:'absolute', bottom:'15%', left:'0', width:'35vw', height:'35vw', background:'radial-gradient(ellipse, rgba(50,90,30,0.1) 0%, transparent 65%)', borderRadius:'50%' }}/>
      <div style={{ position:'absolute', top:'55%', right:'-3%', width:'25vw', height:'25vw', background:'radial-gradient(ellipse, rgba(58,100,35,0.07) 0%, transparent 65%)', borderRadius:'50%' }}/>

      {/* ═══ BIG LETOKRUH — top right ═══ */}
      <div ref={r1} style={{ position:'absolute', top:'-5%', right:'-8%', width:'clamp(380px,50vw,720px)', height:'clamp(380px,50vw,720px)', opacity:0.72, willChange:'transform' }}>
        <svg viewBox="0 0 460 460" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
          <defs>
            <radialGradient id="wf1" cx="48%" cy="52%" r="50%">
              <stop offset="0%" stopColor="#3A1A06" stopOpacity="0.55"/>
              <stop offset="60%" stopColor="#5C2E0A" stopOpacity="0.2"/>
              <stop offset="100%" stopColor="#2A0E02" stopOpacity="0.0"/>
            </radialGradient>
          </defs>
          <ellipse cx="232" cy="228" rx="224" ry="220" fill="url(#wf1)"/>
          {rings1.map((r,i) => {
            const cx=232+(i%3===0?3:i%3===1?-2:1), cy=228+(i%4===0?2.5:i%4===1?-1.8:i%4===2?3:-1)
            return <ellipse key={r} cx={cx} cy={cy} rx={r} ry={r*(0.95+i%5*0.01)} stroke={i<3?'#2A1005':i%3===0?'#5A2A0A':'#3D1A07'} strokeWidth={i<3?2.5:i<6?1.6:1.0} opacity={i<3?0.75:0.45+i*0.04}/>
          })}
          {Array.from({length:28}).map((_,i)=>{const a=(i/28)*Math.PI*2; return <line key={i} x1={232+Math.cos(a)*10} y1={228+Math.sin(a)*10} x2={232+Math.cos(a)*216} y2={228+Math.sin(a)*216} stroke="#2A1005" strokeWidth="0.6" opacity="0.18"/>})}
          <circle cx="232" cy="228" r="22" fill="rgba(80,35,8,0.45)"/>
          <circle cx="232" cy="228" r="9" fill="rgba(120,55,15,0.65)"/>
          <circle cx="232" cy="228" r="3.5" fill="rgba(170,80,20,0.85)"/>
        </svg>
      </div>

      {/* ═══ MEDIUM LETOKRUH — mid-left ═══ */}
      <div ref={r2} style={{ position:'absolute', top:'40%', left:'-5%', width:'clamp(220px,28vw,400px)', height:'clamp(220px,28vw,400px)', opacity:0.62, willChange:'transform' }}>
        <svg viewBox="0 0 300 300" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
          <defs>
            <radialGradient id="wf2" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3A1A06" stopOpacity="0.5"/>
              <stop offset="100%" stopColor="#2A0E02" stopOpacity="0.0"/>
            </radialGradient>
          </defs>
          <ellipse cx="151" cy="149" rx="143" ry="140" fill="url(#wf2)"/>
          {rings2.map((r,i)=>(
            <ellipse key={r} cx={151+(i%2?1.5:-1)} cy={149+(i%3===0?1.5:-0.8)} rx={r} ry={r*0.966} stroke={i<2?'#2A1005':i%3===0?'#4A2008':'#3A1806'} strokeWidth={i<2?2.2:i<5?1.4:0.9} opacity={i<2?0.7:0.38+i*0.06}/>
          ))}
          {Array.from({length:18}).map((_,i)=>{const a=(i/18)*Math.PI*2; return <line key={i} x1={151+Math.cos(a)*8} y1={149+Math.sin(a)*8} x2={151+Math.cos(a)*140} y2={149+Math.sin(a)*140} stroke="#2A1005" strokeWidth="0.5" opacity="0.15"/>})}
          <circle cx="151" cy="149" r="8" fill="rgba(80,35,8,0.5)"/>
          <circle cx="151" cy="149" r="3" fill="rgba(140,65,18,0.75)"/>
        </svg>
      </div>

      {/* ═══ SMALL LETOKRUH — bottom right ═══ */}
      <div ref={r3} style={{ position:'absolute', bottom:'8%', right:'6%', width:'clamp(150px,18vw,260px)', height:'clamp(150px,18vw,260px)', opacity:0.55, willChange:'transform' }}>
        <svg viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg" style={{width:'100%',height:'100%'}}>
          <defs>
            <radialGradient id="wf3" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#3A1A06" stopOpacity="0.45"/>
              <stop offset="100%" stopColor="#2A0E02" stopOpacity="0.0"/>
            </radialGradient>
          </defs>
          <circle cx="90" cy="90" r="84" fill="url(#wf3)"/>
          {[80,66,53,41,30,20,11].map((r,i)=>(
            <circle key={r} cx={90+(i%2?1:-0.5)} cy={90+(i%3===0?0.8:-0.4)} r={r} stroke={i<2?'#2A1005':'#3D1807'} strokeWidth={i<2?2:0.9} opacity={i<2?0.65:0.38+i*0.07}/>
          ))}
          {Array.from({length:12}).map((_,i)=>{const a=(i/12)*Math.PI*2; return <line key={i} x1={90+Math.cos(a)*6} y1={90+Math.sin(a)*6} x2={90+Math.cos(a)*80} y2={90+Math.sin(a)*80} stroke="#2A1005" strokeWidth="0.45" opacity="0.14"/>})}
          <circle cx="90" cy="90" r="5" fill="rgba(80,35,8,0.55)"/>
          <circle cx="90" cy="90" r="2" fill="rgba(140,65,18,0.8)"/>
        </svg>
      </div>

      {/* ═══ EXTRA TINY LETOKRUHY — scattered fill ═══ */}
      {[
        { top:'15%', left:'25%', s:100, o:0.22 },
        { top:'60%', left:'50%', s:130, o:0.2 },
        { top:'35%', left:'80%', s:85, o:0.24 },
        { top:'80%', left:'15%', s:95, o:0.2 },
        { top:'50%', left:'10%', s:70, o:0.18 },
      ].map((t,i) => (
        <div key={'tl'+i} style={{ position:'absolute', top:t.top, left:t.left, width:t.s+'px', height:t.s+'px', opacity:t.o }}>
          <svg viewBox="0 0 60 60" fill="none" style={{width:'100%',height:'100%'}}>
            {[25,20,15,10,6].map((r,j)=>(
              <circle key={r} cx="30" cy="30" r={r} stroke="#3A1A06" strokeWidth={j<1?1.2:0.6} opacity={0.5+j*0.08}/>
            ))}
            <circle cx="30" cy="30" r="2.5" fill="rgba(100,45,10,0.6)"/>
          </svg>
        </div>
      ))}

    </div>
  )
}
