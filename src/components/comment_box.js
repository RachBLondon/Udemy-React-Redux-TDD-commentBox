import  React, { Component } from 'react';
import { connect } from 'react-redux';
import { saveComment } from '../actions';


class CommentBox extends Component {
  constructor(props){
    super(props);
    this.state = { comment: ''};
  }


  onHandleChange(event){
    this.setState({ comment: event.target.value});
  }

  handleSubmit(event){
    event.preventDefault();
    this.props.saveComment(this.state.comment);
    this.setState({ comment : ''})
  }

  render(){
    return (
      <form onSubmit={this.handleSubmit.bind(this)} className="comment_box">
        <h3> Add a comment </h3>
        <textarea
          value={this.state.comment}
          onChange={this.onHandleChange.bind(this)}/>
          <div>
            <button className="btn btn-primary" action="submit"> Submit Comment</button>
          </div>
      </form>
    )
  }
}

export default connect(null, { saveComment } )(CommentBox);
