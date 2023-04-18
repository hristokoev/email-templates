import Group from "./Group"
import { SectionData } from "./Interfaces";
import { interpolate } from "./Interpolate";

const Section = ({ data, formData, block0Data, block1Data, addToBlock }: SectionData) => {

	const formDataInterpolate = {
		gender: formData.gender,
		lastName: formData.lastName,
		disruption: formData.disruption,
		disrupted: formData.disrupted,
		reasons: formData.reasons,
		delay: formData.delay,
		flight: formData.flight,
		flightDep: formData.flightDep[0],
		flightArr: formData.flightArr[0],
		flightCon: formData.flightCon[0],
		flightDate: formData.flightDate
	}

	return (
		<div id={data.id} className="h-[28em] overflow-y-scroll text-gray-300">
			{data.content.map((el, index) => (
				<div className="relative flex pr-8 items-start" key={index}>
					{(block0Data.includes(interpolate(el, formDataInterpolate)) || block1Data.includes(interpolate(el, formDataInterpolate))) && <span className="absolute top-1 left-2">✔️</span>}
					<p dangerouslySetInnerHTML={{
						__html: interpolate(el, formDataInterpolate)
					}}
						className="py-1 pl-8 hover:text-gray-400 cursor-pointer"
						onClick={(e) => {
							addToBlock(data.block, e.currentTarget.innerHTML)
						}}></p>
				</div>
			))}
			<Group groupData={data.groups} formData={formData} block0Data={block0Data} block1Data={block1Data} addToBlock={addToBlock} />
		</div>
	)
}

export default Section
