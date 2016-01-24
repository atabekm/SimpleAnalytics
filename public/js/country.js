function parse(data) {

  new Morris.Donut({
    // ID of the element in which to draw the chart.
    element: 'my_chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: data,
    
  });
}