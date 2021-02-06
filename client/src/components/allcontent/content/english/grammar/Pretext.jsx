import React from "react"

const Pretext = () => {
    return (
        <div>
            <h2>Предлоги</h2>
            <svg viewBox="0 0 1000 470" preserveAspectRatio="xMidYMid slice">
                <text x="270" y="145" style={{fill: '#ccffcc', fontSize: 2 + 'em'}}>to</text>
                <polyline points="200,150 395,150 365,130 395,150 365,170"
                          style={{fill: 'none', stroke: 'red', strokeWidth: 2}}/>
                <rect x="400" y="100" width="200" height="100"
                      style={{fill: 'white', stroke: 'red', strokeWidth: 3}}/>
                <text x="465" y="175" style={{fill: 'red', fontSize: 2 + 'em'}}>in</text>
                <polyline points="605,150 795,150 765,130 795,150 765,170"
                          style={{fill: 'none', stroke: 'red', strokeWidth: 2}}/>
                <text x="650" y="145" style={{fill: '#ccffcc', fontSize: 2 + 'em'}}>from</text>
                <text x="465" y="98" style={{fill: '#ccffcc', fontSize: 2 + 'em'}}>on</text>
                <text x="410" y="260" style={{fill: '#ccffcc', fontSize: 2 + 'em'}}>under</text>
                <text x="430" y="55" style={{fill: '#ccffcc', fontSize: 2 + 'em'}}>over</text>
                <line x1="330" y1="250" x2="330" y2="320" style={{stroke: 'red', strokeWidth: 2}}/>
                <text x="350" y="300" style={{fill: '#ccffcc', fontSize: 2 + 'em'}}>between - между</text>
                <line x1="800" y1="250" x2="800" y2="320" style={{stroke: 'red', strokeWidth: 2}}/>
                <text x="0" y="370" style={{fill: '#ccffcc', fontSize: 2 + 'em'}}>with/without - с/без; for - для;</text>
                <text x="0" y="440" style={{fill: '#ccffcc', fontSize: 2 + 'em'}}>about - о; around - около;</text>
            </svg>
        </div>
)
}

export default Pretext