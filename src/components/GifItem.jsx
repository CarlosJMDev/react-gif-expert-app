/* eslint-disable react/prop-types */

export const GifItem = ({title, url}) => {
  return (
    <div className="card">
      <img loading="lazy" src={url} alt={title} />
      <p>{title}</p>
    </div>
  )
}
