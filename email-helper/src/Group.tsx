import React from 'react'
import { GroupData } from "./Interfaces";
import { interpolate } from './Interpolate';

const Group = ({ groupData, formData }: GroupData) => {
	return (
		<div>
			{groupData.map(({ id, title, content, block }, index) => (
				<div id={id} key={index}>
					<h4>{title}</h4>
					{content.map((el, index) => (
						<p dangerouslySetInnerHTML={{
							__html: interpolate(el, {
								gender: formData.gender,
								lastName: formData.lastName,
								disruption: formData.disruption,
								disrupted: formData.disrupted,
								flight: formData.flight,
								flightDep: formData.flightDep,
								flightArr: formData.flightArr,
								flightCon: formData.flightCon,
								flightDate: formData.flightDate
							})
						}} key={index}></p>
					))}
				</div>
			))}
		</div>
	)
}

export default Group