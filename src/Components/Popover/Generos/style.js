import styled from "styled-components";

export const ContainerGenero = styled.div`
  border: 1px solid #e4e4e4c5;
  position: relative;
  background-color: #141414;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 350px;
  overflow: auto;

  @media (max-width: 760px) { 
    left: 0;
    position: fixed;
    top:0;
    bottom:0;
    padding-top: 10px 0 20px 0 !important;
  }
`;

export const Genero = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 10px;
`;

export const Ol = styled.ol`
  list-style: none;
  position: relative;
  margin: 0;
  padding: 0;
  width: 100%;

  @media (max-width: 760px) { 
    
    height: 500px;
  }
`;

export const Li = styled.li`
  display: flex;
  align-items: center;
  list-style-type: none;
  margin: 0;
  box-sizing: border-box;
  height: 30px;
  padding: 20px;
  min-width: 150px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  &:nth-child(even) {
    clear: both;
    float: left;
    width: 50%;
  }

  @media (max-width: 760px) {    
    &:nth-child(even) {
    clear: none;
    float: none;
    width: 0;
    height: 15px;
  }
  }

`;
