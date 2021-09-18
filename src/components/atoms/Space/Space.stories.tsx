import { Story, Meta } from '@storybook/react'
import styled from 'styled-components'

import Space, { Props } from './index'

export default {
  title: 'Atoms/Space',
  component: Space,
} as Meta
const Mock = styled('div')`
  width: 100px;
  height: 100px;
  background: red;
`

const Template: Story<Props> = (args) => <Space {...args} />

export const Default = Template.bind({})
Default.args = {
  MTop: '10px',
  MRight: '10px',
  MBottom: '10px',
  MLeft: '10px',
  PTop: '10px',
  PRight: '10px',
  PBottom: '10px',
  PLeft: '10px',
  children: <Mock />,
}
export const Margin = Template.bind({})
Margin.args = {
  MTop: '30px',
  MRight: '30px',
  MBottom: '30px',
  MLeft: '30px',
  children: <Mock />,
}
export const Padding = Template.bind({})
Padding.args = {
  PTop: '30px',
  PRight: '30px',
  PBottom: '30px',
  PLeft: '30px',
  children: <Mock />,
}
