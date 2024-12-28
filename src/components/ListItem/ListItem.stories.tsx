import type { Meta, StoryObj } from "@storybook/react";
import { data } from "../../data";

import ListItem from "./ListItem";

const meta: Meta<typeof ListItem> = {
  component: ListItem,
  title: "Components/List Item",
};

export default meta;
type Story = StoryObj<typeof ListItem>;

export const Default: Story = {
  args: { ...data[0] },
};

export const ConfirmationList: Story = {
  args: {
    ...data[0],
    thumbnail: data[0].image.thumbnail,
    isConfirmationList: true,
  },
};
