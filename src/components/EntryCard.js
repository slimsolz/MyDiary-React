import React from 'react';
import { Link } from 'react-router-dom';

const EntryCard = (props) => {
  return (
      <article className="col-4 col-m-2 col-s-4">
        <figure>
          <Link to={`/view_entry?id=${props.id}`} className="link">
          <figcaption>
            <h2>{props.title}</h2>
            <p>{props.story}</p>
          </figcaption>
          </Link>
          <div className="btn-footer">
            <Link to={`/edit_entry?id=${props.id}`} className="btn btn-edit">Edit</Link><button type="button" className="btn btn-delete" onClick={props.delete}>Delete</button>
          </div>
        </figure>
    </article>
  )
}

export default EntryCard;
