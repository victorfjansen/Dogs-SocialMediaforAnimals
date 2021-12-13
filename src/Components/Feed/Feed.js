import React from 'react'
import FeedModal from './FeedModal'
import FeedPhotos from './FeedPhotos'
import PropTypes from 'prop-types'

const Feed = ({ user }) => {
  const [modalPhoto, setModalPhoto] = React.useState(null)
  const [pages, setPages] = React.useState([1])
  const [infinite, setInfinite] = React.useState(true)

  React.useEffect(() => {
    let wait = false
    function infiniteScroll() {
      if (infinite) {
        const scroll = window.scrollY
        const height = document.body.offsetHeight - window.innerHeight

        if (scroll > height * 0.75 && !wait) {
          setPages(pages => [...pages, pages.length + 1])
          wait = true
          setTimeout(() => {
            wait = false
          }, 500)
        }
      }
    }

    window.addEventListener('scroll', infiniteScroll)
    window.addEventListener('wheel', infiniteScroll)

    return () => {
      window.removeEventListener('wheel', infiniteScroll)
      window.removeEventListener('scroll', infiniteScroll)
    }
  }, [infinite])

  return (
    <div>
      {modalPhoto && (
        <FeedModal photo={modalPhoto} setModalPhoto={setModalPhoto} />
      )}
      {pages.map(item => (
        <FeedPhotos
          user={user}
          key={item}
          page={item}
          setModalPhoto={setModalPhoto}
          setInfinite={setInfinite}
        />
      ))}
    </div>
  )
}

Feed.defaultProp = {
  user: 0,
}

Feed.propTypes = {
  user: PropTypes.oneOfType([PropTypes.number.isRequired, PropTypes.string]),
}

export default Feed
