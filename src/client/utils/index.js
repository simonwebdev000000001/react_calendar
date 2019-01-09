export default class Utils {
  static WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  static MONTHES = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December',
  ];
  static CALENDAR_VIEW = {
    MONTH: 1,
    WEEK: 2,
    DAY: 3,
  };

  static getMonday(d) {
    d = new Date(d);
    var day = d.getDay(),
      diff = d.getDate() - day + (day == 0 ? -6 : 1); // adjust when day is sunday
    return new Date(d.setDate(diff));
  }

  static getWeek(d) {
    let weekStart = new Date(d);
    let weekEnd = new Date(d);
    while (!weekStart.toDateString().match(Utils.WEEK_DAYS[0])) {
      weekStart.setDate(weekStart.getDate() - 1);
    }
    while (!weekEnd.toDateString().match(Utils.WEEK_DAYS[Utils.WEEK_DAYS.length - 1])) {
      weekEnd.setDate(weekEnd.getDate() + 1);
    }

    const days=[];
    const weekStartClone=new Date(weekStart.getTime());
    Utils.WEEK_DAYS.forEach(() => {
      days.push(new Date(weekStartClone.getTime()));
      weekStartClone.setDate(weekStartClone.getDate() + 1);
    });

    return { weekEnd, weekStart,days };
  }

  static getDayHours() {
    const day = new Date();
    day.setHours(0);
    day.setSeconds(0);
    const hours = [];
    for (let i = 0; i < 24; i++) {
      hours.push({
        hour: day.toLocaleTimeString().replace(/([\d]+)(:[\d]{2})(.*)/, '$1$3'),
      });
      day.setHours(day.getHours() + 1);
    }
    return hours;
  }

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