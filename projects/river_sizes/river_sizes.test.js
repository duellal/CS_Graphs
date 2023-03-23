const {riverSizes} = require('./river_sizes')

describe('riverSizes', ()=>{
    it('returns the size of the rivers', ()=>{
        let matrix = [
            [1, 0, 1, 0],
            [0, 1, 1, 1],
            [1, 0, 0, 1],
          ];
          let rivers = riverSizes(matrix);
          expect(rivers).toHaveLength(3);
          expect(rivers).toEqual(expect.arrayContaining([1, 1, 5]))
          
          matrix = [
            [1, 0, 0, 1, 0],
            [1, 0, 1, 0, 0],
            [0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1],
            [1, 0, 1, 1, 0],
          ];
          
          rivers = riverSizes(matrix);
          expect(rivers).toHaveLength(5);
          expect(rivers).toEqual(expect.arrayContaining([1, 2, 2, 2, 5]))
    })
})