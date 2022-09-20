import Header from './Header'
import Sidebar from './Sidebar'

function Layout(props: { children: JSX.Element }) {
    return (
        <>
            <Header />
            <Sidebar />
            <main>{props.children}</main>
        </>
    )
}

export default Layout
