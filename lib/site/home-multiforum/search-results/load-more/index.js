import React, { Component } from 'react'
import t from 't-component'

export default class LoadMore extends Component {
	constructor(props){
		super(props)
	}
	render(){
		let renderState
		if (!this.props.isLoading && !this.props.noMoreResults) {
			renderState = (
				<button
					onClick={this.props.loadMore}
					className='btn btn-block'>
					{t('newsfeed.button.load-more')}
				</button>
			)
		} else if(this.props.noMoreResults){
			renderState = null
		} else	{
			renderState = (
				<button
					className='loader-btn btn btn-block'>
					<div className='loader' />
					{t('newsfeed.button.load-more')}
				</button>
			)
		}

		return(
			<div id='load-more'>
				{renderState}
			</div>
		)
	}
}