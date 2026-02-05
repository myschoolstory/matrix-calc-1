# Planning Guide

A specialized web application for multiplying matrices with an intuitive visual interface that makes complex linear algebra operations accessible and educational.


This is a focused calculator tool with multiple interactive features (dynamic matrix sizing, cell editing, visual feedback) and state managem
## Essential Features
**Dynamic Matrix Sizing**

**Complexity Level**: Light Application (multiple features with basic state)
This is a focused calculator tool with multiple interactive features (dynamic matrix sizing, cell editing, visual feedback) and state management for matrix data, but remains single-purpose without requiring multiple views or advanced workflows.

## Essential Features

**Dynamic Matrix Sizing**
- Functionality: Users can specify dimensions (rows × columns) for two input matrices
- Purpose: Allows flexibility to work with matrices of different sizes for various mathematical problems
- Trigger: Number inputs for rows/columns or preset size buttons (2×2, 3×3, etc.)
- Functionality: Real-time feedback on whether matrices can be multiplied
- Trigger: Whenever matrix dimensions change

**Clear/Reset Functio
- Purpose: Allows users to quickly start a new calculation
- Progression: Click reset → Confirmation (optional) → Matrices reset to zeros


- **Non-numeric Input**: Automatically filter or reject non-numeric characters in cells, maintain last 

- **Zero Matrices**: Handle edge case
## Design Direction
The design should feel like a precise scientific instrument - clean, techni
## Color Selection
A technical, high-contrast color scheme inspired by engineering blueprints and scientific instrumentation with vibrant accent colors for intera
- **Primary Color**: Deep Navy `oklch(0.25 0.05 250)` - Conveys technical precision and mathematical rigor, used for header

  - Background (White `o
- Functionality: Real-time feedback on whether matrices can be multiplied
- Purpose: Prevents errors and educates users on matrix multiplication requirements
- Trigger: Whenever matrix dimensions change
- Progression: Dimension changes → Check if A(m×n) and B(n×p) are compatible → Show visual indicator → Enable/disable calculate button
- Success criteria: Clear visual indication of compatibility, helpful error message explaining dimension requirements

**Clear/Reset Function**
- Functionality: Reset one or both matrices to default state
- Purpose: Allows users to quickly start a new calculation
- Trigger: Click reset button for individual matrix or "Clear All"
- Progression: Click reset → Confirmation (optional) → Matrices reset to zeros or default dimensions → Ready for new input
- Success criteria: Matrices clear completely, dimensions can be reset, no residual data

## Edge Case Handling

- **Invalid Dimensions**: Show clear error message when user tries to multiply incompatible matrices (e.g., "Cannot multiply 2×3 by 2×3 matrices. First matrix columns (3) must equal second matrix rows (2)")
- **Non-numeric Input**: Automatically filter or reject non-numeric characters in cells, maintain last valid value
- **Large Matrices**: Set reasonable maximum dimensions (e.g., 10×10) to prevent performance issues and UI overflow
- **Empty Cells**: Treat empty cells as 0 for calculation purposes
- **Decimal Precision**: Round results to 4 decimal places to prevent floating-point display issues
- **Zero Matrices**: Handle edge case of multiplying matrices full of zeros gracefully

## Design Direction

The design should feel like a precise scientific instrument - clean, technical, and confidence-inspiring. It should evoke the aesthetic of engineering graph paper and technical documentation with a modern digital polish. Users should feel like they're using a professional tool that's both powerful and approachable.

## Color Selection

A technical, high-contrast color scheme inspired by engineering blueprints and scientific instrumentation with vibrant accent colors for interactive elements.

- **Primary Color**: Deep Navy `oklch(0.25 0.05 250)` - Conveys technical precision and mathematical rigor, used for headers and primary actions
- **Secondary Colors**: Cool Gray `oklch(0.92 0.01 250)` for subtle backgrounds; Slate `oklch(0.45 0.02 250)` for secondary text and borders
- **Accent Color**: Electric Cyan `oklch(0.72 0.15 195)` - High-tech highlight for calculation buttons, active cells, and important CTAs
- **Foreground/Background Pairings**: 
  - Background (White `oklch(1 0 0)`): Primary Navy text `oklch(0.25 0.05 250)` - Ratio 10.2:1 ✓
  - Primary (Deep Navy `oklch(0.25 0.05 250)`): White text `oklch(1 0 0)` - Ratio 10.2:1 ✓
  - Accent (Electric Cyan `oklch(0.72 0.15 195)`): Deep Navy text `oklch(0.25 0.05 250)` - Ratio 4.9:1 ✓
  - Secondary (Cool Gray `oklch(0.92 0.01 250)`): Primary Navy text `oklch(0.25 0.05 250)` - Ratio 8.5:1 ✓

## Font Selection

Typefaces should communicate mathematical precision and technical clarity with excellent readability for numbers and symbols.

- **Primary Font**: JetBrains Mono - Monospaced font perfect for aligning numbers in matrix grids and maintaining visual consistency


- **Typographic Hierarchy**:
  - H1 (App Title): Space Grotesk Bold/32px/tight (-0.02em) letter spacing
  - H2 (Section Headers): Space Grotesk SemiBold/20px/normal letter spacing
  - Matrix Labels: Space Grotesk Medium/14px/wide (0.02em) letter spacing
  - Matrix Cell Values: JetBrains Mono Regular/16px/normal letter spacing
  - Body Text: Space Grotesk Regular/14px/normal letter spacing
  - Button Labels: Space Grotesk Medium/14px/wide (0.01em) letter spacing



Animations should feel precise and snappy, reinforcing the mathematical nature of the tool while providing clear feedback. Use subtle motion to guide attention during calculations without being distracting.


- Calculate button: Satisfying press effect with slight scale down (0.98) on click
- Result matrix appearance: Gentle fade-in with slight upward slide (300ms ease-out)
- Dimension validation: Smooth color transition for compatibility indicator (200ms)
- Error messages: Subtle shake animation (400ms) for invalid operations
- Cell value changes: Brief highlight flash in cyan (200ms) when value updates

## Component Selection

- **Components**: 
  - Input (shadcn) - Modified with monospace font for matrix cells, centered text, larger touch targets (48px×48px)
  - Button (shadcn) - Primary variant for Calculate, Secondary for Reset, styled with Electric Cyan accent

  - Label (shadcn) - Matrix identifiers (Matrix A, Matrix B, Result)
  - Alert (shadcn) - Dimension validation messages and error states
  - Badge (shadcn) - Display current matrix dimensions (e.g., "2×3")



  - Custom MatrixGrid component - 2D grid of inputs with dynamic sizing, built using CSS Grid
  - Custom DimensionSelector component - Quick preset buttons (2×2, 3×3, 4×4) plus manual row/column inputs
  - Custom OperatorDisplay component - Visual "×" symbol between matrices using large typography

- **States**:
  - Input cells: Default (border gray), Focus (border cyan + subtle glow), Filled (slight background tint), Error (border red)
  - Calculate button: Default (cyan bg), Hover (darker cyan + lift shadow), Active (pressed down), Disabled (gray + low opacity)


- **Icon Selection**:
  - X (multiply symbol) - Large decorative icon between matrices
  - ArrowRight - In calculate button to suggest forward action
  - Trash - Clear/reset individual matrices
  - ArrowsClockwise - Reset all to default state
  - Warning - Dimension incompatibility indicator

  - Grid - Icon for matrix presets

- **Spacing**:

  - Matrix grid gaps: gap-1 (4px) between cells for compact alignment

  - Button padding: px-6 py-3 (24px × 12px)



  - Stack matrices vertically on screens <768px

  - Make dimension selectors full-width

  - Use bottom sheet (drawer) for advanced options

  - Larger touch targets (min 44px) for all interactive elements
