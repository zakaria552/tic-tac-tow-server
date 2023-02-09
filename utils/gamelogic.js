function rowCheck(grid) {
    let gameWon = false
    for(let i = 0; i < grid.length; i++) {
        let row = grid[i]
        let prev = grid[i][0]
        for(let j = 1; j < row.length; j++) {
            let rowtile = row[j]
            if(rowtile !== prev || !rowtile) break
            prev = rowtile
            if(j === row.length - 1) gameWon = true
        }
        if(gameWon) break
    }
    return gameWon
}

function colCheck(grid) {
    let gameWon = false
    for(let i = 0; i < grid.length; i++) {
        let row = grid[i]
        let prev = grid[0][i]
        for(let j = 1; j < row.length; j++) {
            let coltile = grid[j][i]
            if(coltile !== prev || !coltile) break
            prev = coltile
            if(j === grid.length - 1) gameWon = true
        }
        if(gameWon) break
    }
    return gameWon
}

function diagCheck(grid) {
    let gridLen = grid.length - 1
    let gameWon = false
    let prev = grid[0][0]
    for(let i = 1; i < grid.length; i++) {
        let diagtile = grid[i][i]
        if(diagtile !== prev || !diagtile) break
        prev = diagtile
        if(i === grid.length - 1) gameWon = true
    }
    let prev2 = grid[0][gridLen]
    for(let i = 1; i <= gridLen; i++) {
        let diagtile = grid[i][gridLen-i]
        if(diagtile !== prev2 || !diagtile) break
        prev2 = diagtile
        if(i === grid.length - 1) gameWon = true
    }
    return gameWon
}
function winCheck(grid) {
    if(rowCheck(grid)) return true
    if(colCheck(grid)) return true
    if(diagCheck(grid)) return true
    return false
}

function drawCheck(grid) {
    let draw = false
    for(let i = 0; i < grid.length; i++) {
        const row = grid[i]
        if(row.includes("")) {
            break;
        } else {
            if(i === grid.length - 1) draw = true
            continue
        } 
    }
    return draw
}
function checkGameState(grid) {
    const gameState = {won: false, draw: false}
    if(winCheck(grid)) {
        gameState.won = true
    } else {
        if(drawCheck(grid)) gameState.draw = true
    }
    return gameState
}
export  {checkGameState}
