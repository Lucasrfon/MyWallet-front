import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function SignUp() {
    const navigate = useNavigate();
    const [register, setRegister] = useState({name: "", email: "", password: "", confirmPassword: ""});

    function checkPassword(event) {
        event.preventDefault();
        if(register.password === register.confirmPassword) {
            delete register.confirmPassword;
            sendRequest();
        } else {
            alert('Confirmação de senha inválida!');
        }
    }

    function sendRequest() {
        axios.post('http://localhost:5000/sign-up', register).then(() => navigate("/")).catch((error) => alert(error.response.data));
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={checkPassword}>
                <input required placeholder="Nome" type="text" value={register.name} onChange={e => setRegister({...register, name: e.target.value.replace(" ", "").replace(/[0-9]/g, "")})} />
                <input required placeholder="E-mail" type="email" value={register.email} onChange={e => setRegister({...register, email: e.target.value})} />
                <input required placeholder="Senha" type="password" value={register.password} onChange={e => setRegister({...register, password: e.target.value})} />
                <input required placeholder="Confirme a senha" type="password" value={register.confirmPassword} onChange={e => setRegister({...register, confirmPassword: e.target.value})} />
                <button typeof="submit">Cadastrar</button>
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