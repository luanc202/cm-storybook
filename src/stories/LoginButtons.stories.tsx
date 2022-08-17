import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { LoginButtons } from '../components/LoginButtons';

export default {
    title: 'Criptomaniacos/Button',
    component: LoginButtons,
} as ComponentMeta<typeof LoginButtons>;

export const Primary: ComponentStory<typeof LoginButtons> = () => (
    <LoginButtons />
  );