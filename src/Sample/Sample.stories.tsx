import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Sample, { ISampleProps } from "./Sample";

export default {
  title: "Pages/Sample",
  component: Sample,
} as Meta;

const Template: Story<ISampleProps> = (args) => <Sample {...args} />;

export const Primary = Template.bind({});
Primary.args = {};
