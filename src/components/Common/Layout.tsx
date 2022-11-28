
import Header from './Header';
type LayoutProps = Required<{
    readonly children: React.ReactElement
}>
const Layout = ({ children }: LayoutProps) => {
    return (
        <>
            <Header />
            {children}
        </>
    )
}

export default Layout