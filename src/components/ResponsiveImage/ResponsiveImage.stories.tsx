import type { Meta, StoryObj } from "@storybook/react";
import { data } from "../../data";

import ResponsiveImage from "./ResponsiveImage";

const meta: Meta<typeof ResponsiveImage> = {
  component: ResponsiveImage,
  title: "Components/Responsive Image",
};

export default meta;
type Story = StoryObj<typeof ResponsiveImage>;

export const Default: Story = {
  args: { image: data[0].image, altText: "Waffle with Berries" },
};
