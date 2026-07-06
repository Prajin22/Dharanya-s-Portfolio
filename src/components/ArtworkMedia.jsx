import ArtworkVisual from './ArtworkVisual.jsx'

export default function ArtworkMedia({ project, idPrefix = '', className = '' }) {
  return (
    <div className={`relative h-full w-full overflow-hidden ${className}`}>
      <div aria-hidden="true" className="absolute inset-0">
        <ArtworkVisual project={project} idPrefix={idPrefix} />
      </div>
      {project.image && (
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="absolute inset-0 h-full w-full object-cover"
          onError={(e) => {
            e.currentTarget.style.display = 'none'
          }}
        />
      )}
    </div>
  )
}
