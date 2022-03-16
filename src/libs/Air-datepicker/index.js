import AirDatepicker from 'air-datepicker'

class AirDatepickerInit {
  button = {
    content: 'Применить',
    onClick: dp => {
      dp.hide()
    },
  }
  constructor(input, inputSecond) {
    this.input = input
    this.inputSecond = inputSecond
    if (input || inputSecond !== undefined) {
      this.init(input, inputSecond)
    } else {
      this.initForOne(input)
    }
  }

  init(input, inputSecond) {
    this.dp = new AirDatepicker(input, {
      multipleDates: true,
      range: true,
      multipleDatesSeparator: '-',
      onSelect(fd) {
        input.value = fd.formattedDate[0]
        input.textContent = fd.formattedDate[0]
        
        inputSecond.value = fd.formattedDate[1] ? fd.formattedDate[1] : ''
        inputSecond.textContent = fd.formattedDate[1] ? fd.formattedDate[1] : ''
      },
      buttons: ['clear', this.button],
      navTitles: {
        days: 'MMMM yyyy',
      },
      prevHtml: '<span class="material-icons-outlined">arrow_back</span>',
      nextHtml: '<span class="material-icons-outlined">arrow_forward</span>',
      startDate: new Date(),
    })

    inputSecond.addEventListener('click', () => this.dp.show())
  }

  initForOne(input) {
    new AirDatepicker(input, {
      range: true,
      buttons: ['clear', this.button],
      navTitles: {
        days: 'MMMM yyyy',
      },
      prevHtml: '<span class="material-icons-outlined">arrow_back</span>',
      nextHtml: '<span class="material-icons-outlined">arrow_forward</span>',
      dateFormat: 'd MMM',
      multipleDatesSeparator: ' - ',
    })
  }
}

export default AirDatepickerInit
