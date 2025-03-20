import PropTypes from 'prop-types'

export default function CharacterImage({ src, alt }) {
	return <img src={src} alt={alt} className='character-card__image' />
}

CharacterImage.propTypes = {
	src: PropTypes.string.isRequired,
	alt: PropTypes.string.isRequired,
}
