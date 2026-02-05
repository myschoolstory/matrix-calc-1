import { useState, useMemo } from "react"
import { MatrixGrid } from "@/components/MatrixGrid"
import { DimensionSelector } from "@/components/DimensionSelector"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Separator } from "@/components/ui/separator"
import { X, ArrowRight, Trash, CheckCircle, Warning } from "@phosphor-icons/react"
import { motion, AnimatePresence } from "framer-motion"

function createMatrix(rows: number, cols: number): number[][] {
  return Array.from({ length: rows }, () => Array(cols).fill(0))
}

function multiplyMatrices(a: number[][], b: number[][]): number[][] {
  const rowsA = a.length
  const colsA = a[0].length
  const colsB = b[0].length

  const result = createMatrix(rowsA, colsB)

  for (let i = 0; i < rowsA; i++) {
    for (let j = 0; j < colsB; j++) {
      let sum = 0
      for (let k = 0; k < colsA; k++) {
        sum += a[i][k] * b[k][j]
      }
      result[i][j] = Math.round(sum * 10000) / 10000
    }
  }

  return result
}

function App() {
  const [rowsA, setRowsA] = useState(2)
  const [colsA, setColsA] = useState(2)
  const [rowsB, setRowsB] = useState(2)
  const [colsB, setColsB] = useState(2)

  const [matrixA, setMatrixA] = useState<number[][]>(createMatrix(2, 2))
  const [matrixB, setMatrixB] = useState<number[][]>(createMatrix(2, 2))
  const [result, setResult] = useState<number[][] | null>(null)

  const isCompatible = colsA === rowsB

  const handleRowsAChange = (newRows: number) => {
    setRowsA(newRows)
    const newMatrix = createMatrix(newRows, colsA)
    for (let i = 0; i < Math.min(newRows, matrixA.length); i++) {
      for (let j = 0; j < colsA; j++) {
        newMatrix[i][j] = matrixA[i]?.[j] ?? 0
      }
    }
    setMatrixA(newMatrix)
    setResult(null)
  }

  const handleColsAChange = (newCols: number) => {
    setColsA(newCols)
    const newMatrix = createMatrix(rowsA, newCols)
    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < Math.min(newCols, matrixA[0]?.length ?? 0); j++) {
        newMatrix[i][j] = matrixA[i]?.[j] ?? 0
      }
    }
    setMatrixA(newMatrix)
    setResult(null)
  }

  const handleRowsBChange = (newRows: number) => {
    setRowsB(newRows)
    const newMatrix = createMatrix(newRows, colsB)
    for (let i = 0; i < Math.min(newRows, matrixB.length); i++) {
      for (let j = 0; j < colsB; j++) {
        newMatrix[i][j] = matrixB[i]?.[j] ?? 0
      }
    }
    setMatrixB(newMatrix)
    setResult(null)
  }

  const handleColsBChange = (newCols: number) => {
    setColsB(newCols)
    const newMatrix = createMatrix(rowsB, newCols)
    for (let i = 0; i < rowsB; i++) {
      for (let j = 0; j < Math.min(newCols, matrixB[0]?.length ?? 0); j++) {
        newMatrix[i][j] = matrixB[i]?.[j] ?? 0
      }
    }
    setMatrixB(newMatrix)
    setResult(null)
  }

  const handleMatrixAChange = (row: number, col: number, value: number) => {
    const newMatrix = matrixA.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? value : c))
    )
    setMatrixA(newMatrix)
    setResult(null)
  }

  const handleMatrixBChange = (row: number, col: number, value: number) => {
    const newMatrix = matrixB.map((r, i) =>
      r.map((c, j) => (i === row && j === col ? value : c))
    )
    setMatrixB(newMatrix)
    setResult(null)
  }

  const handleCalculate = () => {
    if (isCompatible) {
      const res = multiplyMatrices(matrixA, matrixB)
      setResult(res)
    }
  }

  const handleClearA = () => {
    setMatrixA(createMatrix(rowsA, colsA))
    setResult(null)
  }

  const handleClearB = () => {
    setMatrixB(createMatrix(rowsB, colsB))
    setResult(null)
  }

  const handleClearAll = () => {
    setMatrixA(createMatrix(rowsA, colsA))
    setMatrixB(createMatrix(rowsB, colsB))
    setResult(null)
  }

  return (
    <div className="min-h-screen bg-background p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        <header className="mb-8">
          <h1 className="font-space font-bold text-3xl md:text-4xl text-foreground tracking-tight">
            Matrix Multiplier
          </h1>
          <p className="font-space text-sm md:text-base text-muted-foreground mt-2">
            A precision tool for matrix multiplication calculations
          </p>
        </header>

        <div className="space-y-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card className="p-4 md:p-6 border-2">
              <DimensionSelector
                rows={rowsA}
                cols={colsA}
                onRowsChange={handleRowsAChange}
                onColsChange={handleColsAChange}
                label="Matrix A Dimensions"
              />
              <Separator className="my-4" />
              <MatrixGrid
                rows={rowsA}
                cols={colsA}
                values={matrixA}
                onChange={handleMatrixAChange}
                label="Matrix A"
              />
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearA}
                  className="font-space"
                >
                  <Trash className="mr-2" />
                  Clear Matrix A
                </Button>
              </div>
            </Card>

            <Card className="p-4 md:p-6 border-2">
              <DimensionSelector
                rows={rowsB}
                cols={colsB}
                onRowsChange={handleRowsBChange}
                onColsChange={handleColsBChange}
                label="Matrix B Dimensions"
              />
              <Separator className="my-4" />
              <MatrixGrid
                rows={rowsB}
                cols={colsB}
                values={matrixB}
                onChange={handleMatrixBChange}
                label="Matrix B"
              />
              <div className="mt-4">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleClearB}
                  className="font-space"
                >
                  <Trash className="mr-2" />
                  Clear Matrix B
                </Button>
              </div>
            </Card>
          </div>

          <div className="flex flex-col items-center gap-4">
            <Alert
              variant={isCompatible ? "default" : "destructive"}
              className={`max-w-2xl transition-colors ${
                isCompatible ? "border-accent bg-accent/10" : ""
              }`}
            >
              <div className="flex items-center gap-2">
                {isCompatible ? (
                  <CheckCircle className="text-accent" weight="fill" size={20} />
                ) : (
                  <Warning className="text-destructive" weight="fill" size={20} />
                )}
                <AlertDescription className="font-space text-sm">
                  {isCompatible
                    ? `Matrices are compatible! Result will be ${rowsA}×${colsB}`
                    : `Cannot multiply: Matrix A columns (${colsA}) must equal Matrix B rows (${rowsB})`}
                </AlertDescription>
              </div>
            </Alert>

            <div className="flex gap-3">
              <Button
                onClick={handleCalculate}
                disabled={!isCompatible}
                size="lg"
                className="font-space font-medium tracking-wide bg-accent hover:bg-accent/90 
                         text-accent-foreground transition-all active:scale-95"
              >
                Calculate
                <ArrowRight className="ml-2" weight="bold" />
              </Button>
              <Button
                onClick={handleClearAll}
                variant="outline"
                size="lg"
                className="font-space"
              >
                <Trash className="mr-2" />
                Clear All
              </Button>
            </div>
          </div>

          <AnimatePresence>
            {result && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="flex justify-center"
              >
                <Card className="p-4 md:p-6 border-2 border-accent">
                  <MatrixGrid
                    rows={result.length}
                    cols={result[0].length}
                    values={result}
                    onChange={() => {}}
                    label="Result (A × B)"
                    disabled
                  />
                </Card>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default App