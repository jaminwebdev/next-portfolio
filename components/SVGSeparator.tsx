interface SVGSeparatorPropTypes {
  type: "tilt" | "waves";
  classNames: string;
  customHeight: string;
  fillClass?: string;
}

// z index?
const SVGSeparator = ({
  type,
  classNames,
  customHeight,
  fillClass = "fill-body-color-light dark:fill-body-color-dark",
}: SVGSeparatorPropTypes) => {
  if (type === "tilt") {
    return (
      <div className={`${classNames} svgContainer`}>
        <svg
          style={{ height: customHeight }}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none">
          <path className={fillClass} d="M0,6V0h1000v100L0,6z"></path>
        </svg>
      </div>
    );
  }

  return (
    <div className={`${classNames} svgContainer`}>
      <svg
        style={{ height: customHeight }}
        className="movingWaves"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 24 150 28 "
        preserveAspectRatio="none">
        <defs>
          <path
            id="gentle-wave"
            d="M-160 44c30 0 
                58-18 88-18s
                58 18 88 18 
                58-18 88-18 
                58 18 88 18
                v44h-352z"></path>
        </defs>
        <g className="parallax1">
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="3"
            className={fillClass}
            style={{ opacity: "0.3" }}></use>
        </g>
        <g className="parallax2">
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="0"
            className={fillClass}
            style={{ opacity: "0.3" }}></use>
        </g>
        <g className="parallax3">
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="9"
            className={fillClass}
            style={{ opacity: "0.4" }}></use>
        </g>
        <g className="parallax4">
          <use
            xlinkHref="#gentle-wave"
            x="50"
            y="6"
            className={fillClass}
            style={{ opacity: "1.0" }}></use>
        </g>
      </svg>
    </div>
  );
};

export default SVGSeparator;
