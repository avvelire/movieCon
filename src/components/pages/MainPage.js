import { useState } from "react";

import ListOfFilms from "../listOfFilms/ListOfFilms";


const MainPage = () => {

    // eslint-disable-next-line
    const [selectedfilm, setfilm] = useState(null);

    const onfilmSelected = (id) => {
        setfilm(id);
    }

    return (
        <>
            <div className="film__content">
                    <ListOfFilms onfilmSelected={onfilmSelected}/>
            </div>
        </>
    )
}

export default MainPage;