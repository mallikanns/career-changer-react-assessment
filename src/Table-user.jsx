import TableBodyUser from "./TableBody-user";

function TableUser({mockEmployees}) {
    // console.log(mockEmployees);
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Last Name</th>
          <th>Position</th>
        </tr>
      </thead>
      <TableBodyUser mockEmployees={mockEmployees} />
    </table>
  );
}

export default TableUser;
