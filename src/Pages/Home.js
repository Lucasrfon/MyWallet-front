import styled from "styled-components";

export default function Home() {
    return (
        <Container>
            <header>
                <h2>Olá, Fulano</h2>
                <ion-icon name="exit-outline"></ion-icon>
            </header>
            <main>
                <p>Não há registros de</p>
                <p>entrada ou saída</p>
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
    justify-content: space-around;
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
    min-height: 500px;
    background-color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    color: #868686;
    width: 330px;
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