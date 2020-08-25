import styled from 'styled-components';

export const Input = styled.input<any>`
  outline: none;
  margin: 0px 5px;
  border: none;
  height: 22px;
  border-radius: 8px;
  caret-color: #3996E0;
  display: inline-block;
  line-height: 1;
  font-size: 16px;
  line-height: 22px;
  font-weight: bold;
  vertical-align: baseline;

  &::-webkit-input-placeholder {
    color: #BDBDBD;
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.4px;
  }

`