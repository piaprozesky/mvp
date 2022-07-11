import React, { useState, useEffect } from "react";

function AdminPost(props) {
  const emptyForm = { company: "", title: "", postdescription: "" };

  const [formData, setFormData] = useState(emptyForm);

  function handleChange(event) {
    let { name, value } = event.target;

    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();
    props.addPost(formData);
    setFormData(emptyForm);
  }

  return (
    <div className="container">
      <div className="pt-5"></div>
      <h2>Add a New Posting</h2>
      <form onSubmit={handleSubmit}>
        <label>Company</label>
        <input
          className="form-control"
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
        />
        <br />
        <label>Title</label>
        <input
          className="form-control"
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
        />
        <br />
        <label>descrition</label>
        <textarea
          className="form-control"
          name="postdescription"
          type="text"
          value={formData.postdescription}
          onChange={handleChange}
        ></textarea>
        <br />
        <div className="text-center">
          <button className="btn btn-primary">Post</button>
        </div>
      </form>
    </div>
  );
}

export default AdminPost;
