import React from 'react'

interface GroupData {
	groupData: {
		id: string;
		title: string;
		content: string[];
		block: number;
	}[];
}

const Group = ({ groupData }: GroupData) => {
	return (
		<div>
			{groupData.map(({ id, title, content, block }, index) => (
				<div id={id} key={index}>
					<h4>{title}</h4>
					{content.map((el, index) => (
						<p dangerouslySetInnerHTML={{__html: el}} key={index}></p>
					))}
				</div>
			))}
		</div>
	)
}

export default Group