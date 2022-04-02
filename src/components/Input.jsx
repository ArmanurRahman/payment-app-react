const Input = ({ type = "input", label, value, onChange, id }) => {
    return (
        <div className='input_container'>
            <label htmlFor={id}>{label}</label>
            <input type={type} value={value} onChange={onChange} id={id} />
        </div>
    );
};
export default Input;
