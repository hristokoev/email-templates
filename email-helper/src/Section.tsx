import Group from "./Group"
import { SectionData } from "./Interfaces";
import { interpolate } from "./Interpolate";

const Section = ({ data, formData, addToBlock }: SectionData) => {
	return (
		<div id={data.id} className="w-[62.5%] text-gray-300">
			{data.content.map((el, index) => (
				<div className="flex gap-2 pb-4 pr-8 items-start" key={index}>
					<p dangerouslySetInnerHTML={{
						__html: interpolate(el, {
							gender: formData.gender,
							lastName: formData.lastName,
							disruption: formData.disruption,
							disrupted: formData.disrupted,
							reasons: formData.reasons,
							delay: formData.delay,
							flight: formData.flight,
							flightDep: formData.flightDep,
							flightArr: formData.flightArr,
							flightCon: formData.flightCon,
							flightDate: formData.flightDate
						})
					}}
						className="hover:text-slate-400 cursor-pointer"
						onClick={(e) => {
							addToBlock(data.block, e.currentTarget.innerHTML)
						}}></p>
				</div>
			))}
			<Group groupData={data.groups} formData={formData} addToBlock={addToBlock} />
		</div>
	)
}

export default Section
