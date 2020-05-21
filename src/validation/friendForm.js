import * as yup from 'yup'

const formSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .min(3, 'Username required'),
  email: yup
    .string()
    .email('Email must be valid')
    .required('Email required'),
  role: yup
    .string()
    .required('Role required'),
})

export default formSchema
