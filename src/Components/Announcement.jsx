import styled from "styled-components"



const Container = styled.div`
    height: 30px;
    background-color: teal;
    color: white;
    display: flex;
    text-align: center;
    align-items: center;  // for vertically
    justify-content: center; // for horizontally
    font-size: 14px;
    font-weight: 500;
`

const Announcement = () => {
  return (
    <Container>
        Super Deal! Free Shipping on Minimum ₹500 Orders Value
    </Container>
  )
}

export default Announcement