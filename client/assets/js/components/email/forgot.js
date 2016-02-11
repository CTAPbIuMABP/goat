"use strict";

import url from "url";
import React, {PropTypes, Component} from "react";
import configs from "../../../../../server/configs/config";


const config = configs[process.env.NODE_ENV];

export default class Forgot extends Component {

	static propTypes = {
		params: PropTypes.object
	};

	render() {
		return (
			<div>
				<p><a href={url.format(config.server.self) + "/user/change/" + this.props.params.hash.token}>Change your password</a></p>
			</div>
		);
	}
}
