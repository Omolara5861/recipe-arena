import { Link } from 'gatsby';
const Header = () => {
    return (
        <Layout>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/about'>About</Link></li>
                    <li><Link to='contact'>Contact</Link></li>
                    <li><Link to='/recipes'>Recipes</Link></li>
                    <li><Link to='/tags'>Tags</Link></li>
                </ul>
            </nav>
        </Layout>
    )
}

export default Header;