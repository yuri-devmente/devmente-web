export const Technology = ({ title, largeImage, smallImage }) => {
  return (
    <div className='portfolio-item'>
      <img
            src={smallImage}
            className='img-responsive'
            alt={title}
          />
    </div>
  )
}