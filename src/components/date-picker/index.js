import DatePicker from './DatePicker'

const datePickerInitial = domElements => {
  const datePicker = new DatePicker(domElements)
  datePicker.init()
}

export default datePickerInitial
