// Load json file
const dataPromise = d3.json("samples.json");

// Set up the drop-down menu
function init() {

	dataPromise.then(function(data) {
		  console.log(data);

	    var names = data.names;
	    console.log(names);

	    d3.select("select").selectAll("option")
	    .data(names)
	    .enter()
	    .append("option")
	    .attr("value", function(d){
	    	return d;
	    })
	    .html(function(d){
	    	return d;
	    });


	    // set default ID to first ID in data
	   	var defaultID = names[0];
		console.log(defaultID);

		// update the metadata
		loadMetadata(defaultID);

		// Plot the data for the first ID
		buildPlot(defaultID);

	});

};

// function to build the graph
function loadMetadata(ID){
	console.log(ID);
	dataPromise.then(function(data) {
		  console.log(data);

	    var filteredMetadata = data.metadata.filter(md => md.id === parseInt(ID));
	    var metadata = filteredMetadata[0];

	    console.log(metadata);

	    // create string with metadata
	    var mdString = "";
    	for (key in metadata) {
    		mdString = mdString.concat(`<strong>${key}:</strong> ${metadata[key]}<br />\n`);
	    	console.log(`${key}: ${metadata[key]}`)
		};
		console.log(mdString);

	    // Update contents of metadata area
	    d3.select("#sample-metadata")
	    .html(mdString);

  	});
};

// function to build the graph
function buildPlot(ID){
	console.log(ID);
	dataPromise.then(function(data) {
		  console.log(data);

	    var sampleData = data.samples.filter(sample => sample.id === ID);

	    console.log(sampleData);

	    // Put all data into variables
	    var sampleValues = sampleData[0].sample_values;
	    console.log(sampleValues);

	    var otu_ids = sampleData[0].otu_ids;
	    console.log(otu_ids);

	    var otu_labels = sampleData[0].otu_labels;
		console.log(otu_labels);

		// create top ten
		var topTen = {"sampleValues": [],
						"otu_ids": [],
						"otu_labels": []}
		for (var i = 0; i < 10; i++){
			topTen.sampleValues.push(sampleValues[i]);
			topTen.otu_ids.push(`OTU ${otu_ids[i]}`);
			topTen.otu_labels.push(otu_labels[i]);			
		};
		console.log(topTen);

		// Plot bar chart
		var trace1 = {
			x: topTen.sampleValues,
			y: topTen.otu_ids,
			text: topTen.otu_labels,
			type: "bar",
			orientation: "h"
		}

		var barData = [trace1];

		var barLayout = {
			title: `Top Ten OTUs found in ${ID}`,
			yaxis:{
				autorange: "reversed"
			}
		};

		console.log("Displaying bar chart");
		Plotly.newPlot("bar", barData, barLayout);

		// Plot the bubble chart

		var trace2 = {
			x: otu_ids,
			y: sampleValues,
			text: otu_labels,
			mode: "markers",
			type: "scatter",
			marker: {
				size: sampleValues,
				color: otu_ids,
				colorscale: "Picnic"
			}
		};

		var bubbleData = [trace2];

		var bubbleLayout = {
			title: "Bubble Chart"
		};

		console.log("Displaying bubble chart");
		Plotly.newPlot("bubble", bubbleData, bubbleLayout);

  	});
};

// function to call when select option changed
function optionChanged(ID) {
	// update the metadata
	loadMetadata(ID);

	// Plot the data for the selected ID
	buildPlot(ID);

};


init();