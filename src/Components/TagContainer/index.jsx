import React from 'react'
import PropTypes from 'prop-types'

import Tag from '../Tag'

const TagContainer = ({ Tags }) => {
    return (
      <div className="component tagList">
        {Tags.map((tag) => (
          <Tag key={tag} item={tag} />
        ))}
      </div>
    )
  }

TagContainer.propTypes = {
    Tags: PropTypes.array.isRequired
  }

export default TagContainer
