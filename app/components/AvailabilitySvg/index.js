import React, { Component, PropTypes } from 'react'

function calcD (persent) {
  var radians = 2*Math.PI*persent/100
  var radius = 38
  var centre = 0
  var startY = -radius
  var radians2 = radians - Math.PI/2,
  endx = centre + radius*Math.cos(radians2),
  endy = centre + radius * Math.sin(radians2),
  largeArc = radians > Math.PI ? 1 : 0;  
  var path = "M"+centre+","+startY+" A"+radius+","+radius+" 0 "+largeArc+",1 "+endx+","+endy;
  return path;
}

export default class AvailabilitySvg extends Component {
  render() {
    const { persent } = this.props
    const dFront = calcD(persent)
    return (
      <div className="content-group-sm svg-center position-relative" id="seven-days-chart">
        <svg width="76" height="76">
          <g transform="translate(38,38)">
            <path className="d3-progress-background" d="M0,38A38,38 0 1,1 0,-38A38,38 0 1,1 0,38M0,36A36,36 0 1,0 0,-36A36,36 0 1,0 0,36Z" style={ { fill: 'rgb(238, 238, 238)' } }></path>
            <path className="d3-progress-foreground" filter="url(#blur)" d="M2.326828918379971e-15,-38A38,38 0 1,1 -29.279503225480042,24.222111610450153L-27.738476739928462,22.947263630952776A36,36 0 1,0 2.204364238465236e-15,-36Z" style={ { fill: 'rgb(76, 175, 80)', stroke: 'rgb(76, 175, 80)' } }></path>
            <path className="d3-progress-front" d={dFront} style={ { fill: 'rgb(76, 175, 80)', fillOpacity: '1' } }></path>
          </g>
        </svg>
        <h2 className="mt-15 mb-5">{persent}%</h2>
        <i className="icon-calendar text-success-400 counter-icon" style={ { top: '22px' } }></i>
        <div>Hours available</div>
        <div className="text-size-small text-muted">{persent}% average</div>
      </div>
    )
  }
}

AvailabilitySvg.propTypes = {
  persent: PropTypes.number
};


