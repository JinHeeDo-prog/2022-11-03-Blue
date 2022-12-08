const headUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('#name');

const localUserName = localStorage.getItem('userName');


const setUserNameInnerHtml = (name) => {
  headUserNameElement.innerHTML = '${name} <span>님</span>';
  userNameElement.textContent = name;
};


if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요.');

  localStorage.setItem('userName', userName);
  setUserNameInnerHtml(userName);
};

