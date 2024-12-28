import type { Meta, StoryObj } from "@storybook/react";
import { cartData } from "../../data";

import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "Components/Modal",
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  args: { items: cartData, isOpen: true, onClose: () => {} },
};
