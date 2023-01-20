import { Helmet } from "react-helmet"
import error from '../../resources/img/failed.png'
import { Link } from "react-router-dom"

const Page404 = () => {

    return (
        <div>
            <Helmet>
                <meta
                    name="description"
                    content="Oops, something going wrong!"
                />
                <title>Oops, something going wrong!</title>
            </Helmet>
            <div style={{'display': 'flex', 'justifyContent': 'center', "alignItems": 'center', 'paddingTop': '20px'}}>
                <Link to={'/'}>
                <img style={{ 'height': '500px'}}
                src={error} alt="" />
                </Link>
            </div>
            <p style={{ 'fontSize': '24px', 'textAlign': 'center', 'fontWeight': 'bold'}}>Oops, something going wrong!</p>
        </div>
    )
}

export default Page404