export interface SectionData {
	data: {
		id: string;
		title: string;
		content: string[];
		groups: { id: string; title: string; content: string[]; block: number; }[];
		block: number;
	};
	formData: FormData;
}

export interface GroupData {
	groupData: {
		id: string;
		title: string;
		content: string[];
		block: number;
	}[];
	formData: FormData;
}

export interface FormData {	
	gender: string;
	lastName: string;
	disruption: string;
	disrupted: string;
	flight: string;
	flightDep: string;
	flightArr: string;
	flightCon: string;
	flightDate: string;	
}