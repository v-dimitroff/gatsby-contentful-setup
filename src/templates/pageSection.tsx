import React from 'react'

const PageSection = ({ pageContext: { data } }) => {

    return (
        <div>
            <h5>Locale: {data.node_locale}</h5>
            <h1>{data.slug}</h1>
            <p>{data.paragraphs.paragraphs}</p>
        </div>
    )
}

export default PageSection
