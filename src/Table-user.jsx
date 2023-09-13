import TableBodyUser from "./TableBody-user";

function TableUser() {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
        </tr>
      </thead>
      <TableBodyUser />
    </table>
  );
}

export default TableUser;
