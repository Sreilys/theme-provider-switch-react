import React from 'react'
import { func, string } from 'prop-types';
import styled from 'styled-components';

const ToggleContainer = styled.button`
  position: relative;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textButton};
  border: none;
  border-radius: 10px;
  padding: 20px;
  cursor: pointer;
`;


const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
    <ToggleContainer lightTheme={isLight} onClick={toggleTheme} >
      {isLight ? "Dark Mode" : "Light Mode"}
    </ToggleContainer>
  );
};

Toggle.propTypes = {
  toggleTheme: func.isRequired,
  theme: string.isRequired,
}

export default Toggle;
