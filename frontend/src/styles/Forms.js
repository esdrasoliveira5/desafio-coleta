import styled from 'styled-components';

export const BodyStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  min-height: 100vh;
  background-color: #f2f2f2;
`;

export const HeaderStyled = styled.header`
  font-size: 15px;
  padding: 10px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
  background-color: #1a1b29;
  color: white;
  font-size: 30px;
  img {
    width: 150px;
  }
`;

export const FooterStyled = styled.footer`
  background-color: rgb(0 0 0);
  padding: 20px;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  position: absolute;
  bottom: 0;
  font-size: 18px;
  width: 100%;
  z-index: 10;
  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    a {
    text-decoration: none;
    img {
      width: 30px;
      background-color: #ffffff;
      border-radius: 4px;
      margin: 1px;
    }
  }
  }
`;

export const FormStyled = styled.form`
  display: flex;
  flex-direction: column;
  background-color: rgba(29, 29, 27, 0.9);
  padding: 15px;
  color: #fff;
  min-width: 300px;
  width: 100%;
  border-radius: 5px;
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
  h1 {
    color: #338cfd;
  }
  input {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
  }
  input:focus {
    background: #DEE2E6;
  }
  select {
    padding: 7px 40px 7px 12px;
    width: 100%;
    border: 1px solid #e8eaed;
    border-radius: 0px 0px 0px 0px;
    background: #fff;
    box-shadow: 0 1px 3px -2px #9098a9;
    cursor: pointer;
    font-size: 16px;
    transition: all 150ms ease;
    option {
      font-weight: normal;
      display: block;
      white-space: nowrap;
      min-height: 1.2em;
      padding: 0px 2px 1px;
    }
  }
  textarea {
    outline: 0;
    background: #f2f2f2;
    width: 100%;
    border: 0;
    border-radius: 5px;
    margin: 0 0 15px;
    padding: 15px;
    box-sizing: border-box;
    font-size: 14px;
    height: 100px;
  }

  @media screen and (min-width: 700px) {
    width: 80%;
  }
  @media screen and (min-width: 1100px) {
    width: 50%;
  }
`;

export const ButtonStyled = styled.div`
.button {
  float: left;
  margin: 0 5px 0 0;
  width: 100px;
  height: 40px;
  position: relative;
  border: 1px solid gray;
  border-radius: 4px;
  text-align: center;
  background-color: white;
  color: black;
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
  background: #4295ffd6;
  border-radius: 4px;
  color: white;
}

.button label {
  cursor: pointer;
  z-index: 90;
  line-height: 1.8em;
}
`;

export const ButtonRed = styled.div`
  button {
    margin-top: 10px;
    text-transform: uppercase;
    outline: 0;
    background: #e5383b;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
  cursor: pointer;
  }
  button:hover {
    background-color: #ba181b;
  }
`;

export const ButtonGreen = styled.div`
  button {
    margin-top: 10px;
    text-transform: uppercase;
    outline: 0;
    background: #337ab7;
    width: 100%;
    border: 0;
    border-radius: 5px;
    padding: 15px;
    color: #FFFFFF;
    font-size: 14px;
    -webkit-transition: all 0.3 ease;
    transition: all 0.3 ease;
    cursor: pointer;
  }
  button:hover {
    background-color: #1d4567;
  }
`;

export const ResultFormStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #323230;
  padding: 15px;
  color: #FFFFFF;
  min-width: 300px;
  width: 100%;

  @media screen and (min-width: 700px) {
    width: 80%;
  }
  @media screen and (min-width: 1100px) {
    width: 50%;
  }
  div {
    display: flex;
    flex-direction: row;
    margin: 10px;
    text-align: center;
    background-color: white;
    color: black;
    width: 100%;
    border-radius: 5px;
    div {
      display: flex;
      flex-direction: column;
    }
  }
`;
