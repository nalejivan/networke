const required = value => value ? undefined : 'Required';
const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters or less` : undefined;
const minLenght = min => value =>
  value && value.length <= min ? `Must be greater than ${min}` : undefined;
const emailValid = value =>
value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value) ?
'Invalid email address' : undefined

export { required, maxLength, minLenght, emailValid };