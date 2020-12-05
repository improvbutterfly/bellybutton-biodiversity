// Bonus function for guage chart
function gaugeChart(ID){
	dataPromise.then(function(data) {
		  console.log(data);

	    var filteredMetadata = data.metadata.filter(md => md.id === parseInt(ID));
	    var metadata = filteredMetadata[0];

	    console.log(metadata);

	    var wfreq = metadata.wfreq;

	    var data = [
		  {
		    domain: { x: [0, 1], y: [0, 1] },
		    value: wfreq,
		    title: { text: "Belly Button Washing Frequency<br />(Scrubs Per Week)" },
		    type: "indicator",
		    mode: "gauge",
		    visible: true,
		    ids: ["0-1", "1-2", "2-3", "3-4", "4-5", "5-6", "6-7", "7-8", "8-9"],
		    gauge: {
		      value: 0.85,
		      axis: { range: [0, 9],
		      		  tickmode: "linear",
		      		  ticks: "inside" },
		      steps: [
		        { range: [0, 1], color: "#D7F6FE" },
		        { range: [1, 2], color: "#AFECFD" },
		        { range: [2, 3], color: "#9BE8FD" },
		        { range: [3, 4], color: "#87E3FD" },
		        { range: [4, 5], color: "#73DEFC" },
		        { range: [5, 6], color: "#5FDAFC" },
		        { range: [6, 7], color: "#4BD5FB" },
		        { range: [7, 8], color: "#37D0FB" },
		        { range: [8, 9], color: "#23CCFB" },
		      ],
		      bar: {
		      	color: "#012F3C",
		      	thickness: 0.25
		      }
		    }
		  }
		];

		var layout = { width: 400, height: 350, margin: { t: 0, b: 0 } };
		Plotly.newPlot("gauge", data, layout);

	});	
};