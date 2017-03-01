import React from 'react';

const FormField = React.createClass({

    propTypes: {
        id: React.PropTypes.string.isRequired,
        name: React.PropTypes.string,
        value: React.PropTypes.oneOfType([
            React.PropTypes.string,
            React.PropTypes.number,
        ]),
        label: React.PropTypes.string,
        type: React.PropTypes.string,
        error: React.PropTypes.string,
        onChange: React.PropTypes.func,
        onEnterKey: React.PropTypes.func,
        autoCorrect: React.PropTypes.string,
        autoCapitalize: React.PropTypes.string,
        spellCheck: React.PropTypes.string,
        errorClass: React.PropTypes.string,
        defaultValue: React.PropTypes.string,
    },

    getDefaultProps() {
        return {
            onEnter: null,
            name: null,
            type: 'text',
            autoCorrect: 'off',
            autoCapitalize: 'off',
            spellCheck: 'off',
            errorClass: 'theme__text-invert',
        };
    },

    handleChange(e) {
        if (this.props.onChange) {
            this.props.onChange(this.props.id, e.target.value);
        }
    },

    handleKeyDown(e) {
        if (this.props.onEnterKey) {
            if (e.keyCode === 13) {
                this.props.onEnterKey(e);
            }
        }
    },

    render() {
        const className = ['theme__color', 'theme__border'];
        if (this.props.error) {
            className.push('error');
        }

        const classError = 'form-field__error ' + this.props.errorClass;

        return (
            <div className="form-field">
                <label
                    className="h6"
                    htmlFor={this.props.id}
                >
                    {this.props.label}
                </label>
                <input
                    className={className.join(' ')}
                    ref={this.props.id}
                    id={this.props.id}
                    name={this.props.name}
                    type={this.props.type}
                    value={this.props.value}
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                    onFocus={this.handleFocus}
                    onKeyDown={this.handleKeyDown}
                    autoCorrect={this.props.autoCorrect}
                    autoCapitalize={this.props.autoCapitalize}
                    spellCheck={this.props.spellCheck}
                    defaultValue={this.props.defaultValue}
                />
                {this.props.error ? (<div className={classError}>{this.props.error}</div>) : null}
            </div>
        );
    },

});

module.exports = FormField;
