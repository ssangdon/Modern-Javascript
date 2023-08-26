const printNow = () => {
  const days = [
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
    "일요일",
  ];
  const today = new Date();
  let day = days[today.getDay()];
  let year = today.getFullYear();
  let month = today.getMonth() + 1;
  let hour = today.getHours();
  let date = today.getDate();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let isAm = "";
  if (hour / 12 >= 1) {
    isAm = "오후";
    hour = hour % 12;
  } else {
    isAm = "오전";
  }
  let complete = `${year}년 ${month}월 ${date}일 ${isAm} ${hour}시 ${minute}분 ${second}초`;
  console.log(complete);
  setTimeout(printNow, 1000);
};

printNow();
