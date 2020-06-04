var myPeripherals = ["monitor", "mouse", "keyboard", "PC", "earphones"]

var monitor = myPeripherals.indexOf("monitor") + 1;
var mouse = myPeripherals.indexOf("mouse") + 1;
var keyboard = myPeripherals.indexOf("keyboard") + 1;
var PC = myPeripherals.indexOf("PC") + 1;
var earphones = myPeripherals.indexOf("earphones") + 1;
var any = myPeripherals.indexOf("0");


function included(index){
    result = index !== -1
    return result
  }
  

  
  function partIncluded(peripheral){
      if(included(peripheral)){
          console.log(peripheral)
      }
      else{
          console.log("Not Available")
      }

  }
  
  partIncluded(mouse)

