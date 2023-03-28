import React from 'react'
import { GroupData } from "./Interfaces";
import { interpolate } from './Interpolate';

const Group = ({ groupData, formData, addToBlock }: GroupData) => {
	return (
		<div>
			{groupData.map(({ id, title, content, block }, index) => (
				<div id={id} key={index}>
					<h4 className="pb-2 text-xl underline underline-offset-4 under text-white">{title}</h4>
					{content.map((el, index) => (
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
									addToBlock(block, e.currentTarget.innerText)
								}}></p>
						</div>
					))}
				</div>
			))}
		</div>
	)
}

export default Group