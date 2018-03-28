import * as d3 from 'd3'
import makeFractal from './visualizers/fractal'
import makeBarGraph from './visualizers/bar-graph'
import makeHoverLineGraph from './visualizers/selectable-line-graph'
import './index.css'

makeFractal(document.getElementById('fractal'))
makeBarGraph(document.getElementById('bar-graph'))
makeHoverLineGraph(document.getElementById('hover-line-graph'))
