import { engineeringFaculties } from '../data';

const EngineeringFaculties = () => (
  <section className="wrapper bg-light py-10 py-md-14" aria-labelledby="engineering-faculties-title">
    <div className="container">
      <div className="col-md-10 col-lg-8">
        <p className="fs-80 fw-bolder sub-h2 position-relative">Medicina</p>
        <h2
          id="engineering-faculties-title"
          className="display-5 mb-10 fw-bold z-1 mt-n15 mt-md-n16 mt-lg-n17 sub-head"
        >
          Facultades de Medicina
          <span
            className="ms-2 d-inline-block"
            style={{
              borderBottom: '3px solid #D8D8D8',
              width: '30px',
              height: 0,
            }}
          />
        </h2>
      </div>

      <div className="row gx-md-5 gy-5">
        {engineeringFaculties.map(({ id, title, description }) => (
          <div className="col-md-6 col-lg-4" key={id}>
            <article className="card h-100 p-5 border-0 shadow-sm">
              <h3 className="h4 mb-3">{title}</h3>
              <p className="mb-0">{description}</p>
            </article>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default EngineeringFaculties;
