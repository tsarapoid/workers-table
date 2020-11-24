/* Good solution!! But If you want to add new properties it will be really complicated ;)
  but could you transfer all data to one function
  const generateRandomNumber  = (list : string[]) => list[Math.floor(Math.random() * list.length)]

  like const createListOfUsers = () => {
  const listOfUsers= [];
  const names = ['Инна', 'Елена', 'Оксана', 'Артемида', 'Полина', 'Марина', 'Виктория', 'Вероника', 'Ирина', 'Инна']
  const families = ['Петрова', 'Иванова', 'Силицкая', 'Фатина', 'Миронова']
  const roles = ['Руководство', 'Бухгалтерия', 'Отдел кадров', 'Новая']

  for (let index = 0; index < 20; index++) {
  // please check you need or don't need spread
  data.listOfUsers({ generateRandomNumber(names), generateRandomNumber(families), generateRandomNumber(roles) })
  }
}

* */


const data = []
let names = ['Инна', 'Елена', 'Оксана', 'Артемида', 'Полина', 'Марина', 'Виктория', 'Вероника', 'Ирина', 'Инна']
let families = ['Петрова', 'Иванова', 'Силицкая', 'Фатина', 'Миронова']
let roles = ['Руководство', 'Бухгалтерия', 'Отдел кадров', 'Новая']

for (let index = 0; index < 20; index++) {
  let name = names[Math.floor(Math.random() * names.length)]
  let family = families[Math.floor(Math.random() * families.length)]
  let role = roles[Math.floor(Math.random() * roles.length)]
  data.push({ name, family, role })
}
/* 
Атрибуты пользователя:
1.  Имя
2.  Фамилия
3.  Группа (например Руководство, Бухгалтерия, Отдел кадров и т.д.)
    Может быть пустым.
 */
export default data