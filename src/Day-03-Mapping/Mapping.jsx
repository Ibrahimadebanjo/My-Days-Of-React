import PropTypes, { number } from "prop-types";

const Numbers = ({ numbers }) => {
    const list = numbers.map((number, index) => {
       return <li key={index}>{number}</li>
});

    console.log(list);  // This will log the array of JSX <li> elements

    return (
        <ul>
            {list}
        </ul>
    );
}

export default Numbers
