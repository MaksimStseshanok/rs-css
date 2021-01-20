const footer = document.createElement('footer');
const author = document.createElement('div');
const logoImg = document.createElement('img');
const logoLink = document.createElement('a');
// const imgLicense = document.createElement('div')

author.innerHTML = `&copy;2020 Made by <a href="https://github.com/MaksimStseshanok"
target="_blank" >Maksim Stseshanok</a>`
// imgLicense.innerHTML = `Icons made by <a href="https://www.flaticon.com/authors/icongeek26" target="_blank">Icongeek26</a> from <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>`

// year.innerHTML = '&copy;2020 '
logoLink.href = 'https://rs.school/js/'
logoImg.src = 'https://rs.school/images/rs_school_js.svg'
logoLink.append(logoImg)
footer.append(logoLink, author)

export { footer }