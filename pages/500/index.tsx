import { NextPage } from 'next'
import dynamic from 'next/dynamic'

const Layout = dynamic(() => import("shared/components/Layout"));
const NotFoundContainer = dynamic(() => import('../../feature/404/NotFoundContainer'))

const NotFoundPage: NextPage = () => {

  return (
    <Layout title="Serverdə xəta baş verdi | tech.az" errorPage>
      <NotFoundContainer serverError />
    </Layout>
  )
}

export default NotFoundPage
