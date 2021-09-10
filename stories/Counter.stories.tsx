import React from "react"
import { ComponentStory, ComponentMeta } from "@storybook/react"

import { Counter } from "../components/Counter"

export default {
  title: "Example/Counter",
  component: Counter,
  argTypes: {},
} as ComponentMeta<typeof Counter>

const Template: ComponentStory<typeof Counter> = (args) => <Counter />

export const Default = Template.bind({})
Default.args = {}
