function TableBodyAdmin() {
  const testData = [
    {
      id: 0,
      name: "mock",
      lastname: "mocklastname",
      position: "Manager",
    },
    {
      id: 1,
      name: "employee 1",
      lastname: "em",
      position: "Engineer",
    },
  ];
  return (
    <tbody>
      {testData.map((item) => {
        return (
          <tr>
            <td>{item.name}</td>
            <td>{item.lastname}</td>
            <td>{item.position}</td>
            <td>
              <button className="delete">Delete</button>
            </td>
          </tr>
        );
      })}
    </tbody>
  );
}

export default TableBodyAdmin;
