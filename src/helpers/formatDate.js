import moment from "moment-timezone";

export default function formatDate(date) {
  return moment(new Date(date)).tz("America/New_York").format("YYYY-MM-DD");
}
