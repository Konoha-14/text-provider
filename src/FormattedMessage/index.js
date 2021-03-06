import React from "react";
import PropTypes from "prop-types";

export class FormattedMessage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        /* Do not frown over this, many a times you need to do this, like :
        * https://github.com/yahoo/react-intl/blob/master/src/components/html-message.js#L86
        */
        let messageString = this.context.globalText[this.props.id];
        for (const key in this.props.values) {
            messageString = messageString.replace("{" + key + "}", this.props.values[key]);
        }
        return (
            <span dangerouslySetInnerHTML={{__html: messageString}} />
        );
    }
}

FormattedMessage.propTypes = {
    id: PropTypes.string,
    values: PropTypes.object
};

FormattedMessage.contextTypes = {
    globalText: PropTypes.object
};
