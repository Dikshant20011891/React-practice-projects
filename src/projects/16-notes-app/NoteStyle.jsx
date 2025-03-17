import styled from 'styled-components';

export const NoteStyle = styled.div`
  background-color: #f8f9fa;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  margin: 10px;
  padding: 10px;
  width: 200px;
`;

export const Icons = styled.span`
  display: flex;
  justify-content: space-between;
  font-size: 1.5rem;
  cusor: pointer;
  margin-right: 0.3rem;
`;

export const DeleteIcon = styled.span`
  &:hover{
    color: red;
  }
  transition: all 0.3s ease;
`;