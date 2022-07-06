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
    event.preventdefault();
    props.addPost(formData);
    setFormData(emptyForm);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Company</label>
        <input
          name="company"
          type="text"
          value={formData.company}
          onChange={handleChange}
        />
        <label>Title</label>
        <input
          name="title"
          type="text"
          value={formData.title}
          onChange={handleChange}
        />
        <label>descrition</label>
        <input
          name="postdescription"
          type="text"
          value={formData.postdescription}
          onChange={handleChange}
        />
        <button>Post</button>
      </form>
    </div>
  );
}

export default AdminPost;
