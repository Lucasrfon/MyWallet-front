import styled from "styled-components"

export default function Register() {
    return (
        <Container>
            <header>Nova entrada</header>
            <form>
                <input placeholder="Valor" />
                <input placeholder="Descrição" />
                <button>Salvar entrada</button>
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