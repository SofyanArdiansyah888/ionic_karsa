export const today = () => new Date().getDate();
export const thisMonth = () => new Date().getMonth();
export const thisYear = () => new Date().getFullYear();

export const localDate = (date, month, year) => new Date(new Date(year, month, date).toLocaleString());

export const getAllDaysInMonth = (year: number, month: number) => {
  const tempDate = localDate(1, month,year);
  const dates = [];
  while (tempDate.getMonth() === month) {
    dates.push({
      day: getDayName(tempDate.getDay()),
      date: tempDate.getDate(),
      booked: false,
      disabled: today() > tempDate.getDate() ? true : false
    });
    tempDate.setDate(tempDate.getDate() + 1);
  }

  return dates;
};
// class="active booked"
// export const getAllMonthsInYear = (year: number): number[] => {
//   const date = new Date(year, 1, 1);
//   const months = [];
//   while (date.getFullYear() === year) {
//     months.push(date.getMonth());
//   }
//   return months;
// };

export const getMonthName = (month: number) => {
  const monthNames = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember',
  ];
  return monthNames[month];
};

export const getDayName = (day: number) => {
  const days = ['Ahad','Senin', 'Selasa', 'Rabu', 'Kamis', `Jum'at`, 'Sabtu'];
  return days[day];
};
