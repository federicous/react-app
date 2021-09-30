import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'

const ItemListContainer = (props) => {
	return (
		<div className="d-flex justify-content-center my-3">
			<h1 className="fs-2">{props.greeting}</h1>
		</div>
	)
}

export default ItemListContainer
