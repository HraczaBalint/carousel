import React from "react";
import PropTypes from 'prop-types';

export default class CarouselClass extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            currentPicture: 0,
        }
    }

    setTimer() {
        this.timer = window.setInterval(() => {
            const { pictures } = this.props;
            const { currentPicture } = this.state;

            this.setState({
                currentPicture: (currentPicture+1) % pictures.length,
            });
        }, this.props.time);
    }

    componentDidMount() {
        this.setTimer();
    }

    componentDidUpdate(prevProps, prevState) {

        if(this.props.pictures !== prevProps.pictures) {
            this.setState({
                currentPicture: 0,
            })
        }
        if(this.props.time !== prevProps.time) {
            window.clearInterval(this.timer);
            this.setTimer();
        }
    }
    
    componentWillUnmount() {
        window.clearInterval(this.timer);
    }

    render() {

        const { pictures } = this.props;
        const { currentPicture } = this.state;

        return <>
            <div className="carousel_pictures">
                <img src={ pictures[currentPicture] } alt={""} key={ pictures[currentPicture]} />
            </div>
        </>
    }
}

CarouselClass.propTypes = {
    pictures: PropTypes.arrayOf(PropTypes.string),
    time: PropTypes.number,
}