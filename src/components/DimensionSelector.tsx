import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

interface DimensionSelectorProps {
  rows: number
  cols: number
  onRowsChange: (rows: number) => void
  onColsChange: (cols: number) => void
  label: string
}

export function DimensionSelector({
  rows,
  cols,
  onRowsChange,
  onColsChange,
  label,
}: DimensionSelectorProps) {
  const presets = [
    { rows: 2, cols: 2 },
    { rows: 3, cols: 3 },
    { rows: 4, cols: 4 },
  ]

  const handlePreset = (r: number, c: number) => {
    onRowsChange(r)
    onColsChange(c)
  }

  return (
    <div className="flex flex-col gap-3">
      <Label className="font-space font-medium text-sm tracking-wide text-foreground">
        {label}
      </Label>
      <div className="flex flex-wrap gap-2">
        {presets.map(({ rows: r, cols: c }) => (
          <Button
            key={`${r}x${c}`}
            variant={rows === r && cols === c ? "default" : "outline"}
            size="sm"
            onClick={() => handlePreset(r, c)}
            className="font-space font-medium text-sm tracking-wider"
          >
            {r}×{c}
          </Button>
        ))}
      </div>
      <div className="flex gap-3 items-end">
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${label}-rows`} className="font-space text-xs text-muted-foreground">
            Rows
          </Label>
          <Input
            id={`${label}-rows`}
            type="number"
            min="1"
            max="10"
            value={rows}
            onChange={(e) => {
              const val = parseInt(e.target.value)
              if (val >= 1 && val <= 10) onRowsChange(val)
            }}
            className="w-20 font-jetbrains text-center"
          />
        </div>
        <div className="flex flex-col gap-1.5">
          <Label htmlFor={`${label}-cols`} className="font-space text-xs text-muted-foreground">
            Columns
          </Label>
          <Input
            id={`${label}-cols`}
            type="number"
            min="1"
            max="10"
            value={cols}
            onChange={(e) => {
              const val = parseInt(e.target.value)
              if (val >= 1 && val <= 10) onColsChange(val)
            }}
            className="w-20 font-jetbrains text-center"
          />
        </div>
      </div>
    </div>
  )
}
