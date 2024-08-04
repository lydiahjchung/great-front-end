import { render, screen } from "@testing-library/react"
import App from "./App"

describe("Testimonial Card", () => {
  test("Render Sarah Dole", () => {
    render(<App />)

    const heading = screen.getByText("Sarah Dole")
    expect(heading).toBeInTheDocument()
  })
})
