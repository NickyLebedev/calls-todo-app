import React, { Component } from 'react'
import PropTypes from 'prop-types'
import TimePicker from 'rc-time-picker'
import 'rc-time-picker/assets/index.css'
import moment from 'moment'
import { TIME_DISPLAY_FORMAT } from '../../../utils'

export class TodoForm extends Component {

  constructor(props) {
    super(props)
    this.state = {
      time: moment().format(),
      phone: '',
      name: '',
    }
    this.handleTimeSelectionChange = this.handleTimeSelectionChange.bind(this)
    this.handlePhoneSelectionChange = this.handlePhoneSelectionChange.bind(this)
    this.handleNameSelectionChange = this.handleNameSelectionChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleTimeSelectionChange(value) {
    this.setState({ time: value && value.format() })
  }

  handlePhoneSelectionChange(e) {
    const value = e.target.value
    this.setState({ phone: value })
  }

  handleNameSelectionChange(e) {
    const value = e.target.value
    this.setState({ name: value })
  }

  handleSubmit(e) {
    this.props.addTodo(this.state)
    this.setState({
      name: '',
      phone: '',
      time: moment().format()
    })
    e.preventDefault()
  }

  render() {
    return (
      <form className="row" onSubmit={this.handleSubmit}>
        <div className="form-wrapper ten columns">
          <div className="form-field">
            <input
              type="text"
              maxLength="30"
              placeholder='Enter todo name'
              autoFocus="true"
              value={this.state.name}
              onChange={this.handleNameSelectionChange} required/>
          </div>

          <div className="form-field">
            <input
              type="text"
              placeholder='Enter phone number'
              pattern="([\+]?)([\(]?)\d{3}([\)]?)([\-]?)([\s]?)\d{3}([\s]?)\d{s}([\s]?)\d{s}"
              value={this.state.phone}
              onChange={this.handlePhoneSelectionChange} required/>
          </div>

          <div className="form-field">
            <TimePicker
              showSecond={false}
              defaultValue={moment()}
              format={TIME_DISPLAY_FORMAT}
              onChange={this.handleTimeSelectionChange}
              inputReadOnly
            />
          </div>
        </div>
        <div className="two columns">
          <input type="submit" className="button-primary" value="Add" />
        </div>
      </form>
    )
  }
}

TodoForm.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default TodoForm
