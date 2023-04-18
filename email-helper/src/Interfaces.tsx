export interface SectionData {
	data: {
		id: string;
		title: string;
		content: string[];
		groups: { id: string; title: string; content: string[]; block: number; }[];
		block: number;
	};
	block0Data: string[];
	block1Data: string[];
	formData: FormData;
	addToBlock: (index: number, text: string) => any;
}

export interface GroupData {
	groupData: {
		id: string;
		title: string;
		content: string[];
		block: number;
	}[];
	block0Data: string[];
	block1Data: string[];
	formData: FormData;
	addToBlock: (index: number, text: string) => any;
}

export interface FormData {	
	gender: string;
	lastName: string;
	disruption: string;
	disrupted: string;
	reasons: string,
	delay: string,
	flight: string;
	flightDep: string[];
	flightArr: string[];
	flightCon: string[];
	flightDate: string;	
}