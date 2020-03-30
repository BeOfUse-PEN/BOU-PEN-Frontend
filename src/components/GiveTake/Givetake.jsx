import React from 'react'

function Givetake() {
  return (
    <div className="row p-3">
      <div className="col-md-5 m-3 flex-*-column justify-content-center align-items-center">
        <p>
          Give and Take is basically concept about sharing of the knowledge we
          believe in more you share knowledge more you grow and hence you can
          contribute any video or article or PPT to our content bank and we will
          let you give access to our courses
        </p>
        <button className="btn btn-outline-info">Starts Giving</button>
      </div>

      <div className="col-md-5 m-3 d-flex justify-content-center align-items-center">
        <div className="card w-75">
          <div className="card-title p-3">Starts giving ...</div>
          <div className="card-body p-3">
            <div className="radio">
              <label>
                <input type="radio" name="v" />
                Video
              </label>
            </div>
            <div className="radio">
              <label>
                <input type="radio" name="a" />
                Article
              </label>
            </div>
            <div className="radio disabled">
              <label>
                <input type="radio" name="p" />
                Presentation
              </label>
            </div>
          </div>
          <div className="card-footer p-3">
            <button className="btn btn-outline-info">Upload</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Givetake
