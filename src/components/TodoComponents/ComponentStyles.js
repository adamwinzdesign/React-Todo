// will need: h2, p, form, label, input, button

import styled from 'styled-components';

export const H2 = styled.h2`
  font-size: 2rem;
  font-family: 'Bungee Shade', cursive;
`

export const P = styled.p`
  font-family: 'Roboto', sans-serif;
`

export const Form = styled.form`
  border: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 8rem;
  width: 16rem;
  margin: 0 auto;
  align-items: center;
  justify-content: space-around;
`

export const Label = styled.label`
  font-family: 'Roboto', sans-serif;
`

export const Button = styled.button`
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  height: 2rem;
`
