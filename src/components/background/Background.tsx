import React, { useEffect, useRef, useState } from "react";
import TOPOLOGY from 'vanta/src/vanta.topology.js';

interface BackgroundProps {
    children: React.ReactNode;
}

const Background: React.FC<BackgroundProps> = ({children}) => {
    const [vantaEffect, setVantaEffect] = useState<any>(null);
    const myRef = useRef(null);

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(TOPOLOGY({
                el: myRef.current,
                color: 0x1a1a1a,
                backgroundColor: 0x0
            }))
        }
        return () => {
            if (vantaEffect)
                vantaEffect.destroy()
            }
        }, [vantaEffect]
    )

    return (
        <div ref={myRef} className="h-screen">
            {children}
        </div>
    )
}

export default Background;