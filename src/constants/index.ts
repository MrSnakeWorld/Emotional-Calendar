export const date: Date = new Date()
export const nameMonth: string[] = ["января", "февраля", "марта", "апреля", "мая", "июня", "июля", "августа", "сентября", "октября", "ноября", "декабря"]
export const weekDays: string[] = ["воскресенье", "понедельник", "вторник", "среда", "четверг", "пятница", "суббота"]
export const weekDay: string = weekDays[date.getDay()]

export const hours: number = date.getHours()
export const day: number = date.getDate()
export const month: string = nameMonth[date.getMonth()]
export const year: number = date.getFullYear()

export const startDate: string = new Date(year, date.getMonth(), day - 7).toISOString()
export const endDate: string = date.toISOString()

export default function greetings(hours: number) {
  switch (hours) {
    case 4: case 5: case 6: case 7: case 8: case 9:
      return 'Доброе утро!'
    case 10: case 11: case 12: case 13: case 14: case 15:
      return 'Добрый день!'
    case 16: case 17: case 18: case 19: case 20: case 21:
      return 'Добрый вечер!'
    case 22: case 23: case 24: case 1: case 2: case 3:
      return 'Доброй ночи!'
    default:
      return 'Привет!'
  }
}

export const currentUser = 'chell'

export async function getRequest(url: string, headers: any,): Promise<JSON> {
  
  return fetch(url, {
    method: 'GET',
    headers: headers
  }).then((response: Response) => {
    if (response.ok) {
      return response.json()
    } else {
      return response.status
    }
  })
}

export async function getBigRequest(url: string, headers: any, params: any): Promise<JSON> {
  return fetch(url + '?' + new URLSearchParams(params), {
    method: 'GET',
    headers: headers
  }).then((response: Response) => {
    if (response.ok) {
      return response.json()
    } else {
      return response.status
    }
  })
}

export const typeOfEmotions: string[] = ['joy', 'sadness', 'void']

export const url = 'http://26.213.25.20:65503/api/'