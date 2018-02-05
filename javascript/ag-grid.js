// specify the data
var rowData = [
    {model: "Celica", make: "Toyota",colour: "Red", engine: "Diesel", year: "2000", price: 35000, rating: "3", country: "Japan"},
    {make: "Ford", model: "Mondeo", colour: "Black", engine: "Petrol", year: "2002", price: 32000, rating: "1", country: "Germany"},
    {make: "Porsche", model: "Test", colour: "Black", engine: "Petrol", year: "2004", price: 72000, rating: "2", country: "Germany"},
    {make: "Volkswagen", model: "Jetta", colour: "Silver", engine: "Petrol", year: "2004", price: 48000, rating: "5", country: "Germany"},
    {make: "Volkswagen", model: "GTI", colour: "Red", engine: "Diesel", year: "2004", price: 48000, rating: "5", country: "Germany"},
    {make: "Volkswagen", model: "Eos", colour: "Red", engine: "Petrol", year: "2004", price: 78000, rating: "5", country: "Germany"},
    {make: "Suzuki", model: "SJ", colour: "Green", engine: "Petrol", year: "2004", price: 48000, rating: "5", country: "Japan"},
    {make: "Suzuki", model: "SX4", colour: "Green", engine: "Diesel", year: "2004", price: 48000, rating: "5", country: "Japan"},
    {make: "Suzuki", model: "X-90", colour: "Green", engine: "Petrol", year: "2004", price: 48000, rating: "5", country: "Japan"},
    {make: "Suzuki", model: "Escudo", colour: "Purple", engine: "Diesel", year: "2004", price: 48000, rating: "5", country: "Japan"}
];

//Create options for the grid
var gridOptions = {
	columnDefs: [
		{headerName: "Make", field: "make", headerClass: "grid-header-make"},
		{
	    	headerName: "Appearance",
	    	field: "appearance",
			marryChildren: true,
			headerClass: "grid-header-appearance",   
			children: [
				{headerName: "Model", field: "model", cellClass: "model-child-model"},
            	{headerName: "Colour", field: "colour", cellClass: "model-child-colour", cellClass: "model-child-colour", columnGroupShow: 'open'},
				{headerName: 'Engine', field: 'engine', columnGroupShow: 'open', cellClass: 'model-child-engine', columnGroupShow: 'open'},
				{headerName: 'Year of Release', field: 'year', type: 'numericColumn', filter: 'agNumberColumnFilter', columnGroupShow: 'open', 										cellClass: 'model-child-year'}
			]
    	},
		{headerName: "Price", field: "price", headerClass: "grid-header-price", type: "numericColumn"},
		{headerName: "Country", field: "country", headerClass: "grid-header-country", cellClass: 'grid-cell-country', rowGroup: true},
		{headerName: "Car Rating", field: "rating", headerClass: "grid-header-rating", type: "numericColumn", cellRenderer: 'starRatingCellRenderer', rowGroup: 			true},
	],
	enterMovesDownAfterEdit: true,
    rowData: rowData,
    enableSorting: true,
    enableFilter: true,
    enableColResize: true,
    defaultColDef: {
        width: 160,
        filter: 'agTextColumnFilter',
        editable: true
    },
    defaultColGroupDef: {
        width: 20,
        editable: true
    },
    components: {
        'starRatingCellRenderer': StarRatingCellRenderer
    }
};

function StarRatingCellRenderer() {}

StarRatingCellRenderer.prototype.init = function(params) {
    this.eGui = document.createElement('span');
    text = '';
    
    // one star for each medal
    for (var i = 0; i<params.value; i++) {
        text += '<img src="../images/star.png">';
    }
    this.eGui.innerHTML = text;
};

StarRatingCellRenderer.prototype.getGui = function() {
    return this.eGui;
};

document.addEventListener("DOMContentLoaded", function () {
    var agGridDiv = document.querySelector('#agGridId');

    new agGrid.Grid(agGridDiv, gridOptions);
});