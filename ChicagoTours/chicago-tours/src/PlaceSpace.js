// import buckingam from "./images/buckingham-fountain.png";
// import chicagoRiver from "./images/chicago-riverwalk.jpeg";
// import metriCoffee from "./images/metric-coffee.jpeg";
// import milleniumPark from "./images/millenium-park.jpeg";

function PlaceSpace(props) {
  const { name, image, address } = props;
  return (
    <div>
      <img
        src={`${process.env.PUBLIC_URL}/images/${image}`}
        width="300"
        height="300"
        alt="123 evergreen rd"
      />
      {<h1>{name}</h1>}
      <div>{address}</div>
    </div>
  );
}
export default PlaceSpace;
