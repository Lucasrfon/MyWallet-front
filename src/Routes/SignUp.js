import { Link } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
    return (
        <Container>
            <h1>MyWallet</h1>
            <form>
                <input placeholder="Nome" />
                <input placeholder="E-mail" />
                <input placeholder="Senha" />
                <input placeholder="Confirme a senha" />
                <button>Cadastrar</button>
            </form>
            <Link to="/" style={{ textDecoration: 'none' }}>
                <p>Já tem uma conta? Entre agora!</p>
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
    padding: 28px;

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
    margin-top: 32px;
    font-weight: 700;
    font-size: 15px;
    color: white;
}
`