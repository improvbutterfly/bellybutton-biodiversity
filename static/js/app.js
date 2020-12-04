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

	    var metadata = data.metadata.filter(md => md.id === parseInt(ID));

	    console.log(metadata);

	    // Empty contents of metadata area
	    d3.select("#sample-metadata")
	    .html(`ID: ${metadata[0].id}<br />`);

  	});
};

// function to unpack data
function unpack(rows, index) {
	return rows.map(function(row) {
	    return row[index];
	});
};

// function to build the graph
function buildPlot(ID){
	console.log(ID);
	dataPromise.then(function(data) {
		  console.log(data);

	    var metadata = data.metadata.filter(md => md.id === parseInt(ID));

	    console.log(metadata);
	    //var ids = data.samples.id;
	    //var endDate = data.dataset.end_date;
	    //var dates = unpack(data.dataset.data, 0);
	    //var closingPrices = unpack(data.dataset.data, 4);

  	});
};

// function to call when select option changed
function optionChanged() {

};


init();