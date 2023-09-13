function TableBodyUser({mockEmployees}) {
    // console.log(mockEmployees);
  return (
    <tbody>
      {mockEmployees.map((item) => {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.position}</td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBodyUser;
