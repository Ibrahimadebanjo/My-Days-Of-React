import PropTypes from "prop-types";

const ComponentProp = ({data}) => {
    return(
        <div>
 <h2>My name is {data.name} in 2 Years to come i will be {data.age} and I shall be financially stable inshallah</h2>
        </div>
    )
    }
    ComponentProp.propTypes = {
        data : PropTypes.object,
        name : PropTypes.string,
        age : PropTypes.number

    }
    export default ComponentProp;