export function truncateString(str, num) {
  if (str.length > num) {
    return str.slice(0, num) + "...";
  } else {
    return str;
  }
}

export function convertUtc(utc) {
  const localDate = new Date(utc);
  // const options = {
  //     day: "2-digit",
  //     month: "short",
  //     year: "numeric",
  //   }
  return localDate.toLocaleDateString("en-GB");
  // return localDate.toLocaleString("en-GB", { hour12: true });
}

export function formatNumber(number) {
  return number.toLocaleString();
}
