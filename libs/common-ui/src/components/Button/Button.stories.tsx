import type { Meta, StoryObj } from "@storybook/react";
import { useEffect } from "react";
import { Button } from "./Button";

export default { component: Button } satisfies Meta<typeof Button>;

export const Primary: StoryObj<typeof Button> = {
  render: (args) => {
    useEffect(() => {
      console.log("mount");
      return () => {
        console.log("unmount");
      };
    }, []);
    return <Button {...args} />;
  },
  args: {
    caption: "Hallo",
  },
};
