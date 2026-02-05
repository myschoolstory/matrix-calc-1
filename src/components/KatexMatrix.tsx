import { useEffect, useRef } from "react"


interface KatexMatrixProps {
  matrix: number[][]
  label?: string
 

export function KatexMatrix({ matrix, label }: KatexMatrixProps) {
    const latex = `\\begin{bmatrix} ${latexMatrix} 

      throwOnError:
    if (!containerRef.current) return

      {label && (
      .map(row => row.join(' & '))
      .join(' \\\\ ')

    const latex = `\\begin{bmatrix} ${latexMatrix} \\end{bmatrix}`







  return (
    <div className="flex flex-col items-center gap-4">
      {label && (
        <h3 className="font-space font-semibold text-lg text-foreground">
          {label}
        </h3>
      )}
      <div
        ref={containerRef}
        className="text-foreground font-jetbrains text-lg"
      />
    </div>
  )
}


