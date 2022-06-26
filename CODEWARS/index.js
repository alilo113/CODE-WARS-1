//are you playing banjo

function areYouPlayingBanjo(name) {
    // Implement me
    if(name.startsWith("R") || name.startsWith("r")){
        return name + " plays banjo";
    }else {
        return name + " does not plays banjo";
    }
  }

  console.log(areYouPlayingBanjo('Adam'));
  console.log(areYouPlayingBanjo('Ringo'));
  console.log(areYouPlayingBanjo('Paul'));
  console.log(areYouPlayingBanjo('bravo'));
  console.log(areYouPlayingBanjo('rolf'));

console.log("------------------------------");

/*  // sum arrays

  function sum (numbers) {
    let sum = 0;
 
     for(let i = 0; i < numbers.length; i++){
       sum += numbers[i];
     }
   return sum;
 };*/

// Thinkful - Logic Drills: Traffic light

function updateLigth(current){
  let newLight = "";

  if(current == "green"){
    return newLight += "yellow";
  }
  else if(current == "yellow"){
    return newLight += "red";
  }
  else if(current == "red"){
    return newLight += "green";
  }
}

console.log(updateLigth("green"));
console.log(updateLigth("yellow"));
console.log(updateLigth("red"));