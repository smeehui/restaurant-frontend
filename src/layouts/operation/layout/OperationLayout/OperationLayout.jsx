import { Container } from "react-bootstrap";
import Footer from "../Footer/Footer";

function OperationLayout({children}) {
   return ( 
      <Container fluid>
         {children}
         <Footer/>
      </Container>
    );
}

export default OperationLayout;