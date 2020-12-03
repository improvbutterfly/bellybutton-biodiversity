// Load json file
const dataPromise = d3.json("samples.json");

// function to unpack data
function unpack(rows, index) {
	return rows.map(function(row) {
	    return row[index];
	});
};

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


buildPlot();