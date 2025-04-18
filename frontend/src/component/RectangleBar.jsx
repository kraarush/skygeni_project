import React, { useEffect, useRef } from "react";
import * as d3 from "d3";

const RectangleBar = ({ percentage, sideLabel, middleValue, bottomValue, rightPercentage}) => {
  const svgRef = useRef();

  const drawBar = (svg, percentage, totalWidth) => {
    const height = 20;
    const activeWidth = totalWidth * percentage;
    const sideWidth = (totalWidth - activeWidth) / 2;

    // starting grey part
    svg
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", sideWidth)
      .attr("height", height)
      .attr("fill", "#ccc");

    // middle green part
    svg
      .append("rect")
      .attr("x", sideWidth)
      .attr("y", 0)
      .attr("width", activeWidth)
      .attr("height", height)
      .attr("fill", "#70ad47");

    // last grey part
    svg
      .append("rect")
      .attr("x", sideWidth + activeWidth)
      .attr("y", 0)
      .attr("width", sideWidth)
      .attr("height", height)
      .attr("fill", "#ccc");

    // center value inside the svg
    svg
      .append("text")
      .attr("x", sideWidth + activeWidth/ 2)
      .attr("y", height / 2)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", "white")
      .attr("font-size", "12px")
      .text(middleValue);

    // visible only on smaller screen when the lable gets inside the svg 
    svg
      .append("text")
      .attr("x", 25)  
      .attr("y", height / 2)
      .attr("text-anchor", "middle")
      .attr("dominant-baseline", "middle")
      .attr("fill", "white")
      .attr("font-size", "10px")
      .attr("class", "inline sm:hidden")
      .text(sideLabel);
  };

  // 
  useEffect(() => {
    const svg = d3.select(svgRef.current);

    const resizeAndDraw = () => {
      const totalWidth = svgRef.current.getBoundingClientRect().width;
      drawBar(svg, percentage, totalWidth);
    };

    resizeAndDraw();
    window.addEventListener("resize", resizeAndDraw);
    return () => window.removeEventListener("resize", resizeAndDraw);
  }, [percentage]);

  return (
    <div className="w-full max-w-[95vw] sm:max-w-2xl px-2 sm:px-4">
      <div className="grid grid-cols-[1fr_30px] md:grid-cols-[70px_1fr_40px] gap-2 sm:gap-4 items-center">

        {/* left lable of the bar */}
        <div className="hidden sm:block text-xs sm:text-sm font-medium text-gray-700 text-end">
          {sideLabel}
        </div>

        {/* svg  is shown here */}
        <svg ref={svgRef} className="w-full h-[25px] sm:h-[25px]" />

        {/* percentage on the right of the bar */}
        <div className="text-xs sm:text-sm font-bold text-gray-600 text-start">
          {rightPercentage}%
        </div>
      </div>

      {/* bottom value of the bar which shows how much percent the green bar part of the below bar is of the top one */}
      <div className="grid grid-cols-[1fr_40px] sm:grid-cols-[70px_1fr_40px] mt-1">
        <div className="hidden sm:block" />
        <div className="text-center text-xs sm:text-sm font-semibold text-gray-800">
          {bottomValue}
        </div>
      </div>
    </div>
  );
};

export default RectangleBar;
