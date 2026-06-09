"use client"

import { forwardRef, useImperativeHandle, useState } from "react"
import { ChevronDown } from "lucide-react"

export type ChevronsUpDownIconHandle = {
  startAnimation: () => void
  stopAnimation: () => void
}

type Props = {
  duration?: number
}

export const ChevronsUpDownIcon = forwardRef<ChevronsUpDownIconHandle, Props>(
  ({ duration = 0.2 }, ref) => {
    const [rotated, setRotated] = useState(false)

    useImperativeHandle(ref, () => ({
      startAnimation: () => setRotated(true),
      stopAnimation: () => setRotated(false),
    }))

    return (
      <ChevronDown
        size={14}
        style={{
          transform: rotated ? "rotate(180deg)" : "rotate(0deg)",
          transition: `transform ${duration}s ease-in-out`,
        }}
      />
    )
  }
)

ChevronsUpDownIcon.displayName = "ChevronsUpDownIcon"