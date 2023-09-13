import DisplayAdmin from "./Display-admin";
import DisplayUser from "./Display-user";

const Display = ({sector}) => {
let displayValue;
  if (sector === 'user') {
    displayValue = <DisplayUser />;
  } else if (sector === 'admin') {
    displayValue = <DisplayAdmin />;
  } else {
    displayValue = <p></p>;
  }

  return (
    <div>
      {displayValue}
    </div>
  );
}
export default Display