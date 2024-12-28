import type { Meta, StoryObj } from "@storybook/react";

import ButtonComponent from "./ButtonComponent";

const meta: Meta<typeof ButtonComponent> = {
  component: ButtonComponent,
  title: "Components/Button",
};

export default meta;
type Story = StoryObj<typeof ButtonComponent>;

export const SetQuantity: Story = {
  args: {
    buttonText: "4",
    isChangeQty: true,
    variant: "default",
  },
};

export const AddToCart: Story = {
  args: {
    buttonText: "Add to Cart",
    variant: "default",
  },
};

export const Confirm: Story = {
  args: {
    buttonText: "Confirm Order",
    variant: "confirm",
  },
};
