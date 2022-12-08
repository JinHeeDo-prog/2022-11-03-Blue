const headUserNameElement = document.querySelector('.user');
const userNameElement = document.querySelector('#name');
const userNumberElement = document.querySelector('#Number');
const localUserName = localStorage.getItem('userName');
const localUserNumber= localStorage.getItem('userNumber');
const userEmailElement = document.querySelector('#email');
const localUserEmail = localStorage.getItem('userEmail');

const setUserEmailInnerHtml = (email) => {
  userEmailElement.textContent = email;
};

// setUserNameInnerHtml 이름변경
const setUserNameInnerHtml = (name) => {
  headUserNameElement.innerHTML = `${name} <span>님</span>`;
  userNameElement.textContent = name;
};

const setUserNumerInnerHtml = (number) => {
  userNumberElement.textContent = number;
};

if (localUserEmail) {
  setUserEmailInnerHtml(localUserEmail);
}

if (localUserName) {
  setUserNameInnerHtml(localUserName);
}

if (localUserNumber) {
  setUserNumerInnerHtml(localUserNumber);
}

userNameElement.onclick = () => {
  const userName = prompt('이름을 입력해 주세요.');

  localStorage.setItem('userName', userName);
  setUserNameInnerHtml(userName);
};

userNumberElement.onclick = () => {
  const userNumber = prompt('학번을 입력해주세요.');
  // eslint-disable-next-line no-constant-condition
  if (userNumber.length >= 8) {
    localStorage.setItem('userNumber', userNumber);
    setUserNumerInnerHtml(userNumber);
  } else {
    alert('학번은 8자리 이상입니다.');
  }
};

userEmailElement.onclick = () => {
  const userEmail = prompt('이메일을 입력해주세요');

  localStorage.setItem('userEmail', userEmail);
  // eslint-disable-next-line no-constant-condition
  while (true) {
    // eslint-disable-next-line max-len
    const check = /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i;
    const userEmail = prompt(`이메일을 입력해주세요`);
    if (userEmail.match(check) != null) {
      localStorage.setItem(`userEmail`, userEmail);
      setUserEmailInnerHtml(userEmail);
      break;
    } else {
      alert('이메일 형식과 맞지 않습니다. 제대로 입력해주세요');
    }
  }
};
