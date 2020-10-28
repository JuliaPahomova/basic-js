const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date){
  let season = [
    'winter',
    'spring',
    'summer',
    'autumn',
  ];

  let seasonstr='';

  if (!date) return 'Unable to determine the time of year!';
  if (Object.prototype.toString.call(date) !== "[object Date]") throw new Error();


  let arrmonth = date.getMonth();
   if (arrmonth>=0 && arrmonth<=1||arrmonth===11)
   {
      seasonstr=season[0];
   }
    else if (arrmonth>=2 && arrmonth<=4)
    {
        seasonstr=season[1];
    }
   else if (arrmonth>=5 && arrmonth<=7)
   {
       seasonstr=season[2];
   }
   else if (arrmonth>=8 && arrmonth<=10)
   {
       seasonstr=season[3];
   }

  return seasonstr;
}
