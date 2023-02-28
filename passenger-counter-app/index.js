let countEl = document.getElementById("count-el")
let count = 0

function increment() {
  count += 1
  countEl.innerText = count
  console.log// ("Hey, it works! Your counter now equals " + count)
}

function decrement() {
  count -= 1
  countEl.innerText = count
  console.log // ("Hey, it works! Your counter now equals " + count)
}

function save() {
  document.getElementById("save-el").innerText += " " + count + " " + "()" + " "
  count = 0
  document.getElementById("count-el").innerText = 0
}

function reset() {
  document.getElementById("save-el").innerText = "Previous entries: " + ""
  count = 0
  document.getElementById("count-el").innerText = 0
}