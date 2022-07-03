import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Login() {
    return (
        <Container>
            <h1>MyWallet</h1>
            <form>
                <input placeholder="E-mail" />
                <input placeholder="Senha" />
                <button>Entrar</button>
            </form>
            <Link to="/signUp" style={{ textDecoration: 'none' }}>
                <p>Primeira vez? Cadastre-se!</p>
            </Link>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;

h1 {
    margin-bottom: 24px;
}

form {
    width: 100%;
    display: flex;
    flex-direction: column;
    max-width: 1000px;
}

input {
    height: 58px;
    margin-bottom: 13px;
    font-size: 20px;
    padding-left: 15px;
    border-radius: 5px;
    border: none;
}

input::placeholder {
    color: #000000;
    opacity: 1;
}

button {
    height: 46px;
    background-color: #A328D6;
    border-radius: 5px;
    border: none;
    color: white;
    font-size: 20px;
    font-weight: 700;
}

p {
    margin-top: 36px;
    font-weight: 700;
    font-size: 15px;
    color: white;
}
`