const PageContainer = ({ title, description, children }) => {
  return (
    <section className="page-container">
      {title && <h1 className="page-title">{title}</h1>}
      {description && <p className="page-description">{description}</p>}
      <div className="page-content">{children}</div>
    </section>
  )
}

export default PageContainer