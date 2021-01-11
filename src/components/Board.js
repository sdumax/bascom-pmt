import React, { Component } from "react";

export function BoardGroup({ children }) {
	return <div className="flex space-x-10">{children}</div>;
}

export class Board extends Component {
	render() {
		const { children, header } = this.props;
		return (
			<div className="board_container">
				<div className="bg-white px-3 py-2 text-lg font-semibold rounded-t-2xl w-72">
					{header}
				</div>
				<div className="bg-gradient-to-b b from-gray-300 to-gray-100 px-3 py-2 w-72 h-29">
					{children}
				</div>
			</div>
		);
	}
}

// export default Board;