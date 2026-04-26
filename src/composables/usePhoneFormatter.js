export const usePhoneFormatter = () => {
  /**
   * Преобразует номер телефона из формата +7XXXXXXXXXX в 8 XXX XXX XX XX
   * @param {string} phone - номер телефона (например, +79932721771)
   * @returns {string} отформатированный номер (8 993 272 17 71)
   */
  const formatPhoneNumber = (phone) => {
    if (!phone) return ''

    // Убираем все нецифровые символы
    let cleaned = phone.replace(/\D/g, '')

    // Если номер начинается с 8 или 7, заменяем на 8
    if (cleaned.startsWith('7')) {
      cleaned = '8' + cleaned.slice(1)
    }

    // Проверяем, что длина подходит для российского номера
    if (cleaned.length !== 11) {
      return phone // возвращаем исходный, если формат неверный
    }

    const parts = [
      cleaned.slice(0, 1),
      cleaned.slice(1, 4),
      cleaned.slice(4, 7),
      cleaned.slice(7, 9),
      cleaned.slice(9, 11)
    ]

    return parts.join(' ')
  }

  return { formatPhoneNumber }
}
