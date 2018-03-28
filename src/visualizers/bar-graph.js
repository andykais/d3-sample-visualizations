import * as d3 from 'd3'

const workspace = div => {

const data = [40, 123, 120, 32]

const scale = d3.scaleLinear()
  .domain([0, Math.max(...data)])
  .range([0, 400])

d3.select(div)
  .selectAll('div')
  .data(data)
    .enter()
    .append('div')
    .style('width', d => `${scale(d)}px`)
    .text(d => d)
}
export default workspace
