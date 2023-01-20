import {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Header from "../header/Header";
import Footer from '../footer/Footer';
import Spinner from '../spinner/Spinner';

const Page404 = lazy(() => import('../pages/404'));
const MainPage = lazy(() => import('../pages/MainPage'));
const SingleFilm = lazy(() => import('../pages/SingleFilm/SingleFilm'))

const App = () => {
    return (
        <Router>
            <div className="app">
                <Header/>
                <main>
                    <Suspense fallback={<Spinner/>}>
                        <Switch>
                            <Route exact path="/">
                                <MainPage/>
                            </Route>
                            <Route exact path="/films/:filmId">
                                <SingleFilm/>
                            </Route>
                            <Route path="*">
                                <Page404/>
                            </Route>
                        </Switch>
                    </Suspense>
                </main>
                <Footer/>
            </div>
        </Router>

    )
}

export default App;