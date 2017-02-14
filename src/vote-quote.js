import React, {Component} from 'react';
import { connect } from 'react-redux';
// import {addTodo} from './ducks';
import { axios } from './axios';

class VoteQuote extends Component {

    static path = '/quote';

    renderQuote() {
        const { todos } = this.props.todo;

        return todos.map((todo, i) => {
            return (
              <a href="#" className="list-group-item">
                  <div className="row-picture">
                      <img className="circle" src="F:\App\Poll\static\img\TeachersFotos\Sergei_Smolnikov.jpg" alt="icon">
                  </div>
                  <div className="row-content">
                      <h4 className="list-group-item-heading">Sergei Smolnikov</h4>
                      <p className="list-group-item-text">Senior Software Engineer</p>
                  </div>
              </a>

              <div className="list-group-separator"></div>
            );
        });
    }

    render() {
        return (
            <div className="row">
                <div className="col-xs-7">
                    <h1>Todo page</h1>
                    <input className="form-control" type="text" value={this.state.name} onChange={this.handleChange.bind(this)} />
                    <button className="btn btn-danger" onClick={this.addTodo.bind(this)}>Add todo</button>
                    <ul>
                        { this.renderQuote() }
                    </ul>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        todo: state.todo
    };
}

export default connect(mapStateToProps)(VoteQuote);
