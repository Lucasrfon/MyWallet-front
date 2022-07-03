import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import TokenContext from "../Contexts/TokenContext";

export default function Home() {
    const {token} = useContext(TokenContext);
    const [user, setUser] = useState("");
    const [registers, setRegisters] = useState([]);
    let [total, setTotal] = useState(0);
    const incomeColor = "#03AC00";
    const outcomeColor = "#C70000";

    useEffect(() => {
        axios.get('http://localhost:5000/register', token).then(getValues).catch(e => console.log(e));
    }, []);

    function getValues(resp) {
        setRegisters(resp.data.registers);
        setUser(resp.data.user);
        resp.data.registers.forEach(register => setTotal(total += register.value));
    }
    
    return (
        <Container>
            <header>
                <h2>Olá, {user}</h2>
                <ion-icon name="exit-outline"></ion-icon>
            </header>
            <main>
                {
                    registers.length > 0 ?
                    <Registers>
                        {registers.map(register =>
                            <div key={register._id}>
                                <div>
                                    <span>{register.date}</span>
                                    <span>{register.description}</span>
                                </div>
                                <Register color={register.type === "saida" ? outcomeColor : incomeColor}>{register.value.toFixed(2)}</Register>
                            </div>
                        )}
                        <div>
                            <h6>SALDO</h6>
                            <Register color={total > 0 ? outcomeColor : incomeColor}>{total.toFixed(2)}</Register>
                        </div>
                    </Registers>
                    :
                    <>
                        <p>Não há registros de</p>
                        <p>entrada ou saída</p>
                    </>
                }
            </main>
            <footer>
                <div>
                    <ion-icon name="add-circle-outline"></ion-icon>
                    <p>Nova <br/> entrada</p>
                </div>
                <div>
                    <ion-icon name="remove-circle-outline"></ion-icon>
                    <p>Nova <br/> saída</p>
                </div>
            </footer>
        </Container>
    )
}

const Container = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 15px 25px;

header {
    display: flex;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 700;
    width: 330px;
}

main {
    height: 64vh;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #868686;
    width: 330px;
    padding: 0px 12px 10px 12px;
}

footer {
    display: flex;
    justify-content: space-between;
    width: 330px;
    font-size: 30px;
    font-weight: 700;

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        background-color: #A328D6;
        width: 155px;
        height: 114px;
        border-radius: 5px;
        padding: 10px;

        p {
            font-size: 20px;
        }
    }
}
`

const Registers = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;

>div {
    margin-top: 23px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

span:first-child {
    color: #C6C6C6;
    margin-right: 15px;
}

span:nth-child(2) {
    color: black;
}

h6 {
    font-size: 18px;
    font-weight: 700;
    color: black;
}

>div:last-child {
    justify-self: flex-end;
}
`

const Register = styled.div`
    color: ${props => props.color};
`