import dayjs from 'dayjs'

/**
 * 获取当前时间，格式为YYYY-MM-DD HH:mm:ss
 * @returns 当前时间
 */
export const getNow = () => {
  return dayjs().format('YYYY-MM-DD HH:mm:ss')
}
