import type { Meta, StoryObj } from '@storybook/react';
import HeroImage from './HeroImage';

const meta: Meta<typeof HeroImage> = {
  title: 'Components/HeroImage',
  component: HeroImage,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;

type Story = StoryObj<typeof HeroImage>;

export const Default: Story = {
  args: {
    src: 'https://images.unsplash.com/photo-1706871706925-7e1a45bcf501?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Hero Image',
    text: 'Welcome to Our Site',
    disabled: false,
  },
};

export const Disabled: Story = {
  args: {
    src: 'https://via.placeholder.com/1200x600',
    alt: 'Hero Image',
    text: 'Welcome to Our Site',
    disabled: true,
  },
};
