import Group from "./Group"
import { SectionData, FormData  } from "./Interfaces";
import { interpolate } from "./Interpolate";

const Section = ({ data, formData }: SectionData) => {
	return (
		<div id={data.id}>
			{data.content.map((el, index) => (
				<p dangerouslySetInnerHTML={{__html: interpolate(el, { 
					gender: formData.gender,
					lastName: formData.lastName,
					disruption: formData.disruption,
					disrupted: formData.disrupted,
					flight: formData.flight,
					flightDep: formData.flightDep,
					flightArr: formData.flightArr,
					flightCon: formData.flightCon,
					flightDate: formData.flightDate
				})}} key={index}></p>
			))}
			<Group groupData={data.groups} formData={formData} />
		</div>
	)
}

export default Section
