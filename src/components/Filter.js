const Filter = ({ showAll, handleAllChange }) => {
    return (
        <div className='filter'>
            Search rank <input value={showAll} onChange={handleAllChange} />
        </div>
    )
}

export default Filter