'use strict';

var slider = document.getElementById('slider')
var prev = document.getElementById('prev')
var next = document.getElementById('next')

var slideMediaWidth = 150
var slideHorizontalMargin = 10
var totalSlideWidth = slideMediaWidth + 2 * slideHorizontalMargin
var currentLeftVisibleSlideIndex = 0
var totalSlides = slider.childElementCount
var numbeOfSlidesFitsOnScreen = calculateNumberOfSlidesFitsOnScreen()
var disabledClass = 'carousel__nav--disabled'

next.addEventListener('click', showNext)
prev.addEventListener('click', showPrev)
window.addEventListener('resize', onResize)

function calculateNumberOfSlidesFitsOnScreen () {
    return Math.floor((slider.clientWidth + slideHorizontalMargin) / totalSlideWidth)
}

function showNext () {
  currentLeftVisibleSlideIndex++
  setTransform()

  if (currentLeftVisibleSlideIndex === 1) {
    prev.classList.remove(disabledClass)
  }

  if (currentLeftVisibleSlideIndex + numbeOfSlidesFitsOnScreen >= totalSlides) {
    next.classList.add(disabledClass)
  }
}

function showPrev () {
  currentLeftVisibleSlideIndex--
  setTransform()

  if (currentLeftVisibleSlideIndex === 0) {
    prev.classList.add(disabledClass)
  }

  if (currentLeftVisibleSlideIndex + numbeOfSlidesFitsOnScreen < totalSlides) {
    next.classList.remove(disabledClass)
  }
}

function setTransform () {
  slider.style.transform = 'translateX(' + getCurrentOffset() + 'px)'
}

function getCurrentOffset () {
  return - (currentLeftVisibleSlideIndex * totalSlideWidth)
}

function onResize () {
  numbeOfSlidesFitsOnScreen = calculateNumberOfSlidesFitsOnScreen()
}
