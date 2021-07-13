const nextYear = new Date().getFullYear() + 1
const newYearTime = new Date(`January 01 ${nextYear} 00:00:00`)

const containerDays = document.querySelector("#days")
const containerHours = document.querySelector("#hours")
const containerMinutes = document.querySelector("#minutes")
const containerSecond = document.querySelector("#second")
const spinnerLoading = document.querySelector("#loading")
const containerCountdown = document.querySelector("#countdown")

const updateCountdown = () => {
  const currentTime = new Date()
  const difference = newYearTime - currentTime
  const days = Math.floor(difference / 1000 / 60 / 60 / 24)
  const hours = Math.floor(difference / 1000 / 60 / 60) % 24
  const minutes = Math.floor(difference / 1000 / 60) % 60
  const seconds = Math.floor(difference / 1000) % 60
  containerDays.textContent = days < 10 ? "0" + days : days
  containerHours.textContent = hours < 10 ? "0" + hours : hours
  containerMinutes.textContent = minutes < 10 ? "0" + minutes : minutes
  containerSecond.textContent = seconds < 10 ? "0" + seconds : seconds
}


setTimeout(() => {
  spinnerLoading.remove()
  containerCountdown.style.display = 'flex'
} ,1000)

setInterval(updateCountdown, 1000)