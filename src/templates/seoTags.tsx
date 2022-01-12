import React from 'react'
import PropTypes from 'prop-types'

const seoTags = ({ pageContext: { data } }) => {
    return (
        <div>
            <h1>{data.heroTitle}</h1>
            <h3>{data.heroSubtitle}</h3>
            <p>{data.seoDescription}</p>
        </div>
    )
}

seoTags.propTypes = {

}

export default seoTags
