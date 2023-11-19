import type { Meta, StoryObj } from "@storybook/react"

import { SecondaryButton } from "./SecondaryButton"

const meta = {
    title: 'UIKit/SecondaryButton',
    component: SecondaryButton,
    parameters: {
        layout: 'centered'
    },
    tags: ['autodocs'],
    argTypes: {
        
    }
} satisfies Meta<typeof SecondaryButton>

export default meta

type Story = StoryObj<typeof meta>

export const Normal: Story = {
    args: {
        text: 'Secondary'
    }
}