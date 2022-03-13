import AirDatepicker from 'air-datepicker'

export default AirDatepicker

let AirDatepickerOptions = {
  multipleDates: true,
  range: true,
  multipleDatesSeparator: '-',
  onSelect(fd) {
    console.log(fd.formattedDate)
    this.input.value = fd.formattedDate[0]
    this.inputSecond.value = fd.formattedDate[1] ? fd.formattedDate[1] : ''
  },
  buttons: ['clear', 'today'],
  locale: {
    today: 'Применить',
  },
  navTitles: {
    days: 'MMMM yyyy',
  },
  prevHtml: '<span class="material-icons-outlined">arrow_back</span>',
  nextHtml: '<span class="material-icons-outlined">arrow_forward</span>',
  startDate: new Date(),
}

export class AirDatepickerInit {
  constructor(input, inputSecond) {
    this.input = input
    this.inputSecond = inputSecond
    this.init(input, inputSecond)
  }

  init(input, inputSecond) {
    this.input = new AirDatepicker(this.input, {
      multipleDates: true,
      range: true,
      multipleDatesSeparator: '-',
      onSelect(fd) {
        console.log(fd.formattedDate)
        input.value = fd.formattedDate[0]
        inputSecond.value = fd.formattedDate[1] ? fd.formattedDate[1] : ''
      },
      buttons: ['clear', 'today'],
      locale: {
        today: 'Применить',
      },
      navTitles: {
        days: 'MMMM yyyy',
      },
      prevHtml: '<span class="material-icons-outlined">arrow_back</span>',
      nextHtml: '<span class="material-icons-outlined">arrow_forward</span>',
      startDate: new Date(),
    })
  }
}
