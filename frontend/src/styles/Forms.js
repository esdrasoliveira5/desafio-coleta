import styled from 'styled-components';

export const Button = styled.div`
.button {
  float: left;
  margin: 0 5px 0 0;
  width: 100px;
  height: 40px;
  position: relative;
  border: 1px solid gray;
  border-radius: 4px;
  text-align: center;
}

.button:hover {
  background-color: lightgray;
}

.button label,
.button input {
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
}

.button input[type="radio"] {
  opacity: 0.011;
  z-index: 100;
}

.button input[type="radio"]:checked + label {
  background: #20b8be;
  border-radius: 4px;
}

.button label {
  cursor: pointer;
  z-index: 90;
  line-height: 1.8em;
}
`;

export const Button2 = styled.div`

`;
