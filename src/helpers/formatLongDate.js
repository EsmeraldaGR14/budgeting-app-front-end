import moment from "moment";

export default function formattedDate(date) {
  return moment(date).format("MMMM D, YYYY");
}
