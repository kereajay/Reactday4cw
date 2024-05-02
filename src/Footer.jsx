import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import {Rocket, Page, Contact} from "../public/Images/Images.jsx"
let Footer = () => {
  return (
    <div>
      <CardGroup className="mt-5">
        <Card className=" border-0 text-center">
          <Card.Img variant="top" src={Rocket}  className="w-50 m-auto"/>
          <Card.Body>
            <Card.Title><b>2,500</b></Card.Title>
            <Card.Text>
            enterprise organization successfully launched
            </Card.Text>
          </Card.Body>
          
        </Card>
        <Card className=" border-0 text-center">
          <Card.Img variant="top" src={Page} className="w-50 m-auto " />
          <Card.Body>
            <Card.Title> <b>4,500</b></Card.Title>
            <Card.Text>
            enterprise users onboarded seamlessly 
            </Card.Text>
          </Card.Body>
         
        </Card>
        <Card className=" border-0 text-center ">
          <Card.Img variant="top" src={Contact} className="w-50 m-auto" />
          <Card.Body>
            <Card.Title> <b>200,000</b> </Card.Title>
            <Card.Text>
            professionals trained on product and strategy
            </Card.Text>
          </Card.Body>
         
        </Card>
      </CardGroup>
    </div>
  );
};
export default Footer;
