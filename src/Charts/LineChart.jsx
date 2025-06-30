import React, { useState } from "react";

// 3rd

const point1 = [
  [0, 15],
  [20, 5],
  [40, 15],
  [60, 5],
  [80, 15],
];
const info1 = [
  <>
    <span className="ml-1">Jan</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🔵 <span className="text-base ml-1">12</span>
    </span>
  </>,
  <>
    <span className="ml-1">Feb</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🔵 <span className="text-base ml-1">6</span>
    </span>
  </>,
  <>
    <span className="ml-1">Mar</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🔵 <span className="text-base ml-1">10</span>
    </span>
  </>,
  <>
    <span className="ml-1">April</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🔵 <span className="text-base ml-1">5</span>
    </span>
  </>,
  <>
    <span className="ml-1">May</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🔵 <span className="text-base ml-1">7</span>
    </span>
  </>,
];

function ZigzagLineChart() {
  const [tip, settip] = useState(null);

  const path = point1.reduce((d, [x, y], i, arr) => {
    if (i === 0) return `M${x},${y}`;
    const [prevX, prevY] = arr[i - 1];
    const cx1 = (prevX + x) / 2;
    return d + ` C${cx1},${prevY} ${cx1},${y} ${x},${y}`;
  }, "");

  return (
    <div style={{ position: "relative", width: 150, margin: "auto" }}>
      <svg width={150} height={20}>
        <path
          d={path}
          fill="none"
          stroke="#1f70d3"
          strokeWidth={2}
          strokeLinecap="round"
        />
        {point1.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={5}
            fill="transparent"
            style={{ cursor: "pointer" }}
            onMouseEnter={(e) =>
              settip({ x: e.clientX, y: e.clientY, text: info1[i] })
            }
            onMouseLeave={() => settip(null)}
          />
        ))}
      </svg>
      {tip && (
        <div
          style={{
            position: "fixed",
            top: tip.y - 40,
            background: "rgba(200, 200, 200, 0.1)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            color: "black",
            padding: "4px 8px",
            borderRadius: 4,
            fontSize: 12,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {tip.text}
        </div>
      )}
    </div>
  );
}

// 2nd

const point2 = [
  [0, 15],
  [20, 5],
  [40, 15],
  [60, 5],
  [80, 15],
];
const info2 = [
  <>
    <span className="ml-1">Jan</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟡 <span className="text-base ml-1">12</span>
    </span>
  </>,
  <>
    <span className="ml-1">Feb</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟡 <span className="text-base ml-1">6</span>
    </span>
  </>,
  <>
    <span className="ml-1">Mar</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟡 <span className="text-base ml-1">10</span>
    </span>
  </>,
  <>
    <span className="ml-1">April</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟡 <span className="text-base ml-1">5</span>
    </span>
  </>,
  <>
    <span className="ml-1">May</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟡 <span className="text-base ml-1">7</span>
    </span>
  </>,
];

function BagLine() {
  const [tip2, setTip2] = useState(null);

  const path = point2.reduce((acc, point, i, arr) => {
    if (i === 0) return `M${point[0]},${point[1]}`;
    const [x0, y0] = arr[i - 1];
    const [x1, y1] = point;
    const cx = (x0 + x1) / 2;
    return acc + ` Q${cx},${y0} ${x1},${y1}`;
  }, "");

  return (
    <div style={{ position: "relative", width: 150, margin: "auto" }}>
      <svg width={150} height={20}>
        <path d={path} fill="none" stroke="#eb8f4b" strokeWidth={2} />
        {point2.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={6}
            fill="transparent"
            style={{ cursor: "pointer" }}
            onMouseEnter={(e) =>
              setTip2({ x: e.clientX, y: e.clientY, text: info2[i] })
            }
            onMouseLeave={() => setTip2(null)}
          />
        ))}
      </svg>
      {tip2 && (
        <div
          style={{
            position: "fixed",
            top: tip2.y - 40,
            background: "rgba(200, 200, 200, 0.1)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            color: "black",
            padding: "6px 12px",
            borderRadius: 4,
            fontSize: 16,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {tip2.text}
        </div>
      )}
    </div>
  );
}

// 3rd

const point3 = [
  [0, 15],
  [20, 5],
  [40, 15],
  [60, 5],
  [80, 15],
];
const info3 = [
  <>
    <span className="ml-1">Jan</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟠 <span className="text-base ml-1">12</span>
    </span>
  </>,
  <>
    <span className="ml-1">Feb</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟠 <span className="text-base ml-1">6</span>
    </span>
  </>,
  <>
    <span className="ml-1">Mar</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟠 <span className="text-base ml-1">10</span>
    </span>
  </>,
  <>
    <span className="ml-1">April</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟠 <span className="text-base ml-1">5</span>
    </span>
  </>,
  <>
    <span className="ml-1">May</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟠 <span className="text-base ml-1">7</span>
    </span>
  </>,
];

function Snakeline() {
  const [tip3, setTip3] = useState(null);

  const path = point3.reduce((d, [x, y], i, arr) => {
    if (i === 0) return `M${x},${y}`;
    const [prevX, prevY] = arr[i - 1];
    const cx1 = (prevX + x) / 2;
    return d + ` C${cx1},${prevY} ${cx1},${y} ${x},${y}`;
  }, "");

  return (
    <div style={{ position: "relative", width: 150, margin: "auto" }}>
      <svg width={150} height={20}>
        <path
          d={path}
          fill="none"
          stroke="#b22a2f"
          strokeWidth={2}
          strokeLinecap="round"
        />
        {point3.map(([x, y], i) => (
          <circle
            key={i}
            cx={x}
            cy={y}
            r={5}
            fill="transparent"
            style={{ cursor: "pointer" }}
            onMouseEnter={(e) =>
              setTip3({ x: e.clientX, y: e.clientY, text: info3[i] })
            }
            onMouseLeave={() => setTip3(null)}
          />
        ))}
      </svg>
      {tip3 && (
        <div
          style={{
            position: "fixed",
            top: tip3.y - 40,
            background: "rgba(200, 200, 200, 0.1)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            color: "black",
            padding: "4px 8px",
            borderRadius: 4,
            fontSize: 12,
            pointerEvents: "none",
            whiteSpace: "nowrap",
          }}
        >
          {tip3.text}
        </div>
      )}
    </div>
  );
}

// 4th

const point4 = [
  [0, 15],
  [20, 5],
  [40, 15],
  [60, 5],
  [80, 15],
];

const info4 = [
  <>
    <span className="ml-1">Jan</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟣 <span className="text-base ml-1">12</span>
    </span>
  </>,
  <>
    <span className="ml-1">Feb</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟣 <span className="text-base ml-1">6</span>
    </span>
  </>,
  <>
    <span className="ml-1">Mar</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟣 <span className="text-base ml-1">10</span>
    </span>
  </>,
  <>
    <span className="ml-1 ">April</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟣 <span className="text-base ml-1">5</span>
    </span>
  </>,
  <>
    <span className="ml-1">May</span> <br />{" "}
    <span className="text-[8px] flex items-center space-x-2 ">
      🟣 <span className="text-base ml-1">7</span>
    </span>
  </>,
];

const Usermarket = () => {
  const [tip4, settip4] = useState(null);

  const path = point4.reduce((d, [x, y], i, arr) => {
    if (i == 0) return `M${x},${y}`;

    const [prevX, prevY] = arr[i - 1];
    const cx1 = (prevX + x) / 2;
    return d + `C${cx1},${prevY} ${cx1},${y} ${x},${y}`;
  }, "");

  return (
    <div className="relative w-[150px] m-auto">
      <svg width={150} height={20}>
        <path
          d={path}
          fill="none"
          stroke="#732895"
          strokeWidth={2}
          strokeLinecap="round"
        />
        {point4.map(([x, y], i) => {
          return (
            <circle
              key={i}
              cx={x}
              cy={y}
              r={5}
              fill="transparent"
              className="cursor-pointer"
              onMouseEnter={(e) => {
                settip4({ x: e.clientX, y: e.clientY, text: info4[i] });
              }}
              onMouseLeave={() => {
                settip4(null);
              }}
            />
          );
        })}
      </svg>

      {tip4 && (
        <div
          className="fixed  py-[4px] px-[8px]  text-[12px] pointer-events-auto whitespace-nowrap"
          style={{
            top: tip4.y - 40,
            background: "rgba(200, 200, 200, 0.1)",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            color: "black",
          }}
        >
          {tip4.text}
        </div>
      )}
    </div>
  );
};
export { ZigzagLineChart, BagLine, Usermarket, Snakeline };
