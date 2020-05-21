import React from 'react'

export default function FriendForm(props) {
  const {
    values,
    onInputChange,
    onSubmit,
    disabled,
    errors,
  } = props

  return (
    <form className='form container' onSubmit={onSubmit}>
      <div className='form-group submit'>
        <h2>Add a Friend</h2>
        <button disabled={disabled} className='submit'>submit</button>

        <div className='errors'>
          {
            Object.values(errors).map((error, idx) => (
              <div key={idx}>{error}</div>
            ))
          }
        </div>
      </div>

      <div className='form-group inputs'>
        <h4>General information</h4>

        <label>Username:&nbsp;
          <input
            value={values.username}
            onChange={onInputChange}
            name='username'
            type='text'
          />
        </label>

        <label>Email:&nbsp;
          <input
            value={values.email}
            onChange={onInputChange}
            name='email'
            type='text'
          />
        </label>

        <label>Role:&nbsp;
          <select
            onChange={onInputChange}
            value={values.role}
            name='role'
          >
            <option value=''>- Select an option -</option>
            <option value='Student'>Student</option>
            <option value='Alumni'>Alumni</option>
            <option value='Instructor'>Instructor</option>
            <option value='TL'>Team Lead</option>
          </select>
        </label>
      </div>
    </form>
  )
}
