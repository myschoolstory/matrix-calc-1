import { useEffect, useRef } from "react"
import katex from "katex"

interface KatexMatrixProps {
  matrix: number[][]
  label?: string
}

export function KatexMatrix({ matrix, label }: KatexMatrixProps) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const latexMatrix = matrix

    const latex = `\\begin{bma
    try {
        displayMode: 

    } catch (error) {


    <div className="flex flex-col items-center ga
        <h3 className="fon
        </h3>
        trust: false,
      })
    } catch (error) {
      console.error("KaTeX rendering error:", error)
    }
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
        className="text-foreground text-2xl md:text-3xl"
      />
    </div>
  )
}
      )}
      <div 
        ref={containerRef} 
        className="text-foreground text-2xl md:text-3xl"
      />
    </div>
  )
}
