import styled from 'styled-components'

const Spinner = styled.div`
    width: 56px;
    height: 56px;
    align-self: center;
    display: grid;
    border: 4.5px solid #0000;
    border-radius: 50%;
    border-color: #dbdcef #0000;
    animation: spinner 1s infinite linear;
    ::before,
    ::after {
        content: '';
        grid-area: 1/1;
        margin: 2.2px;
        border: inherit;
        border-radius: 50%;
    }
    ::before {
        border-color: #ff0101 #0000;
        animation: inherit;
        animation-duration: 0.5s;
        animation-direction: reverse;
    }
    ::after {
        margin: 8.9px;
    }
    @keyframes spinner {
        100% {
            transform: rotate(1turn);
        }
    }
`

function Loader() {
    return <Spinner></Spinner>
}

export default Loader
