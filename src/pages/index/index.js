import '../../style/main.scss'
import './index.scss'

import Calendar from '../../components/date-picker/date-picker';
$(() => {
  const doubleDatepickerDropdown = new Calendar($('.js-form-elements__dropdown_theme_datepicker .js-calendar'), {
    type: Calendar.prototype.typeDouble,
  })
  const singleDatepickerDropdown = new Calendar($('.js-form-elements__dropdown_theme_date-filter .js-calendar'), {
    type: Calendar.prototype.typeSingle,
  })
})
