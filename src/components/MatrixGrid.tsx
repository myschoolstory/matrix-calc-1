import { Input } from "@/components/ui/input"
import { motion } from "framer-motion"

interface MatrixGridProps {
  rows: number
  cols: number
  values: number[][]
  onChange: (row: number, col: number, value: number) => void
  label: string
  disabled?: boolean
}

export function MatrixGrid({ rows, cols, values, onChange, label, disabled }: MatrixGridProps) {
  const handleCellChange = (row: number, col: number, val: string) => {
    const numValue = val === '' ? 0 : parseFloat(val)
    if (!isNaN(numValue)) {
      onChange(row, col, numValue)
    }
  }

  return (
    <div className="flex flex-col gap-3">
      <div className="flex items-center gap-2">
        <h2 className="font-space font-semibold text-xl text-foreground tracking-tight">
          {label}
        </h2>
        <span className="font-space text-sm text-muted-foreground bg-secondary px-2 py-0.5 rounded">
          {rows}×{cols}
        </span>
      </div>
      <div
        className="grid gap-1 w-fit"
        style={{
          gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))`,
        }}
      >
        {Array.from({ length: rows }).map((_, rowIdx) =>
          Array.from({ length: cols }).map((_, colIdx) => (
            <Input
              key={`${rowIdx}-${colIdx}`}
              id={`${label.toLowerCase().replace(/\s+/g, '-')}-${rowIdx}-${colIdx}`}
              type="text"
              inputMode="decimal"
              value={values[rowIdx]?.[colIdx] ?? 0}
              onChange={(e) => handleCellChange(rowIdx, colIdx, e.target.value)}
              disabled={disabled}
              className="w-12 h-12 md:w-14 md:h-14 text-center font-jetbrains text-base p-0 
                       transition-all duration-150
                       focus:scale-105 focus:ring-2 focus:ring-accent focus:border-accent
                       disabled:opacity-50 disabled:cursor-not-allowed"
            />
          ))
        )}
      </div>
    </div>
  )
}
