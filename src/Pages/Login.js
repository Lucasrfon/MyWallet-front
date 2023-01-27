import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import api from "../Components/axiosConfig";
import TokenContext from "../Contexts/TokenContext";

export default function Login() {
    const navigate = useNavigate();
    const [user, setUser] = useState({email: "", password: ""});
    const { setToken } = useContext(TokenContext);

    function sendLogin(event) {
        event.preventDefault();
        api.post(`/login`, user).then(login).catch((error) => alert(error.response.data));
    }

    function login(resp) {
        setToken({headers: {Authorization: `Bearer ${resp.data.token}`}});
        navigate("/Home");
    }

    return (
        <Container>
            <h1>MyWallet</h1>
            <form onSubmit={sendLogin}>
                <input required placeholder="E-mail" type="email" value={user.email} onChange={e => setUser({...user, email: e.target.value})} />
                <input required placeholder="Senha" type="password" value={user.password} onChange={e => setUser({...user, password: e.target.value})} />
                <button typeof="submit">Entrar</button>
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

    :hover {
        cursor: pointer;
    }
}

p {
    margin-top: 36px;
    font-weight: 700;
    font-size: 15px;
    color: white;
}
`