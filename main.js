//Para criar novos cartões apenas alterar os nomes dos usuarios a baixo no "const LinksSocialMedia"

const LinksSocialMedia = {
  github: 'borba-business',
  youtube: 'NvZer0',
  facebook: 'jaziel.borba',
  instagram: 'jazi_borba',
  twitter: 'JazielBorba'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGitHubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLink.href = data.html_url
      userImage.src = data.avatar_url
      userLogin.textContent = data.login
    })

    // alert(url)
}

getGitHubProfileInfos()
