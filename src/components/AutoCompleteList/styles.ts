import styled from 'styled-components';

const List = styled.ul`
  width: inherit;
  background: white;
  list-style: none;
  border: 0;
  margin: 0;
  padding: 0;
  width: 294px;
  max-height: 261px;
  overflow-y: auto;
  overflow-x: hidden;
  border-radius: 4px;
`

const Container = styled.div`
  top: 45px;
  padding: 0;
  box-shadow: 0px 4px 14px rgba(26, 24, 24, 0.08);
  position: absolute;
  border-radius: 4px;
`

const FadeComponent = styled.div`
  position: absolute;
  position: absolute;
  bottom: 0;
  background: linear-gradient(180deg, #FDFDFD 0%, #FDFDFD 40%, rgba(253, 253, 253, 0) 100%);
  transform: rotate(-180deg);
  height: 40px;
  width: calc(100% - 15px);
`

const ListItem = styled.li`
  padding-left: 21px;
  padding-top: 9px;
  padding-bottom: 9px;
  height: 24px;
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  border-radius: 4px;
  &:first-child {
    padding: 10.5px 0 15px 21px;
  }
  &:hover {
    background: #EFF5F9;
  } 
`;


export {
    ListItem,
    FadeComponent,
    Container,
    List
}