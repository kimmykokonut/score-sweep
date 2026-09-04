/**
 * Running Player score list on calculator and win page
 */
function ScoreList({ scores }: { scores: number[] }) {
  // will only render on screen when there are values to display
  if (scores.length === 0) {
    return null;
  }

  return (
    <ul className="w-full max-w-sm space-y-1 p-1 text-center rounded-md border border-emerald-100 bg-white">
      {scores.map((score, player) => (
        <li key={player} className="text-emerald-800 font-semibold">
          Player {player + 1}: {score}
        </li>
      ))}
    </ul>
  );
}

export default ScoreList;
