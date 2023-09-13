import Layout from "./Layout"
import TableAdmin from "./Table-admin"
import Form from "./Form"
import HeaderAdmin from "./Header-admin"

function HomeAdmin() {
    return (
    <Layout>
      <HeaderAdmin />
      <Form />
      <TableAdmin />
    </Layout>
    )
}

export default HomeAdmin