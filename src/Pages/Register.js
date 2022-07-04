import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TokenContext from "../Contexts/TokenContext";
import TypeContext from "../Contexts/TypeContext";

export default function Register() {
    const navigate = useNavigate();
    const {token} = useContext(TokenContext);
    const {type} = useContext(TypeContext);
    const [register, setRegister] = useState({value: "", description: "", type: type});

    function sendRegister(event) {
        event.preventDefault();
        axios.post('https://mywallet-back-project.herokuapp.com/register', register, token).then(() => navigate('/Home')).catch(() => (error) => alert(error.response.data));
    }

    return (
        <Container>
            <header>Nova {type}</header>
            <form onSubmit={sendRegister}>
                <input required placeholder="Valor" type="number" value={register.value} onChange={e => setRegister({...register, value: e.target.value})} />
                <input required placeholder="Descrição" type="text" value={register.description} onChange={e => setRegister({...register, description: e.target.value})} />
                <button typeof="submit">Salvar {type}</button>
            </form>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 25px;

header {
    width: 100%;
    max-width: 1000px;
    font-size: 30px;
    font-weight: 700;
    margin-bottom: 40px;
}

form {
    width: 100%;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
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
`