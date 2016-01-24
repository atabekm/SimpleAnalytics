function parse(data) {
  var res = {};
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var day = moment(item.date).format('HH');
    var hour = day + ':00';
    if (res[hour] == undefined) {
      res[hour] = 1;
    } else {
      res[hour] += 1;
    }
  };

  var internal = {};
  var array = []

  var keys = Object.keys(res).sort();

  for (var i = 0; i < keys.length; i++) {
    internal['value'] = res[keys[i]];
    internal['hour'] = keys[i];
    array.push(internal);
    internal = {};
  }

  new Morris.Bar({
    // ID of the element in which to draw the chart.
    element: 'my_chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: array,
    // The name of the data record attribute that contains x-values.
    xkey: 'hour',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Event'],
    parseTime: false,
    xLabelAngle: 35,
    barColors: ['#edc240']
  });
}