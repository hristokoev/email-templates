import React from 'react'
import { GroupData } from "./Interfaces";
import { interpolate } from './Interpolate';

const Group = ({ groupData, formData, block0Data, block1Data, addToBlock }: GroupData) => {

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
		<div>
			{groupData.map(({ id, title, content, block }, index) => (
				<div id={id} key={index} className="mt-4">
					<h4 className="pb-2 text-xl underline underline-offset-4 under text-white">{title}</h4>
					{content.map((el, index) => (
						<div className="relative flex pr-8 items-start" key={index}>
							{(block0Data.includes(interpolate(el, formDataInterpolate)) || block1Data.includes(interpolate(el, formDataInterpolate))) && <span className="absolute top-1 left-2">✔️</span>}
							<p dangerouslySetInnerHTML={{
								__html: interpolate(el, formDataInterpolate)
							}}
								className="py-1 pl-8 hover:text-gray-400 cursor-pointer"
								onClick={(e) => {
									addToBlock(block, e.currentTarget.innerHTML)
								}}></p>
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default Group