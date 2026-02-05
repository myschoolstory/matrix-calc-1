import { useEffect, useRef } from "react"
import katex from "katex"

interface KatexMatrixProps {
  matrix: number[][]
  label?: string
}

export function KatexMatrix({ matrix, label }: KatexMatrixProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!containerRef.current) return

    const latexMatrix = matrix
      .map(row => row.join(' & '))
      .join(' \\\\ ')

    const latex = `\\begin{bmatrix} ${latexMatrix} \\end{bmatrix}`

    katex.render(latex, containerRef.current, {
      displayMode: true,
      throwOnError: false,
    })
  }, [matrix])

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

















