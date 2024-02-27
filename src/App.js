import './App.scss';
import Headder from './comporents/Headder';
import TableUser from './comporents/TableUser';
import Container from 'react-bootstrap/Container';

function App ()
{
  return (
    <div className='app-container'>
      {/* <Container>
<Row></Row> */}
      <Headder />
      <TableUser />
      {/* </Container> */ }
    </div>
  );
}

export default App;
