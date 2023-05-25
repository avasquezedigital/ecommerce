import React from 'react'
import Layout from '../../layout/Layout'
import CardList from '../../components/CardList';

function Categories(): React.JSX.Element {
    return (
        <Layout title="Categories">
            <CardList location={'categories'}/>
        </Layout>
    )
}

export default Categories