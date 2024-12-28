import type { Meta, StoryObj } from "@storybook/react";
import { data } from "../../data";

import Card from "./Card";

const meta: Meta<typeof Card> = {
  component: Card,
  title: "Components/Card",
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  args: {
    CardImage: { image: data[0].image, altText: `${data[0].name}` },
    Button: {
      variant: "default",
    },
    itemInfo: data[0],
  },
};
