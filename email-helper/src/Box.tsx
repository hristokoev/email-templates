import React from 'react'

const Box = ({ data }) => {
	return (
		<div>
			{data.map(({ id, title, content, block }, index) => (
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

export default Box