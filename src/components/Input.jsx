import PropTypes from 'prop-types';
function Input({ classValue, inputId, inputValue = 0, placeName, stateFunction }) {
    const check = (e) => {
        let checkedValue = parseInt(e.target.value);
        if (!isNaN(checkedValue)) {
            stateFunction(checkedValue);
        }
        else {
            stateFunction(e.target.value);
        }
    }
    return <>
        <input className={classValue} id={inputId} type="number" placeholder={placeName} value={inputValue} onChange={(e) => check(e)} />
    </>
}
Input.propTypes = {
    classValue: PropTypes.string,
    inputId: PropTypes.string,
    inputValue: PropTypes.number || PropTypes.string,
    placeName: PropTypes.string,
    stateFunction: PropTypes.func
}
export default Input;