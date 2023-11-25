// Used function to run all loops
var json=[
	{
		color: "red",
		value: "#f00"
	},
	{
		color: "green",
		value: "#0f0"
	},
	{
		color: "blue",
		value: "#00f"
	},
	{
		color: "cyan",
		value: "#0ff"
	},
	{
		color: "magenta",
		value: "#f0f"
	},
	{
		color: "yellow",
		value: "#ff0"
	},
	{
		color: "black",
		value: "#000"
	}
];


// Iteration With Simple For loop
var loopFor = function(jsonArray)
{
	console.log(`
	Iteration With Simple For loop
	`);
	for(i=0;i<jsonArray.length;i++)
	{
		console.log(jsonArray[i]);
	}
};
loopFor(json);

// Iternation With For In Loop
(function loopIN(jsonArray)
{
	console.log(`
	Iteration With For In Loop`);
	for(i=0;i<jsonArray.length;i++)
{
    // console.log(jsonArray[i]);
    for(var key in jsonArray[i])
    {
        console.log(key,":",jsonArray[i][key]);
    }

}})(json);


// Iteration With For Of loop
var loopForOf = (jsonArray)=>{
	console.log(`
	Iteration With For Of loop
	`);
	for(var value of jsonArray)
	{
		console.log("color =",value.color,"\n","value =",value.value);
	}
};
loopForOf(json);

// Iteration with For Each Loop
(function loopIN(jsonArray)
{
	console.log(`
	Iteration With For Each Loop 
    `);
    for(i=0;i<jsonArray.length;i++)
    {
        Object.entries(jsonArray[i]).forEach(([key,value])=>{
            console.log(`${key} : ${value}`);
            // console.log(key,":",value);
        })
    }
	
})(json);
