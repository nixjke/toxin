import Chart from 'chart.js'

class PieChart {
  static init({ root, diagram }) {
    const elements = this._getElements(root)
    elements.forEach(canvas => this._createPie(canvas, this._getPieData(diagram), root))
  }

  static _createPie(item, pieData, root) {
    new Chart(item, {
      type: 'doughnut',
      data: {
        datasets: [
          {
            data: pieData,
            borderWidth: 3,
            hoverBorderWidth: 0,
            backgroundColor: this._getPieBackground(root),
          },
        ],
      },
      options: {
        animation: {
          animateScale: false,
          animateRotate: false,
        },
        cutoutPercentage: 85,
        legend: false,
        tooltips: {
          enabled: false,
        },
      },
    })
  }

  static _getPieData(diagram) {
    const pieDiagram = document.querySelector(`.${diagram}`)
    const dataPie = pieDiagram.getAttribute('data-pie')
    return dataPie.split(',').map(item => parseInt(item))
  }

  static _getPieBackground(root) {
    const ctx = document.querySelector(`.${root}`).getContext('2d')

    const yellowGradient = ctx.createLinearGradient(0, 0, 0, 120)
    yellowGradient.addColorStop(0, '#FFE39C')
    yellowGradient.addColorStop(1, '#FFBA9C')

    const purpleGradient = ctx.createLinearGradient(0, 0, 0, 60)
    purpleGradient.addColorStop(0, '#BC9CFF')
    purpleGradient.addColorStop(1, '#8BA4F9')

    const greenGradient = ctx.createLinearGradient(0, 60, 0, 120)
    greenGradient.addColorStop(0, '#6FCF97')
    greenGradient.addColorStop(1, '#66D2EA')

    return [purpleGradient, greenGradient, yellowGradient]
  }

  static _getElements(root) {
    return document.querySelectorAll(`.${root}`)
  }
}

export default PieChart
