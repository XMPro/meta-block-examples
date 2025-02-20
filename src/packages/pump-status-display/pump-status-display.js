const url = "";
const svg = document.getElementById("pumpSystem");
const pipesGroup = document.getElementById("pipes");
const pumpsGroup = document.getElementById("pumps");
const junctionsGroup = document.getElementById("junctions");
const connectionsGroup = document.getElementById("connections");

let pipeID = 0;

// Create Path
function createPath(d, className) {
  const path = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  path.setAttribute("d", d);
  path.setAttribute("class", className);
  return path;
}

// Create Pipe
function createPipe(x1, y1, x2, y2, thickness = 8, className = "pipe") {
  const pipeSet = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "g"
  );
  pipeSet.setAttribute("id", `pipe-${pipeID++}`);

  const pipe = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  pipe.setAttribute("d", `M${x1},${y1} L${x2},${y2}`);
  pipe.setAttribute("class", className);
  pipe.style.strokeWidth = thickness;

  const animatedFlow = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );
  animatedFlow.setAttribute("d", `M${x1},${y1} L${x2},${y2}`);
  animatedFlow.setAttribute("class", "animated-flow");
  animatedFlow.style.strokeWidth = thickness - 2;

  pipeSet.appendChild(pipe);
  pipeSet.appendChild(animatedFlow);

  return pipeSet;
}

// Create Pump

function createPump(x, y, name = "pump", className = "pump") {

      // Create an SVG <a> element to wrap the pump group
    const link = document.createElementNS("http://www.w3.org/2000/svg", "a");
    // link.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", `${url}${name}`);
    link.setAttribute("target", "_top"); 


    const pump = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "g"
    );
    pump.setAttribute("class", className);
    pump.setAttribute("transform", `translate(${x}, ${y})`);

    const pipe1 = createPath("m0,0 h -30", "motor-pipe");
    const pipe2 = createPath("m0,-10 h 30", "motor-pipe");

    const pumpBox = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    pumpBox.setAttribute("cx", "0");
    pumpBox.setAttribute("cy", "0");
    pumpBox.setAttribute("r", "20");
    pumpBox.setAttribute("fill", "lightgrey");

    const pumpBoxInner = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    pumpBoxInner.setAttribute("cx", "0");
    pumpBoxInner.setAttribute("cy", "0");
    pumpBoxInner.setAttribute("r", "10");
    pumpBoxInner.setAttribute("fill", "grey");

    const pumpBoxCenter = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    pumpBoxCenter.setAttribute("cx", "0");
    pumpBoxCenter.setAttribute("cy", "0");
    pumpBoxCenter.setAttribute("r", "4");
    pumpBoxCenter.setAttribute("fill", "lightgrey");

    const pumpRunning = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    pumpRunning.setAttribute("cx", "0");
    pumpRunning.setAttribute("cy", "0");
    pumpRunning.setAttribute("r", "10");
    pumpRunning.setAttribute("fill", "none");
    pumpRunning.setAttribute("class", "pump-running");


    // Add name
    const pumpText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    pumpText.setAttribute("id", "pumpText");
    pumpText.setAttribute("x", "0");
    pumpText.setAttribute("y", "40");
    pumpText.setAttribute("text-anchor", "middle");
    //pumpText.setAttribute("class", "pump-text");
    pumpText.textContent = name;

    // Add Flowrate
    const flowText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    flowText.setAttribute("id", "flowText");
    flowText.setAttribute("x", "50");
    flowText.setAttribute("y", "10");
    flowText.setAttribute("font-size", "10");
    //flowText.setAttribute("class", "value-text flow-value");
    flowText.textContent = "Flow: 0.0";

    // Add Pressure
    const pressureText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    pressureText.setAttribute("id", "pressureText");
    pressureText.setAttribute("x", "50");
    pressureText.setAttribute("y", "24");
    pressureText.setAttribute("font-size", "10");

    //pressureText.setAttribute("class", "value-text pressure-value");
    pressureText.textContent = "Pressure: 0.0";

    // Add Criticality
    const criticalityText = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "text"
    );
    criticalityText.setAttribute("id", "criticalityText");
    criticalityText.setAttribute("x", "50");
    criticalityText.setAttribute("y", "38");
    criticalityText.setAttribute("font-size", "10");

    //criticalityText.setAttribute("class", "value-text pressure-value");
    criticalityText.textContent = "Criticality: 1";


    // Add running status
    const statusIndicator = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "path"
    );
    statusIndicator.setAttribute(
      "d",
      "M-24,-24 l5,10 h-10 z"
    );
    statusIndicator.style.fill = "#2ecc71";
    //statusIndicator.style.fill = "#a5a7a8";
    //statusIndicator.style.stroke = "#7da582";
    statusIndicator.id = "statusIndicator";

    // Add Recommendation status
    const recommIndicator = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );
    recommIndicator.setAttribute("cx", "-40");
    recommIndicator.setAttribute("cy", "-19");
    recommIndicator.setAttribute("r", "5");
    recommIndicator.setAttribute("fill", "#e74c3c00");
    recommIndicator.setAttribute("stroke", "#e74c3c00");

    recommIndicator.id = "recommIndicator";


    const errorIndicator = document.createElementNS(
      "http://www.w3.org/2000/svg",
      "circle"
    );

    errorIndicator.setAttribute("cx", "0");
    errorIndicator.setAttribute("cy", "0");
    errorIndicator.setAttribute("r", "24");
    errorIndicator.setAttribute("fill", "#e74c3c00");
    errorIndicator.setAttribute("stroke", "#e74c3c00");
    //errorIndicator.setAttribute("fill", "#e74c3c20");
    //errorIndicator.setAttribute("stroke", "#e74c3c99");
    errorIndicator.id = "errorIndicator";


    pump.appendChild(pipe1);
    pump.appendChild(pipe2);
    pump.appendChild(pumpBox);
    pump.appendChild(pumpBoxInner);
    pump.appendChild(pumpBoxCenter);
    pump.appendChild(pumpRunning);
    pump.appendChild(pumpText);
    pump.appendChild(flowText);
    pump.appendChild(pressureText);
    pump.appendChild(criticalityText);
    pump.appendChild(statusIndicator);
    pump.appendChild(recommIndicator);		
    pump.appendChild(errorIndicator);

    //return pump;


      // Append the pump group to the link element
    link.appendChild(pump);

    // Return the link element containing the pump group
    return link;
}

// Create Junction
function createJunction(x, y) {
  const junction = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "circle"
  );
  junction.setAttribute("cx", x);
  junction.setAttribute("cy", y);
  junction.setAttribute("r", "12");
  junction.setAttribute("class", "junction");
  return junction;
}

// Create Connection
function createConnection(
  x,
  y,
  direction = "SW",
  thickness = 12,
  className = "connector"
) {
  const connection = document.createElementNS(
    "http://www.w3.org/2000/svg",
    "path"
  );

  switch (direction) {
    case "SW":
      connection.setAttribute("d", `M${x - 20},${y} c 0,0 20,0 20,20`);
      break;
    case "SE":
      connection.setAttribute("d", `M${x + 20},${y} c 0,0 -20,0 -20,20`);
      break;
    case "NW":
      connection.setAttribute("d", `M${x - 20},${y} c 0,0 20,0 20,-20`);
      break;
    case "NE":
      connection.setAttribute("d", `M${x + 20},${y} c 0,0 -20,0 -20,-20`);
      break;
    default:
      connection.setAttribute("d", `M${x},${y} c 0,0 20,0 20,20`);
  }

  connection.setAttribute("class", className);
  connection.style.strokeWidth = thickness;
  return connection;
}

// Get center of the svg

const svgCenter = svg.getBBox();
const svgWidth = svgCenter.width;
const svgHeight = svgCenter.height;

const svgHalfWidth = svgWidth / 2;
const svgHalfHeight = svgHeight / 2;

const svgQuaterWidth = svgWidth / 4;
const svgQuaterHeight = svgHeight / 4;



// offsets
const pump_offset = -10;
const pipe_offset = 20;


// Create Pipes



// Branch A

const A_1 = createPipe(
  svgQuaterWidth,
  svgHalfHeight,
  svgQuaterWidth,
  svgQuaterHeight + pipe_offset,
  8
);

const A_2 = createPipe(
  svgQuaterWidth + pipe_offset,
  svgQuaterHeight,
  svgHalfWidth,
  svgQuaterHeight,
  8
);

const A_3 = createPipe(
  svgHalfWidth,
  svgQuaterHeight + pump_offset,
  3 * svgQuaterWidth - pipe_offset,
  svgQuaterHeight + pump_offset,
  8
);

const A_4 = createPipe(
  3 * svgQuaterWidth,
  svgQuaterHeight,
  3 * svgQuaterWidth,
  svgHalfHeight,
  8
);

pipesGroup.appendChild(A_1);
pipesGroup.appendChild(A_2);
pipesGroup.appendChild(A_3);
pipesGroup.appendChild(A_4);

// Branch B

const B_1 = createPipe(
  svgQuaterWidth,
  svgHalfHeight,
  svgHalfWidth,
  svgHalfHeight,
  8
);

const B_2 = createPipe(
  svgHalfWidth,
  svgHalfHeight + pump_offset,
  3 * svgQuaterWidth,
  svgHalfHeight + pump_offset,
  8
);

pipesGroup.appendChild(B_1);
pipesGroup.appendChild(B_2);

// Branch C

const C_1 = createPipe(
  svgQuaterWidth,
  svgHalfHeight,
  svgQuaterWidth,
  3 * svgQuaterHeight - pipe_offset,
  8
);

const C_2 = createPipe(
  svgQuaterWidth + pipe_offset,
  3 * svgQuaterHeight,
  svgHalfWidth,
  3 * svgQuaterHeight,
  8
);

const C_3 = createPipe(
  svgHalfWidth,
  3 * svgQuaterHeight + pump_offset,
  3 * svgQuaterWidth - pipe_offset,
  3 * svgQuaterHeight + pump_offset,
  8
);

const C_4 = createPipe(
  3 * svgQuaterWidth,
  3 * svgQuaterHeight + pump_offset - pipe_offset,
  3 * svgQuaterWidth,
  svgHalfHeight + pump_offset,
  8
);

pipesGroup.appendChild(C_1);
pipesGroup.appendChild(C_2);
pipesGroup.appendChild(C_3);
pipesGroup.appendChild(C_4);

// Main Pipes

const margin = 100;

MP_1 = createPipe(
  margin,
  svgHalfHeight,
  svgQuaterWidth,
  svgHalfHeight,
  12
);
MP_2 = createPipe(
  3 * svgQuaterWidth,
  svgHalfHeight + pump_offset,
  svgWidth - margin,
  svgHalfHeight + pump_offset,
  12
);

pipesGroup.appendChild(MP_1);
pipesGroup.appendChild(MP_2);

// Create Junctions

junctionsGroup.appendChild(createJunction(svgQuaterWidth, svgHalfHeight));
junctionsGroup.appendChild(
  createJunction(3 * svgQuaterWidth, svgHalfHeight + pump_offset)
);

// Create Connections
connectionsGroup.appendChild(
  createConnection(svgQuaterWidth, svgQuaterHeight, "SE")
);
connectionsGroup.appendChild(
  createConnection(
    3 * svgQuaterWidth,
    svgQuaterHeight + pump_offset,
    "SW"
  )
);
connectionsGroup.appendChild(
  createConnection(svgQuaterWidth, 3 * svgQuaterHeight, "NE")
);
connectionsGroup.appendChild(
  createConnection(
    3 * svgQuaterWidth,
    3 * svgQuaterHeight + pump_offset,
    "NW"
  )
);

// Create Pumps

const PMP01_pump = createPump(svgHalfWidth, svgQuaterHeight, "PMP01");
const PMP02_pump = createPump(svgHalfWidth, svgHalfHeight, "PMP02");
const PMP03_pump = createPump(svgHalfWidth, 3 * svgQuaterHeight, "PMP03");

pumpsGroup.appendChild(PMP01_pump);
pumpsGroup.appendChild(PMP02_pump);
pumpsGroup.appendChild(PMP03_pump);

class Pump {
  constructor(pump) {
    this.status = "running";
    this.pipes = [];
    this.pump = pump;
    this.flow = 0.0;
    this.pressure = 0.0;
  }


  setFlow(flow) {
    this.flow = flow;
    this.pump.querySelector("#flowText").textContent = `Flow: ${flow}`;
  }

  setPressure(pressure) {
    this.pressure = pressure;
    this.pump.querySelector("#pressureText").textContent = `Pressure: ${pressure}`;
  }

  setCriticality(criticality) {
    this.criticality = criticality;
    this.pump.querySelector("#criticalityText").textContent = `Criticality: ${criticality}`;
  }

  setRecommendationColor(color) {
    this.pump.querySelector("#recommIndicator").style.fill = `${color}`;
this.pump.querySelector("#recommIndicator").style.stroke = `${color}`;
  }

  setStatus(status) {
    this.status = status;
    this.checkStatus();
  }

  checkStatus() {
    if (this.status === "running") {
      this.pipes.forEach((pipe) => {
        pipe.querySelector(".animated-flow").style.animationPlayState =
          "running";
        pipe.querySelector(".animated-flow").style.opacity = 1.0;
        this.pump.querySelector(
          ".pump-running"
        ).style.animationPlayState = "running";
        this.pump.querySelector(".pump-running").style.filter =
          "blur(1px)";
        this.pump.querySelector(".pump-running").style.opacity = 1.0;
      });
      this.pump.querySelector("#statusIndicator").style.fill = "#2ecc71";
this.pump.querySelector("#errorIndicator").style.fill = "#e74c3c00";
    } else {
      this.pipes.forEach((pipe) => {
        pipe.querySelector(".animated-flow").style.animationPlayState =
          "paused";
        pipe.querySelector(".animated-flow").style.opacity = 0.3;
        this.pump.querySelector(
          ".pump-running"
        ).style.animationPlayState = "paused";
        this.pump.querySelector(".pump-running").style.filter =
          "blur(0px)";
        this.pump.querySelector(".pump-running").style.opacity = 0.3;
  this.pump.querySelector("#statusIndicator").style.fill = "#a5a7a8";
        this.pump.querySelector("#errorIndicator").style.fill = "#e74c3c20";
      });
    }
  }
}

// Create Pipes

let PMP01 = new Pump(PMP01_pump);
PMP01.pipes = [A_1, A_2, A_3, A_4];

let PMP02 = new Pump(PMP02_pump);
PMP02.pipes = [B_1, B_2];

let PMP03 = new Pump(PMP03_pump);
PMP03.pipes = [C_1, C_2, C_3, C_4];

const pumpMap = {
  PMP01: PMP01,
  PMP02: PMP02,
  PMP03: PMP03,
};


function togglePumpStatusPeriodically(pump) {
  setInterval(() => {
    pump.toggleStatus();
    //console.log(`${pump.id} status: ${pump.status}`);
    if (!PMP01.pumpRunning && !PMP02.pumpRunning && !PMP03.pumpRunning) {
      //console.log("All pumps are not running");
      MP_1.querySelector(".animated-flow").style.animationPlayState =
        "paused";
      MP_2.querySelector(".animated-flow").style.animationPlayState =
        "paused";
      MP_1.querySelector(".animated-flow").style.opacity = 0.3;
      MP_2.querySelector(".animated-flow").style.opacity = 0.3;
    } else {
      MP_1.querySelector(".animated-flow").style.animationPlayState =
        "running";
      MP_2.querySelector(".animated-flow").style.animationPlayState =
        "running";
      MP_1.querySelector(".animated-flow").style.opacity = 1.0;
      MP_2.querySelector(".animated-flow").style.opacity = 1.0;
    }
  }, 2000);
}


const runningdata = `[{"L_AssetId" : "PMP01", "Discharge_Pressure" : 200, "Criticality": 1, "setRecommendationColor": "#F57253", "flow_rate_Value": 50}, {"L_AssetId" : "PMP02", "Discharge_Pressure" : 200, "Criticality": 1, "setRecommendationColor": "#F57253", "flow_rate_Value": 50}, {"L_AssetId" : "PMP03", "Discharge_Pressure" : 200, "Criticality": 1, "setRecommendationColor": "#F57253", "flow_rate_Value": 50}]`
onDataLoaded(JSON.parse(runningdata));

function onDataLoaded(data) {
  //Apply data to the canvas
  data.map((d) => {
    
    const pump = pumpMap[d["L_AssetId"]];
    if (pump) {
      // Update the pump with the new data
      
      pump.setFlow(d["flow_rate_Value"]);
      pump.setPressure(d["Discharge_Pressure"]);
      pump.setCriticality(d["Criticality"]);			
      pump.setRecommendationColor(d["IndicatorColor"]);
    } else {
      console.warn(`Pump with ID ${pumpId} not found`);
    }
  });
}


function onValueMappingLoaded(data){

  let p1status = data[0].p1Status === true ? "running" : "paused";
  let p2status = data[1].p2Status === true ? "running" : "paused";
  let p3status = data[2].p3Status === true ? "running" : "paused";
  const pump1 = pumpMap["PMP01"];

  pump1.setStatus(p1status.toLowerCase());
  const pump2 = pumpMap["PMP02"];

  pump2.setStatus(p2status.toLowerCase());
  const pump3 = pumpMap["PMP03"];

  pump3.setStatus(p3status.toLowerCase());
}


function onDataChanged(data, changes) {
  //Respond to live updates on the dataset

}


















