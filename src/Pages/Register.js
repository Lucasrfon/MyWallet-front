import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import TokenContext from "../Contexts/TokenContext";
import TypeContext from "../Contexts/TypeContext";
import RegisterContext from "../Contexts/RegisterContext";

export default function Register() {
    const navigate = useNavigate();
    const {token} = useContext(TokenContext);
    const {type} = useContext(TypeContext);
    const {register} = useContext(RegisterContext);
    const [newRegister, setNewRegister] = useState({value: "", description: "", type: type});

    function sendNewRegister(event) {
        event.preventDefault();
        axios.post('https://mywallet-back-project.herokuapp.com/register', newRegister, token).then(() => navigate('/Home')).catch(() => (error) => alert(error.response.data));
    }

    function sendUpdate(event) {
        event.preventDefault();
        axios.put('https://mywallet-back-project.herokuapp.com/register', {
            ...newRegister,
            _id: register._id
        }, token).then(() => navigate('/Home')).catch(() => (error) => alert(error.response.data));
    }

    useEffect(() => {
        if(register.date) {
            setNewRegister({value: register.value, description: register.description})
        }    
    }, []);


    return (
        <Container>
            <header>{register.date ? "Editar" : "Nova"} {type}</header>
            <form onSubmit={register.date ? sendUpdate : sendNewRegister}>
                <input required placeholder="Valor" type="number" value={newRegister.value} onChange={e => setNewRegister({...newRegister, value: e.target.value})} />
                <input required placeholder="Descrição" type="text" value={newRegister.description} onChange={e => setNewRegister({...newRegister, description: e.target.value})} />
                <button typeof="submit">{register.date ? "Atualizar" : "Salvar"} {type}</button>
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

    :hover {
        cursor: pointer;
    }
}
`