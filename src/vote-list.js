import React, { Component } from 'react';
import { connect } from 'react-redux';
import map from 'lodash/map';

class voteList extends Component {

  start() {
    if (this.state && this.state.theme) {
      this.props.router.push(`/vote/${this.state.theme}`);
    }
  }

  makeActive(e) {
    this.setState({
      theme: e.currentTarget.dataset.theme
    });
  }

  getImg(value) {
    if (value.img && value.id !== 'quotes') {
      return (
        <i className='material-icons'>{value.img}</i>
      )
    }
    else if (value.img && value.id === 'quotes') {
      return (
        <img role='presentation' className='circle' src={'../static/img/' + value.img}/>
      )
    }
    return;
  }

  renderVoteList() {
      return map(this.props.context, (value, i) => {
          return (
            <div key={i}>
                <a data-theme={i} href='javascript:void(0)' onClick={this.makeActive.bind(this)} className='list-group-item'>
                    <div className='row-action-primary'>
                        { this.getImg(value) }
                    </div>
                    <div className='row-content'>
                        <div className='badge'>Voted {this.props.ratingSumm[i] || 0} people</div>
                        <h4 className='list-group-item-heading'>{value.title}</h4>
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
                <h3 className='panel-title'>Vote!</h3>
            </div>
            <div className='list-group clearfix'>
                { this.renderVoteList() }
                <div className='col-xs-12 text-center'>
                    <button onClick={this.start.bind(this)} className='btn btn-raised btn-primary'>Start</button>
                </div>
            </div>
        </div>
      );
    }
}

export default connect(state => state.votes)(voteList)
