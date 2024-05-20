document.addEventListener("DOMContentLoaded", function() {

	const startButton = document.getElementById("button");

	function clearResults() {
		for(let i = 1; i < 11; i++){
			//document.getElementById("item" + i).innerHTML = "";
			document.getElementById("img" + i).innerHTML = "";
			document.getElementById("amt10").innerHTML = "";
		}
	}


	startButton.addEventListener("click", function() {

		clearResults();

		fetch("data.json")
            .then(response => response.json())
            .then(dataJson => {
				fetch("icon.json")
            	.then(response => response.json())
            	.then(iconJson => {

				// try {
				//     fetch('./data.json')
				// 	.then((response) => response.json())
				// 	.then((json) => console.log(json));

				//     fetch('./icon.json')
				// 	.then((response) => response.json())
				// 	.then((json) => console.log(json));

				// } catch (error) {
				//     console.error('Error fetching JSON:', error);
				// }

				//console.log(data);

				// JSON.stringify(data).forEach((i) => {
				// 	console.log(i);
				// })

				//console.log("The Data: " + data);

				let dataHave;
				let counter = 1;
				let dataPNG;
				let dataPNG1;
				let dataPNG2;
				let dataPNG3;
				let dataPNG4;
				let dataPNG5;
				let dataPNG6;
				let dataPNG7;
				let dataPNG8;
				let dataPNG9;
				let dataPNG10;
				let dataHaveAmt = 1;
				let resData;
				let resDataAmount
				let resDataAmt;

				try{
					endpoint = document.getElementById("itemText").value;

					console.log("Endpoint: " + endpoint)

					let resIcon;
					let name = endpoint;
					console.log(name);

					dataJson.forEach((i) => {   
						//console.log("test");
						//console.log(name.replaceAll("_", " ") + i['give'][0]);
						if (i['give'][0] == name) {
							resData = i;
							resDataAmount = i['give'][1];
							resDataAmt = "\"" + resDataAmount + "\"";
						}
					});

					console.log("Amount: " + resDataAmt);

					let data = resData.have;
					//console.log("Tester: " + data + ", " + data[0][1]);

					let resIcon1;
					let resIcon2;
					let resIcon3;
					let resIcon4;
					let resIcon5;
					let resIcon6;
					let resIcon7;
					let resIcon8;
					let resIcon9;

					let resIconList = [resIcon1, resIcon2, resIcon3, resIcon4, resIcon5, resIcon6, resIcon7, resIcon8, resIcon9, resIcon];

					let counter6 = 0;
					for (let i = 0; i < 3; i++){
						for(let j = 0; j < 3; j++){
							//console.log(resData.have[i][j]);
							counter6 += 1;
							iconJson.forEach((k) =>{
								try{
									if(k.name == resData.have[i][j]){
										//Introduced
										//resizedataURL(resIconList[counter6], 50, 50);
										//End of introduced
										resIconList[counter6] = k.icon;
										//console.log(k.icon);
									}
								}
								catch{
									resIconList[counter6] = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==";
								}
							})
						}
					}

					iconJson.forEach((j) => {
						//console.log("Test");
						//console.log(name.replaceAll("_", " ") + j['name']);
						if (j['name'] == name){
							//console.log(j['icon']);
							resIcon = j;
							resIconList[10] = j.icon;
						}

					})  

					let resIconData = {
						"resIcon1": resIconList[1],
						"resIcon2": resIconList[2],
						"resIcon3": resIconList[3],
						"resIcon4": resIconList[4],
						"resIcon5": resIconList[5],
						"resIcon6": resIconList[6],
						"resIcon7": resIconList[7],
						"resIcon8": resIconList[8],
						"resIcon9": resIconList[9],
						"resIcon10": resIconList[10],
					};

					for(let k = 1; k < 11; k++){
						console.log("resIcon" + (k) + ": " + resIconList[k] + "\n");
					}


					

					// res.status(200).json({resData, resIconData, resDataAmt});



					//res.status(200).json({resIcon});

					/*app.get("/", function(req, res) {
						res.send("<h1>HEY</h1>");
					})*/


					// console.log(JSON.stringify(dataJson));

					//http.createServer(onRequest).listen(8001);

					// Takes a data URI and returns the Data URI corresponding to the resized image at the wanted size.
						
					// Use it like that : resizedataURL('yourDataURIHere', 50, 50);

					// let port = process.env.PORT;
					// if (port == null || port == "") {
					// 	port = 211;
					// }
					// app.listen(port);


					// let response = await fetch(endpoint) //Put parsed json data in here

					// data = await response.json();

					//Extract data
					

					// console.log(resDataAmount)


					dataHaveAmt = data.resDataAmount;
					// console.log("resdataamt: " + data.resDataAmt);
					// console.log(resData);
					dataHave = resData.have;
					console.log("Logging");
					
					dataPNG10 = resIconData.resIcon10;
					console.log("Logging");
					console.log("Data Have: " + dataHave);
					console.log("Data PNG: " + dataPNG);
					dataPNG1 = resIconData.resIcon1;
					dataPNG2 = resIconData.resIcon2;
					dataPNG3 = resIconData.resIcon3;
					dataPNG4 = resIconData.resIcon4;
					dataPNG5 = resIconData.resIcon5;
					dataPNG6 = resIconData.resIcon6;
					dataPNG7 = resIconData.resIcon7;
					dataPNG8 = resIconData.resIcon8;
					dataPNG9 = resIconData.resIcon9;
					img = document.createElement("img");
					img.src = ("data:image/png;base64," + dataPNG10);
					var src = document.getElementById("img10");
					src.appendChild(img);
					if(dataHaveAmt > 1){
						$("#amt10").html(dataHaveAmt);
					}
					document.getElementById("error").innerHTML = "";

					console.log("Logging");



					//const dataSplit = dataHave.split(",");

					//console.log("Data Have: " + dataHave);

					let counter2 = 0;

					let dataPNGList = [dataPNG1, dataPNG2, dataPNG3, dataPNG4, dataPNG5, dataPNG6, dataPNG7, dataPNG8, dataPNG9];

					for(let i = 0; i < 9; i++){
						console.log("Slot" + i  + ": " + dataPNGList[i]);	
					}


					var img;

					let catched = false;

					if(counter == 1){
						for(let i = 0; i < 3; i++){
							//console.log("Data Iteration of i: " + dataHave[i]);
							for(let j = 0; j < 3; j++){
								// console.log("Data Have [i][j]: " + dataHave[i][j] + ", Check if null: " + null);
								counter2 = counter2 + 1;
								$("#item" + counter2).html("Empty");
								try{
									if(dataHave[i][j] === undefined || dataHave[i][j] === null || dataHave[i][j] === "null"){
										$("#item" + counter2).html("Empty");

										$("#item" + counter2).html(dataHave[i][j] + ": ");
										//console.log("Data Have: " + dataHave[i][j] + ", " + "counter 2: " + counter2 + ", dataPNGListcounter2: " + dataPNGList[counter2]);
										img = document.createElement("img");
										img.src = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==");
										var src = document.getElementById("img" + counter2);
										src.appendChild(img);
									}
									else{
										$("#item" + counter2).html(dataHave[i][j] + ": ");
										//console.log("Data Have: " + dataHave[i][j] + ", " + "counter 2: " + counter2 + ", dataPNGListcounter2: " + dataPNGList[counter2]);
										img = document.createElement("img");
										img.src = ("data:image/png;base64," + dataPNGList[counter2 - 1]);
										var src = document.getElementById("img" + counter2);
										src.appendChild(img);

									}
									catched = false;
								}
								catch(e){
									// img = document.createElement("img");
									// img.src = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mNkYPhfDwAChwGA60e6kgAAAABJRU5ErkJggg==");
									// var src = document.getElementById("img" + counter2);
									// src.appendChild(img);
									// catched = true;
								}
								
								
								console.log(counter2 + ", catched: " + catched);
								
							}
						}
					}
				}
				catch (e){
					console.log("Please enter a craftable item.");
					$("#error").html("Please enter a craftable item.");
					counter = 0;
				}

				// const filePath = './data.json';

				// const jsonData = JSON.parse(fs.readFileSync('data.json'));

				// // console.log("Logging!");

				// // const data = JSON.parse(fileContent);

				// // console.log("Logging!");

				// console.log("FOUND IT!!!\n\n\n\n\n\n\n\n\n\n\n\n\n\nFOUND IT!!!");

				// console.log(str(item) + ", " + str(endpoint));

				// console.log("Logging!");


				// let response = await fetch('https://pacific-savannah-82193.herokuapp.com/recipe/' + endpoint);
				// let response = await fetch('http://localhost/recipe/' + endpoint);
				// let response = await fetch('./data.json');

				//backend in progress...

				// console.log("Logging!");
			})
		})
	})
})
// 	var img = document.createElement("img");
// 	img.src = ("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgBAMAAACBVGfHAAAALVBMVEUAAAA7OztAQEBWVlZeXl50dHR/f39qampISEiPj49NTU00NDRoaGiAgIBBQUFWXyGYAAAAAXRSTlMAQObYZgAAAUdJREFUeF51jjFrwzAUhP0XniZDJmkSGLpIIPAqgaG7DIasfmBwJxkE2azJ0FkB7YZCx0yFzs3vqkQIJENuu093T1e9Eo7PfopDfPSpP89DenjHDzyOw3D31/ForR3Ge2vsx+zTbPv5r3iL1k4Rj4hxwD4DbW3OXCc72YgkAyNSLqQ42IRAM3j3HaLtp5gwBJZB1/oTJjuc8XPjpAAj3GLHOPOVwGcGyu3KC0TYarqFDJwWi9wl3SDU6++tInSnGVyA8JIwGShhGgbkQnlJOLV8eclXILQuCa2ENOrE84WftQDjpN7dN30DEkgZtjtncqumpOGh7NDat517Dw009W2pMK1UC1/rQ4Ct3GhFp5ynsOXtJSG0Ucti2Mrqw8qqrFYI1xnGADhkm+VlK04XYOXTm0xnJK2h+DvRntOtepCQDKonGahe6B/7Hmuy2OXaXQAAAABJRU5ErkJggg==");
// 	var src = document.getElementById("myBlock");
// 	console.log("Test1");
// 	src.appendChild(img);
// 	console.log("test2");
// }

//$("#item1").html(JSON.dataHave[i][j]);

//console.log("Data Split: " + dataSplit);

// for(let i = 0; i < 9; i++){
// 	console.log(dataHave);
// }

//$("#rawJSON").html(JSON.stringify(data));
// // get information entered to web-page here

// // using baseURL + information entered, create full URL
// let fullURL = baseURL + "Anvil";

// // Make sure the fullURL works: copy and paste it in a browser:
// //console.log(fullURL);
// console.log(fullURL);
// $("#rawJSON").html(JSON.stringify(data));

// $.get(fullURL, function(data) {
// 	// The following line outputs the JSON response to the console:
// 	// console.log(data);
	
// 	// The following line outputs the JSON response to the webpage:
// 	$("#rawJSON").html(JSON.stringify(data));
	
// 	// The following line gives the JSON response to the analyze
// 	// function. From there, you can pull information from the JSON
// 	// response and display things on your webpage.
//     console.log('test1');
// 	analyze(data);
//     console.log('test2');
// });

// document.getElementById('button').addEventListener('click', getJSON);
