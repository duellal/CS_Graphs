const doesPathExist = (graph, startNode, endNode) => {
    let visited = []
    let queue = [startNode]

    while(queue.length > 0){
        const vert = queue.shift()
        const neighbors = graph[vert]

        if(graph[vert].includes(endNode)){
            return true
        }
        else if(!graph[vert].includes(endNode)){
           visited.push(vert)

           neighbors.forEach(neighbor => {
            if(!visited.includes(neighbor)){
                queue.push(neighbor)
            }
           })
        }
    }

    return false
}

module.exports = {doesPathExist}