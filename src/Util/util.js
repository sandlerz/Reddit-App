export const objImg = {
  // Default images
  self: 'https://www.reddit.com/static/self_default2.png',
  default: 'https://www.reddit.com/static/noimage.png',
  nsfw: 'https://www.reddit.com/static/nsfw2.png',
}

export const timeDifference = created_utc => {
  const createdDate = new Date(created_utc * 1000)
  const currentDate = new Date()

  const msPerMinute = 60 * 1000
  const msPerHour = msPerMinute * 60
  const msPerDay = msPerHour * 24
  const msPerMonth = msPerDay * 30
  const msPerYear = msPerDay * 365

  const elapsed = currentDate - createdDate

  if (elapsed < msPerMinute) {
    return Math.round(elapsed / 1000) + ' seconds ago'
  } else if (elapsed < msPerHour) {
    return Math.round(elapsed / msPerMinute) + ' minutes ago'
  } else if (elapsed < msPerDay) {
    return Math.round(elapsed / msPerHour) + ' hours ago'
  } else if (elapsed < msPerMonth) {
    return Math.round(elapsed / msPerDay) + ' days ago'
  } else if (elapsed < msPerYear) {
    return Math.round(elapsed / msPerMonth) + ' months ago'
  } else {
    return Math.round(elapsed / msPerYear) + ' years ago'
  }
}

export const getTextToHTML = html => {
  const divContainer = document.createElement('div')
  divContainer.innerHTML = html
  return divContainer.textContent || divContainer.innerText || ''
}
