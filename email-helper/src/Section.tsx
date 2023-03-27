import Box from "./Box"

const Section = ({ data }) => {
	return (
		<div id={data.id}>
			{data.title}
			{data.content.map((el) => (
				<p dangerouslySetInnerHTML={{ __html: el }}></p>
			))}
			<Box data={data.groups} />
		</div>
	)
}

export default Section
