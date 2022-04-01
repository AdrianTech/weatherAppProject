import styled from 'styled-components';

export const AppButton = styled.button`
    padding: 3px 15px;
    font-size: 13px;
    border: 2px solid black;
    margin-top: ${({ mrgTop }) => mrgTop ? "10px" : "0"};
    margin-right: 10px;
    outline: none;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    border-radius: 5px;
    background-color: transparent;
    transition: all 0.5s;

&:hover {
    border-color: white;
    color: white;
}

@media screen and (min-width: 768px) {
    font-size: 15px;
}
`