////////////////////////////////////////////////////////////////
//
// Refactored l05.js Example to use a data join
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

//Compare this with L05's code base that used a for loop

let circles = svg.selectAll("circle")
                 .data(dataArray)
                 .enter()
                 .append("circle")
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
            
