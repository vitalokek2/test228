print('Добро пожаловать в программу изменения расписания!')

text = ''
rasp = {}

while True:
    text = input(f'Введите время (пример: 17:30), или напишите stop:\n{rasp}\n>>> ')
    if text == 'stop':
        break
    rasp[text] = input(f'Введите видео для {text} без .mp4\n>>> ')


open('расписание.txt', 'w')
for a,b in rasp.items():
    open('расписание.txt', 'a', encoding='UTF-8').write(f'{a};videos/{b}.mp4\n')


open('расписание_work.txt', 'w+').write('Ежедневно:\n')
for a,b in rasp.items():
    open('расписание_work.txt', 'a', encoding='UTF-8').write(f'{a} - {b}\n')