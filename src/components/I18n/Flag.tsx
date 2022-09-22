import React from 'react';
import { FlagImg } from './styles';

const Flag = ({ image, isSelected, ...props }: any) => (
  <FlagImg alt="flag" src={image} isSelected={isSelected} {...props} />
);

export default Flag;
