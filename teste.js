const buttonsNum = document.querySelectorAll('.date-grid button')
const myClass = ''

export default function initCalendar() {
  calendarSelect()
}

function calendarSelect() {
  buttonsNum.forEach(item => {
    item.addEventListener('click', initCalendarSelect)
  })
}

function initCalendarSelect(event) {
  event.preventDefault()

  buttonsNum.forEach(item => {
    if (item.classList.contains(myClass)) item.classList.remove(myClass)
  })

  event.target.classList.add(myClass)
}
