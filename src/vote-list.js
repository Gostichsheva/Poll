import React, { Component } from 'react';
import { connect } from 'react-redux';

class voteList extends Component {
    render() {
      return (
        <div className="panel panel-primary">

            <div className="panel-heading">
                <h3 className="panel-title">Vote!</h3>
            </div>

            <div className="form-group">
                <div className="list-group">

                    <a href="#" className="list-group-item">
                        <div className="row-action-primary">
                            <i className="material-icons">grade</i>
                        </div>
                        <div className="row-content">
                            <div className="badge">Voted {this.props.teacher['Smolnikov']} people</div>
                            <h4 className="list-group-item-heading">Best teacher</h4>
                            <p className="list-group-item-text">Vote for your favorite teacher course!</p>
                        </div>
                    </a>

                    <div className="list-group-separator"></div>

                    <a href="#" className="list-group-item">
                        <div className="row-action-primary">
                            <i className="material-icons">school</i>
                        </div>
                        <div className="row-content">
                            <div className="badge">Voted 20 people</div>
                            <h4 className="list-group-item-heading">Most difficult homework</h4>
                            <p className="list-group-item-text">What homework was the most difficult for you?</p>
                        </div>
                    </a>

                    <div className="list-group-separator"></div>

                    <a href="#" className="list-group-item">
                        <div className="row-action-primary">
                            <i className="material-icons">thumb_up</i>
                        </div>
                        <div className="row-content">
                            <div className="badge">Voted 30 people</div>
                            <h4 className="list-group-item-heading">Most interesting theme of the course</h4>
                            <p className="list-group-item-text">What is the theme of the course you are most interested in?</p>
                        </div>
                    </a>

                    <div className="list-group-separator"></div>

                </div>

                <div className="form-group">
                    <div className="col-md-offset-2">
                        <button type="submit" className="btn btn-raised btn-primary">Start</button>
                    </div>
                </div>

            </div>
        </div>
      );
    }
}

export default connect(state => {
  teacher: state.teacher
})(voteList);
