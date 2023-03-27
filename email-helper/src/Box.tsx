import React from 'react'

const Box = ({ data }) => {
	return (
		<div>
			{data.map(({ id, title, content, block }) => (
				<div key={id}>
					<h4>{title}</h4>
					{content.map((el) => (
						<p dangerouslySetInnerHTML={{__html: el}}></p>
					))}
				</div>
			))}
		</div>
	)
}

export default Box