import { useEffect, useRef } from "react"
import katex from "katex"

interface KatexMatrixProps {
  matrix: number[][]
  label?: string
}

export function KatexMatrix({ matrix, label }: KatexMatrixProps) {


    const latexMatr
    if (!containerRef.current) return

    const latex = `\\begin{bma
      .map(row => row.join(' & '))
      .join(' \\\\ ')

    const latex = `\\begin{bmatrix} ${latexMatrix} \\end{bmatrix}`

      con
      katex.render(latex, containerRef.current, {
        displayMode: true,
        throwOnError: false,
        className="te
    </di
}

















