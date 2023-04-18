import React from "react";

export default function Modal({generatedText0, generatedText1}: any) {
	const [showModal, setShowModal] = React.useState(false);
	return (
		<>
			<button
				className={`w-[90%] ${(generatedText0.length !== 0 || generatedText1.length !== 0) ? "bg-pink-500 active:bg-pink-600 cursor-pointer" : "bg-gray-700 cursor-not-allowed"} text-white font-bold uppercase text-sm p-2 rounded ease-linear transition-all duration-150`}
				type="button"
				onClick={() => setShowModal(true)}
				disabled={!generatedText0.length && !generatedText1.length}
			>
				{(generatedText0.length || generatedText1.length) ? "Generate" : "Select some text first 😊"}
			</button>
			{showModal ? (
				<>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
					>
						<div className="relative min-w-[50%] my-6 mx-auto max-w-3xl">
							{/*content*/}
							<div className="border-0 rounded shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
								{/*header*/}
								<div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
									<h3 className="text-3xl font-semibold">
										Here it is! Enjoy 😎
									</h3>
									<button
										className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
										onClick={() => setShowModal(false)}
									>
										<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
											×
										</span>
									</button>
								</div>
								{/*body*/}
								{generatedText0.length > 0 &&
								(
								<div className="p-6 flex flex-auto bg-slate-100">
									{/* <p className="my-4 text-slate-500 text-lg leading-relaxed"> */}
										<div>
											{generatedText0.map((el: string) => (<p dangerouslySetInnerHTML={{__html: el}} className="py-1"></p>))}
										</div>
										{/* <div className="ml-auto">
											<button className="mx-4 p-2 border border-slate-400 hover:bg-slate-200 rounded-md" onClick={() => navigator.clipboard.writeText(generatedText0)}>📝</button>
										</div> */}
									{/* </p> */}
								</div>
								)
								}
								{generatedText1.length > 0 &&
								(<div className="p-6 flex align-middle flex-auto border-t border-slate-300 bg-slate-100">
									{/* <p className="my-4 text-slate-500 text-lg leading-relaxed"> */}
										<div>
											{generatedText1.map((el: string) => (<p dangerouslySetInnerHTML={{__html: el}} className="py-1"></p>))}
										</div>
										{/* <div className="ml-auto self-start">
											<button className="mx-4 p-2 border border-slate-400 hover:bg-slate-200 rounded-md" onClick={() => navigator.clipboard.writeText(generatedText1)}>📝</button>
										</div> */}
									{/* </p> */}
								</div>
								)
								}
								{/*footer*/}
								<div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
									<button
										className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Close
									</button>
									{/* <button
										className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
										type="button"
										onClick={() => setShowModal(false)}
									>
										Copy text
									</button> */}
								</div>
							</div>
						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</>
			) : null}
		</>
	);
}