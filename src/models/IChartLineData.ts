export type ChartLineData = {
	data: { 
		xValues: number[]; 
		series: IChartLineSeries; 
		xValueNames?: string[]; 
	}; 
	x:string; 
	y:string; 
	title:string; 
	subTitle?:string; 
	infoText?:string;
	meta?: { 
		numberOfReferenceLines?: number; 
		percentage?:boolean; 
		hideXAxis?:boolean;
		valueLabels?: boolean;
		labelProperties?: {
			significantDigits?: number;
			shortHand?: boolean;
		}
	}; 
}

interface IChartLineSeries {
    yValues: number[];
    title: string;
    colorToken?: string;
   }
   
   