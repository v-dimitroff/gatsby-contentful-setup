import React from 'react'

const PageSection = ({ data }) => {
    return (
        <div>
            <h1>{data.slug}</h1>
            <p>{data.paragraphs}</p>
        </div>
    )
}

export default PageSection
