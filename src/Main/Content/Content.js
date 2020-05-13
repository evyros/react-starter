import React from 'react';
import './Content.css';
import Collapsible from './Collapsible/Collapsible';

class Content extends React.Component {

	render() {
		return (<div className="Content">

			<Collapsible header="This is the header">
				this is the content <br />
				this is the content
			</Collapsible>

			<Collapsible header="This is the header2">
				this is the content2 <br />
				this is the content2
			</Collapsible>

		</div>);
	}
}

export default Content;
