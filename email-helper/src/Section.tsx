import Group from "./Group"

interface SectionData {
	data: {
		id: string;
		title: string;
		content: string[];
		groups: { id: string; title: string; content: string[]; block: number; }[];
		block: number;
	};
}

const Section = ({ data }: SectionData) => {
	return (
		<div id={data.id}>
			{data.title}
			{data.content.map((el, index) => (
				<p dangerouslySetInnerHTML={{ __html: el }} key={index}></p>
			))}
			<Group groupData={data.groups} />
		</div>
	)
}

export default Section
