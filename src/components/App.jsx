import React, { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import Friend from './Friend'
import FriendForm from './FriendForm'
import formSchema from '../validation/friendForm'
import * as yup from 'yup'

const initialFriendsList = [
  {
    id: uuid(),
    username: 'Michael',
    email: 'michael@michael.com',
    role: 'Student',
  },
]

const initialFormValues = {
  username: '',
  email: '',
  role: '',
}

const initialFormErrors = {
  username: '',
  email: '',
}

export default function App() {
  const [friends, setFriends] = useState(initialFriendsList)
  const [formValues, setFormValues] = useState(initialFormValues)
  const [formErrors, setFormErrors] = useState(initialFormErrors)
  const [disabled, setDisabled] = useState(true)

  const onUnfriend = id => () => {
    setFriends(friends.filter(fr => fr.id !== id))
  }

  const onInputChange = evt => {
    const { name, value } = evt.target

    yup.reach(formSchema, name).validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))

    setFormValues({ ...formValues, [name]: value })
  }

  const onSubmit = evt => {
    evt.preventDefault()

    const newFriend = {
      id: uuid(),
      username: formValues.username,
      email: formValues.email,
      role: formValues.role,
    }

    setFriends([newFriend, ...friends])
    setFormValues(initialFormValues)
  }

  useEffect(() => {
    formSchema.isValid(formValues)
      .then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>Friends App</h1></header>

      <FriendForm
        values={formValues}
        onInputChange={onInputChange}
        onSubmit={onSubmit}
        errors={formErrors}
        disabled={disabled}
      />

      {
        friends.map(fr => {
          return (
            <Friend key={fr.id} details={fr} onDelete={onUnfriend(fr.id)} />
          )
        })
      }
    </div>
  )
}
