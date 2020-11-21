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
1.	Имя
2.	Фамилия
3.	Группа (например Руководство, Бухгалтерия, Отдел кадров и т.д.)
		Может быть пустым.
 */
export default data