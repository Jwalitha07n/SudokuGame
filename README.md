# SudokuGame
One of the algorithmic approach to solve the Sudoku puzzle is by using backtracking and recursion.
# Overview of Sudoku Puzzles
A 9x9 grid split into 9 3x3 subgrids is called a Sudoku puzzle. The goal is to use the following guidelines to fill the grid with numbers ranging from 1 to 9:

   > Every row needs to have every digit from 1 to 9 once, without any repetitions.
   > All of the digits from 1 to 9 must appear once in each column.
   > Every 3x3 subgrid needs to have every digit from 1 to 9 in one single row.
# Procedure for the Algorithm
1. Locate an Unfilled Cell: Locate an empty cell first (shown by 0 or similar placeholder).

2. Try Potential Numbers: Try entering a number between 1 and 9 in the blank cell.

3. Verify Validity: Determine whether the number is still valid in its present location. This entails verifying that the number for the current row, column, and 3x3 subgrid does not deviate from the Sudoku rules.

4. Recursion: Call the same function repeatedly in an attempt to fill the remaining grid spaces if the number is valid.
Return true if it is possible to successfully fill the grid.
Try the next number and reset the cell (backtrack) if entering the number doesn't result in a solution.

5. Backtrack: If none of the numbers in the current cell—1, through 9—work, return false to go back to the previous cell and attempt another number there.

6. Solution Found: The problem is completed if every cell is filled in correctly.

