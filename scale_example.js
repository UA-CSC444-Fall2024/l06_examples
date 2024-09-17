////////////////////////////////////////////////////////////////
//
// Refactored call_example.js to use scales
//
// Author: Joshua Levine
// Date: Sept. 16, 2024
//
////////////////////////////////////////////////////////////////


let div1 = d3.select("#div1")

let svg = div1.append("svg")

svg.attr("width", 400)
svg.attr("height", 400)

let dataArray = [6,8,12,4.5,2,10,6,8,9,7]
let dataArray2 = [2,3,5,7,11,13,17,19,23,29];
let dataArray3 = [29,23,19,17];

// Bind data to circles


let circles = svg.selectAll("circle")
                 .data(dataArray)
                 .enter()
                 .append("circle")


/*

//This version did not use scales

circles.call(makeCircles)
                 
function makeCircles(selection) {
   selection
   .attr("cx", function (d,i) { 
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

*/


circles.call(makeCirclesScales)

function makeCirclesScales(selection) {
   let cxScale = d3.scaleLinear()
                   .domain([0,9])
                   .range([50,350])
   let cyScale = d3.scaleLinear()
                   .domain([d3.min(dataArray2),d3.max(dataArray2)])
                   .range([350,50])

   let colorScale = d3.scaleLinear()
                   .domain([d3.min(dataArray2),d3.max(dataArray2)])
                   .range(["lightblue","purple"])
   selection
   .attr("cx", function (d,i) { 
     return cxScale(i);
   })
   .attr("cy", function(d,i) {
     return cyScale(d);
   })
   .attr('r', function(d) {
     return d*3;
   })
   .style("fill", d => colorScale(d))
   .style("stroke", "black");
}


/*

//Update selection
svg.selectAll("circle")
   .data(dataArray2)
   .transition()
   .duration(5000)
   .call(makeCirclesScales)


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
*/

             


