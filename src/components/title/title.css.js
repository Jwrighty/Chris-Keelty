import styled from 'helpers/agnosticStyled';
import MEDIA from 'helpers/mediaTemplates';

export const Text = styled`
  display: block;
  font-weight: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '400';
      default:
        return '500';
    }
  }};
  font-size: ${({ size }) => () => {
    switch (size) {
      case 'large':
        return '3.2rem';
      default:
        return '2rem';
    }
  }};
  line-height: 1.2;

  ${MEDIA.PHONE`
    font-size: 1.8rem;
  `};
`;
