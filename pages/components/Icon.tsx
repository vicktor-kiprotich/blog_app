import React, { FC } from 'react';

type IconProps = {
  name: string;
  [key: string]: any; // Allow any other props
};

const Icon: FC<IconProps> = ({ name, ...props }) => {
  const IconComponent = require(`../assets/icons/${name}.svg`).default;
  return <IconComponent {...props} />;
};

export default Icon;
