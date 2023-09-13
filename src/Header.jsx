import HeaderAdmin from "./Header-admin";
import HeaderUser from "./Header-user";
import HeaderNormal from "./Header-normal";

function Header({sector}) {
let headerValue;
  if (sector === 'user') {
    headerValue = <HeaderUser />;
  } else if (sector === 'admin') {
    headerValue = <HeaderAdmin />;
  } else {
    headerValue = <HeaderNormal />;
  }

  return (
    <div>
      {headerValue}
    </div>
  );
}

export default Header;
