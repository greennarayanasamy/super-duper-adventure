// Loads google resources and calls `googleIsReady` when done
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(googleIsReady);

// Main function has access to google resources
function googleIsReady(){
  const
    // Identifies some DOM elements
    itemDivs = document.getElementsByClassName("item"),
    makeChartBtn = document.getElementById("makeChartBtn"),
    pieChartDiv = document.getElementById("pieChartDiv"),

    // Defines google objects (and specifies where to show the chart)
    data = new google.visualization.DataTable(),
    chart = new google.visualization.PieChart(pieChartDiv);

  // Calls assembleDataAndDrawChart when button is clicked
  makeChartBtn.addEventListener("click", assembleDataAndDrawChart);

  // Defines the click listener on the button
  function assembleDataAndDrawChart() {

    // Loops through `itemDivs` to populate `dataArray`
    const dataArray = [];
    for(let itemDiv of itemDivs){
      const
        // Gets the name and percentage inputs for this item
        itemInputsArray = Array.from(itemDiv.getElementsByTagName("input")),
        // Gets the inputs' values (converts percentage to a number)
        itemData = itemInputsArray.map(
          (input) => input.type == "number" // condition
            ? +input.value // if true, `+` converts to number
            : input.value // if false, keeps the string value
        );
      // Adds the `itemData` array as an item of `dataArray`
      dataArray.push(itemData);
    }

    // Draws the chart (or complains about invalid data)
    if(totalPercentageEquals100(dataArray)){
      drawChart(dataArray);
    }
    else{ alert("Pie charts must total 100%"); }
  }

  
  // Uses the google objects defined earlier to show the chart
  function drawChart(_dataArray){
    // (Column names are hard coded)
    data.addColumn('string', 'Name');
    data.addColumn('number', 'Percentage');
    data.addRows(_dataArray);
    chart.draw(data, null); // Calls google's `.draw` method
  }

  //Returns true if data is valid
  function totalPercentageEquals100(_dataArray){
    let total = 0;
    for(let item of _dataArray){
      // Destructures each `item` array to bind values locally 
      [name, percentage] = item;
      if(name){ total += percentage; } // Adds up percentages
    }
    return (total == 100);
  }
}