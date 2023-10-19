
function search(graph, start, target, visited, path) 
{
    if (start == target) 
    {
        path.push(target);
        return path;
    }

    visited[start] = true;
    path.push(start);

    for (var node in graph[start]) 
    {
        if (!visited[node]) 
        {
            var thispath = search(graph, node, target, visited, path);
            if (thispath[thispath.length-1] == target) 
            {
                return thispath;
            }
        }
    }
    path.pop();
    return [];
}

function augmentingPath(graph, startNode, targetNode) 
{
    let visited = Array(graph.length).fill(false)
    let path = []

    search(graph, startNode, targetNode, visited, path); 
    
    if (path[path.length-1] != targetNode)
    {
        return []
    }
    else 
    {
        return path
    }
}

