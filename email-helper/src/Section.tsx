import Box from "./Box"

const Section = ({ data }) => {
	return (
		<div id={data.id}>
			{data.title}
			{data.content.map((el, index) => (
				<p dangerouslySetInnerHTML={{ __html: el }} key={index}></p>
			))}
			<Box data={data.groups} />
		</div>
	)
}

export default Section
