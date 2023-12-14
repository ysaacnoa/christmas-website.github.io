/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*=============== MENU SHOW ===============*/
if(navToggle){
  navToggle.addEventListener('click',()=>{
    navMenu.classList.add('show-menu')
  })
}

/*=============== MENU HIDDEN ===============*/
if(navClose){
  navClose.addEventListener('click',()=>{
    navMenu.classList.remove('show-menu')
  })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

const linkAction = () =>{
  const navMenu = document.getElementById('nav-menu')
  // When we click on each nav__link, we remove the show-menu class
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n=>n.addEventListener('click',linkAction))

/*=============== DAY COUNTER FOR CHRISTMAS ===============*/
const titleData = document.getElementById('title-data'),
      numberData = document.getElementById('number-data'),
      textData = document.getElementById('text-data'),
      msgChristmas = document.getElementById('msg-christmas')

const christmasCountdown = () =>{
  let now = new Date(), //get today date
      currentMonth = now.getMonth() + 1, //get current month
      currentDay = now.getDate() //get current day of the month
  
  // calculate the year the next christmas will be
  let nextChristmasYear = now.getFullYear()
  if(currentMonth == 12 && currentDay > 25){
    nextChristmasYear += 1
  }

  let nextChristmasDate = `Dec 25, ${nextChristmasYear} 00:00:00`,
      christmasDay = new Date(nextChristmasDate),
      timeLeft = christmasDay - now //get the difference between today and christmas day

  let days = 0,
      hours = 0,
      minutes = 0,
      seconds = 0
  
  //dont calculate the time left if it is christmas day
  if(currentMonth != 12 || (currentMonth == 12 && currentDay != 25)){
    days = Math.floor(timeLeft / 1000 /60 / 60 / 24)
    hours = Math.floor(timeLeft / 1000 / 60 / 60) % 24
    minutes = Math.floor(timeLeft / 1000 / 60) % 60
    seconds = Math.floor(timeLeft / 1000) % 60
  }

  //show mising days 
  numberData.innerHTML = days < 10 ? `0${days}` : days
  textData.innerHTML = 'Days'

  ///show missing hours
  if(currentDay == 24){
    numberData.innerHTML = hours < 10 ? `0${hours}` : hours
    textData.innerHTML = 'Hours'
  }

  //show missing minutes
  if(currentDay == 24 && hours === 0){
    numberData.innerHTML = minutes < 10 ? `0${minutes}` : minutes
    textData.innerHTML = 'Minutes'
  }

  //show missing seconds
  if(currentDay == 24 && hours === 0 && minutes === 0){
    numberData.innerHTML = seconds < 10 ? `0${seconds}` : seconds
    textData.innerHTML = 'Seconds'
  }

  //show message on christmas day
  if(currentMonth == 12 && currentDay == 25){
    titleData.style.display = 'none'
    msgChristmas.style.display = 'block'
    msgChristmas.innerHTML = 'Today is Dec 25, Merry Christmas!'
  }


  //show reamining days & remove Christmas message
  if(currentMonth == 12 && currentDay == 26){
    titleData.style.display = 'block'
    msgChristmas.style.display = 'none'
  }
}

setInterval(christmasCountdown, 1000)
