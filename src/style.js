import styled from "styled-components";

export const Main = styled.main`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  padding: 0;
`;

export const Section = styled.section`
  height: 90%;
  width: 70%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
`;

export const Top = styled.div`
  height: 30%;
  width: 100%;
  //   background-color: rgb(27, 146, 146);
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 30px;
  font-weight: 700;
  color: rgb(88, 152, 253);
  padding: 0;
  margin: 0;
`;

export const Middle = styled.div`
  height: 55%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  //   background-color:rgb(35, 199, 21);
`;

export const Container = styled.div`
  height: 100%;
  width: 30%;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  justify-content: space-evenly;
  border: 2px solid rgba(135, 126, 126, 0.2);

  &:hover {
    border: 2px solid rgb(88, 152, 253);
    box-shadow: 0 0 10px  rgba(0, 0, 0, 0.1);
    cursor: pointer;
  }
`;

export const Icon_Div = styled.div`
  height: 23%;
  width: 23%;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(63, 117, 142, 0.16);
  color: rgb(88, 152, 253);
  font-size: 25px;
`;
export const Button = styled.button`
  height: 40px;
  width: 80%;
  font-weight: 600;
  color: white;
  border-radius: 10px;
  border: none;
  background-color: rgb(88, 152, 253);

  &:hover {
    cursor: pointer;
  }
`;

export const Bottom = styled.div`
  height: 15%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  //   background-color: rgb(125, 21, 205);
  font-size: 12px;
`;
