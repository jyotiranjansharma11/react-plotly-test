import { useContext } from "react";
import Plot from "react-plotly.js";
import imageDataURLContext from "./utils/imageDataURLContext";

const FigureComponent = ({ imgUrl }) => {
  return (
    <>
      <Plot
        data={[
          //   {
          //     x: [1, 2, 3],
          //     y: [2, 6, 3],
          //     type: "scatter",
          //     mode: "lines+markers",
          //     marker: { color: "red" },
          //   },
          { type: "image", source: imgUrl, hovertext: "hello" },
        ]}
        layout={{ width: 640, height: 480, title: "Plot test" }}
      />
      <br></br>
      Figure Component works!
    </>
  );
};

export default FigureComponent;
