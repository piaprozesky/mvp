import React, { useState, useEffect } from "react";

function UserHomeView(props) {
  const posts = props.posts;

  const [featPost, setFeatPost] = useState(null);
  const [postID, setpostID] = useState();

  useEffect(() => {
    setFeatPost(posts[0]);
  }, [props.posts]);

  function handleChange(event) {
    let { name, value } = event.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  const emptyForm = {
    applicantname: "",
    email: "",
    cv: "",
    post_id: featPost ? featPost.post_id : 0,
  };

  const [formData, setFormData] = useState(emptyForm);

  function handleSubmit(event) {
    event.preventDefault();
    props.addApplicant(formData);
    setFormData(emptyForm);
    setpostID(featPost.post_id);

    if (postID) {
      console.log(postID);
    }
  }

  if (!featPost) {
    return (
      <div className="spinner-border" role="status">
        <span className="visually-hidden">Loading...</span>
      </div>
    );
  }

  return (
    <div className="UserHomeView container">
      <div className="pt-4"></div>
      {/* <h2>Home</h2> */}
      <div className="row ">
        <div className="col ">
          <h4 className="card-title"> {featPost.company}</h4>
          <h6 className="card-subtitle">{featPost.title} </h6>
          <p className="card-text">{featPost.postdescription}</p>
        </div>
        <form onSubmit={handleSubmit} className="col ">
          <label>Name</label>
          <input
            className="form-control"
            name="applicantname"
            type="text"
            value={formData.applicantname}
            onChange={handleChange}
          />
          <br />
          <label>Email</label>
          <input
            className="form-control"
            name="email"
            type="text"
            value={formData.email}
            onChange={handleChange}
          />
          <br />
          <label>CV URL</label>
          <input
            className="form-control"
            name="cv"
            type="text"
            value={formData.cv}
            onChange={handleChange}
          />
          <br />
          <div className="text-center">
            <button className="btn btn-primary ">APPLY</button>
          </div>
          <br />
        </form>
      </div>

      <div className="row">
        {posts.map((post) =>
          !post.filled ? (
            <div
              onClick={() => setFeatPost(post)}
              className="card col-md-3 p-4"
              key={post.post_id}
            >
              <h4 className="card-title"> {post.company}</h4>
              <h6 className="card-subtitle">{post.title} </h6>
              <p className="card-text">{post.postdescription}</p>
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}

export default UserHomeView;
