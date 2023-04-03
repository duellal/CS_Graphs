const riverSizes = (matrix) => {
    let n = 0
    let rivers = []
    let visited = []

    let getNeighbors = (vert) => {
      neigh = []
      const r = vert[0]
      const c = vert[1]

      //the right num of matrix[i][r]
      if(c+1 < matrix[0].length){          
        neigh.push([r, c+1])
      }
      //the left num of matrix[i][r]
      if(c-1 > 0){
        neigh.push([r, c-1])
      }
      //the below num of matrix[i][r]
      if(r+1 < matrix.length){
        neigh.push([r+1, c])
      }
      //the above num of matrix[i][r]
      if(r-1 > 0){
        neigh.push([r-1, c])
      }
      
      return neigh
    }

    matrix.forEach((row, rowIndex) => {
      row.forEach((col, colIndex) => {
        if(!visited.includes([rowIndex, colIndex])){
        let queue = [[rowIndex, colIndex]]

          while(queue.length > 0){
            const r = queue.shift()

            if(!visited.includes(r) && matrix[r[0]][r[1]] === 1){
              visited.push(r)
              matrix[r[0]][r[1]] = 0
              n += 1

              let neighbors = getNeighbors([r[0], r[1]])

              neighbors.forEach(neighbor => {
                if(!visited.includes(neighbor) && !queue.includes(neighbor)){
                  queue.push(neighbor)      
                }
              })
            }
            else if(!visited.includes(r) && matrix[r[0]][r[1]] === 0){
              visited.push(r)
            }
          }
        }
    
        if(n > 0){
          rivers.push(n)
          n = 0
        }
      })
    })

    return rivers
  };

module.exports = {riverSizes}