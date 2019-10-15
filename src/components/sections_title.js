import styled from "styled-components"

const SectionTitle = styled.h3`
position: relative;
display: flex;
align-items: center;
margin: 10px 0 40px;
width: 100%;
white-space: nowrap;
  
  &:after {
    content: '';
    display: block;
    height: 1px;
    width: 1000px;
    background-color: gray
    border-radius: 25px;
    top: -5px;
    margin-left: 20px;
  }`

export default SectionTitle
