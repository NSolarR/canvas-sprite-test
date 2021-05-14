//Assign how long and tall the noise array is
let height = 5;
let width = 5;

//Randomly create a multidimensional, height x width array
function createNoise() {
    let noiseArr = [];
    let newArr = [];
    
    for(let x = 0; x < width; x++) {
        
        for(let y = 0; y < height; y++) {
            newArr.push ((Math.random() > 0.5 ? 1: 0));
            
        }
        noiseArr.push(newArr);
        newArr = [];
    }
    
    return noiseArr;
}

export{createNoise}