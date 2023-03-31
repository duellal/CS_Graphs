  const riverSizes = (matrix) => {
    // 0 = land
    // 1 = river
      // river = horizontal or vertical 1s
        //# of 1s = size of river
    // return an array of river sizes, no particular order
    
    let n = 0
    let rivers = []

    for(let i = 0; i < matrix.length; i++){
      for(let r = 0; r < matrix[i].length; r++){
        if(matrix[i][r] === 1){
          n += 1
          matrix[i][r] = 0

        for(let num = 1; num < matrix[i].length; num++){
            //the right num of matrix[i][r]
            if(r+num < matrix[i].length){
              if(matrix[i][r+num] === 1){
                n += 1
                matrix[i][r+num] = 0
              }
            }

            //the left num of matrix[i][r]
            if(r-num >= 0){
              if(matrix[i][r-num] === 1){
                n += 1
                matrix[i][r-num] = 0
              }
            }

            //the above num of matrix[i][r]
            if(i+num < matrix.length){ 
              if(matrix[i+num][r] === 1){
                n += 1
                matrix[i+num][r] = 0
              }
            }

            //the below num of matrix[i][r]
            if(i-num >= 0){
              if(matrix[i-num][r] === 1){
                n += 1
                matrix[i-num][r] = 0
              }
            }
          }
        }

        if(n > 0){
          rivers.push(n)
          n = 0
        }
      }
    }  
    
    console.log(`Rivers:`, rivers)

    return rivers
  };

module.exports = {riverSizes}