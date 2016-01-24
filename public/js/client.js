function parse(data) {
  var res = {};
  for (var i = 0; i < data.length; i++) {
    var item = data[i];
    var day = moment(item.date).format("MM-DD");
    if (res[day] == undefined) {
      res[day] = {web: 0, mobile: 0};
    };
    if (item.client == 'Web') {
      res[day]['web'] += 1;
    } else {
      res[day]['mobile'] += 1;
    };
  };

  var internal = {};
  var array = []
  for (var key in res) {
    internal['day'] = key;
    internal['web'] = res[key]['web'];
    internal['mobile'] = res[key]['mobile'];
    array.push(internal);
    internal = {};
  }

  new Morris.Area({
    // ID of the element in which to draw the chart.
    element: 'my_chart',
    // Chart data records -- each entry in this array corresponds to a point on
    // the chart.
    data: array,
    // The name of the data record attribute that contains x-values.
    xkey: 'day',
    // A list of names of data record attributes that contain y-values.
    ykeys: ['mobile', 'web'],
    // Labels for the ykeys -- will be displayed when you hover over the
    // chart.
    labels: ['mobile', 'web'],
    parseTime: false,
    lineColors: ['#0b62a4', '#4da74d']
  });
}