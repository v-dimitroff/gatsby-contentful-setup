import React from 'react'
import PropTypes from 'prop-types'

const SeoTags = ({ pageContext: { data } }) => {
    return (
        <div>
            <h1>{data.heroTitle}</h1>
            <h3>{data.heroSubtitle}</h3>
            <p>{data.seoDescription}</p>
        </div>
    )
}

export default SeoTags
