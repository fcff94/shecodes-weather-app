function formatDate(timestamp, typeTimestamp) {
    let date = new Date(timestamp * 1000);
    let month = months[date.getMonth()];
    let hours = "0" + date.getHours();
    let minutes = "0" + date.getMinutes();
    let weekday = days[date.getDay()];
    let day = addDaySuffix(date.getDate().toString());
  
    if (typeTimestamp === "fullTimestamp") {
      return `${weekday}, ${month} ${day}, ${hours.substring(
        hours.length >= 3 ? 1 : 0,
        hours.length
      )}:${minutes.substring(minutes.length >= 3 ? 1 : 0, minutes.length)}`;
    } else if (typeTimestamp === "hoursMinsTimestamp") {
      return `${hours.substring(
        hours.length >= 3 ? 1 : 0,
        hours.length
      )}:${minutes.substring(minutes.length >= 3 ? 1 : 0, minutes.length)}`;
    }
  }
  
  function addDaySuffix(day) {
    if (day === "1") {
      day = `${day}st`;
    } else if (day === "2") {
      day = `${day}nd`;
    } else if (day === "3") {
      day = `${day}rd`;
    } else if (day[1] === "1") {
      day = `${day}st`;
    } else if (day[1] === "2") {
      day = `${day}nd`;
    } else if (day[1] === "3") {
      day = `${day}rd`;
    } else {
      day = `${day}th`;
    }
  
    return day;
  }



  