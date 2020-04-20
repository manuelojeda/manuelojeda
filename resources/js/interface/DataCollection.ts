interface DataSet {
  label?: string,
  backgroundColor: string,
  barPercentage?: number;
  barThickness?: number;
  maxBarThickness?: number;
  minBarLength?: number;
  data: Array<any>
}

export interface DataCollection {
  labels: Array<string>,
  datasets: Array<DataSet>
}
