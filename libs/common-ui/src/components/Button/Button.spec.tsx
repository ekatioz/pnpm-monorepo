import { render } from "@testing-library/react";
import { Button } from "./Button";

it("renders", () => {
  const { container } = render(<Button caption="Click" />);
  expect(container).toMatchSnapshot();
});
