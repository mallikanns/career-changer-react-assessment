import TableUser from "./Table-user"

const DisplayUser = ({mockEmployees}) => {
    // console.log(mockEmployees);
    return (
        <div>
            <TableUser mockEmployees={mockEmployees} />
        </div>
    )
}
export default DisplayUser