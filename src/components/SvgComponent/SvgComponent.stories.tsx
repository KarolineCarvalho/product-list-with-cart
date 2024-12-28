import type { Meta, StoryObj } from "@storybook/react";

import SvgComponent from "./SvgComponent";

const meta: Meta<typeof SvgComponent> = {
  component: SvgComponent,
  title: "Components/Svg Component",
  argTypes: {
    icon: {
      options: [
        "add_to_cart",
        "decrement_quantity",
        "increment_quantity",
        "remove_item",
        "illustration_empty_cart",
        "carbon_neutral",
        "order_confirmed",
      ],
      control: {
        type: "select",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof SvgComponent>;

export const Default: Story = {
  args: { icon: "add_to_cart", alt: "Svg icon" },
};
