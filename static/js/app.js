// Load json file
const dataPromise = d3.json("samples.json");

// Set up the drop-down menu
function init() {
	dataPromise.then(function(data) {
		  console.log(data);

	    var names = data.names;

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

	});
};

// function to unpack data
function unpack(rows, index) {
	return rows.map(function(row) {
	    return row[index];
	});
};

// function to build the graph
function buildPlot(){
	dataPromise.then(function(data) {
		  console.log(data);

	    var names = data.names;
	    var metadata = data.metadata;
	    var ids = data.samples.id;
	    console.log(names);
	    //var endDate = data.dataset.end_date;
	    //var dates = unpack(data.dataset.data, 0);
	    //var closingPrices = unpack(data.dataset.data, 4);

  	});
};

// function to call when select option changed
function optionChanged() {

};


init();