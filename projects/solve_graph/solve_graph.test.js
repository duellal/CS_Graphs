const {doesPathExist} = require('./solve_graph')

describe('doesPathExist', ()=>{
    it('returns the correct value for Graph 1', ()=>{
        let graph = {
            a: ["b"],
            b: ["c", "d"],
            c: ["d"],
            d: [],
          };
          
          expect(doesPathExist(graph, "a", "b")).toBe(true);
          expect(doesPathExist(graph, "b", "a")).not.toBe(true);
          expect(doesPathExist(graph, "a", "d")).toBe(true);
          expect(doesPathExist(graph, "a", "a")).not.toBe(true);
    })
    
    it('returns the correct value for Graph 2', ()=>{
        let graph = {
            a: ["a", "c"],
            c: ["r", "s"],
            r: ["a"],
            s: [],
          };
          
          expect(doesPathExist(graph, "a", "a")).toBe(true);
          expect(doesPathExist(graph, "r", "s")).toBe(true);
          expect(doesPathExist(graph, "c", "c")).toBe(true);
          expect(doesPathExist(graph, "s", "a")).not.toBe(true);
    })
})