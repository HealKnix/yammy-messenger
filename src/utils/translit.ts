export const translit = (word: string): string => {
  const converter: Record<string, string> = {
    а: 'a',
    б: 'b',
    в: 'v',
    г: 'g',
    д: 'd',
    е: 'e',
    ё: 'e',
    ж: 'zh',
    з: 'z',
    и: 'i',
    й: 'y',
    к: 'k',
    л: 'l',
    м: 'm',
    н: 'n',
    о: 'o',
    п: 'p',
    р: 'r',
    с: 's',
    т: 't',
    у: 'u',
    ф: 'f',
    х: 'h',
    ц: 'c',
    ч: 'ch',
    ш: 'sh',
    щ: 'sch',
    ь: '',
    ы: 'y',
    ъ: '',
    э: 'e',
    ю: 'yu',
    я: 'ya',
  };

  // Приведение к нижнему регистру
  const lowerWord = word.toLowerCase();

  // Транслитерация
  let transliterated = Array.from(
    lowerWord,
    (char) => converter[char] || char,
  ).join('');

  // Замена символов
  transliterated = transliterated
    .replace(/[^-0-9a-z]/g, '-') // Замена всех неразрешенных символов на дефис
    .replace(/-+/g, '-') // Замена нескольких дефисов подряд на один
    .replace(/^-|-$/g, ''); // Удаление дефисов в начале и конце строки

  return transliterated;
};
