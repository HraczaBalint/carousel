import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';

export default function CarouselFunc({ pictures, time }) {

    const [ currentPicture, setCurrentPicture ] = useState(0);

    useEffect(() => {
        // useEffect törzse
        const timer = window.setInterval(() => {
            setCurrentPicture((currentPicture+1) % pictures.length);
        }, time);


        // cleanUp függvény
        return () => {
            window.clearInterval(timer);
        };

        // Update esetén: cleanUp + isméetlt useEffect
    }, [currentPicture, time, pictures]);

    useEffect(() => {
        setCurrentPicture(0);
    }, [ pictures ]);

    return <>
        <div className="carousel_pictures">
            <img src={ pictures[currentPicture] } alt={""} key={ pictures[currentPicture]} />
        </div>
    </>
}

CarouselFunc.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string),
    time: PropTypes.number,
}