import React from 'react';
import { Story, Meta } from '@storybook/react/types-6-0';
// import { IconType } from 'react-icons';
// import { IoClose } from 'react-icons/io5';
import Modal from './Modal';

type ModalProps = {
  iconUrl: string;
  title: string;
  description: string;
  qrCodeUrl: string;
  isOpen: boolean;
  // handleOnClose: () => void;
};

export default {
  title: 'Components/Modal',
  component: Modal,
} as Meta;

const Template: Story<ModalProps> = (args: ModalProps) => <Modal {...args} />;

export const Default = Template.bind({});
Default.args = {
  // isOpen:true,
  iconUrl: './location.svg',
  title: 'Example Modal',
  description:
    'Search the aisles for the Piedmont section: a bright LED has turned on on the shelf under your bottle!',
  qrCodeUrl: 'https://example.com/qr-code.png',
  // handleOnClose: () => {},
};
