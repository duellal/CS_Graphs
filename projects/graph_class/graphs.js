class Graph {
    /**
     * initiate the graph with an adjacency list
     * example of completed adjacency list
     * const adjList =
     * {
     *  1: [2,3],
     *  2: [1, 4],
     *  3: [1],
     *  4: [2]
     * }
     *
     */
    constructor() {
      this.graph = {}
    }

  
    //adds a node to the graph
    addVertex(vertex) {
      this.graph[vertex] = []
    }
    
    //adds an edge to the graph
    addEdge(vertex, edge) {
      for(let vert in this.graph){
        if(vert === vertex){
          this.graph[vertex].push(edge)
        }
      }
    }
  
    //returns the neighbors (edges) for a particular vertex
    getNeighbors(vertex) {
      for(let vert in this.graph){
        if(vert === vertex){
          return this.graph[vertex]
        }
      }
    }
  
    breadthFirstTraversal(startVert) {
      let visited = []
      let queue = [startVert]

      while(queue.length > 0){
        const vert = queue.shift()
        if(vert && !queue.includes(vert)){
          if(!visited.includes(vert)){
              visited.push(vert)

              let neighbors = this.getNeighbors(vert)

              neighbors.forEach(neighbor => {
                if(!visited.includes(neighbor)){
                  queue.push(neighbor)
                }
              })
          }
        }
      }
      this.printPath(visited)
    }
  
    depthFirstTraversal(startVert) {
      let visited = []
      let queue = [startVert]

      while(queue.length > 0){
        const vert = queue.pop()
        if(vert && !queue.includes(vert)){
          if(!visited.includes(vert)){
            visited.push(vert)

            let neighbors = this.getNeighbors(vert)

            neighbors.forEach(neighbor => {
              if(!visited.includes(neighbor)){
                queue.push(neighbor)
              }
            })
          }
        }
      }
      this.printPath(visited)
    }
  
    printPath(visited) {
      let path = "Path: ";
      visited.forEach((node, index) => {
        if (index !== visited.length - 1) {
          path += `${node} -> `;
        } else {
          path += `${node}\n`;
        }
      });
      console.log(path);
    }
  }
  
  const graph = new Graph(); // instantiate the graph
  graph.addVertex("A");
  graph.addVertex("B");
  graph.addVertex("C");
  graph.addVertex("D");
  graph.addVertex("E");
  graph.addVertex("F");
  
  graph.addEdge("A", "B");
  graph.addEdge("A", "C");
  graph.addEdge("B", "A");
  graph.addEdge("B", "D");
  graph.addEdge("C", "A");
  graph.addEdge("C", "D");
  graph.addEdge("C", "F");
  graph.addEdge("D", "B");
  graph.addEdge("D", "C");
  graph.addEdge("D", "E");
  graph.addEdge("D", "F");
  graph.addEdge("E", "D");
  graph.addEdge("E", "F");
  graph.addEdge("F", "C");
  graph.addEdge("F", "D");
  graph.addEdge("F", "E");

  console.log("\nBreadth First Traversal");
  graph.breadthFirstTraversal("A");
  console.log("-----------------------------");
  console.log("\nDepth First Traversal");
  graph.depthFirstTraversal("A");