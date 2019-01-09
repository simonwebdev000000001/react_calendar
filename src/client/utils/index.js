export default class Utils {
  static WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sut'];
  static MONTHES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];

  /**
   * Returns a date set to the begining of the month
   *
   * @param {Date} myDate
   * @returns {Date}
   */
  static beginningOfMonth(myDate) {
    let date = new Date(myDate);
    date.setDate(1);
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    return date;
  }

  /**
   * Returns a date set to the end of the month
   *
   * @param {Date} myDate
   * @returns {Date}
   */
  static endOfMonth(myDate) {
    let date = new Date(myDate);
    date.setMonth(date.getMonth() + 1);
    date.setDate(0);
    date.setHours(23);
    date.setMinutes(59);
    date.setSeconds(59);
    return date;
  }
}