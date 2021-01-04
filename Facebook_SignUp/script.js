const submitButton = document.querySelector('.submit-button');
const rightContent = document.querySelector('.right-content');

document.getElementById('button-login').addEventListener('click', function () {
  alert(document.querySelector('.user-email-phone').value);
});

document.querySelector('#other').addEventListener('click', function () {
  if (document.querySelector('.gender-container').lastElementChild.className === '') {
    const newField = document.createElement('input');
    newField.placeholder = 'Gênero (opcional)';
    newField.name = 'gender-custom';
    newField.className = 'gender-custom-input';
    document.querySelector('.gender-container').appendChild(newField);
  }
});

function createPersonH1(nameValue, lastNameValue) {
  const createH1 = document.createElement('h1');
  createH1.innerHTML = `Olá,  ${nameValue} ${lastNameValue}`;
  return createH1;
}

function createSmallTag(innerHtml) {
  const createSmall = document.createElement('small');
  createSmall.innerHTML = innerHtml;
  createSmall.className = 'confirmation-form';
  return createSmall;
}

/* function dateChecker(date) {
  const dateDay = parseInt(date.slice(8, 10), 10);
  const dateMonth = parseInt(date.slice(5, 7), 10);
  const dateYear = parseInt(date.slice(0, 4), 10);
  return `${dateDay} ${dateMonth} ${dateYear}`;
} */

function genderFilter(genderMale, genderFemale, genderOther) {
  let genderValue;
  if (genderMale.checked) {
    genderValue = genderMale.value;
  } else if (genderFemale.checked) {
    genderValue = genderFemale.value;
  } else if (genderOther.checked) {
    genderValue = genderOther.value;
  }
  return genderValue;
}

const checkFormFunc = () => {
  const placeErrorText = document.querySelector('#error-message');
  const inputChecker = document.querySelectorAll('input');
  for (let cont = 0; cont < inputChecker.length; cont += 1) {
    if (inputChecker[cont].hasAttribute('required') && inputChecker[cont].value === '') {
      placeErrorText.innerHTML = 'Campos inválidos';
      return placeErrorText;
    }
  }
  return true;
};

const appendAfterCheck = () => {
  const nameValue = document.querySelector('.first-name').value;
  const lastNameValue = document.querySelector('.last-name').value;
  const emailPhoneValue = document.querySelector('.phone-email').value;
  const birthDateValue = document.querySelector('.birth-date').value;
  const genderMale = document.querySelector('#male');
  const genderFemale = document.querySelector('#female');
  const genderOther = document.querySelector('#other');

  rightContent.innerHTML = '';

  const userName = createPersonH1(nameValue, lastNameValue);
  const userEmailPhone = createSmallTag(emailPhoneValue);
  const birthConfirmation = createSmallTag(birthDateValue);
  let genderValue = genderFilter(genderMale, genderFemale, genderOther);
  genderValue = createSmallTag(genderValue);
  rightContent.appendChild(userName);
  rightContent.appendChild(userEmailPhone);
  rightContent.appendChild(birthConfirmation);
  rightContent.appendChild(genderValue);
};

submitButton.addEventListener('click', function (event) {
  event.preventDefault();
  if (checkFormFunc() === true) {
    appendAfterCheck();
  }
});
