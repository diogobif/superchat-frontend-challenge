import { AppContainer } from './styled';
import { Container } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = ({ children }) => {
    return (
        <AppContainer>
            <Container fluid>
                {children}
            </Container>
        </AppContainer>
    );
};

export default App;
