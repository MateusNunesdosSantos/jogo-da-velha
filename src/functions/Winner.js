function getWinner(v) {
  for (let r = 0; r < 3; r++) {
    for (let c = 0; c < 3; c++) {
      const sumRow = v[`${r}-${c}`] + v[`${r}-${c + 1}`] + v[`${r}-${c + 2}`];
      if (sumRow === 3 || sumRow === -3) {
        return sumRow;
      }

      const sumCol = v[`${r}-${c}`] + v[`${r + 1}-${c}`] + v[`${r + 2}-${c}`];
      if (sumCol === 3 || sumCol === -3) {
        return sumCol;
      }

      const sumDiagonal =
        v[`${r}-${c}`] + v[`${r + 1}-${c + 1}`] + v[`${r + 2}-${c + 2}`];
      if (sumDiagonal === 3 || sumDiagonal === -3) {
        return sumDiagonal;
      }

      const sumReverseDiagonal =
        v[`${r}-${c}`] + v[`${r + 1}-${c - 1}`] + v[`${r + 2}-${c - 2}`];
      if (sumReverseDiagonal === 3 || sumReverseDiagonal === -3) {
        return sumReverseDiagonal;
      }
    }
  }

  return null;
}

export default getWinner;
