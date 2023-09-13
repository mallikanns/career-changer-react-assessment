import TableAdmin from "./Table-admin"
import Form from "./Form"

const DisplayAdmin = ({mockEmployees}) => {
    return (
        <div>
            <Form />
            <TableAdmin mockEmployees={mockEmployees} />
        </div>
    )
}
export default DisplayAdmin