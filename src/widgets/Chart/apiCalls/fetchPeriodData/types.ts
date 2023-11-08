
interface ApiItem {
  low: number;
  high: number;
  close: number;
  open: number;
  date: number;
  time: number;
}
export interface ApiResponse {
  Data: ApiItem[];
}