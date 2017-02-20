import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';
import map from 'lodash/map';

class voteResult extends Component {

    static path = '/vote/(:theme)/result';

    getImg(value) {
      if (value.img) {
        return (
          <img role='presentation' className='circle' src={'../../static/img/Teachers/' + value.img}/>
        )
      }
      return;
    }

    renderVoteItem() {
        const voteItems = this.props[this.props.params.theme];
        const themeRating = this.props.ratingSumm[this.props.params.theme];
        return map(voteItems, (value, i) => {
          const procent = !themeRating ? 0 : Math.round(value.rating/themeRating*100);
            return (
              <div key={i} className='list-group-item'>
                  <div className='row-picture'>
                      { this.getImg(value) }
                  </div>
                  <div className='row-content'>
                      <h4 className='list-group-item-heading'>{value.name}</h4>
                      <div className='progress'>
                          <div className='progress-bar progress-bar-info' style={{width: procent + '%'}}></div>
                      </div>
                      <p className='list-group-item-text'>{procent}%</p>
                  </div>
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
                    <Link to='/' className='btn btn-raised btn-primary'>New vote</Link>
                </div>
            </div>
        </div>
      );
    }
}

export default connect(state => state.votes)(voteResult)
