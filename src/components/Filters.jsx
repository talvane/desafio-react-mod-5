import React from 'react';

import './../styles/Filters.scss';

class Filters extends React.Component {
  render() {
    return (
      <div className="container" data-testid="filters">
        <section className="filters">
          <div className="filters__search">
            <input
              type="text"
              className="filters__search__input"
              placeholder="Pesquisar"
              onChange={(event) => this.props.handleChange(event.target.value)}
            />

            <button className="filters__search__icon">
              <i className="fa fa-search" />
            </button>
          </div>

          <button
            className={`filters__item ${
              this.props.searchBy === 'name' ? 'is-selected' : ''
            }`}
            onClick={this.props.handleByOrder}
            name="name"
          >
            Nome{' '}
            <i
              className={`fas fa-sort-${
                this.props.direction === 1 ? 'down' : 'up'
              }`}
              onClick={this.props.handleDirection}
              name="name"
            />
          </button>

          <button
            className={`filters__item ${
              this.props.searchBy === 'country' ? 'is-selected' : ''
            }`}
            onClick={this.props.handleByOrder}
            name="country"
          >
            País{' '}
            <i
              className={`fas fa-sort-${
                this.props.direction === 1 ? 'down' : 'up'
              }`}
              onClick={this.props.handleDirection}
              name="country"
            />
          </button>

          <button
            className={`filters__item ${
              this.props.searchBy === 'company' ? 'is-selected' : ''
            }`}
            onClick={this.props.handleByOrder}
            name="company"
          >
            Empresa{' '}
            <i
              className={`fas fa-sort-${
                this.props.direction === 1 ? 'down' : 'up'
              }`}
              onClick={this.props.handleDirection}
              name="company"
            />
          </button>

          <button
            className={`filters__item ${
              this.props.searchBy === 'department' ? 'is-selected' : ''
            }`}
            onClick={this.props.handleByOrder}
            name="department"
          >
            Departamento{' '}
            <i
              className={`fas fa-sort-${
                this.props.direction === 1 ? 'down' : 'up'
              }`}
              onClick={this.props.handleDirection}
              name="department"
            />
          </button>

          <button
            className={`filters__item ${
              this.props.searchBy === 'admissionDate' ? 'is-selected' : ''
            }`}
            onClick={this.props.handleByOrder}
            name="admissionDate"
          >
            Data de admissão{' '}
            <i
              className={`fas fa-sort-${
                this.props.direction === 1 ? 'down' : 'up'
              }`}
              onClick={this.props.handleDirection}
              name="admissionDate"
            />
          </button>
        </section>
      </div>
    );
  }
}

export default Filters;
