import { render, screen } from "@testing-library/react"
import App from "./App"

describe("App Component", () => {
  test("renders Vite + React heading", () => {
    render(<App />)
    const heading = screen.getByText("Hello World!")
    expect(heading).toBeInTheDocument()
  })
})
