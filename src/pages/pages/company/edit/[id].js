// ** Third Party Imports
import axios from 'axios'

// ** Demo Components Imports
import CompanyInfo from 'src/views/pages/company/CompanyInfo'


const CompanyInfoEdit = ({ id }) => {
  return <CompanyInfo id={id} />
}

export const getStaticPaths = async () => {
//  const res = await axios.get('/apps/invoice/invoices')
  const data = [{id:1}];

  const paths = data.map(item => ({
    params: { id: `${item.id}` }
  }))

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = ({ params }) => {
  return {
    props: {
      id: params?.id
    }
  }
}

export default CompanyInfoEdit
