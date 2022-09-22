import styled, { css } from 'styled-components';

interface FlagImgProps {
  isSelected: boolean;
}

export const FlagsContainer = styled.div`
  display: flex;
  gap: 8px;
`;

export const FlagImg = styled.img<FlagImgProps>`
  width: 30px;
  height: 30px;
  ${props =>
    props.isSelected &&
    css`
      filter: grayscale(50%);
    `}
  &:hover {
    filter: grayscale(50%);
    cursor: pointer;
  }
`;
