import type { Meta, StoryObj } from "@storybook/react";
import { cartData } from "../../data";
import Cart from "./Cart";

const meta: Meta<typeof Cart> = {
  component: Cart,
  title: "Components/Cart",
};

export default meta;
type Story = StoryObj<typeof Cart>;

export const Default: Story = {
  args: { items: cartData },
};

export const Empty: Story = {
  args: { items: [] },
};
