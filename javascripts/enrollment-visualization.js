var filepath = "themes/berlin_bl1969mod/javascripts/";

var margin = {
  top: 20,
  right: 50,
  bottom: 30,
  left: 50
},
width = 960 - margin.left - margin.right,
height = 500 - margin.top - margin.bottom;

var parseDate = d3.time.format("%Y").parse;
bisectDate = d3.bisector(function(d) {
    return d.date;
  }).left;
formatDate = d3.time.format("%Y");

var x = d3.time.scale()
  .range([0, width]);

var yl = d3.scale.linear()  //yl: line: number data
  .range([height, 0]);

var y = d3.scale.linear()   //y: area: percent data
  .range([height, (height * 0.295)]);

var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom");

var ylAxis = d3.svg.axis()
  .scale(yl)
  .orient("left");

var yAxis = d3.svg.axis()
  .scale(y)
  .orient("right");

var line = d3.svg.line()
  .x(function(d) {
    return x(d.date);
  })
  .y(function(d) {
    return yl(d.number);
  });

var area = d3.svg.area()
  .x(function(d) {
    return x(d.date);
  })
  .y0(height)
  .y1(function(d) {
    return y(d.percent);
  });

function mousemove(data) {
  var x0 = x.invert(d3.mouse(this)[0]),
  i = bisectDate(data, x0, 1),
  d0 = data[i - 1],
  d1 = data[i],
  d = x0 - d0.date > d1.date - x0 ? d1 : d0;

  focus.select("circle.y")
  .attr("transform",
    "translate(" + x(d.date) + "," +
    y(d.percent) + ")");

  focusl.select("circle.y")
  .attr("transform",
    "translate(" + x(d.date) + "," +
    yl(d.number) + ")");
  focus.select(".x")
  .attr("transform",
    "translate(" + x(d.date) + "," +
    yl(d.number) + ")")
  .attr("y2", height - yl(d.number));

  focus.select("text.y1")
  .attr("transform",
    "translate(" + x(d.date) + "," +
    yl(d.number) + ")")
  .text(d.number);

  focus.select("text.y2")
  .attr("transform",
    "translate(" + x(d.date) + "," +
    yl(d.number) + ")")
  .text(d.number);

  focus.select("text.y3")
  .attr("transform",
    "translate(" + x(d.date) + "," +
    yl(d.number) + ")")
  .text(formatDate(d.date));

  focus.select("text.y4")
  .attr("transform",
    "translate(" + x(d.date) + "," +
    yl(d.number) + ")")
  .text(formatDate(d.date));

  focus.select("text.y5")
  .attr("transform",
    "translate(" + x(d.date) + "," +
    yl(d.number) + ")")
  .text(d.percent + '%');

  focus.select("text.y6")
  .attr("transform",
    "translate(" + x(d.date) + "," +
    yl(d.number) + ")")
  .text(d.percent + '%');

} // end mousemove function


jQuery(function(){
  var svg = d3.select("div#enrollment-visualization").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

  var areaSvg = svg.append("g");
  var lineSvg = svg.append("g");
  var demand100Svg = svg.append("g");
  var demand150Svg = svg.append("g");
  var classespresentSvg = svg.append("g");
  
  d3.csv(filepath + "data.csv", function(error, data) {
    data.forEach(function(d) {
    d.date = parseDate(d.date);
    d.number = +d.number;
    d.percent = +d.percent;
  });

  x.domain(d3.extent(data, function(d) {
    return d.date;
  }));
  yl.domain(d3.extent(data, function(d) {
    return d.number;
  }));
  y.domain(d3.extent(data, function(d) {
    return d.percent;
  }));

  svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .append("text")
    .attr("x", 14)
    .attr("y", 15)
    .attr("dx", ".65em")
    .attr("dy", ".28em")
    .style("text-anchor", "end")
    .text("Class of");

  var focus = svg.append("g")
    .style("display", "none");

  var focusl = svg.append("g")
    .style("display", "none");

  svg.append("g")
    .attr("class", "y axis")
    .call(ylAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("y", 6)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Number of Black Students");

  areaSvg.append("path")
    .attr("class", "area")
    .attr("d", area(data));

  lineSvg.append("path")
    .attr("class", "line")
    .attr("d", line(data));

  demand100Svg.append("line")
    .style("stroke", "red")
    .style("opacity", 0.5)
    .attr("x1", 0)
    .attr("y1", height * 0.457)
    .attr("x2", width)
    .attr("y2", height * 0.457);

  svg.append("text")
    .style("fill", "red")
    .style("font-size", "11")
    .attr("transform", "translate(" + (0.05 * width) + "," + (height * 0.457) + ")")
    .attr("dy", "1.1em")
    .text("100 students by Fall 1971 (Classes of '72-'75)");

  svg.append("text")
    .style("fill", "red")
    .style("font-size", "11")
    .attr("transform", "translate(" + (0.05 * width) + "," + (height * 0.457) + ")")
    .attr("dy", "2.1em")
    .text("average 25 per class");

  svg.append("text")
    .style("fill", "red")
    .style("font-size", "11")
    .attr("transform", "translate(" + (0.05 * width) + "," + (height * 0.457) + ")")
    .attr("dy", "3.1em")
    .text("9.4% of student body");

  demand150Svg.append("line")
    .style("stroke", "red")
    .style("opacity", 0.5)
    .attr("x1", 0)
    .attr("y1", height * 0.185)
    .attr("x2", width)
    .attr("y2", height * 0.185);

  svg.append("text")
    .style("fill", "red")
    .style("font-size", "11")
    .attr("transform", "translate(" + (0.05 * width) + "," + (height * 0.185) + ")")
    .attr("dy", "1.1em")
    .text("150 students by Fall 1974 (Classes of '75-'78)");

  svg.append("text")
    .style("fill", "red")
    .style("font-size", "11")
    .attr("transform", "translate(" + (0.05 * width) + "," + (height * 0.185) + ")")
    .attr("dy", "2.1em")
    .text("average 37.5 per class");

  svg.append("text")
    .style("fill", "red")
    .style("font-size", "11")
    .attr("transform", "translate(" + (0.05 * width) + "," + (height * 0.185) + ")")
    .attr("dy", "3.1em")
    .text("14% of student body");

  svg.append("text")
    .style("fill", "red")
    .attr("transform", "translate(" + (0.05 * width) + "," + (height * 0.185) + ")")
    .attr("dy", "-0.7em")
    .text("1969 Demands:");

  svg.append("g")
    .attr("class", "y axis")
    .attr("transform", "translate(" + width + " ,0)")
    .call(yAxis)
    .append("text")
    .attr("transform", "translate(0," + (height - 93) + ") rotate(-90)")
    .attr("y", -15)
    .attr("dy", ".71em")
    .style("text-anchor", "end")
    .text("Percent of Class");

  classespresentSvg.append("line")
    .style("stroke", "red")
    .style("opacity", 1)
    .attr("x1", width *0.328)
    .attr("y1", height * 0.99)
    .attr("x2", width*0.373)
    .attr("y2", height * 0.99);

  svg.append("text")
    .style("fill", "red")
    .style("font-size", "11")
    .attr("transform", "translate(" + (0.328 * width) + "," + (height * 0.99) + ")")
    .attr("dy", "-1.5em")
    .text("classes present");

  svg.append("text")
    .style("fill", "red")
    .style("font-size", "11")
    .attr("transform", "translate(" + (0.328 * width) + "," + (height * 0.99) + ")")
    .attr("dy", "-0.5em")
    .text("during takeover");

  // append the circles and line at the intersection
  focus.append("line")
    .attr("class", "x")
    .style("stroke", "black")
    .style("stroke-dasharray", "3,3")
    .style("opacity", 0.5)
    .attr("y1", 0)
    .attr("y2", height);

  focus.append("circle")
    .attr("class", "y")
    .style("fill", "none")
    .style("stroke", "black")
    .attr("r", 4);

  focusl.append("circle")
    .attr("class", "y")
    .style("fill", "none")
    .style("stroke", "black")
    .attr("r", 4);

  // place the number of students at the intersection
  focus.append("text")
    .attr("class", "y1")
    .style("stroke", "white")
    .style("stroke-width", "5px")
    .style("opacity", 0.8)
    .attr("dx", 8)
    .attr("dy", "1em");
  focus.append("text")
    .attr("class", "y2")
    .attr("dx", 8)
    .attr("dy", "1em");

  // place the date at the intersection
  focus.append("text")
    .attr("class", "y3")
    .style("stroke", "white")
    .style("stroke-width", "5px")
    .style("opacity", 0.8)
    .attr("dx", 8)
    .attr("dy", "-.3em");
  focus.append("text")
    .attr("class", "y4")
    .attr("dx", 8)
    .attr("dy", "-.3em");

  // place the percent at the intersection
  focus.append("text")
    .attr("class", "y5")
    .style("stroke", "white")
    .style("stroke-width", "5px")
    .style("opacity", 0.8)
    .attr("dx", 8)
    .attr("dy", "2em");
  focus.append("text")
    .attr("class", "y6")
    .attr("dx", 8)
    .attr("dy", "2em");

  // append the rectangle to capture mouse               
  svg.append("rect")
    .attr("width", width)
    .attr("height", height)
    .style("fill", "none")
    .style("pointer-events", "all")
    .on("mouseover", function() {
      focus.style("display", null);
      focusl.style("display", null);
    })
    .on("mouseout", function() {
      focus.style("display", "none");
      focusl.style("display", "none");
    })
    .on("mousemove", mousemove(data));
    });
});
