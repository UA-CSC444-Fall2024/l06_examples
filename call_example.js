////////////////////////////////////////////////////////////////
//
// Refactored l05.js Example to use .call and then applying 
// this setting attributes on repeated data joins
//
// Author: Joshua Levine
// Date: Sept. 16, 2024
//
////////////////////////////////////////////////////////////////


let div1 = d3.select("#div1")

let svg = div1.append("svg")

svg.attr("width", 400)
svg.attr("height", 400)

let dataArray = [6,8,12,4.5,2,10,6,8,9,7];
let dataArray2 = [2,3,5,7,11,13,17,19,23,29];
let dataArray3 = [29,23,19,17];

// Bind data to circles


let circles = svg.selectAll("circle")
                 .data(dataArray)
                 .enter()
                 .append("circle")

circles.call(makeCircles)
                 

//Given a selection of circles, this function sets their attributes
function makeCircles(selection) {
  selection.attr("cx", function (d,i) { 
             return 100 + i*20;
           })
           .attr("cy", function(d,i) {
             return 400-d*15;
           })
           .attr('r', function(d) {
             return d*3;
           })
           .style("fill", "lightblue")
           .style("stroke", "black");
}


//Update selection, change the data values
//We can re-use makeCircles now

svg.selectAll("circle")
   .data(dataArray2)
   .transition()
   .duration(5000)
   .call(makeCircles)


//Update one more time, also include a .exit()
//Note that this has a 5 seond delay to start 

let circles2 = svg.selectAll("circle")
   .data(dataArray3);

circles2.transition()
   .delay(5000)
   .duration(5000)
   .call(makeCircles)

circles2.exit()
   .transition()
   .delay(5000)
   .duration(5000)
   .attr("r", 0)
   .remove()



/*

//If you wanted to create rectangles rather than circles, it's not that much
//different than what we did above

let rects = svg.selectAll("rect")
                 .data(dataArray)
                 .enter()

rects.call(makeRectangles)


function makeRectangles(selection) {
   selection.append("rect")
   .attr("x", function (d,i) { 
     return 100 + i*20;
   })
   .attr("y", function(d,i) {
      return 400-d*30;
   })
   .attr("width", 20)
   .attr('height', function(d) {
     return d*30;
   })
   .style("fill", "lightblue")
   .style("stroke", "black");
}

*/
