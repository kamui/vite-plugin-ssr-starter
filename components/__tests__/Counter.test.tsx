import React from "react"
import { render, screen } from "@testing-library/react"
import Counter from "#app/components/Counter"

describe("<Counter>", () => {
  it("renders Counter with 0 counter", async () => {
    render(<Counter />)

    const element = screen.getByText(/Counter 0/i)
    expect(element).toBeInTheDocument()
  })
})
