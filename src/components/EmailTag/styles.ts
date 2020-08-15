import styled from 'styled-components';

interface TagProps {
    valid: boolean;
}

const Tag = styled.div<TagProps>`
    margin: 5px;
    position: relative;
    height: 24px;
    width: fit-content;
    display: flex;
    font-weight: bold;
    align-content: center;
    align-items: center;
    padding: 5px 8px;
    border-radius: 6px;
    background: ${props => props.valid ? 'none' : '#F3B7BD'};
    cursor: pointer;
    
    &:hover {
      background: #EDEDED;
      background: ${props => props.valid ? 'EDEDED' : '#F3B7BD'};
      mix-blend-mode: normal;
      padding: ${props => props.valid ? ' 5px 25px 5px 8px' : '5px 8px 5px 8px'};
      
      &:before, &:after {
        transition: .3s;
        top: 12px;
        right: 12px;
        position: absolute;
        content: ' ';
        height: ${props => props.valid ? '12px' : '0'};
        width: 1px;
        background-color: #333;
      }
  
      &:before {
        transform: rotate(45deg);
      }
      &:after {
        transform: rotate(-45deg);
      }
  
    }
  `

  export {
    Tag
  }