function parse(data) {
  var res = {};
  for (var i = 0; i < data.length; i++) {
    var day = moment(data[i].date).format("MM-DD");
    if (res[day] == undefined) {
      res[day] = 1;
    } else {
      res[day] += 1;
    }
  };

  var internal = {};
  var array = []
  for (var key in res) {
    internal['value'] = res[key];
    internal['day'] = key;
    array.push(internal);
    internal = {};
  }

  new Morris.Line({
    // ID of the element in which to draw the chart.
    element: 'my_chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: array,
    // The name of the data record attribute that contains x-values.
    xkey: 'day',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['value'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['Events'],
    parseTime: false
  });
}