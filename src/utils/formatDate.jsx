// утилита для форматирования даты в "читаемый язык"
// меняем дату в формате ISO с серверв
const formatDate = date => {
  // const d = date * 1000;

  // сами опции
  const options = {
    // weekday: 'short',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  };
  // ставим формат, язык и определим рпции
  return new Intl.DateTimeFormat('ru', options)
  // передаем то что нужно форматировать
    .format(new Date(date));
};

export default formatDate;
