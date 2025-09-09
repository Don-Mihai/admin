const usersContainer = document.querySelector('.table__info');

const users = [
  {
    id: 1,
    name: 'John',
    email: 'john@gmail.com',
    role: 'admin',
    createdOn: '2021-01-01',
    status: 'active',
    img: './img/img.png',
  },
  {
    id: 2,
    name: 'Jane',
    email: 'jane@gmail.com',
    role: 'user',
    createdOn: '2021-01-01',
    status: 'inactive',
    img: './img/img.png',
  },
  {
    id: 3,
    name: 'Jim',
    email: 'jim@gmail.com',
    role: 'admin',
    createdOn: '2021-01-01',
    status: 'active',
    img: './img/img.png',
  },
  {
    id: 4,
    name: 'Jill',
    email: 'jill@gmail.com',
    role: 'user',
    createdOn: '2021-01-01',
    status: 'inactive',
    img: './img/img.png',
  },
  {
    id: 5,
    name: 'Jack',
    email: 'jack@gmail.com',
    role: 'admin',
    createdOn: '2021-01-01',
    status: 'active',
    img: './img/img.png',
  },
  {
    id: 6,
    name: 'Jill',
    email: 'jill@gmail.com',
    role: 'user',
    createdOn: '2021-01-01',
    status: 'inactive',
    img: './img/img.png',
  },
];

const deleteUser = (id) => {
  // Находим элемент пользователя в DOM
  const userElement = document.querySelector(`[data-user-id="${id}"]`);

  if (!userElement) return;

  // Добавляем CSS класс для анимации удаления
  userElement.classList.add('deleting');

  // Удаляем из DOM после анимации
  setTimeout(() => {
    userElement.remove();

    // Удаляем из массива
    const index = users.findIndex((user) => user.id === id);
    if (index !== -1) {
      users.splice(index, 1);
    }

    // Обновляем нумерацию или перерисовываем таблицу если нужно
    updateTableNumbers();
  }, 300);
};

const updateTableNumbers = () => {
  // Обновляем порядковые номера строк если они есть
  const rows = document.querySelectorAll('.table__body');
  rows.forEach((row, index) => {
    const numberElement = row.querySelector('.row-number');
    if (numberElement) {
      numberElement.textContent = index + 1;
    }
  });
};

const confirmDeleteUser = (id) => {
  deleteUser(id);
};

const htmlUsers = users.map((user) => {
  return `<div class="table__body" data-user-id="${user.id}">
                  <div class="header__name">
                    <div class="body__name">
                      <div class="table__checkbox"></div>
                      <img src="${user.img}" alt="" class="user__img" />
                      <p class="name">${user.name}</p>
                    </div>
                  </div>
                  <div class="header__name">
                    <p class="name">${user.email}</p>
                  </div>
                  <div class="header__name">
                    <p class="name">${user.role}</p>
                  </div>
                  <div class="header__name">
                    <p class="created">${user.createdOn}</p>
                  </div>
                  <div class="header__name">
                    <p class="Status_a">${user.status}</p>
                  </div>
                  <img onclick="confirmDeleteUser(${user.id})" class="trash" src="./img/trash-outline.svg" alt="Удалить пользователя" />
                </div>`;
});

usersContainer.innerHTML += htmlUsers;
