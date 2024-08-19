const addSeconds = (date, seconds) => {
  const result = new Date(date);
  result.setSeconds(date.getSeconds() + seconds);
  return result;
}

const getDateNano = () =>{
    return Date.now() * 1000;
}

module.exports = {getDateNano,addSeconds}
