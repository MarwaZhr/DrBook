import styled from 'styled-components';

export const ButtonContainer = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
text-decoration-color: white;
border: 0.05rem solid;
border-radius:0.2rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
position: relative;
left: 65rem;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue)
}
`;


export const Span = styled.span`
position: relative;
left: 5rem;
font-size: 2.5rem;
`;

export const BookWrapper = styled.div`
.card{
    border-color: transparent;
    transition: all 2s linear;
}
.card-footer {
    background: transparent;
    border-top:transparent;
    transition: all 1s linear;
} &:hover{
    .card{
        border: 0.04rem solid rgba(0,0,0,0.2);
        box-shadow: 2px 2px 5px 0px rgba(0,0,0,0.2);
    }
    .card-footer{
        background: rgb(247,247,247);
    }
}
.img-container {
    position: relative;
    overflow: hidden;
}
.img-container :hover .card-img-top {
    transform:scale(1.1);
}
.cart-btn{
    position: absolute;
    bottom:0;
    right:0;
    padding: 0.2rem 0.4rem;
    border-radius: 0.5rem 0 0 0;
    background: transparent;
    font-size: 0.6rem;
    transform: translate(100%,100%);
    transition:all 1s linear;
}
.img-container:hover .cart-btn {
    transform: translate(0, 0);
}
`;
export const ButtonContainer2 = styled.button`
text-transform: capitalize;
font-size: 1.4rem;
text-decoration-color: white;
border: 0.05rem solid;
border-radius:0.2rem;
padding: 0.2rem 0.5rem;
cursor: pointer;
transition:all 0.5s ease-in-out;
&:hover{
    background:var(--lightBlue)
}
`;