import React, {useState, useEffect} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '../common/Button';

const Container = styled.div`
    border: 1px solid black;
    height: 100vh;
    position: relative;
`
const LinkBox = styled.div`
    border: 1px solid black;
    background-color: #ddd;
    position: absolute;
    bottom: 0;
    left: 0;
    display: flex;
`
const Link1 = styled.a`
    background-color: red;
`
const Link2 = styled.a`
    background-color: blue;
`


const Index = () => {

    const navigate = useNavigate();

    console.log(123);

    const [test, setTest] = useState(false);

    const [test2, setTest2] = useState(false);
    console.log('test2: ', test2);

    useEffect(()=>{
        console.log('aaaaaaaaaaaaaaaa');
    }, [test2]);

    const arr = [1, 2, 3, 4, 5];

    const a = arr.map(x => x == 1);
    console.log('a: ', a);
    const b = arr.filter(x => x == 1);
    console.log('b: ', b);

    return (
        <Container>
            <LinkBox>
                {/* <Link to='Todo'>
                    <div>링크 이동</div>
                </Link>
                <div onClick={()=>navigate("/Todo")}>누르면 링크 이동</div> */}
                <Button width={'100px'} bg={test2 ? 'yellow' : 'red'}/>
                <Button width={'50px'} bg={test ? 'blue' : 'red'}/>
                <div onClick={()=>{
                    setTest(!test);
                }}>test1</div>
   
                <div onClick={()=>{
                    setTest2(!test2);
                }}>test2</div>

                {test2 && <div>병기</div>}
            </LinkBox>
        </Container>
    );
};

export default Index;