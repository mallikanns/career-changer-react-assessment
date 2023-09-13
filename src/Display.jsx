import DisplayAdmin from "./Display-admin";
import DisplayUser from "./Display-user";

const Display = ({sector, mockEmployees}) => {
let displayValue;
  if (sector === 'user') {
    displayValue = <DisplayUser mockEmployees={mockEmployees} />;
  } else if (sector === 'admin') {
    displayValue = <DisplayAdmin mockEmployees={mockEmployees} />;
  } else {
    displayValue = <p></p>;
  }
//   console.log(mockEmployees);

  return (
    <div>
      {displayValue}
    </div>
  );
}
export default Display