const {riverSizes} = require('./river_sizes')

describe('riverSizes', ()=>{
    it('returns the size of the rivers for a matrix[3x4]', ()=>{
        let matrix = [
            [1, 0, 1, 0],
            [0, 1, 1, 1],
            [1, 0, 0, 1],
          ];
          let rivers = riverSizes(matrix);
          console.log(`Test Rivers Array:`, rivers)
          expect(rivers).toHaveLength(3);
          expect(rivers).toBe(expect.arrayContaining([1, 1, 5]))
        })

      it(`returns the size of the rivers for a matrix[5x5]`, () =>{
          matrix = [
            [1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0],
          ];
          
          rivers = riverSizes(matrix);
          expect(rivers).toHaveLength(5);
          expect(rivers).toBe(expect.arrayContaining([1, 2, 2, 2, 5]))
    })
})