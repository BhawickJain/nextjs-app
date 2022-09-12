import Square from "./Square";

interface GridProps {
  rows: number;
  columns: number;
  size: number;
}

const gridStyle = (rows: number, columns: number, size: string) => {
  return {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, ${size})`,
    gap: "0px",
  };
};

export default function Grid({ rows, columns, size }: GridProps): JSX.Element {
  const numberOfCells = rows * columns;

  return (
    <div style={gridStyle(rows, columns, `${size + size * 0.1}px`)}>
      {[...Array(numberOfCells)].map((_, i) => (
        <Square key={`${i}`} width={`${size}px`} height={`${size}px`} />
      ))}
    </div>
  );
}
