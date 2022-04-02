'use strict';

function RatingComponent() {
    return (
        <div className="rating-container">
            <img src={'./images/icon-star.svg'} alt="Logo" />
            <h1>How did we do?</h1>
            <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
            <RatingSection />
            <SubmitButton />
        </div>
    );
}

function RatingSection() {
    return (
        <div>
            <NumberRatingButton num="1" />
            <NumberRatingButton num="2" />
            <NumberRatingButton num="3" />
            <NumberRatingButton num="4" />
            <NumberRatingButton num="5" />
        </div>
    );
}

function NumberRatingButton(props) {
    return <button className="rating-button">{props.num}</button>;
}

function SubmitButton() {
    return <button className="submit-button">Submit</button>;
}

const domContainer = document.querySelector('#react-container');
const root = ReactDOM.createRoot(domContainer);
root.render(<RatingComponent />);