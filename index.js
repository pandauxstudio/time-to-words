// expecting time to be a string in the format like '8:15' or '12:30'
function convertTimeToWords(time) {

  const strTime = '';
  const timeHr = time.split(':')[0];
  const timeMin = time.split(':')[1];

  function getHourName(hourNumber) {
    const numberMap = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve'
    };

    // Handle PM times
    if (hourNumber > 12) {
      return numberMap[hourNumber - 12];
    }

    return numberMap[hourNumber];
  }

  function getMinName(minNumber) {
    const numberMap = {
      1: 'one',
      2: 'two',
      3: 'three',
      4: 'four',
      5: 'five',
      6: 'six',
      7: 'seven',
      8: 'eight',
      9: 'nine',
      10: 'ten',
      11: 'eleven',
      12: 'twelve',
      13: 'thirteen',
      14: 'fourteen',
      15: 'fifteen',
      16: 'sixteen',
      17: 'seventeen',
      18: 'eighteen',
      19: 'nineteen',
      20: 'twenty',
      21: 'twenty-one',
      22: 'twenty-two',
      23: 'twenty-three',
      24: 'twenty-four',
      25: 'twenty-five',
      26: 'twenty-six',
      27: 'twenty-seven',
      28: 'twenty-eight',
      29: 'twenty-nine',
      30: 'thirty'
    };

    // Handle PM times
    if (minNumber === '15') {
      return 'quarter';
    } else if (minNumber === '30') {
      return 'half';
    }

    return numberMap[hourNumber];
  }

  // Return Formatted Time
  // =====================
  if (time === '0:00') {
    return 'midnight';
  } else if (time === '12:00') {
    return 'midday';
  }

  // #TODO: The part that I had remaining was returning the formatted time which would be a
  // concactination of the hour word, the connector (the 'to' or 'past') and the minute word.

  // const timeHrStr = getHourName();
  // const timeMinStr = getMinName();

  // If timeMin == 0, then return <Hour> O'clock
  // Else If timeMin < 30, then return <Min> 'past' <Hour>
  // Else If timeMin == 45, then return 'quarter to' <Hour>
  // Else return timeMin to <Hour>

  // The tricky part will be to work out the 'to <Hr>' and way is to use the modulo/remainder
  // operator to workout the next hour.
  // Ref: https://stackoverflow.com/questions/8888491/how-do-you-display-javascript-datetime-in-12-hour-am-pm-format
}

module.exports = { convertTimeToWords };
