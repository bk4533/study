import styled from "styled-components"

const Container = styled.div`
    padding: 10px 20px;
    height: 30px;
    width: ${props => props.width};
    background-color: ${propsss => propsss.bg};
`
export const Button = ({width, bg}) => {
    return(
        <Container width={width} bg={bg}>
            버튼
        </Container>
    )
}