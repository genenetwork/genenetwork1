var xValue = ['alcohol', 'cannabinoid', 'cocaine', '(meth)amphetamine', 'nicotine', 'opioids'];

var yValue = [61, 12, 19, 11, 13, 24];

var trace1 = {
  x: xValue, 
  y: yValue,
  type: 'bar',
  text: yValue,
  textposition: 'auto',
  hoverinfo: 'none',
  marker: {
    color: 'rgb(158,202,225)',
    opacity: 0.6,
    line: {
      color: 'rbg(8,48,107)',
      width: 1.5
    }
  }
};

var data = [trace1];

var layout = {
  title: 'Gene addiction counts for gene: creb1'
};

Plotly.newPlot('geneCounts', data, layout);