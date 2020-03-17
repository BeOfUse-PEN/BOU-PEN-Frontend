import React from 'react';
import "./coursepage.css"
function Coursepage() {
	return (

    <div className="row profile">
		<div className="col-md-3">
			<div className="profile-sidebar">
				<h3 className="px-2">Course Syllabus</h3>
				<hr/>
                <ul className="list-group">
                    <li className="list-group-item active">Cras justo odio</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                    <li className="list-group-item">Dapibus ac facilisis in</li>
                    <li className="list-group-item">Morbi leo risus</li>
                    <li className="list-group-item">Porta ac consectetur ac</li>
                    <li className="list-group-item">Vestibulum at eros</li>
                  </ul>
			</div>
		</div>
		<div className="col-md-9">
            <div className="profile-content">
                <iframe className="video-iframe" src="https://www.youtube.com/embed/lgsZb3qaYYs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                <div className="course-description">
                    <h1>How to Write a Course Description</h1>
                    <p>A course description is a brief summary of the significant learning experiences for a course. Course descriptions appear in individual Course Outlines and in the Program of Studies (POSs) for individual programs.
                    </p>
                    <h2>Course Descriptions at Mohawk College
                        Course descriptions should:</h2>
                    <p>Be student-centered, rather than teacher-centered or course-centered
                        Use brief, outcomes-based, descriptive phrases that begin with an imperative or active verb (e.g., design, create, plan, analyze)
                        Be clear, concise, and easy to understand 80 words
                        Detail significant learning experiences and benefits students can expect
                        Align with the outcomes identified in the rest of the course outline</p>
                    </div>
            </div>
            
		</div>
	</div>

	);
}

export default Coursepage;
