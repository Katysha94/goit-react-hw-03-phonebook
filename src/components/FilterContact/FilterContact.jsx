import css from './FilterContact.module.css'

export const FilterContact = ({ filter, handleChange }) => {
    return (
        <>
            <label className={css.filterLabel}>Find contacts by Name</label>
        <input
                className={css.filterInput}
                type='text'
                name='filter'
                placeholder='Enter name'
                value={filter}
                onChange={handleChange}
            >
            </input>
        </>
    )
}