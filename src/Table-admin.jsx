import TableBodyAdmin from "./TableBody-admin";
import TableBody from "./TableBody-admin";

function TableAdmin({mockEmployees}) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
          <th>Action</th>
        </tr>
      </thead>
      <TableBodyAdmin mockEmployees={mockEmployees} />
    </table>
  );
}

export default TableAdmin;
