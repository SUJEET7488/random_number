import PropTypes from 'prop-types';
function Button({classValue,buttonId,handleClick,btnName}){
    return <>
    <button type='button' id={buttonId} className={classValue} onClick={()=>handleClick()}>{btnName}</button>
    </>
}
export default Button;
Button.propTypes={
    classValue:PropTypes.string,
    buttonId:PropTypes.string,
    handleClick:PropTypes.func,
    btnName:PropTypes.string
}