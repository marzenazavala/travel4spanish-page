import React from 'react';
import PropTypes from 'prop-types';
import { Spin } from 'antd';

const Loading = ({message}) => {
    return(
        <Spin tip={message} />
    )
}

export default Loading