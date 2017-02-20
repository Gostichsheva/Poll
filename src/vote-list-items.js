import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import map from 'lodash/map';
import { makeVote } from './actions';

class voteListItems extends Component {

    static path = '/vote/(:theme)';

    vote() {
      if (this.state && this.state.id) {
        this.props.makeVote(
          this.props.params.theme,
          this.state.id
      );
      this.props.router.push(`/vote/${this.props.params.theme}/result`);
      }
    }

    makeActive(e) {
      this.setState({
        id: e.currentTarget.dataset.id
      });
    }

    getImg(value) {
      if (value.img) {
        return (
          <img role='presentation' className='circle' src={'../static/img/Teachers/' + value.img}/>
        )
      }
      return;
    }

    renderVoteItem() {
        const voteItems = this.props[this.props.params.theme];
        return map(voteItems, (value, i) => {
            return (
              <div key={i}>
                  <a data-id={i}  href='javascript:void(0)' onClick={this.makeActive.bind(this)} className='list-group-item'>
                      <div className='row-picture'>
                          { this.getImg(value) }
                      </div>
                      <div className='row-content'>
                          <h4 className='list-group-item-heading'>{value.name}</h4>
                          <p className='list-group-item-text'>{value.description}</p>
                      </div>
                  </a>
              </div>
            );
        });
    }

    render() {
      return (
        <div className='panel panel-primary'>
            <div className='panel-heading'>
                <h3 className='panel-title'>{this.props.context[this.props.params.theme].title}</h3>
            </div>
            <div className='list-group clearfix'>
                { this.renderVoteItem() }
                <div className='col-xs-12 text-center'>
                    <button onClick={this.vote.bind(this)} className='btn btn-raised btn-primary'>Vote</button>
                </div>
            </div>
        </div>
      );
    }
}

export default connect(state => state.votes, dispatch => {
  return {
    makeVote: bindActionCreators(makeVote, dispatch)
  }
})(voteListItems)
