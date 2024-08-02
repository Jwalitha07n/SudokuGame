const n = 9; // Size of the Sudoku board

// Initialize the 2D array for the Sudoku grid
var arr = Array.from({ length: 9 }, () => Array(9).fill(null));

// Fill the `arr` with cell elements
for (var i = 0; i < 9; i++) {
    for (var j = 0; j < 9; j++) {
        arr[i][j] = document.getElementById(`${i * 9 + j}`);
        if (!arr[i][j]) {
            console.error(`Element with ID ${i * 9 + j} not found.`);
        }
    }
}

// Initialize the board
var board = Array.from({ length: 9 }, () => Array(9).fill(0));

// Function to generate a Sudoku puzzle
function generateSudoku() {
    let board = Array.from({ length: 9 }, () => Array(9).fill(0));
    fillBoard(board);
    removeElements(board);
    return board;
}

// Function to fill the board with a valid Sudoku solution
function fillBoard(board) {
    const size = 9;
    const subGridSize = 3;

    function isValid(board, row, col, num) {
        // Check if `num` is not in the current row
        for (let i = 0; i < size; i++) {
            if (board[row][i] === num) return false;
        }

        // Check if `num` is not in the current column
        for (let i = 0; i < size; i++) {
            if (board[i][col] === num) return false;
        }

        // Check if `num` is not in the current sub-grid
        const startRow = row - (row % subGridSize);
        const startCol = col - (col % subGridSize);
        for (let i = startRow; i < startRow + subGridSize; i++) {
            for (let j = startCol; j < startCol + subGridSize; j++) {
                if (board[i][j] === num) return false;
            }
        }

        return true;
    }

    function solve(board) {
        for (let row = 0; row < size; row++) {
            for (let col = 0; col < size; col++) {
                if (board[row][col] === 0) {
                    for (let num = 1; num <= 9; num++) {
                        if (isValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (solve(board)) return true;
                            board[row][col] = 0;
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }

    // Generate a complete board
    solve(board);
}

// Function to remove elements to create a puzzle
function removeElements(board) {
    const size = 81;
    const removeCount = 40; // Number of cells to remove

    for (let i = 0; i < removeCount; i++) {
        const row = Math.floor(Math.random() * 9);
        const col = Math.floor(Math.random() * 9);
        board[row][col] = 0;
    }
}

function FillBoard(board) {
    for (var i = 0; i < 9; i++) {
        for (var j = 0; j < 9; j++) {
            if (board[i][j] !== 0) {
                arr[i][j].innerText = board[i][j];
            } else {
                arr[i][j].innerText = '';
            }
        }
    }
}

let GetPuzzle = document.getElementById('GetPuzzle');
let SolvePuzzle = document.getElementById('SolvePuzzle');

GetPuzzle.onclick = function () {
    board = generateSudoku();
    FillBoard(board);
};

SolvePuzzle.onclick = () => {
    if (SudokuSolver(board, 0, 0)) {
        FillBoard(board);
    } else {
        console.log('No solution exists');
    }
};

function isValid(board, i, j, num) {
    for (let x = 0; x < n; x++) {
        if (board[i][x] === num || board[x][j] === num) {
            return false;
        }
    }
    let rn = Math.sqrt(n);
    let si = Math.floor(i / rn) * rn;
    let sj = Math.floor(j / rn) * rn;
    for (let x = si; x < si + rn; x++) {
        for (let y = sj; y < sj + rn; y++) {
            if (board[x][y] === num) {
                return false;
            }
        }
    }
    return true;
}

function SudokuSolver(board, i, j) {
    if (i === n) {
        return true; // Solved the puzzle
    }
    if (j === n) {
        return SudokuSolver(board, i + 1, 0);
    }
    if (board[i][j] !== 0) {
        return SudokuSolver(board, i, j + 1);
    }
    for (let num = 1; num <= 9; num++) {
        if (isValid(board, i, j, num)) {
            board[i][j] = num;
            if (SudokuSolver(board, i, j + 1)) {
                return true;
            }
            board[i][j] = 0;
        }
    }
    return false;
}
