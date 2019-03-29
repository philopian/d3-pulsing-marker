import "./styles.css";
import d3 from "d3";

var node2 = d3
  .select("#marker-hook")
  .append("div")
  .classed("node", true)
  .style({ stroke: "#49c3b1", "stroke-width": 1, fill: "#49c3b1" })
  .style("position", "absolute")
  .attr("class", "marker")
  .append("svg")
  .style({ height: "0px", width: "0px", padding: "10px" })
  .style("overflow", "visible")
  .on("mouseover", function() {
    console.log("mouseover");
  })
  .on("mouseout", function() {
    console.log("mouseout");
  })
  .on("click", function() {
    console.log("CLICKED");
  });

// marker
node2
  .append("circle")
  .attr("r", 15)
  .style({ stroke: "#49c3b1", "stroke-width": 5, fill: "#49c3b1" });

// pulse
node2
  .append("circle")
  .classed("pulse", true)
  .attr("r", 15)
  .style({ stroke: "#49c3b1", "stroke-width": 1, fill: null });
